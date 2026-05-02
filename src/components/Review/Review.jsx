import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Review.module.css";
import male from "../../assets/male.png";
import female from "../../assets/female.png";

const reviewsData = {
    products: [
        {
            id: 1,
            author: "Dr. Rajesh Iyer",
            lab: "IIT Madras - Research Lead",
            text: "The Shimadzu GC-MS systems provided by Techlab have been pivotal for our pharmaceutical research. Their technical expertise and the instrument's sensitivity are unmatched in the industry.",
            image: male,
        },
        {
            id: 2,
            author: "Sneha Kulkarni",
            lab: "QC Manager, Pharma Solutions",
            text: "We've been using the GC-2010 Plus for over a year now. The reproducibility we get for our routine analysis is exceptional. Techlab's selection of instruments really meets global standards.",
            image: female,
        },
        {
            id: 3,
            author: "Dr. Arun Verma",
            lab: "CSIR - Senior Scientist",
            text: "The HS-20 Headspace Autosampler has significantly improved our throughput for volatile organic analysis. Highly recommend Techlab for their reliable scientific solutions.",
            image: male,
        },
        {
            id: 4,
            author: "Priya Sharma",
            lab: "University Research Scholar",
            text: "Beyond the high-quality instruments, the LabSolutions software support provided by Techlab made our research workflow much more efficient. Truly a dependable partner.",
            image: female,
        },
        {
            id: 5,
            author: "Dr. Sandeep Gupta",
            lab: "Food Safety Laboratory",
            text: "Reliable equipment is critical for food safety testing. Techlab ensures we have the best UV-Vis and Chromatography setups with consistent performance.",
            image: male,
        },
    ],
    services: [
        {
            id: 1,
            author: "Vikram Singh",
            lab: "Lab In-charge, Industrial Chemicals",
            text: "Their AMC service is fantastic. The engineers are prompt, well-versed with Shimadzu systems, and always ensure our instruments are in peak condition before every audit.",
            image: male,
        },
        {
            id: 2,
            author: "Dr. Meera Nair",
            lab: "Clinical Research Institute",
            text: "Our CMC contract with Techlab has given us complete peace of mind. We haven't had a single day of downtime in the last 14 months thanks to their preventive maintenance.",
            image: female,
        }
    ],
};

const Review = ({ isDark = true }) => {
    const [activeTab, setActiveTab] = useState("products");
    const navigate = useNavigate();

    const themeClass = isDark ? "" : styles.lightTheme;

    return (
        <section className={`${styles.reviewSection} ${themeClass}`}>
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
                                <div className={styles.avatarPlaceholder}><img src={review.image} alt="" /></div>
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
                            <button
                                className={styles.contactBtn}
                                onClick={() => navigate("/contact")}
                            >
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
