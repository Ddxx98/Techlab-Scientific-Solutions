import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Product.module.css";
import AnimationWrapper from "../AnimationWrapper";
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

const productsData = [
    {
        id: "01",
        name: "Gas Chromatography-Mass Spectrometry (GC-MS)",
        category: "Analytical Instruments",
        description: "High-performance GC-MS system for precise identification and quantification of volatile compounds in complex mixtures.",
        model: "QP2010 Ultra",
        make: "Shimadzu",
        image: GCMS,
    },
    {
        id: "02",
        name: "Gas Chromatograph",
        category: "Analytical Instruments",
        description: "Versatile gas chromatography system optimized for routine analysis with high sensitivity and reliability.",
        model: "GC-2010",
        make: "Shimadzu",
        image: GC,
    },
    {
        id: "03",
        name: "Gas Chromatograph",
        category: "Analytical Instruments",
        description: "Advanced GC platform featuring exceptional temperature control and modular design for diverse laboratory needs.",
        model: "GC-2010 Plus",
        make: "Shimadzu",
        image: GC2010,
    },
    {
        id: "04",
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        category: "Analytical Instruments",
        description: "Automated GC system equipped with the AOC-20i auto-injector for high-throughput sample processing and improved reproducibility.",
        model: "GC 2010, AOC 20i",
        make: "Shimadzu",
        image: GCAOC,
    },
    {
        id: "05",
        name: "Gas Chromatograph",
        category: "Analytical Instruments",
        description: "Reliable gas chromatography system designed for standard industrial and research applications.",
        model: "GC-2014",
        make: "Shimadzu",
        image: GC2014,
    },
    {
        id: "06",
        name: "Gas Chromatograph",
        category: "Analytical Instruments",
        description: "Rugged and efficient GC system suitable for heavy workloads and consistent performance in quality control labs.",
        model: "GC-2014 Plus",
        make: "Shimadzu",
        image: GC14,
    },
    {
        id: "07",
        name: "Gas Chromatograph",
        category: "Analytical Instruments",
        description: "Compact and powerful gas chromatograph offering high-speed analysis and flexible detector options.",
        model: "GC-2010 Pro",
        make: "Shimadzu",
        image: GC2010lap,
    },
    {
        id: "08",
        name: "Headspace Autosampler",
        category: "Accessories",
        description: "High-sensitivity headspace autosampler for the analysis of volatile organic compounds in environmental and pharmaceutical samples.",
        model: "HS-20",
        make: "Shimadzu",
        image: HS20,
    },
    {
        id: "09",
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        category: "Analytical Instruments",
        description: "Enhanced automated GC system combining the GC-2010 Plus with advanced auto-injection technology.",
        model: "GC 2010 Plus, AOC 20i",
        make: "Shimadzu",
        image: GCAOCI,
    },
    {
        id: "10",
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        category: "Analytical Instruments",
        description: "Durable automated GC solution for laboratories requiring consistent and unattended sample injection.",
        model: "GC 2010, AOC 20i",
        make: "Shimadzu",
        image: GCAOC10,
    },
    {
        id: "11",
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        category: "Analytical Instruments",
        description: "High-performance GC system integrated with automation for specialized research and development workflows.",
        model: "GCMS-QP2010 Ultra, AOC 20i",
        make: "Shimadzu",
        image: GCMSAI,
    },
    {
        id: "12",
        name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Auto Sampler",
        category: "Analytical Instruments",
        description: "Comprehensive GC-MS solution featuring both auto-injection and multi-vial sampling for maximum laboratory efficiency.",
        model: "QP2010 Plus, AOC 20i, AOC 20s",
        make: "Shimadzu",
        image: GCMSAIAS,
    },
    {
        id: "13",
        name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Headspace Sampler (HS)",
        category: "Analytical Instruments",
        description: "Specialized GC-MS configuration optimized for volatile analysis using integrated headspace sampling techniques.",
        model: "QP2010 SE, AOC 20i, HS 20",
        make: "Shimadzu",
        image: GCMSAIHS,
    },
    {
        id: "14",
        name: "Gas Chromatograph (GC) with Headspace Sampler (HS)",
        category: "Analytical Instruments",
        description: "High-efficiency GC system paired with a headspace sampler for robust environmental and forensic testing.",
        model: "GC 2010 Plus, HS 20",
        make: "Shimadzu",
        image: GCHS,
    },
    {
        id: "15",
        name: "UV-Visible Spectrophotometer",
        category: "Analytical Instruments",
        description: "Dual-beam UV-Vis spectrophotometer offering high resolution and stability for pharmaceutical and chemical analysis.",
        model: "UV-1800",
        make: "Shimadzu",
        image: UV,
    },
    {
        id: "16",
        name: "Laboratory Instruments Portfolio",
        category: "Laboratory Instruments",
        description: "Comprehensive range of high-quality laboratory products including balances, pH meters, centrifuges, muffle furnaces, water baths, stirrers, shakers and heating plates.",
        model: "Techlab Complete Catalog",
        make: "Techlab Approved Partners",
        image: labInstrumentsImg,
    },
    {
        id: "17",
        name: "Chromatographic Accessories & Samplers",
        category: "Accessories",
        description: "Premium automated injection and sampling accessories including liquid autosamplers, gas samplers, methanizers, ATR modules, specialized detectors, and analytical software.",
        model: "GC/GCMS Accessories",
        make: "Shimadzu & Techlab OEM",
        image: accessoriesImg,
    },
    {
        id: "18",
        name: "Analytical Consumables & Lab Supplies",
        category: "Consumables",
        description: "High-purity laboratory consumables including columns, glass liners, syringes, injection septa, vials, ferrules, cuvettes, lamps and pipettes.",
        model: "Daily Lab Disposables",
        make: "Techlab Certified",
        image: consumablesImg,
    },
    {
        id: "19",
        name: "Calibration, CRM Standards & Sample Preparation",
        category: "Calibration / Reference Standards / Sample Preparation",
        description: "Certified Reference Materials (CRMs), standard chemicals, certified UV/IR optical standards, digital flowmeters, thermometers, and QuEChERS sample prep kits.",
        model: "Standards & CRM Kits",
        make: "NIST Traceable Standards",
        image: consumablesImg,
    },
    {
        id: "20",
        name: "Support & Utility Systems Supplies",
        category: "Support & Utility Systems Supplies",
        description: "Complete utility supply solutions including gas manifolds, regulators, SS/PTFE pipelines, purification traps, safety leak detectors, fume hoods, exhaust scrubbers and ventilation systems.",
        model: "Gas Supply & Lab Ventilation",
        make: "Techlab Engineering",
        image: gasUtilityImg,
    },
];

