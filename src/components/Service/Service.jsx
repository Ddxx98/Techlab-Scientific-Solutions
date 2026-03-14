import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Service.module.css";

const servicesData = [
    {
        id: "01",
        title: "Service Contracts (AMC)",
        description: "Annual Maintenance Contract (AMC). Reliable, scheduled maintenance to ensure continuous operation of your lab instruments.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "02",
        title: "Service Contracts (CMC)",
        description: "Comprehensive Maintenance Contract (CMC). Complete coverage including preventive maintenance and essential parts replacement.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "03",
        title: "Onetime Service Visit",
        description: "On-demand expert service visits for immediate technical troubleshooting, repairs, or specific maintenance requirements.",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "04",
        title: "Inspection & Calibration",
        description: "General inspection, Service, Installation, Calibration, and Qualification Visit options for thorough system checks.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
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
                <h2 className={styles.mainTitle}><span className={styles.highlight}>Services</span> for you</h2>

                <div className={styles.contentWrapper}>
                    {/* Left Side: Service List */}
                    <div className={styles.serviceList}>
                        {servicesData.slice(0, 2).map((service, index) => (
                            <div
                                key={service.id}
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
                        ))}

                        <div className={styles.moreInfo}>
                            <span className={styles.moreText}>+4 more</span>
                            <button
                                className={styles.exploreBtn}
                                onClick={() => navigate("/services")}
                            >
                                Explore ALL <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Desktop Image */}
                    <div className={styles.desktopImageWrapper}>
                        <img
                            src={servicesData[activeIndex].image}
                            alt={servicesData[activeIndex].title}
                            className={styles.desktopImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
