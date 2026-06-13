"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Product.module.css";
import AnimationWrapper from "../AnimationWrapper";
import { productsList } from "../../data/products";

const productsData = productsList;

const Product = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedProducts = showAll ? productsData : productsData.slice(0, 8);

    return (
        <section className={styles.productSection}>
            <div className={styles.container}>
                <AnimationWrapper type="fade-up" className={styles.header}>
                    <h2 className={styles.title}><span className={styles.highlight}>Products</span> for you</h2>
                    <p className={styles.subtitle}>
                        We work with a wide range of analytical instruments and laboratory equipment used across research, quality control, and testing environments.
                    </p>
                </AnimationWrapper>

                <div className={styles.grid}>
                    {displayedProducts.map((product, index) => (
                        <AnimationWrapper 
                            key={product.id} 
                            type="fade-up" 
                            delay={(index % 4) * 0.1}
                        >
                            <Link href={`/product/${product.id}`} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <span className={styles.arrow}>→</span>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <img src={product.image} alt={product.name} className={styles.productImage} />
                                    {/* <div className={styles.categoryBadge}>{product.category}</div> */}
                                </div>
                            </Link>
                        </AnimationWrapper>
                    ))}

                    {!showAll ? (
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreContent}>
                                <span className={styles.moreCount}>+{productsData.length - 8} more</span>
                                <button
                                    className={styles.exploreBtn}
                                    onClick={() => setShowAll(true)}
                                >
                                    Show All Products <span className={styles.exploreArrow}>→</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.exploreCard}>
                            <div className={styles.exploreContent}>
                                <span className={styles.moreCount}>Full Catalog</span>
                                <button
                                    className={styles.exploreBtn}
                                    onClick={() => setShowAll(false)}
                                >
                                    Show Less <span className={styles.exploreArrow}>↑</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Product;
