import React, { useState } from "react";
import styles from "./Industries.module.css";
import AnimationWrapper from "../AnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";

import pharma from "../../assets/pharma_industry.png";
import food from "../../assets/food_industry.png";
import environmental from "../../assets/environmental_industry.png";
import petrochemical from "../../assets/petrochemical_industry.png";
import forensic from "../../assets/forensic_industry.png";

const industriesData = [
    {
        id: "pharma",
        name: "Pharmaceutical & Biopharma",
        image: pharma,
    },
    {
        id: "food",
        name: "Food & Beverage Safety",
        image: food,
    },
    {
        id: "environmental",
        name: "Environmental Testing",
        image: environmental,
    },
    {
        id: "petrochemical",
        name: "Petrochemical & Energy",
        image: petrochemical,
    },
    {
        id: "forensic",
        name: "Clinical & Forensics",
        image: forensic,
    },
];

const Industries = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.industries}>
            <div className={styles.container}>
                <AnimationWrapper type="fade-up">
                    <h2 className={styles.title}><span className={styles.highlight}>Industries</span> Served</h2>
                </AnimationWrapper>

                <div className={styles.displaySection}>
                    <AnimationWrapper type="fade-right" className={styles.imageWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                src={industriesData[activeIndex].image}
                                alt={industriesData[activeIndex].name}
                                className={styles.industryImage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </AnimationWrapper>

                    <div className={styles.optionsGrid}>
                        {industriesData.map((industry, index) => (
                            <AnimationWrapper 
                                key={industry.id} 
                                type="fade-left" 
                                delay={index * 0.1}
                            >
                                <button
                                    className={`${styles.optionBtn} ${index === activeIndex ? styles.active : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className={styles.optionName}>{industry.name}</span>
                                </button>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
