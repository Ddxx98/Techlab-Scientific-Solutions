const GCMS = "/assets/products/gcms2010.webp";
const GC = "/assets/products/gc.webp";
const GC2010 = "/assets/products/gc2010.webp";
const GCAOC = "/assets/products/aoc.webp";
const GC2014 = "/assets/products/gc2014.webp";
const GC14 = "/assets/products/gc14.webp";
const GC2010lap = "/assets/products/gc2010lap.webp";
const HS20 = "/assets/products/hs.webp";
const GCAOCI = "/assets/products/aoci.webp";
const GCAOC10 = "/assets/products/gcaoc10.webp";
const GCMSAI = "/assets/products/gcmsai.webp";
const GCMSAIAS = "/assets/products/gcmsas.webp";
const GCMSAIHS = "/assets/products/gcmsaoihs.webp";
const GCHS = "/assets/products/gchs.webp";
const UV = "/assets/products/uv.webp";
const accessoriesImg = "/assets/products/accessories.webp";


// Helper to format product names from image filenames
export function formatProductName(fileName) {
  // 1. Remove extension (handles .jpeg, .jpg, .jfif, .webp, .png, etc.)
  let name = fileName.substring(0, fileName.lastIndexOf('.'));
  
  // 2. Remove trailing numbers/duplicates like _01, _02,  1, _1, _01 etc.
  name = name.replace(/(?:[_\s]+0?\d+|\s+\d+)$/i, '');
  
  // 3. Replace underscores with spaces
  name = name.replace(/_/g, ' ');
  
  // 4. Trim extra spaces
  name = name.trim();
  
  // 5. Title Case conversion while keeping technical acronyms correctly formatted
  name = name.split(/\s+/)
    .map(word => {
      if (!word) return '';
      const upperWord = word.toUpperCase();
      const techAcronyms = ['GC', 'GCHS', 'GCMS', 'CRM', 'CRMS', 'UV', 'HPLC', 'SS', 'LC', 'PTFE', 'PH'];
      if (techAcronyms.includes(upperWord)) {
        return upperWord === 'PH' ? 'pH' : upperWord;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
    
  return name;
}

// Specifications mapping based on product name or category
function getProductSpecs(name, category) {
  const nameLower = name.toLowerCase();
  
  // Custom specifications for specific products
  if (nameLower.includes('balance')) {
    return [
      "High precision weighing down to 0.1mg / 0.01mg",
      "Electromagnetic force compensation sensor",
      "Built-in calibration weights for high accuracy",
      "Clear LCD display with backlight",
      "RS232 interface for easy data transfer and compliance"
    ];
  }
  if (nameLower.includes('ph meter')) {
    return [
      "High accuracy pH, mV and temperature measurement",
      "Automatic temperature compensation (ATC)",
      "Up to 3-point push-button calibration",
      "Electrode status diagnosis and error alerts",
      "Robust waterproof housing for laboratory use"
    ];
  }
  if (nameLower.includes('centrifuge')) {
    return [
      "Speed range up to 4000-15000 RPM",
      "Microprocessor control with digital LED display",
      "Brushless motor for quiet, maintenance-free operation",
      "Safety electronic lid-lock and over-speed detection",
      "Supports various rotor options for tubes and plates"
    ];
  }
  if (nameLower.includes('autoclave')) {
    return [
      "High-pressure steam sterilization capability",
      "Heavy-duty stainless steel chamber and safety door",
      "Dual safety valves for over-pressure protection",
      "Digital pressure and temperature displays",
      "Ideal for microbiology, clinical, and laboratory sterilization"
    ];
  }
  if (nameLower.includes('fume hood')) {
    return [
      "Efficient ventilation and exhaust system for chemical vapors",
      "Tempered sash glass for operator safety",
      "Chemical-resistant work surface",
      "Integrated utility taps (water/gas) and electrical outlets",
      "Bright LED lighting for work area illumination"
    ];
  }
  if (nameLower.includes('flowmeter')) {
    return [
      "High-precision digital flow measurement",
      "Compatible with multiple carrier gases (He, N2, H2, Ar, etc.)",
      "NIST-traceable calibration",
      "Portable handheld design with long battery life",
      "Instantaneous flow rate reading with digital display"
    ];
  }
  if (nameLower.includes('spectrophotometer')) {
    return [
      "Double-beam optical system for high stability",
      "Wide wavelength range covering UV and visible regions",
      "Spectral bandwidth of 1nm / 2nm",
      "High-speed wavelength scanning",
      "Compatible with multiple cuvette types and volumes"
    ];
  }

  // Category fallback specifications
  if (category === 'Laboratory Instruments') {
    return [
      "High-performance design tailored for standard lab workflows",
      "Durable housing made from chemical-resistant materials",
      "Meets international ISO / CE quality standards",
      "User-friendly controls with digital display interfaces",
      "Excellent reliability with minimal maintenance required"
    ];
  }
  if (category === 'Consumables') {
    return [
      "Manufactured from ultra-pure, inert materials to prevent contamination",
      "High compatibility with Shimadzu and other major chromatography brands",
      "Tested for leak-free operations and thermal stability",
      "Available in bulk packs for laboratory cost-efficiency",
      "Meets standard laboratory grade specifications"
    ];
  }
  if (category.includes('Calibration') || category.includes('Reference') || category.includes('Prep')) {
    return [
      "NIST-traceable certification where applicable",
      "High purity and batch-to-batch consistency",
      "Individually sealed packaging to maintain integrity",
      "Accompanied by Certificate of Analysis (CoA)",
      "Essential for compliance with GLP/GMP standards"
    ];
  }
  if (category.includes('Support') || category.includes('Utility')) {
    return [
      "Heavy-duty construction for safe utility distribution",
      "High-pressure rating and leak-tight connections",
      "Corrosion-resistant materials (SS316, PTFE, etc.)",
      "Complies with safety standards for gas handling",
      "Modular components for flexible lab layouts"
    ];
  }

  return ["High-quality product designed for professional laboratory environments."];
}

// Attributes mapping for UI cards and list
function getProductAttributes(name, category, imageCount) {
  const attributes = {};
  
  if (imageCount > 1) {
    attributes.IMAGES = `${imageCount} Views`;
  }
  
  return attributes;
}

// Hardcoded Analytical Instruments (which have unique models and custom specifications)
const staticProducts = [
  {
    id: "01",
    name: "Gas Chromatography-Mass Spectrometry (GC-MS)",
    model: "QP2010 Ultra",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCMS,
    images: [GCMS],
    description: "High-performance GC-MS system for precise identification and quantification of volatile compounds in complex mixtures.",
    specs: [
      "Single quadrupole mass analyser system",
      "Electron Ionization (EI) standard",
      "Scan, SIM, and combined Scan/SIM modes",
      "High sensitivity and stable baseline performance",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)",
      "Fast data acquisition for routine and advanced analysis",
      "Library search capability (NIST / Wiley compatible)"
    ],
    attributes: { MODEL: "QP2010 Ultra" }
  },
  {
    id: "02",
    name: "Gas Chromatograph",
    model: "GC-2010",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GC,
    images: [GC],
    description: "Versatile gas chromatography system optimized for routine analysis with high sensitivity and reliability.",
    specs: [
      "High-speed and high-resolution separation",
      "Advanced Electronic Pneumatic Control system",
      "Stable and precise carrier gas flow control",
      "Fast oven heating and cooling performance",
      "Flexible configuration for multiple detectors and injectors",
      "High sensitivity with low detection limits",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)"
    ],
    attributes: { MODEL: "GC-2010" }
  },
  {
    id: "03",
    name: "Gas Chromatograph",
    model: "GC-2010 Plus",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GC2010,
    images: [GC2010],
    description: "Advanced GC platform featuring exceptional temperature control and modular design for diverse laboratory needs.",
    specs: [
      "High-speed and high-resolution separation",
      "Advanced Electronic Pneumatic Control system",
      "Stable and precise carrier gas flow control",
      "Fast oven heating and cooling performance",
      "Flexible configuration for multiple detectors and injectors",
      "High sensitivity with low detection limits",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)"
    ],
    attributes: { MODEL: "GC-2010 Plus" }
  },
  {
    id: "04",
    name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
    model: "GC 2010, AOC 20i",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCAOC,
    images: [GCAOC],
    description: "Automated GC system equipped with the AOC-20i auto-injector for high-throughput sample processing and improved reproducibility.",
    specs: [
      "High-speed oven cooling for faster cycle time",
      "Electronic Pneumatic Control for precise gas flow regulation",
      "Split /Splitless /Direct injection modes",
      "Supports capillary and packed columns",
      "High sensitivity and low detection limits for trace analysis",
      "Stable baseline and excellent reproducibility",
      "Automated sequence operation for multiple samples",
      "Improved repeatability compared to manual injection",
      "Reduced human error in sample handling",
      "High-throughput laboratory analysis capability",
      "Suitable for 24/7 continuous operation setups"
    ],
    attributes: { MODEL: "GC 2010, AOC 20i" }
  },
  {
    id: "05",
    name: "Gas Chromatograph",
    model: "GC-2014",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GC2014,
    images: [GC2014],
    description: "Reliable gas chromatography system designed for standard industrial and research applications.",
    specs: [
      "High-speed and high-resolution separation",
      "Advanced Electronic Pneumatic Control system",
      "Stable and precise carrier gas flow control",
      "Fast oven heating and cooling performance",
      "Flexible configuration for multiple detectors and injectors",
      "High sensitivity with low detection limits",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)"
    ],
    attributes: { MODEL: "GC-2014" }
  },
  {
    id: "06",
    name: "Gas Chromatograph",
    model: "GC-2014 Plus",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GC14,
    images: [GC14],
    description: "Rugged and efficient GC system suitable for heavy workloads and consistent performance in quality control labs.",
    specs: [
      "High-speed and high-resolution separation",
      "Advanced Electronic Pneumatic Control system",
      "Stable and precise carrier gas flow control",
      "Fast oven heating and cooling performance",
      "Flexible configuration for multiple detectors and injectors",
      "High sensitivity with low detection limits",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)"
    ],
    attributes: { MODEL: "GC-2014 Plus" }
  },
  {
    id: "07",
    name: "Gas Chromatograph",
    model: "GC-2010 Pro",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GC2010lap,
    images: [GC2010lap],
    description: "Compact and powerful gas chromatograph offering high-speed analysis and flexible detector options.",
    specs: [
      "High-speed and high-resolution separation",
      "Advanced Electronic Pneumatic Control system",
      "Stable and precise carrier gas flow control",
      "Fast oven heating and cooling performance",
      "Flexible configuration for multiple detectors and injectors",
      "High sensitivity with low detection limits",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)"
    ],
    attributes: { MODEL: "GC-2010 Pro" }
  },
  {
    id: "08",
    name: "Headspace Autosampler",
    model: "HS-20",
    make: "Shimadzu",
    category: "Accessories",
    image: HS20,
    images: [HS20],
    description: "High-sensitivity headspace autosampler for the analysis of volatile organic compounds in environmental and pharmaceutical samples.",
    specs: ["Make: Shimadzu", "Sample Loop: 1mL (Std)", "Vial Size: 10/20mL", "Temp range: Up to 300°C", "Leak Test: Automatic"],
    attributes: { MODEL: "HS-20" }
  },
  {
    id: "09",
    name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
    model: "GC 2010 Plus, AOC 20i",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCAOCI,
    images: [GCAOCI],
    description: "Enhanced automated GC system combining the GC-2010 Plus with advanced auto-injection technology.",
    specs: [
      "High-speed oven cooling for faster cycle time",
      "Electronic Pneumatic Control for precise gas flow regulation",
      "Split /Splitless /Direct injection modes",
      "Supports capillary and packed columns",
      "High sensitivity and low detection limits for trace analysis",
      "Stable baseline and excellent reproducibility",
      "Automated sequence operation for multiple samples",
      "Improved repeatability compared to manual injection",
      "Reduced human error in sample handling",
      "High-throughput laboratory analysis capability",
      "Suitable for 24/7 continuous operation setups"
    ],
    attributes: { MODEL: "GC 2010 Plus, AOC 20i" }
  },
  {
    id: "10",
    name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
    model: "GC 2010, AOC 20i",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCAOC10,
    images: [GCAOC10],
    description: "Durable automated GC solution for laboratories requiring consistent and unattended sample injection.",
    specs: [
      "High-speed oven cooling for faster cycle time",
      "Electronic Pneumatic Control for precise gas flow regulation",
      "Split /Splitless /Direct injection modes",
      "Supports capillary and packed columns",
      "High sensitivity and low detection limits for trace analysis",
      "Stable baseline and excellent reproducibility",
      "Automated sequence operation for multiple samples",
      "Improved repeatability compared to manual injection",
      "Reduced human error in sample handling",
      "High-throughput laboratory analysis capability",
      "Suitable for 24/7 continuous operation setups"
    ],
    attributes: { MODEL: "GC 2010, AOC 20i" }
  },
  {
    id: "11",
    name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
    model: "GCMS-QP2010 Ultra, AOC 20i",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCMSAI,
    images: [GCMSAI],
    description: "High-performance GC system integrated with automation for specialized research and development workflows.",
    specs: [
      "Single quadrupole mass analyser system",
      "Electron Ionization (EI) standard",
      "Scan, SIM, and combined Scan/SIM modes",
      "High sensitivity and stable baseline performance",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)",
      "Fast data acquisition for routine and advanced analysis",
      "Library search capability (NIST / Wiley compatible)"
    ],
    attributes: { MODEL: "GCMS-QP2010 Ultra" }
  },
  {
    id: "12",
    name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Auto Sampler",
    model: "QP2010 Plus, AOC 20i, AOC 20s",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCMSAIAS,
    images: [GCMSAIAS],
    description: "Comprehensive GC-MS solution featuring both auto-injection and multi-vial sampling for maximum laboratory efficiency.",
    specs: [
      "Single quadrupole mass analyser system",
      "Electron Ionization (EI) standard",
      "Scan, SIM, and combined Scan/SIM modes",
      "High sensitivity and stable baseline performance",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)",
      "Fast data acquisition for routine and advanced analysis",
      "Library search capability (NIST / Wiley compatible)"
    ],
    attributes: { MODEL: "QP2010 Plus" }
  },
  {
    id: "13",
    name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Headspace Sampler (HS)",
    model: "QP2010 SE, AOC 20i, HS 20",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCMSAIHS,
    images: [GCMSAIHS],
    description: "Specialized GC-MS configuration optimized for volatile analysis using integrated headspace sampling techniques.",
    specs: [
      "Single quadrupole mass analyser system",
      "Electron Ionization (EI) standard",
      "Scan, SIM, and combined Scan/SIM modes",
      "High sensitivity and stable baseline performance",
      "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)",
      "Fast data acquisition for routine and advanced analysis",
      "Library search capability (NIST / Wiley compatible)"
    ],
    attributes: { MODEL: "QP2010 SE" }
  },
  {
    id: "14",
    name: "Gas Chromatograph (GC) with Headspace Sampler (HS)",
    model: "GC 2010 Plus, HS 20",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: GCHS,
    images: [GCHS],
    description: "High-efficiency GC system paired with a headspace sampler for robust environmental and forensic testing.",
    specs: [
      "High-speed capillary gas chromatography system",
      "Advanced Electronic Pneumatic Control (EPC) for stable gas flow",
      "Fast oven heating and cooling for shorter cycle time",
      "Supports Split, Splitless and Direct injection modes",
      "High sensitivity with excellent baseline stability",
      "Compatible with multiple detectors",
      "Automated headspace sampling for volatile compounds",
      "Stable temperature control for reproducible vapor extraction",
      "High vial capacity for batch analysis (high throughput)",
      "Minimal sample preparation required",
      "Ideal for solid and liquid volatile analysis"
    ],
    attributes: { MODEL: "GC 2010 Plus" }
  },
  {
    id: "15",
    name: "UV-Visible Spectrophotometer",
    model: "UV-1800",
    make: "Shimadzu",
    category: "Analytical Instruments",
    image: UV,
    images: [UV],
    description: "Dual-beam UV-Vis spectrophotometer offering high resolution and stability for pharmaceutical and chemical analysis.",
    specs: [
      "Double-beam UV-Visible spectrophotometer system",
      "Wide wavelength range (UV to Visible region)",
      "High accuracy and stable baseline performance",
      "Supports photometric, spectrum, and quantitation modes",
      "PC/software integration option for data analysis",
      "Suitable for routine and advanced laboratory analysis"
    ],
    attributes: { MODEL: "UV-1800" }
  },
  {
    id: "17",
    name: "Chromatographic Accessories & Samplers",
    model: "GC/GCMS Accessories",
    make: "Shimadzu & Techlab OEM",
    category: "Accessories",
    image: accessoriesImg,
    images: [accessoriesImg],
    description: "Premium automated injection and sampling accessories including liquid autosamplers, gas samplers, methanizers, ATR modules, specialized detectors, and analytical software.",
    specs: [
      "Auto Injector (AOC-20i liquid autoinjection system)",
      "Auto Sampler (AOC-20s multi-vial autosampling tray)",
      "Gas Sampler (Automated loop-based injection valves)",
      "Methanizer (For converting CO/CO2 to CH4 for trace FID detection)",
      "ATR (Attenuated Total Reflection attachment for IR spectrometry)",
      "Additional Injectors & Detectors (FID, TCD, ECD, FPD, etc.)",
      "Additional Sampling Devices & Valves",
      "Software & Data Handling Systems (LabSolutions compatible integration)"
    ],
    attributes: { MODEL: "GC/GCMS Accessories" }
  }
];

import { rawDynamicProducts } from "./dynamicProductsList.js";

// Helper to load other categories dynamically
const loadDynamicProducts = () => {
  return rawDynamicProducts.map(product => {
    // Primary image is the first one
    const image = product.images[0];
    
    // Add default description
    const description = `High-quality ${product.name} designed for laboratory and industrial applications. Built to ensure reliability, accuracy, and compliance with industry standards.`;
    
    // Fetch appropriate specifications and attributes
    const specs = getProductSpecs(product.name, product.category);
    const attributes = getProductAttributes(product.name, product.category, product.images.length);
    
    return {
      ...product,
      image,
      description,
      specs,
      attributes
    };
  });
};

// Combine static and dynamic lists
const dynamicProducts = loadDynamicProducts();
export const productsList = [...staticProducts, ...dynamicProducts];

// Key-value map for quick ID lookup
export const productsMap = productsList.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

// Export list of categories for the UI
export const categories = [
  "All",
  "Analytical Instruments",
  "Laboratory Instruments",
  "Accessories",
  "Consumables",
  "Calibration / Reference Standards / Sample Preparation",
  "Support & Utility Systems Supplies"
];
