import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '..', 'public', 'assets');

// Helper to format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Recursively find files
function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

async function optimize() {
  console.log(`Scanning assets directory: ${ASSETS_DIR}`);
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error("Assets directory does not exist!");
    process.exit(1);
  }

  const files = getFilesRecursively(ASSETS_DIR);
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.jfif'];
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const report = [];

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();
    const basename = path.basename(filePath);

    if (!imageExtensions.includes(ext)) {
      continue;
    }

    const relativePath = path.relative(ASSETS_DIR, filePath);
    const originalSize = fs.statSync(filePath).size;
    totalOriginalSize += originalSize;

    // Special case for logo.png
    if (basename.toLowerCase() === 'logo.png') {
      console.log(`Optimizing logo: ${relativePath} (${formatBytes(originalSize)})`);
      const tempPath = filePath + '.tmp';
      
      try {
        await sharp(filePath)
          .resize({ width: 288, withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9, palette: true })
          .toFile(tempPath);

        const newSize = fs.statSync(tempPath).size;
        totalOptimizedSize += newSize;
        
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);

        const savings = originalSize - newSize;
        const percentage = ((savings / originalSize) * 100).toFixed(1);
        console.log(`  -> Optimized PNG saved at logo.png. Size: ${formatBytes(newSize)} (-${percentage}%)`);
        
        report.push({
          file: relativePath,
          original: formatBytes(originalSize),
          optimized: formatBytes(newSize),
          savings: formatBytes(savings),
          percentage: `${percentage}%`
        });
      } catch (err) {
        console.error(`  Error optimizing logo: ${err.message}`);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        totalOptimizedSize += originalSize; // fallback to original size in totals
      }
      continue;
    }

    // Determine target format & resizing rules for other images
    const webpPath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';
    let targetWidth = 1200;

    // Check classification based on path/filename
    const normalizedPath = relativePath.toLowerCase().replace(/\\/g, '/');
    if (normalizedPath.includes('hero_slide_')) {
      targetWidth = 1600;
    } else if (normalizedPath.includes('products/')) {
      targetWidth = 674; // 2x display dimensions (337px card width)
    } else if (
      normalizedPath.includes('service') || 
      normalizedPath.includes('industry') || 
      normalizedPath.includes('about') || 
      normalizedPath.includes('whyus') || 
      normalizedPath.includes('support') || 
      normalizedPath.includes('contact')
    ) {
      targetWidth = 1000;
    }

    console.log(`Processing image: ${relativePath} (${formatBytes(originalSize)}) -> Target width: ${targetWidth}px`);

    try {
      await sharp(filePath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);

      const newSize = fs.statSync(webpPath).size;
      totalOptimizedSize += newSize;

      // Delete the original image
      fs.unlinkSync(filePath);

      const savings = originalSize - newSize;
      const percentage = ((savings / originalSize) * 100).toFixed(1);
      console.log(`  -> Saved WebP: ${path.relative(ASSETS_DIR, webpPath)} (${formatBytes(newSize)}) (-${percentage}%)`);

      report.push({
        file: relativePath + ' -> ' + path.relative(ASSETS_DIR, webpPath),
        original: formatBytes(originalSize),
        optimized: formatBytes(newSize),
        savings: formatBytes(savings),
        percentage: `${percentage}%`
      });
    } catch (err) {
      console.error(`  Error processing ${relativePath}: ${err.message}`);
      totalOptimizedSize += originalSize; // fallback
    }
  }

  const overallSavings = totalOriginalSize - totalOptimizedSize;
  const overallPercentage = ((overallSavings / totalOriginalSize) * 100).toFixed(1);

  console.log('\n--- Optimization Report ---');
  console.table(report);
  console.log(`Total Original Size: ${formatBytes(totalOriginalSize)}`);
  console.log(`Total Optimized Size: ${formatBytes(totalOptimizedSize)}`);
  console.log(`Overall Savings: ${formatBytes(overallSavings)} (-${overallPercentage}%)`);

  // Write markdown table report for walkthrough.md
  let mdReport = '| File | Original | Optimized | Savings | % |\n| --- | --- | --- | --- | --- |\n';
  report.forEach(r => {
    mdReport += `| ${r.file} | ${r.original} | ${r.optimized} | ${r.savings} | ${r.percentage} |\n`;
  });
  mdReport += `| **TOTAL** | **${formatBytes(totalOriginalSize)}** | **${formatBytes(totalOptimizedSize)}** | **${formatBytes(overallSavings)}** | **-${overallPercentage}%** |\n`;
  
  fs.writeFileSync(path.join(__dirname, 'optimization-results-temp.md'), mdReport);
}

optimize();
