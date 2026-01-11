import React, { useState, useEffect } from "react";
import styles from "./Service.module.css";

const servicesData = [
    {
        id: "01",
        title: "Preventive Maintenance",
        description: "Preventive maintenance, breakdown service, calibration support, and technical troubleshooting by experienced professionals.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "02",
        title: "Breakdown Service",
        description: "Rapid response and expert repair services to minimize downtime and restore your laboratory equipment to optimal performance.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "03",
        title: "Calibration Support",
        description: "Precise calibration services ensuring your instruments meet international standards for accuracy and reliability.",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "04",
        title: "Technical Troubleshooting",
        description: "Advanced diagnostic and troubleshooting services to identify and resolve complex technical issues in laboratory instrumentation.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
    },
];

const Service = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
                                <p className={styles.serviceDescription}>{service.description}</p>

                                {/* Mobile Image (shown between items on mobile) */}
                                <div className={styles.mobileImageWrapper}>
                                    <img src={service.image} alt={service.title} className={styles.mobileImage} />
                                </div>
                            </div>
                        ))}

                        <div className={styles.moreInfo}>
                            <span className={styles.moreText}>+4 more</span>
                            <button className={styles.exploreBtn}>
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
