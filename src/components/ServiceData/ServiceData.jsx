import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceData.module.css";

const ServiceData = () => {
    const services = [
        {
            id: "01",
            title: "Service Contracts (AMC)",
            description: "Annual Maintenance Contract (AMC). We offer reliable, scheduled maintenance to keep your laboratory instruments in peak condition.",
            image: "https://images.unsplash.com/photo-1579154235602-3c2051695e9a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "02",
            title: "Service Contracts (CMC)",
            description: "Comprehensive Maintenance Contract (CMC). Complete coverage including preventive maintenance and parts coverage for zero compromises.",
            image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "03",
            title: "Onetime Service Visit",
            description: "Need immediate assistance? We provide onetime on-demand service visits for specific technical issues and resolving breakdowns.",
            image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "04",
            title: "Inspection & Calibration",
            description: "General inspection, Service, Installation, Calibration, and Qualification Visit options for thorough, standardized system checks.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className={styles.serviceDataSection}>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>Our Services</h1>

                <div className={styles.servicesList}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.serviceRow}>
                            <div className={styles.titleCol}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                            </div>
                            <div className={styles.detailsCol}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imagePlaceholder}>
                                        {/* Using a placeholder-style image if needed, or actual image */}
                                        <img src={service.image} alt={service.title} className={styles.serviceImage} />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <p className={styles.description}>{service.description}</p>
                                    <Link to="/contact" className={styles.contactLink}>CONTACT</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceData;
