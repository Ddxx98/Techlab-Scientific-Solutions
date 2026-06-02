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
import labInstrumentsImg from "../../assets/products/lab_instruments.png";
import accessoriesImg from "../../assets/products/accessories.png";
import consumablesImg from "../../assets/products/consumables.png";
import gasUtilityImg from "../../assets/products/gas_utility.png";

const GC_SPECS = [
    "High-speed and high-resolution separation",
    "Advanced Electronic Pneumatic Control system",
    "Stable and precise carrier gas flow control",
    "Fast oven heating and cooling performance",
    "Flexible configuration for multiple detectors and injectors",
    "High sensitivity with low detection limits",
    "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)"
];

const GC_AUTO_INJECTOR_SPECS = [
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
];

const GC_HEADSPACE_SPECS = [
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
];

const GC_MS_SPECS = [
    "Single quadrupole mass analyser system",
    "Electron Ionization (EI) standard",
    "Scan, SIM, and combined Scan/SIM modes",
    "High sensitivity and stable baseline performance",
    "Compatible with automated sample introduction systems (HS-20, AOC-20i, etc.)",
    "Fast data acquisition for routine and advanced analysis",
    "Library search capability (NIST / Wiley compatible)"
];

const UV_SPECS = [
    "Double-beam UV-Visible spectrophotometer system",
    "Wide wavelength range (UV to Visible region)",
    "High accuracy and stable baseline performance",
    "Supports photometric, spectrum, and quantitation modes",
    "PC/software integration option for data analysis",
    "Suitable for routine and advanced laboratory analysis"
];

const LABORATORY_INSTRUMENTS_SPECS = [
    "Analytical Balance / Weighing Balance (High precision and stability)",
    "Digital pH Meter (Accurate temperature compensation and calibration)",
    "Microscope (Advanced optics and adjustable illumination)",
    "Centrifuge (High-speed, safe interlocking, digital timer)",
    "Hot Air Oven (Precise PID temperature control up to 250°C)",
    "Muffle Furnace (High temperature capability up to 1200°C)",
    "Water Bath & Incubator (Stable and uniform heating distribution)",
    "Autoclave (Robust steam sterilization with dual safety valves)",
    "Magnetic Stirrers (Available in single and multi-position models)",
    "Vortex Mixer (Available in single and multi-tube setups)",
    "Hot Plates & Shakers (All types: orbital, reciprocating, digital temperature control)",
    "Etc… Full range of Laboratory Products and general equipment"
];

const ACCESSORIES_SPECS = [
    "Auto Injector (AOC-20i liquid autoinjection system)",
    "Auto Sampler (AOC-20s multi-vial autosampling tray)",
    "Gas Sampler (Automated loop-based injection valves)",
    "Methanizer (For converting CO/CO2 to CH4 for trace FID detection)",
    "ATR (Attenuated Total Reflection attachment for IR spectrometry)",
    "Additional Injectors & Detectors (FID, TCD, ECD, FPD, etc.)",
    "Additional Sampling Devices & Valves",
    "Software & Data Handling Systems (LabSolutions compatible integration)"
];

const CONSUMABLES_SPECS = [
    "Injector Septa (High thermal stability and low bleeding)",
    "Glass Liners (Split, splitless, deactivated, wool-packed options)",
    "Columns (Capillary and packed chromatography columns)",
    "Vials & Cap Septa (2mL, 10mL, 20mL screw/crimp options)",
    "Syringes (Manual and autosampler syringes, 1uL to 500uL)",
    "Ferrules (Graphite, Vespel, metal options for reliable seals)",
    "Syringe Filters (Nylon, PTFE, PVDF, PES in all diameters)",
    "Micro Pipettes (Single channel, multi channel, variable volume)",
    "Glassware (Beakers, flasks, cylinders, pipettes)",
    "Lamps (Deuterium, Halogen, Xenon, hollow cathode lamps)",
    "Cuvettes (Quartz and optical glass, standard/micro sizes)",
    "Centrifuge Tubes (Conical, micro-centrifuge, self-standing)",
    "Etc… All Other Lab-Related Consumables & Disposables"
];

const STANDARDS_SPECS = [
    "CRMs (Certified Reference Materials for organic and inorganic analysis)",
    "Standard Chemicals (High purity solvents and chromatography standards)",
    "Certified UV and IR Standards (For wavelength and photometric calibration)",
    "Digital Flowmeters (High accuracy carrier and purge gas measurement)",
    "Digital Thermometers & Manometers (NIST-traceable calibration instruments)",
    "QuEChERS & Sample Preparation Kits (Dispersive SPE, clean extraction)",
    "Chemicals, reagents, and extraction salts"
];

const UTILITY_SPECS = [
    "Gas Supply & Control Panels (Automatic changeover, safety valves)",
    "Gas Regulators (Double-stage chrome and brass high-purity regulators)",
    "Gas Purification Systems (Moisture, Hydrocarbon, Oxygen traps/filters)",
    "Gas Cylinders (Nitrogen, Helium, Argon, Hydrogen, etc.)",
    "Gas Pipelines & Distribution (SS316 and PTFE tubings)",
    "Leak Detectors (Handheld digital safety detectors)",
    "Flowmeters & exhaust systems control supplies",
    "Fittings & Consumables (Nuts, ferrules, T-joints, sleeves, ball/toggle valves)",
    "Exhaust & Ventilation (Fume hoods, exhaust ducts, scrubbers, lab ventilation)"
];

