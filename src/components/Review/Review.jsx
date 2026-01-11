import React, { useState } from "react";
import styles from "./Review.module.css";

const reviewsData = {
    products: [
        {
            id: 1,
            author: "Amith Krishna",
            lab: "24/42 Labs",
            text: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 2,
            author: "Amith Krishna",
            lab: "24/42 Labs",
            text: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 3,
            author: "Amith Krishna",
            lab: "24/42 Labs",
            text: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 4,
            author: "Amith Krishna",
            lab: "24/42 Labs",
            text: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 5,
            author: "Amith Krishna",
            lab: "24/42 Labs",
            text: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
    ],
    services: [
        {
            id: 1,
            author: "Amith Krishna",
            lab: "24/42 Labs",
            text: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 2,
            author: "Amith Krishna",
            lab: "24/42 Labs",
            text: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        // Add more service reviews if needed
    ],
};

const Review = () => {
    const [activeTab, setActiveTab] = useState("products");

    return (
        <section className={styles.reviewSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    What <span className={styles.highlight}>people says</span> about us
                </h2>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tabBtn} ${activeTab === "products" ? styles.active : ""}`}
                        onClick={() => setActiveTab("products")}
                    >
                        Products
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === "services" ? styles.active : ""}`}
                        onClick={() => setActiveTab("services")}
                    >
                        Services
                    </button>
                </div>

                <div className={styles.grid}>
                    {reviewsData[activeTab].map((review) => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatarPlaceholder}></div>
                                <div className={styles.authorInfo}>
                                    <span className={styles.labName}>{review.lab}</span>
                                    <h4 className={styles.authorName}>{review.author}</h4>
                                </div>
                            </div>
                            <p className={styles.reviewText}>{review.text}</p>
                        </div>
                    ))}

                    {/* Contact Card */}
                    <div className={styles.contactCard}>
                        <div className={styles.contactContent}>
                            <span className={styles.contactSubtitle}>Yourself</span>
                            <h3 className={styles.contactTitle}>
                                Be the next person who appreciates our services
                            </h3>
                            <button className={styles.contactBtn}>
                                CONTACT <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
