import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

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
        { name: "GC-MS (QP2010 Ultra)", path: "/product/01" },
        { name: "Gas Chromatograph (GC)", path: "/product/02" },
        { name: "GC-2010 Plus", path: "/product/03" },
        { name: "GC with AOC 20i", path: "/product/04" },
        { name: "HS-20 Autosampler", path: "/product/08" },
        { name: "UV-Visible Spectro", path: "/product/15" },
        { name: "View All Products →", path: "/products" },
    ];

    const serviceLinks = [
        { name: "AMC Service Contracts", path: "/services" },
        { name: "CMC Service Contracts", path: "/services" },
        { name: "Onetime Service Visit", path: "/services" },
        { name: "Inspection & Calibration", path: "/services" },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section: Logo */}
                <div className={styles.topSection}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoIcon}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={styles.logoText}>
                            <span className={styles.companyName}>Techlab</span>
                            <span className={styles.companySub}>Scientific Solutions</span>
                        </div>
                    </div>
                </div>

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
                                <p className={styles.phone}>+91 - 7411723668</p>
                                <p className={styles.email}>techlab.tss@gamil.com</p>
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
            </div>
        </footer>
    );
};

export default Footer;
