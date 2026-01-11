import React from "react";
import styles from "./WhyUs.module.css";

const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
        title: "Sales & Service Support",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        title: "Genuine Spares & Consumables",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2v5H20" /><path d="M19 3.1V9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11.9M10 22v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3.1M15 15v7" />
            </svg>
        ),
        title: "On-site & Preventive Maintenance",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
            </svg>
        ),
        title: "Trusted by Labs & Institutions",
    },
];

const WhyUs = () => {
    return (
        <section className={styles.whyUsSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Section */}
                    <div className={styles.leftSection}>
                        <h2 className={styles.title}>
                            <span className={styles.blueText}>Why</span> Techlab <br />
                            Scientific Solutions?
                        </h2>
                        <p className={styles.description}>
                            We believe long term reliability matters more than quick fixes.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        <div className={styles.featuresList}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <div className={styles.iconWrapper}>{feature.icon}</div>
                                    <span className={styles.featureTitle}>{feature.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.buttonGroup}>
                            <button className={styles.primaryBtn}>
                                Explore services <span className={styles.arrow}>→</span>
                            </button>
                            <button className={styles.secondaryBtn}>
                                View Products <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
