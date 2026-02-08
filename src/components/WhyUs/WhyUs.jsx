import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WhyUs.module.css";
import BackgroundImg from "../../assets/whyus.jpg"; // Assuming user will provide this, or I use placeholder

const features = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
        title: "Sales & Service Support",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        title: "On-site & Preventive Maintenance",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" />
            </svg>
        ),
        title: "Genuine Spares & Consumables",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
            </svg>
        ),
        title: "Trusted by Labs & Institutions",
    },
];

const WhyUs = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.whyUsSection}>
            {/* Background Image Wrapper */}
            <div className={styles.bgWrapper}>
                {/* Placeholder image until user provides actual one */}
                <img
                    src={BackgroundImg}
                    alt="Background"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <h2 className={styles.title}>
                        Why Techlab Scientific Solutions?
                    </h2>
                    <p className={styles.description}>
                        We believe long term reliability matters more than quick fixes.
                    </p>
                </div>

                <div className={styles.gridWrapper}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.iconWrapper}>{feature.icon}</div>
                            <span className={styles.featureTitle}>{feature.title}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonGroup}>
                    <button
                        className={styles.primaryBtn}
                        onClick={() => navigate("/services")}
                    >
                        Explore services <span className={styles.arrow}>→</span>
                    </button>
                    <button
                        className={styles.secondaryBtn}
                        onClick={() => navigate("/products")}
                    >
                        View Products <span className={styles.arrow}>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
