import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import Header from "../../components/Header/Header";

const productsData = {
    "01": {
        name: "Product 01",
        category: "Quality control",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
        description: "High-precision analytical instrument designed for rigorous quality control environments. Features advanced sensor technology and intuitive interface.",
        specs: ["Accuracy: ±0.01%", "Range: 0-1000 units", "Interface: USB/Ethernet", "Power: 220V AC"],
    },
    "02": {
        name: "Product 02",
        category: "Quality control",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
        description: "Versatile laboratory equipment suitable for a wide range of research and testing applications. Durable construction and reliable performance.",
        specs: ["Speed: 500-5000 RPM", "Capacity: 12 x 15ml", "Timer: 1-99 min", "Noise Level: <60dB"],
    },
    // Add more products as needed
};

const ProductDetails = () => {
    const { id } = useParams();
    const product = productsData[id] || productsData["01"]; // Fallback to 01 if not found

    return (
        <div className={styles.pageWrapper}>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Link to="/" className={styles.backLink}>
                        <span className={styles.backArrow}>←</span> Back to Products
                    </Link>

                    <div className={styles.detailsGrid}>
                        <div className={styles.imageSection}>
                            <img src={product.image} alt={product.name} className={styles.mainImage} />
                        </div>

                        <div className={styles.infoSection}>
                            <span className={styles.category}>{product.category}</span>
                            <h1 className={styles.productName}>{product.name}</h1>
                            <p className={styles.description}>{product.description}</p>

                            <div className={styles.specsSection}>
                                <h3 className={styles.specsTitle}>Specifications</h3>
                                <ul className={styles.specsList}>
                                    {product.specs.map((spec, index) => (
                                        <li key={index} className={styles.specItem}>{spec}</li>
                                    ))}
                                </ul>
                            </div>

                            <button className={styles.inquiryBtn}>Request Inquiry</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;
