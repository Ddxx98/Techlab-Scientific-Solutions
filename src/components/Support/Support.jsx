import React from "react";
import Link from "next/link";
import styles from "./Support.module.css";
import AnimationWrapper from "../AnimationWrapper";

const SupportImage = "/assets/support1.webp";

const Support = () => {
    return (
        <section className={styles.supportSection}>
            <div className={styles.container}>
                <AnimationWrapper type="scale">
                    <div className={styles.dashedBox}>
                        <div className={styles.gradientBg}></div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>
                                Need Technical Support or Product Information ?
                            </h2>
                            <p className={styles.description}>
                                Our team is ready to assist you with instrument queries, service requests, or product selection guidance.
                            </p>
                            <Link href="/contact" className={styles.contactBtn}>
                                CONTACT <span className={styles.arrow}>→</span>
                            </Link>
                        </div>
                        <AnimationWrapper type="fade-left" delay={0.3} className={styles.image}>
                            <img src={SupportImage} alt="Support" width="500" height="500" />
                        </AnimationWrapper>
                    </div>
                </AnimationWrapper>
            </div>
        </section>
    );
};

export default Support;