const productsData = {
    "01": {
        name: "Gas Chromatography-Mass Spectrometry (GC-MS)",
        model: "QP2010 Ultra",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCMS,
        description: "High-performance GC-MS system for precise identification and quantification of volatile compounds in complex mixtures.",
        specs: GC_MS_SPECS,
    },
    "02": {
        name: "Gas Chromatograph",
        model: "GC-2010",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GC,
        description: "Versatile gas chromatography system optimized for routine analysis with high sensitivity and reliability.",
        specs: GC_SPECS,
    },
    "03": {
        name: "Gas Chromatograph",
        model: "GC-2010 Plus",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GC2010,
        description: "Advanced GC platform featuring exceptional temperature control and modular design for diverse laboratory needs.",
        specs: GC_SPECS,
    },
    "04": {
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        model: "GC 2010, AOC 20i",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCAOC,
        description: "Automated GC system equipped with the AOC-20i auto-injector for high-throughput sample processing and improved reproducibility.",
        specs: GC_AUTO_INJECTOR_SPECS,
    },
    "05": {
        name: "Gas Chromatograph",
        model: "GC-2014",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GC2014,
        description: "Reliable gas chromatography system designed for standard industrial and research applications.",
        specs: GC_SPECS,
    },
    "06": {
        name: "Gas Chromatograph",
        model: "GC-2014 Plus",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GC14,
        description: "Rugged and efficient GC system suitable for heavy workloads and consistent performance in quality control labs.",
        specs: GC_SPECS,
    },
    "07": {
        name: "Gas Chromatograph",
        model: "GC-2010 Pro",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GC2010lap,
        description: "Compact and powerful gas chromatograph offering high-speed analysis and flexible detector options.",
        specs: GC_SPECS,
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
        category: "Analytical Instruments",
        image: GCAOCI,
        description: "Enhanced automated GC system combining the GC-2010 Plus with advanced auto-injection technology.",
        specs: GC_AUTO_INJECTOR_SPECS,
    },
    "10": {
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        model: "GC 2010, AOC 20i",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCAOC10,
        description: "Durable automated GC solution for laboratories requiring consistent and unattended sample injection.",
        specs: GC_AUTO_INJECTOR_SPECS,
    },
    "11": {
        name: "Gas Chromatograph (GC) with Auto Injector (AOC 20i)",
        model: "GCMS-QP2010 Ultra, AOC 20i",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCMSAI,
        description: "High-performance GC system integrated with automation for specialized research and development workflows.",
        specs: GC_MS_SPECS,
    },
    "12": {
        name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Auto Sampler",
        model: "QP2010 Plus, AOC 20i, AOC 20s",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCMSAIAS,
        description: "Comprehensive GC-MS solution featuring both auto-injection and multi-vial sampling for maximum laboratory efficiency.",
        specs: GC_MS_SPECS,
    },
    "13": {
        name: "Gas chromatography-mass spectrometry (GCMS) with Auto Injector and Headspace Sampler (HS)",
        model: "QP2010 SE, AOC 20i, HS 20",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCMSAIHS,
        description: "Specialized GC-MS configuration optimized for volatile analysis using integrated headspace sampling techniques.",
        specs: GC_MS_SPECS,
    },
    "14": {
        name: "Gas Chromatograph (GC) with Headspace Sampler (HS)",
        model: "GC 2010 Plus, HS 20",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: GCHS,
        description: "High-efficiency GC system paired with a headspace sampler for robust environmental and forensic testing.",
        specs: GC_HEADSPACE_SPECS,
    },
    "15": {
        name: "UV-Visible Spectrophotometer",
        model: "UV-1800",
        make: "Shimadzu",
        category: "Analytical Instruments",
        image: UV,
        description: "Dual-beam UV-Vis spectrophotometer offering high resolution and stability for pharmaceutical and chemical analysis.",
        specs: UV_SPECS,
    },
    "16": {
        name: "Laboratory Instruments Portfolio",
        model: "Techlab Complete Catalog",
        make: "Techlab Approved Partners",
        category: "Laboratory Instruments",
        image: labInstrumentsImg,
        description: "Comprehensive range of high-quality laboratory products including balances, pH meters, microscopes, centrifuges, muffle furnaces, water baths, stirrers, shakers and heating plates.",
        specs: LABORATORY_INSTRUMENTS_SPECS,
    },
    "17": {
        name: "Chromatographic Accessories & Samplers",
        model: "GC/GCMS Accessories",
        make: "Shimadzu & Techlab OEM",
        category: "Accessories",
        image: accessoriesImg,
        description: "Premium automated injection and sampling accessories including liquid autosamplers, gas samplers, methanizers, ATR modules, specialized detectors, and analytical software.",
        specs: ACCESSORIES_SPECS,
    },
    "18": {
        name: "Analytical Consumables & Lab Supplies",
        model: "Daily Lab Disposables",
        make: "Techlab Certified",
        category: "Consumables",
        image: consumablesImg,
        description: "High-purity laboratory consumables including columns, glass liners, syringes, injection septa, vials, ferrules, cuvettes, lamps and pipettes.",
        specs: CONSUMABLES_SPECS,
    },
    "19": {
        name: "Calibration, CRM Standards & Sample Preparation",
        model: "Standards & CRM Kits",
        make: "NIST Traceable Standards",
        category: "Calibration / Reference Standards / Sample Preparation",
        image: consumablesImg,
        description: "Certified Reference Materials (CRMs), standard chemicals, certified UV/IR optical standards, digital flowmeters, thermometers, and QuEChERS sample prep kits.",
        specs: STANDARDS_SPECS,
    },
    "20": {
        name: "Support & Utility Systems Supplies",
        model: "Gas Supply & Lab Ventilation",
        make: "Techlab Engineering",
        category: "Support & Utility Systems Supplies",
        image: gasUtilityImg,
        description: "Complete utility supply solutions including gas manifolds, regulators, SS/PTFE pipelines, purification traps, safety leak detectors, fume hoods, exhaust scrubbers and ventilation systems.",
        specs: UTILITY_SPECS,
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
