import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";
import AnimationWrapper from "../AnimationWrapper";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const exploreLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" },
    ];

    const productLinks = [
        {
            name: "Gas Chromatograph System",
            path: "/products",
            subItems: [
                { name: "A) Manual Injection", path: "/product/02" },
                { name: "B) Auto Injection (With Auto Injector / Auto Sampler)", path: "/product/04" }
            ]
        },
        { name: "Gas Chromatograph System with Headspace Sampler", path: "/product/14" },
        { name: "Gas Chromatograph Mass Spectrometer", path: "/product/01" },
        { name: "UV Visible Spectrophotometer", path: "/product/15" },
        { name: "HPLC Systems", path: "/products" }
    ];

    const serviceLinks = [
        { name: "AMC Service Contracts", path: "/services" },
        { name: "CMC Service Contracts", path: "/services" },
        { name: "Onetime Service Visit", path: "/services" },
        { name: "Inspection & Calibration", path: "/services" },
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
                                        <Link to={link.path} className={styles.link}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>PRODUCTS</h4>
                            <ul className={styles.linkList}>
                                {productLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path} className={styles.link}>{link.name}</Link>
                                        {link.subItems && (
                                            <ul className={styles.subLinkList}>
                                                {link.subItems.map((sub, sIndex) => (
                                                    <li key={sIndex}>
                                                        <Link to={sub.path} className={styles.subLink}>{sub.name}</Link>
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
                                        <Link to={link.path} className={styles.link}>{link.name}</Link>
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
