import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.aboutPage}>
            {/* Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.container}>
                    <div className={styles.headerContent}>
                        <h1 className={styles.pageTitle}>About Us</h1>
                        <p className={styles.tagline}>
                            Practical solutions for lab instruments, without unnecessary complexity
                        </p>
                    </div>
                </div>
            </section>

            {/* Principle Hero Section */}
            <section className={styles.principleHero}>
                <div className={styles.heroOverlay}>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <h2 className={styles.heroTitle}>One Principle</h2>
                            <p className={styles.heroText}>
                                Our principle is simple to make sure your instruments work the way they should, when you need them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className={styles.container}>
                {/* Who We Are */}
                <section className={styles.contentSection}>
                    <div className={styles.sectionTitle}>
                        <h3>Who we are</h3>
                    </div>
                    <div className={styles.sectionBody}>
                        <p>
                            Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.
                        </p>
                    </div>
                </section>

                {/* What We Do */}
                <section className={styles.contentSection}>
                    <div className={styles.sectionTitle}>
                        <h3>What We Do</h3>
                    </div>
                    <div className={styles.sectionBody}>
                        <p>
                            We provide sales and service support for analytical instruments, along with spares, accessories, and consumables required for everyday lab operations.
                        </p>
                        <p>
                            From helping you choose the right equipment to maintaining it over time, we stay involved beyond just the sale.
                        </p>
                    </div>
                </section>

                {/* How We Work */}
                <section className={styles.contentSection}>
                    <div className={styles.sectionTitle}>
                        <h3>How We Work</h3>
                    </div>
                    <div className={styles.sectionBody}>
                        <p>
                            We believe good service starts with understanding the problem clearly. We listen, inspect, and suggest only what is required.
                        </p>
                        <div className={styles.approachList}>
                            <p>Our approach is:</p>
                            <ul>
                                <li>Clear communication</li>
                                <li>Practical solutions</li>
                                <li>Honest timelines</li>
                                <li>Reliable follow up</li>
                            </ul>
                        </div>
                        <p className={styles.motto}>No over-selling. No unnecessary steps.</p>
                    </div>
                </section>

                {/* Why Clients Choose Us */}
                <section className={styles.contentSection}>
                    <div className={styles.sectionTitle}>
                        <h3>Why Clients Choose Us</h3>
                    </div>
                    <div className={styles.sectionBody}>
                        <p>
                            Laboratories trust us because we focus on long-term reliability, not quick fixes.
                        </p>
                        <ul className={styles.benefitsList}>
                            <li>Prompt service support</li>
                            <li>Technical understanding of instruments</li>
                            <li>Genuine and compatible spares</li>
                            <li>Local presence with faster response</li>
                        </ul>
                        <p className={styles.emphasis}>
                            We treat every instrument as critical to your work , because it is.
                        </p>
                    </div>
                </section>

                {/* Our Commitment */}
                <section className={styles.contentSection}>
                    <div className={styles.sectionTitle}>
                        <h3>Our Commitment</h3>
                    </div>
                    <div className={styles.sectionBody}>
                        <p>
                            When a lab instrument is down, work stops. We understand that urgency.
                        </p>
                        <p>
                            Our commitment is to help you get back to work quickly, safely, and confidently, whether it's a service call, a spare requirement, or a new purchase.
                        </p>
                    </div>
                </section>

                {/* Let's Work Together */}
                <section className={styles.contentSection}>
                    <div className={styles.sectionTitle}>
                        <h3>Let's Work Together</h3>
                    </div>
                    <div className={styles.sectionBody}>
                        <p>
                            If you are looking for service support, repairs, spare parts, or are planning to purchase analytical instruments, we're here to help.
                        </p>
                        <p>Get in touch with us to discuss your requirement.</p>
                        <button
                            className={styles.contactBtn}
                            onClick={() => navigate("/contact")}
                        >
                            CONTACT <span className={styles.arrow}>→</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;