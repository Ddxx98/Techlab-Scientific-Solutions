import React from "react";
import Link from "next/link";
import styles from "./ServiceData.module.css";
import AnimationWrapper from "../AnimationWrapper";

const amc = "/assets/amc_service.webp";
const cmc = "/assets/cmc_service.webp";
const onetime = "/assets/onetime_service.webp";
const calibration = "/assets/calibration_service.webp";
const training = "/assets/training_service.webp";

const ServiceData = () => {
    const services = [
        {
            id: "01",
            anchor: "amc",
            title: "Service Contracts (AMC)",
            description: "Annual Maintenance Contract (AMC). We offer reliable, scheduled maintenance to keep your laboratory instruments in peak condition.",
            image: amc,
            specs: [
                { label: "Preventive Maintenance", value: "Number of visits are as per contract agreed" },
                { label: "Breakdown Visits", value: "Number of visits are as per contract agreed" }
            ],
            benefitsTitle: "Benefits of AMC Services",
            benefits: [
                "Regular preventive maintenance",
                "Reduced equipment downtime",
                "Priority technical support",
                "Lower repair costs",
                "Improved performance and reliability",
                "Extended equipment life"
            ]
        },
        {
            id: "02",
            anchor: "cmc",
            title: "Service Contracts (CMC)",
            description: "Comprehensive Maintenance Contract (CMC). Complete coverage including preventive maintenance and parts coverage for zero compromises.",
            image: cmc,
            specs: [
                { label: "Preventive Maintenance", value: "Number of visits are as per contract agreed" },
                { label: "Breakdown Visits", value: "Number of visits are as per contract agreed" },
                { label: "Spares", value: "Parts covered are as per contract agreed" }
            ],
            benefitsTitle: "Benefits of CMC Services",
            benefits: [
                "Comprehensive coverage of maintenance and repairs",
                "Replacement of eligible spare parts",
                "Reduced downtime and operational disruptions",
                "Priority response and service support",
                "Improved equipment efficiency and lifespan",
                "Better cost control and budget predictability"
            ]
        },
        {
            id: "03",
            anchor: "onetime",
            title: "Onetime Service Visit",
            description: "Our one-time service visit provides professional diagnosis, repair, and support for your equipment or systems. Whether it's a breakdown, performance issue, routine inspection, dismantling, shifting, or re-installation, our experts deliver prompt and effective solutions.",
            image: onetime,
            chipsTitle: "Services Offered Under One-Time Visit:",
            chips: [
                "Breakdown",
                "Performance issue",
                "Routine inspection",
                "Dismantling",
                "Shifting",
                "Re-installation etc..."
            ]
        },
        {
            id: "04",
            anchor: "calibration",
            title: "Inspection & Calibration",
            description: "General inspection, Service, Installation, Calibration, and Qualification Visit options for thorough, standardized system checks.",
            image: calibration,
            benefitsTitle: "Why Choose Our Inspection & Calibration Services?",
            benefits: [
                "Accurate and reliable equipment performance.",
                "Improved measurement precision and consistency.",
                "Early detection of performance deviations.",
                "Reduced operational errors and rework.",
                "Detailed assessment by qualified professionals."
            ]
        },
        {
            id: "05",
            anchor: "training",
            title: "Training / Workshop / Research Support",
            description: "Unlock advanced analytical capabilities through structured learning, research assistance, and hands-on laboratory workshops guided by qualified professionals.",
            image: training,
            bulletGroups: [
                {
                    title: "Professional Training Programs",
                    bullets: [
                        "Professional training programs in analytical instrumentation for students, researchers, and industry professionals",
                        "Hands-on training in GC, GC-HS and GC-MS Etc…",
                        "Focus on instrument operation, method development, calibration, troubleshooting, and data interpretation",
                        "Practical exposure to real-time analysis techniques"
                    ]
                },
                {
                    title: "Research Support",
                    bullets: [
                        "Research support for academic and industrial projects",
                        "Assistance in method development, sample analysis.",
                        "Guidance in data analysis, interpretation, and result reporting",
                        "Customized solutions based on project and other requirements"
                    ]
                },
                {
                    title: "Structured Workshops",
                    bullets: [
                        "Structured workshops with basic theory + hands-on laboratory sessions",
                        "Live instrument demonstrations and real sample analysis",
                        "Industry-relevant case studies (chemical, pharma, environmental, food, etc.)",
                        "Designed for UG/PG students, research scholars, faculty, and QA/QC/R&D professionals"
                    ]
                }
            ]
        }
    ];

    return (
        <section className={styles.serviceDataSection}>
            <div className={styles.container}>
                <AnimationWrapper type="fade-down">
                    <h1 className={styles.sectionTitle}>Our Services</h1>
                </AnimationWrapper>
                <div className={styles.servicesList}>
                    {services.map((service, index) => (
                        <AnimationWrapper 
                            key={service.id} 
                            type="fade-up" 
                            delay={index * 0.1}
                        >
                            <div id={service.anchor} className={styles.serviceRow}>
                                <div className={styles.titleCol}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                </div>
                                <div className={styles.detailsCol}>
                                    <div className={styles.imageWrapper}>
                                        <div className={styles.imagePlaceholder}>
                                            <img src={service.image} alt={service.title} className={styles.serviceImage} />
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <p className={styles.description}>{service.description}</p>
                                        
                                        {/* Render Specifications if present */}
                                        {service.specs && (
                                            <div className={styles.specsGrid}>
                                                {service.specs.map((spec, i) => (
                                                    <div key={i} className={styles.specCard}>
                                                        <span className={styles.specLabel}>{spec.label}</span>
                                                        <span className={styles.specValue}>{spec.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Render Chips if present */}
                                        {service.chips && (
                                            <div className={styles.chipsSection}>
                                                <h4 className={styles.detailsTitle}>{service.chipsTitle}</h4>
                                                <div className={styles.chipsContainer}>
                                                    {service.chips.map((chip, i) => (
                                                        <span key={i} className={styles.chip}>{chip}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Render Benefits if present */}
                                        {service.benefits && (
                                            <div className={styles.benefitsSection}>
                                                <h4 className={styles.detailsTitle}>{service.benefitsTitle}</h4>
                                                <ul className={styles.benefitsList}>
                                                    {service.benefits.map((benefit, i) => (
                                                        <li key={i} className={styles.benefitItem}>
                                                            <span className={styles.checkmarkIcon}>✓</span>
                                                            <span className={styles.benefitText}>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Render Bullet Groups if present */}
                                        {service.bulletGroups && (
                                            <div className={styles.bulletGroupsSection}>
                                                {service.bulletGroups.map((group, i) => (
                                                    <div key={i} className={styles.bulletGroupCard}>
                                                        <h4 className={styles.groupTitle}>{group.title}</h4>
                                                        <ul className={styles.groupBullets}>
                                                            {group.bullets.map((bullet, j) => (
                                                                <li key={j} className={styles.groupBulletItem}>
                                                                    <span className={styles.bulletDot}>•</span>
                                                                    <span className={styles.bulletText}>{bullet}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <Link href="/contact" className={styles.contactLink}>CONTACT US FOR INQUIRIES →</Link>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceData;
