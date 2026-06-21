"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import AnimationWrapper from "../AnimationWrapper";
import { categories } from "../../data/products";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const exploreLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const productLinks = categories
        .filter(c => c !== "All")
        .map(c => {
            let name = c;
            if (c === "Calibration / Reference Standards / Sample Preparation") {
                name = "Calibration / Reference Standards";
            } else if (c === "Support & Utility Systems Supplies") {
                name = "Support & Utility Systems";
            }
            return {
                name,
                path: `/products?category=${encodeURIComponent(c)}`
            };
        });

    const serviceLinks = [
        { name: "Service Contracts (AMC)", path: "/services#amc" },
        { name: "Service Contracts (CMC)", path: "/services#cmc" },
        { name: "Onetime Service Visit", path: "/services#onetime" },
        { name: "Inspection & Calibration", path: "/services#calibration" },
        { name: "Training / Workshop / Research Support", path: "/services#training" },
    ];

    return (
        <footer className={styles.footer}>
            <AnimationWrapper type="fade-up" className={styles.container}>

                {/* Middle Section: Links & Contact */}
                <div className={styles.middleSection}>
                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>EXPLORE</h4>
                            <ul className={styles.linkList}>
                                {exploreLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.path} className={styles.link}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>PRODUCTS</h4>
                            <ul className={styles.linkList}>
                                {productLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.path} className={styles.link}>{link.name}</Link>
                                        {link.subItems && (
                                            <ul className={styles.subLinkList}>
                                                {link.subItems.map((sub, sIndex) => (
                                                    <li key={sIndex}>
                                                        <Link href={sub.path} className={styles.subLink}>{sub.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>SERVICES</h4>
                            <ul className={styles.linkList}>
                                {serviceLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.path} className={styles.link}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.contactColumn}>
                            <div className={styles.contactInfo}>
                                <a href="tel:+917411723668" className={styles.contactLink}>+91 - 7411723668</a>
                                <a href="tel:+917411723669" className={styles.contactLink}>+91 - 7411723669</a>
                                <a href="mailto:sales@techlabscientific.com" className={styles.contactLink}>sales@techlabscientific.com</a>
                                <p className={styles.address}>
                                    Building no. 57, Government press layout, <br />
                                    Mallathahalli, Ullal main road, Bengaluru, <br />
                                    Karnataka, India - 560 056.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Top Button */}
                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        All Content is copyrighted @Techlab Scientific Solutions 2026
                    </p>
                    <button className={styles.topBtn} onClick={scrollToTop}>
                        Go to top <span className={styles.arrow}>↑</span>
                    </button>
                </div>
            </AnimationWrapper>
        </footer>
    );
};

export default Footer;
