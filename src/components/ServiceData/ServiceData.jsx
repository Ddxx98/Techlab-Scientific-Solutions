import React, { useState } from "react";
import styles from "./ServiceData.module.css";

const ServiceData = () => {
    const services = [
        {
            id: "01",
            title: "Services 01",
            description: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
            image: "https://images.unsplash.com/photo-1579154235602-3c2051695e9a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "02",
            title: "Services 02",
            description: "We provide comprehensive maintenance and calibration services for a wide range of analytical instruments. Our team of experts ensures that your equipment operates at peak performance, minimizing downtime and ensuring reliable results.",
            image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "03",
            title: "Services 03",
            description: "Our technical support team is available to assist with troubleshooting and repairs. We use genuine spares and follow industry best practices to ensure the longevity and accuracy of your laboratory instruments.",
            image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "04",
            title: "Services 04",
            description: "We offer training programs for lab personnel on the proper use and maintenance of analytical equipment. Our goal is to empower your team with the knowledge they need to maximize the value of your investments.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "05",
            title: "Services 05",
            description: "Techlab provides consultancy services for lab setup and equipment selection. We help you choose the right tools based on your specific research and testing requirements, ensuring efficiency and cost-effectiveness.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "06",
            title: "Services 06",
            description: "We supply a wide range of laboratory consumables, accessories, and spares. Our inventory is carefully curated to meet the diverse needs of modern analytical laboratories, ensuring you have what you need when you need it.",
            image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className={styles.serviceDataSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Services</h2>

                <div className={styles.contentWrapper}>
                    {/* Left Side: Service Links */}
                    <div className={styles.linksColumn}>
                        <ul className={styles.serviceList}>
                            {services.map((service) => (
                                <li
                                    key={service.id}
                                    className={`${styles.serviceItem} ${activeService.id === service.id ? styles.active : ""}`}
                                    onClick={() => setActiveService(service)}
                                >
                                    {service.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Service Details */}
                    <div className={styles.detailsColumn}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={activeService.image}
                                alt={activeService.title}
                                className={styles.serviceImage}
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <p className={styles.description}>{activeService.description}</p>
                            <a href="/contact" className={styles.contactLink}>CONTACT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceData;
