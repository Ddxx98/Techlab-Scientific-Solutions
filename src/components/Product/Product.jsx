import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Product.module.css";

const productsData = [
    {
        id: "01",
        name: "Product 01",
        category: "Quality control",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "02",
        name: "Product 02",
        category: "Quality control",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "03",
        name: "Product 03",
        category: "Quality control",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "04",
        name: "Product 04",
        category: "Quality control",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "05",
        name: "Product 05",
        category: "Quality control",
        image: "https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=800",
    },
];

const Product = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.productSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}><span className={styles.highlight}>Products</span> for you</h2>
                    <p className={styles.subtitle}>
                        We work with a wide range of analytical instruments and laboratory equipment used across research, quality control, and testing environments.
                    </p>
                </div>

                <div className={styles.grid}>
                    {productsData.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <span className={styles.arrow}>→</span>
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                                <div className={styles.categoryBadge}>{product.category}</div>
                            </div>
                        </Link>
                    ))}

                    <div className={styles.exploreCard}>
                        <div className={styles.exploreContent}>
                            <span className={styles.moreCount}>+20 more</span>
                            <button
                                className={styles.exploreBtn}
                                onClick={() => navigate("/products")}
                            >
                                Explore All <span className={styles.exploreArrow}>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
