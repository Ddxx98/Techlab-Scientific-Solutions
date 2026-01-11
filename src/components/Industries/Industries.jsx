import React, { useState } from "react";
import styles from "./Industries.module.css";

const industriesData = [
    {
        id: "pharma",
        name: "Pharmaceutical & Biotech Labs",
        image: "/C:/Users/Deekshith D V/.gemini/antigravity/brain/27732b96-d5df-4979-8ccc-8dbeab7275f7/pharma_biotech_lab_1768130792122.png",
    },
    {
        id: "academic",
        name: "Academic & Research Labs",
        image: "/C:/Users/Deekshith D V/.gemini/antigravity/brain/27732b96-d5df-4979-8ccc-8dbeab7275f7/academic_research_lab_1768130806837.png",
    },
    {
        id: "industrial",
        name: "Industrial Testing Labs",
        image: "/C:/Users/Deekshith D V/.gemini/antigravity/brain/27732b96-d5df-4979-8ccc-8dbeab7275f7/industrial_testing_lab_1768130822450.png",
    },
    {
        id: "environmental",
        name: "Environmental Analysis Labs",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200", // Placeholder for 4th image
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
