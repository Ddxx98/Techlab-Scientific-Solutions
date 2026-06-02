import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Service.module.css";
import AnimationWrapper from "../AnimationWrapper";
import { motion, AnimatePresence } from "framer-motion";
import amc from "../../assets/amc_service.png";
import cmc from "../../assets/cmc_service.png";
import onetime from "../../assets/onetime_service.png";
import calibration from "../../assets/calibration_service.png";
import training from "../../assets/training_service.png";

const servicesData = [
    {
        id: "01",
        title: "Service Contracts (AMC)",
        description: "Annual Maintenance Contract (AMC). Reliable, scheduled maintenance to ensure continuous operation of your lab instruments.",
        image: amc,
    },
    {
        id: "02",
        title: "Service Contracts (CMC)",
        description: "Comprehensive Maintenance Contract (CMC). Complete coverage including preventive maintenance and essential parts replacement.",
        image: cmc,
    },
    {
        id: "03",
        title: "Onetime Service Visit",
        description: "On-demand expert service visits for immediate technical troubleshooting, repairs, or specific maintenance requirements.",
        image: onetime,
    },
    {
        id: "04",
        title: "Inspection & Calibration",
        description: "General inspection, Service, Installation, Calibration, and Qualification Visit options for thorough system checks.",
        image: calibration,
    },
    {
        id: "05",
        title: "Training / Research Support / Workshop",
        description: "Unlock advanced analytical capabilities through structured learning, research assistance, and hands-on laboratory workshops guided by qualified professionals.",
        image: training,
    },
];

const Service = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.serviceSection}>
            <div className={styles.container}>
                <AnimationWrapper type="fade-up">
                    <h2 className={styles.mainTitle}><span className={styles.highlight}>Services</span> for you</h2>
                </AnimationWrapper>

                <div className={styles.contentWrapper}>
                    {/* Left Side: Service List */}
                    <div className={styles.serviceList}>
                        {servicesData.slice(0, 3).map((service, index) => (
                            <AnimationWrapper 
                                key={service.id} 
                                type="fade-right" 
                                delay={index * 0.2}
                            >
                                <div
                                    className={`${styles.serviceItem} ${index === activeIndex ? styles.active : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={styles.serviceHeader}>
                                        <span className={styles.serviceId}>{service.id} - </span>
                                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    </div>
                                    <div className={styles.serviceBody}>
                                        <p className={styles.serviceDescription}>{service.description}</p>
                                    </div>

                                    {/* Mobile Image (shown between items on mobile) */}
                                    <div className={styles.mobileImageWrapper}>
                                        <img src={service.image} alt={service.title} className={styles.mobileImage} />
                                    </div>
                                </div>
                            </AnimationWrapper>
                        ))}

                        <div className={styles.moreInfo}>
                            <span className={styles.moreText}>+2 more</span>
                            <button
                                className={styles.exploreBtn}
                                onClick={() => navigate("/services")}
                            >
                                Explore ALL <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Desktop Image */}
                    <AnimationWrapper type="fade-left" className={styles.desktopImageWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                src={servicesData[activeIndex].image}
                                alt={servicesData[activeIndex].title}
                                className={styles.desktopImage}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </AnimationWrapper>
                </div>
            </div>
        </section>
    );
};

export default Service;
