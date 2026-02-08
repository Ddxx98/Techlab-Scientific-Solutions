import React from "react";
import styles from "./DetailsBar.module.css";

const DetailsBar = ({ stats }) => {
    const defaultStats = [
        { value: "100+", label: "Satisfied clients" },
        { value: "40+", label: "Products" },
        { value: "4", label: "Different industries served" },
        { value: "300+", label: "Cities Covered" },
        { value: "24%", label: "YOY Sales growth" },
    ];

    const displayStats = stats || defaultStats;

    return (
        <section className={styles.detailsBar}>
            <div className={styles.container}>
                <div className={styles.statsWrapper}>
                    {displayStats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <h2 className={styles.value}>{stat.value}</h2>
                            <p className={styles.label}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailsBar;
