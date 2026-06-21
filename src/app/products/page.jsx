"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./Products.module.css";
import AnimationWrapper from "../../components/AnimationWrapper";
import { AnimatePresence } from "framer-motion";
import { productsList, categories } from "../../data/products";

function ProductsContent() {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const categoryQuery = searchParams.get("category");
        if (categoryQuery) {
            const matchedCategory = categories.find(
                c => c.toLowerCase() === decodeURIComponent(categoryQuery).toLowerCase()
            );
            if (matchedCategory) {
                setActiveCategory(matchedCategory);
            }
        } else {
            setActiveCategory("All");
        }
    }, [searchParams]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        const url = new URL(window.location.href);
        if (category === "All") {
            url.searchParams.delete("category");
        } else {
            url.searchParams.set("category", category);
        }
        window.history.pushState({}, "", url.pathname + url.search);
    };

    const productsData = productsList;

    const filteredProducts = activeCategory === "All"
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    return (
        <div className={styles.productsPage}>
            <div className={styles.container}>
                <AnimationWrapper type="fade-down">
                    <h1 className={styles.pageTitle}>Products</h1>
                </AnimationWrapper>

                {/* Level 1 Filter: Categories */}
                <div className={styles.categoryFilter}>
                    {categories.map((category, index) => (
                        <AnimationWrapper 
                            key={category} 
                            type="fade-up" 
                            delay={index * 0.05}
                        >
                            <button
                                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ""
                                    }`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        </AnimationWrapper>
                    ))}
                </div>

                <div className={styles.productFilterWrapper}>
                    <div className={styles.counter}>
                        Showing {filteredProducts.length} of {productsData.length} products
                    </div>
                </div>

                {/* Product List */}
                <div className={styles.productList}>
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((product, index) => (
                            <AnimationWrapper 
                                key={`${activeCategory}-${product.id}`} 
                                type="fade-up" 
                                delay={(index % 6) * 0.05}
                            >
                                <div className={styles.productCard}>
                                    {/* Improved Image Container */}
                                    <div className={styles.imageContainer}>
                                        <img src={product.image} alt={product.name} className={styles.productImage} />
                                    </div>

                                    {/* Product Details */}
                                    <div className={styles.productDetails}>
                                        <div className={styles.topInfo}>
                                            <h2 className={styles.productName}>{product.name}</h2>
                                            <p className={styles.productDescription}>
                                                {product.description}
                                            </p>

                                            {/* Modern Attributes List instead of table */}
                                            {Object.keys(product.attributes).length > 0 && (
                                                <div className={styles.attributesList}>
                                                    {Object.entries(product.attributes).map(([key, value]) => (
                                                        <div key={key} className={styles.attributeItem}>
                                                            <span className={styles.attributeLabel}>{key}</span>
                                                            <span className={styles.attributeValue}>{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.btnWrapper}>
                                            <Link href={`/product/${product.id}`} className={styles.contactLink}>
                                                VIEW DETAILS →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimationWrapper>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading Products...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
