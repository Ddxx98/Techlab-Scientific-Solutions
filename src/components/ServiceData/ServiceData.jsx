import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceData.module.css";
import AnimationWrapper from "../AnimationWrapper";
import amc from "../../assets/amc_service.png";
import cmc from "../../assets/cmc_service.png";
import onetime from "../../assets/onetime_service.png";
import calibration from "../../assets/calibration_service.png";

const ServiceData = () => {
    const services = [
        {
            id: "01",
            title: "Service Contracts (AMC)",
            description: "Annual Maintenance Contract (AMC). We offer reliable, scheduled maintenance to keep your laboratory instruments in peak condition.",
            image: amc
        },
        {
            id: "02",
            title: "Service Contracts (CMC)",
            description: "Comprehensive Maintenance Contract (CMC). Complete coverage including preventive maintenance and parts coverage for zero compromises.",
            image: cmc
        },
        {
            id: "03",
            title: "Onetime Service Visit",
            description: "Need immediate assistance? We provide onetime on-demand service visits for specific technical issues and resolving breakdowns.",
            image: onetime
        },
        {
            id: "04",
            title: "Inspection & Calibration",
            description: "General inspection, Service, Installation, Calibration, and Qualification Visit options for thorough, standardized system checks.",
            image: calibration
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
                            <div className={styles.serviceRow}>
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
                                        <Link to="/contact" className={styles.contactLink}>CONTACT</Link>
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
