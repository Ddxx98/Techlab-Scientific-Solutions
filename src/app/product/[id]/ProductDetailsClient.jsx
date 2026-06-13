"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./ProductDetails.module.css";
import AnimationWrapper from "../../../components/AnimationWrapper";
import { productsMap, productsList } from "../../../data/products";

export default function ProductDetailsClient({ id }) {
    const router = useRouter();
    const product = productsMap[id] || productsList[0]; // Fallback if not found

    const [selectedImage, setSelectedImage] = useState(product.image);

    // Sync selected image if product changes
    useEffect(() => {
        setSelectedImage(product.image);
    }, [product]);

    return (
        <div className={styles.pageWrapper}>
            <main className={styles.main}>
                <div className={styles.container}>
                    <AnimationWrapper type="fade-down">
                        <Link href="/products" className={styles.backLink}>
                            <span className={styles.backArrow}>←</span> Back to Products
                        </Link>
                    </AnimationWrapper>

                    <div className={styles.detailsGrid}>
                        <AnimationWrapper type="fade-right" className={styles.imageSectionContainer}>
                            <div className={styles.imageSection}>
                                <img src={selectedImage} alt={product.name} className={styles.mainImage} />
                            </div>
                            {product.images && product.images.length > 1 && (
                                <div className={styles.thumbnailGallery}>
                                    {product.images.map((img, i) => (
                                        <button 
                                            key={i} 
                                            className={`${styles.thumbnailBtn} ${selectedImage === img ? styles.activeThumbnail : ''}`}
                                            onClick={() => setSelectedImage(img)}
                                            title={`View layout ${i + 1}`}
                                        >
                                            <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className={styles.thumbnailImg} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </AnimationWrapper>

                        <AnimationWrapper type="fade-left" className={styles.infoSection}>
                            <span className={styles.category}>{product.category}</span>
                            <h1 className={styles.productName}>{product.name}</h1>
                            <p className={styles.description}>{product.description}</p>

                            <div className={styles.specsSection}>
                                <h3 className={styles.specsTitle}>Specifications</h3>
                                <ul className={styles.specsList}>
                                    {product.specs && product.specs.map((spec, index) => (
                                        <li key={index} className={styles.specItem}>{spec}</li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={styles.inquiryBtn}
                                onClick={() => router.push("/contact")}
                            >
                                Request Inquiry
                            </button>
                        </AnimationWrapper>
                    </div>
                </div>
            </main>
        </div>
    );
}