const Product = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);

    const displayedProducts = showAll ? productsData : productsData.slice(0, 8);

    return (
        <section className={styles.productSection}>
            <div className={styles.container}>
                <AnimationWrapper type="fade-up" className={styles.header}>
                    <h2 className={styles.title}><span className={styles.highlight}>Products</span> for you</h2>
                    <p className={styles.subtitle}>
                        We work with a wide range of analytical instruments and laboratory equipment used across research, quality control, and testing environments.
                    </p>
                </AnimationWrapper>

                <div className={styles.grid}>
                    {displayedProducts.map((product, index) => (
                        <AnimationWrapper 
                            key={product.id} 
                            type="fade-up" 
                            delay={(index % 4) * 0.1}
                        >
                            <Link to={`/product/${product.id}`} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <span className={styles.arrow}>→</span>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <img src={product.image} alt={product.name} className={styles.productImage} />
                                    {/* <div className={styles.categoryBadge}>{product.category}</div> */}
                                </div>
                            </Link>
                        </AnimationWrapper>
                    ))}

                    {!showAll ? (
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreContent}>
                                <span className={styles.moreCount}>+{productsData.length - 8} more</span>
                                <button
                                    className={styles.exploreBtn}
                                    onClick={() => setShowAll(true)}
                                >
                                    Show All Products <span className={styles.exploreArrow}>→</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreContent}>
                                <span className={styles.moreCount}>Full Catalog</span>
                                <button
                                    className={styles.exploreBtn}
                                    onClick={() => setShowAll(false)}
                                >
                                    Show Less <span className={styles.exploreArrow}>↑</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Product;
