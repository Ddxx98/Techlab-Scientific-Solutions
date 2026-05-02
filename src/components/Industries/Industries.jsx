import React, { useState } from "react";
import styles from "./Industries.module.css";

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
                <h2 className={styles.title}><span className={styles.highlight}>Industries</span> Served</h2>

                <div className={styles.displaySection}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={industriesData[activeIndex].image}
                            alt={industriesData[activeIndex].name}
                            className={styles.industryImage}
                        />
                    </div>

                    <div className={styles.optionsGrid}>
                        {industriesData.map((industry, index) => (
                            <button
                                key={industry.id}
                                className={`${styles.optionBtn} ${index === activeIndex ? styles.active : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className={styles.optionName}>{industry.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
