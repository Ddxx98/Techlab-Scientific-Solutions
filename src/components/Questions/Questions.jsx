import React, { useState } from "react";
import styles from "./Questions.module.css";

const faqData = {
    general: [
        {
            id: 1,
            question: "What is Technical Scientific Solutions ?",
            answer: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 2,
            question: "What is Technical Scientific Solutions ?",
            answer: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 3,
            question: "What is Technical Scientific Solutions ?",
            answer: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 4,
            question: "What is Technical Scientific Solutions ?",
            answer: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 5,
            question: "What is Technical Scientific Solutions ?",
            answer: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
        {
            id: 6,
            question: "What is Technical Scientific Solutions ?",
            answer: "Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions. We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.",
        },
    ],
    products: [
        {
            id: 1,
            question: "What products do you offer ?",
            answer: "We offer a wide range of analytical instruments, laboratory equipment, and consumables tailored for various scientific applications.",
        },
        // Add more product FAQs
    ],
    services: [
        {
            id: 1,
            question: "What services do you provide ?",
            answer: "Our services include instrument installation, preventive maintenance, on-site repairs, and technical support for all our products.",
        },
        // Add more service FAQs
    ],
};

const Questions = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [openItems, setOpenItems] = useState([1]); // Default first item open

    const toggleItem = (id) => {
        if (openItems.includes(id)) {
            setOpenItems(openItems.filter((item) => item !== id));
        } else {
            setOpenItems([...openItems, id]);
        }
    };

    const expandAll = () => {
        const allIds = faqData[activeTab].map((item) => item.id);
        setOpenItems(allIds);
    };

    const collapseAll = () => {
        setOpenItems([]);
    };

    const isAllExpanded = openItems.length === faqData[activeTab].length;

    return (
        <section className={styles.questionsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>
                            Frequently <br />
                            Asked <br />
                            Questions <span className={styles.highlight}>?</span>
                        </h2>
                    </div>
                    <div className={styles.watermark}>Q</div>
                </div>

                <div className={styles.controls}>
                    <div className={styles.tabs}>
                        {["general", "products", "services"].map((tab) => (
                            <button
                                key={tab}
                                className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setOpenItems([1]); // Reset to first item open on tab change
                                }}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    <button
                        className={styles.expandBtn}
                        onClick={isAllExpanded ? collapseAll : expandAll}
                    >
                        {isAllExpanded ? "Collapse All -" : "Expand All +"}
                    </button>
                </div>

                <div className={styles.faqList}>
                    {faqData[activeTab].map((item) => (
                        <div
                            key={item.id}
                            className={`${styles.faqItem} ${openItems.includes(item.id) ? styles.open : ""}`}
                        >
                            <button
                                className={styles.questionBtn}
                                onClick={() => toggleItem(item.id)}
                            >
                                <span className={styles.questionText}>{item.question}</span>
                                <span className={styles.icon}>
                                    {openItems.includes(item.id) ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            <div className={styles.answerWrapper}>
                                <div className={styles.answerContent}>
                                    <p className={styles.answerText}>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Questions;
