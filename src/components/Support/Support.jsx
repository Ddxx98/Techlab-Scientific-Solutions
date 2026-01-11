import React from "react";
import styles from "./Support.module.css";

const Support = () => {
    return (
        <section className={styles.supportSection}>
            <div className={styles.container}>
                <div className={styles.dashedBox}>
                    <div className={styles.gradientBg}></div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Need Technical Support or Product Information ?
                        </h2>
                        <p className={styles.description}>
                            Our team is ready to assist you with instrument queries, service requests, or product selection guidance.
                        </p>
                        <button className={styles.contactBtn}>
                            CONTACT <span className={styles.arrow}>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
