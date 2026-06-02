import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import SEO from "../../components/SEO/SEO";
import AnimationWrapper from "../../components/AnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";
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
import labInstrumentsImg from "../../assets/products/lab_instruments.png";
import accessoriesImg from "../../assets/products/accessories.png";
import consumablesImg from "../../assets/products/consumables.png";
import gasUtilityImg from "../../assets/products/gas_utility.png";

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        "Analytical Instruments",
        "Laboratory Instruments",
        "Accessories",
        "Consumables",
        "Calibration / Reference Standards / Sample Preparation",
        "Support & Utility Systems Supplies"
    ];

    const productsData = [
        {
            id: "01",
            name: "Gas Chromatography-Mass Spectrometry (GC-MS)",
            description: "High-performance GC-MS system for precise identification and quantification of volatile compounds.",
            category: "Analytical Instruments",
            image: GCMS,
            attributes: { MODEL: "QP2010 Ultra", DETECTOR: "Mass Spectrometer", SOFTWARE: "LabSolutions GCMS" },
        },
        {
            id: "02",
            name: "Gas Chromatograph",
            description: "Versatile gas chromatography system optimized for routine analysis with high sensitivity.",
            category: "Analytical Instruments",
            image: GC,
            attributes: { MODEL: "GC-2010", INLET: "Split/Splitless", TEMP: "Ambient to 450°C" },
        },
        {
            id: "03",
            name: "Gas Chromatograph",
            description: "Advanced GC platform featuring exceptional temperature control and modular design.",
            category: "Analytical Instruments",
            image: GC2010,
            attributes: { MODEL: "GC-2010 Plus", CARRIER: "He, H2, N2", COOLING: "Rapid" },
        },
        {
            id: "04",
            name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
            description: "Automated GC system equipped with the AOC-20i for high-throughput sample processing.",
            category: "Analytical Instruments",
            image: GCAOC,
            attributes: { MODEL: "GC 2010, AOC 20i", SAMPLER: "AOC-20i", VIALS: "12" },
        },
        {
            id: "05",
            name: "Gas Chromatograph",
            description: "Reliable gas chromatography system designed for standard industrial applications.",
            category: "Analytical Instruments",
            image: GC2014,
            attributes: { MODEL: "GC-2014", DETECTOR: "Dual FID", DISPLAY: "LCD" },
        },
        {
            id: "06",
            name: "Gas Chromatograph",
            description: "Rugged and efficient GC system suitable for heavy workloads in QC labs.",
            category: "Analytical Instruments",
            image: GC14,
            attributes: { MODEL: "GC-2014 Plus", THROUGHPUT: "Medium-High", LIMS: "Compatible" },
        },
        {
            id: "07",
            name: "Gas Chromatograph",
            description: "Compact and powerful gas chromatograph offering high-speed analysis.",
            category: "Analytical Instruments",
            image: GC2010lap,
            attributes: { MODEL: "GC-2010 Pro", FOOTPRINT: "Compact", SPEED: "High-speed" },
        },
        {
            id: "08",
            name: "Headspace Autosampler",
            description: "High-sensitivity headspace autosampler for volatile organic compound analysis.",
            category: "Accessories",
            image: HS20,
            attributes: { MODEL: "HS-20", LOOP: "1mL", TEMP: "Up to 300°C" },
        },
        {
            id: "09",
            name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
            description: "Enhanced automated GC system combining the GC-2010 Plus with auto-injection.",
            category: "Analytical Instruments",
            image: GCAOCI,
            attributes: { MODEL: "GC 2010 Plus, AOC 20i", PRECISION: "High", SETUP: "One-click" },
        },
        {
            id: "10",
            name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
            description: "Durable automated GC solution for consistent and unattended sample injection.",
            category: "Analytical Instruments",
            image: GCAOC10,
            attributes: { MODEL: "GC 2010, AOC 20i", DUTY: "24/7", CONNECT: "Ethernet" },
        },
        {
            id: "11",
            name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
            description: "High-performance GC system integrated with automation for specialized research.",
            category: "Analytical Instruments",
            image: GCMSAI,
            attributes: { MODEL: "GCMS-QP2010 Ultra", SCAN: "Fast", RESOLUTION: "High" },
        },
        {
            id: "12",
            name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Auto Sampler",
            description: "Comprehensive GC-MS solution for maximum laboratory efficiency.",
            category: "Analytical Instruments",
            image: GCMSAIAS,
            attributes: { MODEL: "QP2010 Plus", RACK: "150 vials", SENSITIVITY: "1pg OFN" },
        },
        {
            id: "13",
            name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Headspace Sampler (HS)",
            description: "Specialized GC-MS configuration optimized for volatile analysis.",
            category: "Analytical Instruments",
            image: GCMSAIHS,
            attributes: { MODEL: "QP2010 SE", TRANSFER: "Temp controlled", STANDARDS: "CFR Part 11" },
        },
        {
            id: "14",
            name: "Gas Chromatograph (GC) with Headspace Sampler (HS)",
            description: "High-efficiency GC system paired with a headspace sampler for environmental testing.",
            category: "Analytical Instruments",
            image: GCHS,
            attributes: { MODEL: "GC 2010 Plus", CARRIER: "Direct flow", SAFETY: "Auto check" },
        },
        {
            id: "15",
            name: "UV-Visible Spectrophotometer",
            description: "Dual-beam UV-Vis spectrophotometer offering high resolution and stability.",
            category: "Analytical Instruments",
            image: UV,
            attributes: { MODEL: "UV-1800", RANGE: "190-1100 nm", BANDWIDTH: "1nm" },
        },
        {
            id: "16",
            name: "Laboratory Instruments Portfolio",
            description: "Comprehensive range of high-quality laboratory products including balances, pH meters, microscopes, centrifuges, muffle furnaces, water baths, stirrers, shakers and heating plates.",
            category: "Laboratory Instruments",
            image: labInstrumentsImg,
            attributes: { PRODUCTS: "Balances, pH Meters, Ovens", RANGE: "Complete Lab Catalog", COMPLIANCE: "ISO / CE standards" },
        },
        {
            id: "17",
            name: "Chromatographic Accessories & Samplers",
            description: "Premium automated injection and sampling accessories including liquid autosamplers, gas samplers, methanizers, ATR modules, specialized detectors, and analytical software.",
            category: "Accessories",
            image: accessoriesImg,
            attributes: { SAMPLING: "Auto-injectors, ATR", COMPATIBILITY: "Shimadzu & Major GCs", SOFTWARE: "Data handling ready" },
        },
        {
            id: "18",
            name: "Analytical Consumables & Lab Supplies",
            description: "High-purity laboratory consumables including columns, glass liners, syringes, injection septa, vials, ferrules, cuvettes, lamps and pipettes.",
            category: "Consumables",
            image: consumablesImg,
            attributes: { GRADE: "Ultra-pure / Inert", RANGE: "GC, GCMS, UV, Glassware", DISPOSABLES: "Filters, Vials, Syringes" },
        },
        {
            id: "19",
            name: "Calibration, CRM Standards & Sample Preparation",
            description: "Certified Reference Materials (CRMs), standard chemicals, certified UV/IR optical standards, digital flowmeters, thermometers, and QuEChERS sample prep kits.",
            category: "Calibration / Reference Standards / Sample Preparation",
            image: consumablesImg,
            attributes: { ACCURACY: "NIST Traceable", TYPES: "CRMs, Standard chemicals", UTILITIES: "Flowmeters, Gauges, Kits" },
        },
        {
            id: "20",
            name: "Support & Utility Systems Supplies",
            description: "Complete utility supply solutions including gas manifolds, regulators, SS/PTFE pipelines, purification traps, safety leak detectors, fume hoods, exhaust scrubbers and ventilation systems.",
            category: "Support & Utility Systems Supplies",
            image: gasUtilityImg,
            attributes: { PIPELINES: "SS / PTFE high purity", EXHAUST: "Fume hoods, scrubbers", GAS_CONTROL: "Regulators, Traps, Panels" },
        },
    ];

    const filteredProducts = activeCategory === "All"
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    return (
        <div className={styles.productsPage}>
            <SEO
                title="Our Products"
                description="Browse our high-quality laboratory equipment, including analytical instruments, spares, and consumables from Techlab Scientific Solutions."
            />
            <div className={styles.container}>
                <AnimationWrapper type="fade-down">
                    <h1 className={styles.pageTitle}>Products</h1>
                </AnimationWrapper>

                {/* Level 1 Filter: Categories */}
                <div className={styles.categoryFilter}>
                    {categories.map((category, index) => (
                        <AnimationWrapper 
                            key={category} 
                            type="fade-up" 
                            delay={index * 0.05}
                        >
                            <button
                                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ""
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        </AnimationWrapper>
                    ))}
                </div>

                <div className={styles.productFilterWrapper}>
                    <div className={styles.counter}>
                        Showing {filteredProducts.length} of {productsData.length} products
                    </div>
                </div>

                {/* Product List */}
                <div className={styles.productList}>
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((product, index) => (
                            <AnimationWrapper 
                                key={`${activeCategory}-${product.id}`} 
                                type="fade-up" 
                                delay={(index % 6) * 0.05}
                            >
                                <div className={styles.productCard}>
                                    {/* Improved Image Container */}
                                    <div className={styles.imageContainer}>
                                        <img src={product.image} alt={product.name} className={styles.productImage} />
                                    </div>

                                    {/* Product Details */}
                                    <div className={styles.productDetails}>
                                        <div className={styles.topInfo}>
                                            <h2 className={styles.productName}>{product.name}</h2>
                                            <p className={styles.productDescription}>
                                                {product.description}
                                            </p>

                                            {/* Modern Attributes List instead of table */}
                                            <div className={styles.attributesList}>
                                                {Object.entries(product.attributes).map(([key, value]) => (
                                                    <div key={key} className={styles.attributeItem}>
                                                        <span className={styles.attributeLabel}>{key}</span>
                                                        <span className={styles.attributeValue}>{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={styles.btnWrapper}>
                                            <Link to={`/product/${product.id}`} className={styles.contactLink}>
                                                VIEW DETAILS →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Products;