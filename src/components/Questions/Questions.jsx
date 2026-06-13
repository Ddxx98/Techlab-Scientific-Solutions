"use client";

import React, { useState } from "react";
import styles from "./Questions.module.css";
import AnimationWrapper from "../AnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";

const faqData = {
    general: [
        {
            id: 1,
            question: "What is Techlab Scientific Solutions and where are you located?",
            answer: "Techlab Scientific Solutions is a Bengaluru-based company dedicated to supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with research labs, testing institutes, and diverse industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 2,
            question: "Who are your typical clients and what industries do you serve?",
            answer: "We serve academic research laboratories, testing facilities, pharmaceutical companies, chemical manufacturers, food & beverage industries, and environmental monitoring agencies that require precise measurement instruments.",
        },
        {
            id: 3,
            question: "What is the core business principle of Techlab Scientific Solutions?",
            answer: "Our principle is simple: to make sure your instruments work the way they should when you need them. We focus on clear communication, practical solutions, honest timelines, and reliable follow-up, avoiding over-selling or unnecessary procedures.",
        },
        {
            id: 4,
            question: "How quickly does your service team respond to breakdown calls?",
            answer: "We understand that a down instrument stops your work. With our local presence in Bengaluru, we offer rapid response times for diagnostic and repair services, treating every instrument as critical to your laboratory workflows.",
        },
        {
            id: 5,
            question: "Do you supply genuine spare parts for analytical systems?",
            answer: "Yes, we provide genuine and highly compatible spare parts, consumables, and accessories for Shimadzu and other major chromatography and spectroscopy brands to ensure optimal uptime and performance.",
        },
    ],
    products: [
        {
            id: 1,
            question: "What types of products do you supply for laboratories?",
            answer: "Our catalog covers Analytical Instruments (GC, GCMS, UV-Vis), Laboratory Instruments (Balances, pH Meters, Centrifuges, Ovens, Autoclaves, Shakers), Accessories (Auto Injectors, Headspace Samplers, ATR modules), Consumables (Liners, Septa, Columns, Vials, Syringes), Calibration Standards (CRMs, traceables), and Support & Utility Systems (Gas manifolds, purification traps, fume hoods, exhaust ventilation).",
        },
        {
            id: 2,
            question: "Which analytical instruments do you specialize in?",
            answer: "We specialize in Shimadzu Gas Chromatography (GC) systems, GC-MS (Gas Chromatography-Mass Spectrometry) systems, Headspace Autosamplers, and UV-Visible Spectrophotometers, supplying both system hardware and advanced software configurations.",
        },
        {
            id: 3,
            question: "Can you dynamically suggest custom specifications for lab equipment?",
            answer: "Yes. For sophisticated laboratory equipment like micro-balances, centrifuges, and autoclaves, we provide detailed technical specifications matching the precise requirements of your workflow.",
        },
        {
            id: 4,
            question: "Do you offer accessories like autosamplers or specialized software?",
            answer: "Absolutely. We supply a complete range of automated injection and sampling accessories including liquid autosamplers (AOC-20i/s), automated gas samplers, methanizers for trace FID analysis, ATR attachments, and LabSolutions-compatible data handling software.",
        },
        {
            id: 5,
            question: "Are your calibration standards traceable?",
            answer: "Yes, all our Certified Reference Materials (CRMs) and calibration standards are NIST-traceable and come accompanied by a comprehensive Certificate of Analysis (CoA) to comply with GLP/GMP laboratory standards.",
        },
    ],
    services: [
        {
            id: 1,
            question: "What maintenance contract options do you offer for instruments?",
            answer: "We provide two primary contract packages: Annual Maintenance Contracts (AMC) for routine preventive maintenance visits and priority support, and Comprehensive Maintenance Contracts (CMC) which include full breakdown coverage and replacement of eligible spare parts.",
        },
        {
            id: 2,
            question: "Do you support one-time diagnostic or installation services?",
            answer: "Yes, we offer One-time Service Visits covering professional breakdown diagnosis, routine inspections, instrument dismantling, relocation/shifting, and re-installation services.",
        },
        {
            id: 3,
            question: "What kind of professional training and workshops do you conduct?",
            answer: "We run structured training programs and workshops covering basic theory and hands-on laboratory sessions for GC, GC-HS, and GC-MS. These programs are tailored for students, research scholars, faculty, and QA/QC/R&D professionals.",
        },
        {
            id: 4,
            question: "How do you support academic and industrial research projects?",
            answer: "We provide comprehensive research support, assisting in analytical method development, sample analysis, gas chromatography optimization, and data interpretation for thesis work or industrial product testing.",
        },
        {
            id: 5,
            question: "Do you provide laboratory gas pipeline installation?",
            answer: "Yes, under our Support & Utility services, we design and install high-purity SS316/PTFE gas pipelines, distribution panels, automatic changeover manifolds, and purification traps, alongside fume hood ventilation and exhaust duct systems.",
        },
    ],
};

const Questions = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [openItems, setOpenItems] = useState([1]); // Default first item open

    const toggleItem = (id) => {
        if (openItems.includes(id)) {
            setOpenItems(openItems.filter((item) => item !== id));
        } else {
            setOpenItems([...openItems, id]);
        }
    };

    const expandAll = () => {
        const allIds = faqData[activeTab].map((item) => item.id);
        setOpenItems(allIds);
    };

    const collapseAll = () => {
        setOpenItems([]);
    };

    const isAllExpanded = openItems.length === faqData[activeTab].length;

    return (
        <section className={styles.questionsSection}>
            <div className={styles.container}>
                <AnimationWrapper type="fade-right" className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>
                            Frequently <br />
                            Asked <br />
                            Questions <span className={styles.highlight}>?</span>
                        </h2>
                    </div>
                    <div className={styles.watermark}>Q</div>
                </AnimationWrapper>

                <div className={styles.controls}>
                    <div className={styles.tabs}>
                        {["general", "products", "services"].map((tab) => (
                            <button
                                key={tab}
                                className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setOpenItems([1]); // Reset to first item open on tab change
                                }}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    <button
                        className={styles.expandBtn}
                        onClick={isAllExpanded ? collapseAll : expandAll}
                    >
                        {isAllExpanded ? "Collapse All -" : "Expand All +"}
                    </button>
                </div>

                <div className={styles.faqList}>
                    <AnimatePresence mode="wait">
                        {faqData[activeTab].map((item, index) => (
                            <AnimationWrapper 
                                key={`${activeTab}-${item.id}`} 
                                type="fade-up" 
                                delay={index * 0.05}
                            >
                                <div
                                    className={`${styles.faqItem} ${openItems.includes(item.id) ? styles.open : ""}`}
                                >
                                    <button
                                        className={styles.questionBtn}
                                        onClick={() => toggleItem(item.id)}
                                    >
                                        <span className={styles.questionText}>{item.question}</span>
                                        <span className={styles.icon}>
                                            {openItems.includes(item.id) ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                    <motion.div 
                                        className={styles.answerWrapper}
                                        initial={false}
                                        animate={{ height: openItems.includes(item.id) ? "auto" : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className={styles.answerContent}>
                                            <p className={styles.answerText}>{item.answer}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Questions;
