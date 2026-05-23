import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import AnimationWrapper from "../../components/AnimationWrapper";
import GCMS from "../../assets/products/gcms2010.jpeg";
import GC from "../../assets/products/gc.jpeg";
import GC2010 from "../../assets/products/gc2010.jpeg";
import GCAOC from "../../assets/products/aoc.jpeg";
import GC2014 from "../../assets/products/gc2014.jpeg";
import GC14 from "../../assets/products/gc14.jpeg";
import GC2010lap from "../../assets/products/gc2010lap.jpeg";
import HS20 from "../../assets/products/hs.jpeg";
import GCAOCI from "../../assets/products/aoci.jpeg";
import GCAOC10 from "../../assets/products/gcaoc10.jpeg";
import GCMSAI from "../../assets/products/gcmsai.jpeg";
import GCMSAIAS from "../../assets/products/gcmsas.jpeg";
import GCMSAIHS from "../../assets/products/gcmsaoihs.jpeg";
import GCHS from "../../assets/products/gchs.jpeg";
import UV from "../../assets/products/uv.jpeg";

const productsData = {
    "01": {
        name: "Gas Chromatography-Mass Spectrometry (GC-MS)",
        model: "QP2010 Ultra",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCMS,
        description: "High-performance GC-MS system for precise identification and quantification of volatile compounds in complex mixtures.",
        specs: ["Make: Shimadzu", "Detector: Mass Spectrometer", "Inlet: Split/Splitless", "Software: LabSolutions GCMS", "Sensitivity: High"],
    },
    "02": {
        name: "Gas Chromatograph",
        model: "GC-2010",
        make: "Shimadzu",
        category: "Laboratory Equipment",
        image: GC,
        description: "Versatile gas chromatography system optimized for routine analysis with high sensitivity and reliability.",
        specs: ["Make: Shimadzu", "Detector: FID/TCD", "Inlet: Split/Splitless", "Temp Range: Ambient + 4°C to 450°C", "Stability: ±0.01°C"],
    },
    "03": {
        name: "Gas Chromatograph",
        model: "GC-2010 Plus",
        make: "Shimadzu",
        category: "Laboratory Equipment",
        image: GC2010,
        description: "Advanced GC platform featuring exceptional temperature control and modular design for diverse laboratory needs.",
        specs: ["Make: Shimadzu", "Detector: Multi-detector support", "Carrier Gas: He, H2, N2", "Interface: Touchscreen/PC", "Cooling: Rapid oven cooling"],
    },
    "04": {
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        model: "GC 2010, AOC 20i",
        make: "Shimadzu",
        category: "Automation",
        image: GCAOC,
        description: "Automated GC system equipped with the AOC-20i auto-injector for high-throughput sample processing and improved reproducibility.",
        specs: ["Make: Shimadzu", "Sampler: AOC-20i", "Vial Capacity: 12 vials", "Injection Mode: Liquid/Headspace", "Precision: <0.5% RSD"],
    },
    "05": {
        name: "Gas Chromatograph",
        model: "GC-2014",
        make: "Shimadzu",
        category: "Laboratory Equipment",
        image: GC2014,
        description: "Reliable gas chromatography system designed for standard industrial and research applications.",
        specs: ["Make: Shimadzu", "Detector: Dual FID", "Columns: Capillary/Packed", "Valves: Automatic gas valves", "Display: LCD Display"],
    },
    "06": {
        name: "Gas Chromatograph",
        model: "GC-2014 Plus",
        make: "Shimadzu",
        category: "Laboratory Equipment",
        image: GC14,
        description: "Rugged and efficient GC system suitable for heavy workloads and consistent performance in quality control labs.",
        specs: ["Make: Shimadzu", "Throughput: Medium-High", "Durability: Reinforced oven", "Integration: LIMS compatible", "Power: Low consumption mode"],
    },
    "07": {
        name: "Gas Chromatograph",
        model: "GC-2010 Pro",
        make: "Shimadzu",
        category: "Laboratory Equipment",
        image: GC2010lap,
        description: "Compact and powerful gas chromatograph offering high-speed analysis and flexible detector options.",
        specs: ["Make: Shimadzu", "Footprint: Compact", "Analysis: Fast-GC support", "Detectors: Up to 3 simultaneous", "Operation: Intuitive"],
    },
    "08": {
        name: "Headspace Autosampler",
        model: "HS-20",
        make: "Shimadzu",
        category: "Accessories",
        image: HS20,
        description: "High-sensitivity headspace autosampler for the analysis of volatile organic compounds in environmental and pharmaceutical samples.",
        specs: ["Make: Shimadzu", "Sample Loop: 1mL (Std)", "Vial Size: 10/20mL", "Temp range: Up to 300°C", "Leak Test: Automatic"],
    },
    "09": {
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        model: "GC 2010 Plus, AOC 20i",
        make: "Shimadzu",
        category: "Automation",
        image: GCAOCI,
        description: "Enhanced automated GC system combining the GC-2010 Plus with advanced auto-injection technology.",
        specs: ["Make: Shimadzu", "Injection: High precision", "Software: One-click setup", "Compatibility: Full AOC series", "Calibration: Auto-tune"],
    },
    "10": {
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        model: "GC 2010, AOC 20i",
        make: "Shimadzu",
        category: "Automation",
        image: GCAOC10,
        description: "Durable automated GC solution for laboratories requiring consistent and unattended sample injection.",
        specs: ["Make: Shimadzu", "Duty Cycle: 24/7", "Maintenance: Low frequency", "Connection: RS-232/Ethernet", "Alerts: Error notification"],
    },
    "11": {
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        model: "GCMS-QP2010 Ultra, AOC 20i",
        make: "Shimadzu",
        category: "Automation",
        image: GCMSAI,
        description: "High-performance GC system integrated with automation for specialized research and development workflows.",
        specs: ["Make: Shimadzu", "Scan Speed: Ultra-fast", "Library: NIST interface", "Pump: Turbo molecular", "Resolution: High Mass Res"],
    },
    "12": {
        name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Auto Sampler",
        model: "QP2010 Plus, AOC 20i, AOC 20s",
        make: "Shimadzu",
        category: "Full Systems",
        image: GCMSAIAS,
        description: "Comprehensive GC-MS solution featuring both auto-injection and multi-vial sampling for maximum laboratory efficiency.",
        specs: ["Make: Shimadzu", "Vial Rack: 150 vials", "Syringe: Auto-wash", "Flow Control: AFC/APC", "Sensitivity: 1pg OFN"],
    },
    "13": {
        name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Headspace Sampler (HS)",
        model: "QP2010 SE, AOC 20i, HS 20",
        make: "Shimadzu",
        category: "Full Systems",
        image: GCMSAIHS,
        description: "Specialized GC-MS configuration optimized for volatile analysis using integrated headspace sampling techniques.",
        specs: ["Make: Shimadzu", "Transfer Line: Temp controlled", "Pressure: Fast response", "Recovery: Low analyte loss", "Standards: CFR Part 11"],
    },
    "14": {
        name: "Gas Chromatograph (GC) with Headspace Sampler (HS)",
        model: "GC 2010 Plus, HS 20",
        make: "Shimadzu",
        category: "Full Systems",
        image: GCHS,
        description: "High-efficiency GC system paired with a headspace sampler for robust environmental and forensic testing.",
        specs: ["Make: Shimadzu", "Carrier: Direct flow", "Sampler: Overlap injection", "Safety: Auto gas leak check", "Stability: High"],
    },
    "15": {
        name: "UV-Visible Spectrophotometer",
        model: "UV-1800",
        make: "Shimadzu",
        category: "Spectroscopy",
        image: UV,
        description: "Dual-beam UV-Vis spectrophotometer offering high resolution and stability for pharmaceutical and chemical analysis.",
        specs: ["Make: Shimadzu", "Range: 190-1100 nm", "Source: Halogen/Deuterium", "Bandwidth: 1nm", "Photometric: 12-bit"],
    },
};

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData[id] || productsData["01"]; // Fallback to 01 if not found

    return (
        <div className={styles.pageWrapper}>
            <main className={styles.main}>
                <div className={styles.container}>
                    <AnimationWrapper type="fade-down">
                        <Link to="/" className={styles.backLink}>
                            <span className={styles.backArrow}>←</span> Back to Products
                        </Link>
                    </AnimationWrapper>

                    <div className={styles.detailsGrid}>
                        <AnimationWrapper type="fade-right" className={styles.imageSection}>
                            <img src={product.image} alt={product.name} className={styles.mainImage} />
                        </AnimationWrapper>

                        <AnimationWrapper type="fade-left" className={styles.infoSection}>
                            <span className={styles.category}>{product.category}</span>
                            <h1 className={styles.productName}>{product.name}</h1>
                            <p className={styles.description}>{product.description}</p>

                            <div className={styles.specsSection}>
                                <h3 className={styles.specsTitle}>Specifications</h3>
                                <ul className={styles.specsList}>
                                    {product.specs.map((spec, index) => (
                                        <li key={index} className={styles.specItem}>{spec}</li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={styles.inquiryBtn}
                                onClick={() => navigate("/contact")}
                            >
                                Request Inquiry
                            </button>
                        </AnimationWrapper>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;
