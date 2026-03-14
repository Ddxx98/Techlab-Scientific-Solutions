import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import SEO from "../../components/SEO/SEO";

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("Product type 01");
    const [activeProduct, setActiveProduct] = useState("Product 02");

    const categories = [
        "Product type 01",
        "Product type 02",
        "Product type 03",
        "Product type 04",
    ];

    const products = ["Product 01", "Product 02", "Product 03", "Product 04"];

    const productsData = [
        {
            id: 1,
            name: "Product Name",
            description:
                "A small 2 line description about a product, that captures the quick usage of offering of it for a quick glance of the viewer",
            attributes: {
                COLOUR: "Dark Blue",
                TYPE: "Traded Syntax",
                "DUMMY DATA": "Dummy Data",
                "DUMMY DATA ": "Dummy Data",
            },
        },
        {
            id: 2,
            name: "Product Name",
            description:
                "A small 2 line description about a product, that captures the quick usage of offering of it for a quick glance of the viewer",
            attributes: {
                COLOUR: "Dark Blue",
                TYPE: "Traded Syntax",
                "DUMMY DATA": "Dummy Data",
                "DUMMY DATA ": "Dummy Data",
            },
        },
        {
            id: 3,
            name: "Product Name",
            description:
                "A small 2 line description about a product, that captures the quick usage of offering of it for a quick glance of the viewer",
            attributes: {
                COLOUR: "Dark Blue",
                TYPE: "Traded Syntax",
                "DUMMY DATA": "Dummy Data",
                "DUMMY DATA ": "Dummy Data",
            },
        },
        {
            id: 4,
            name: "Product Name",
            description:
                "A small 2 line description about a product, that captures the quick usage of offering of it for a quick glance of the viewer",
            attributes: {
                COLOUR: "Dark Blue",
                TYPE: "Traded Syntax",
                "DUMMY DATA": "Dummy Data",
                "DUMMY DATA ": "Dummy Data",
            },
        },
    ];

    return (
        <div className={styles.productsPage}>
            <SEO
                title="Our Products"
                description="Browse our high-quality laboratory equipment, including analytical instruments, spares, and consumables from Techlab Scientific Solutions."
            />
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Products</h1>

                {/* Level 1 Filter: Categories */}
                <div className={styles.categoryFilter}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ""
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                            <span className={styles.arrow}>▲</span>
                        </button>
                    ))}
                </div>

                {/* Level 2 Filter: Products + Counter */}
                <div className={styles.productFilterWrapper}>
                    <div className={styles.productFilter}>
                        {products.map((product) => (
                            <button
                                key={product}
                                className={`${styles.productBtn} ${activeProduct === product ? styles.active : ""
                                    }`}
                                onClick={() => setActiveProduct(product)}
                            >
                                {product}
                            </button>
                        ))}
                    </div>
                    <div className={styles.counter}>01/04</div>
                </div>

                {/* Product List */}
                <div className={styles.productList}>
                    {productsData.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            {/* Improved Image Container */}
                            <div className={styles.imageContainer}>
                                <div className={styles.productImage}></div>
                            </div>

                            {/* Product Details */}
                            <div className={styles.productDetails}>
                                <div className={styles.topInfo}>
                                    <h2 className={styles.productName}>{product.name}</h2>
                                    <p className={styles.productDescription}>
                                        {product.description}
                                    </p>

                                    {/* Modern Attributes List instead of table */}
                                    <div className={styles.attributesList}>
                                        {Object.entries(product.attributes).map(([key, value]) => (
                                            <div key={key} className={styles.attributeItem}>
                                                <span className={styles.attributeLabel}>{key}</span>
                                                <span className={styles.attributeValue}>{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.btnWrapper}>
                                    <Link to="/contact" className={styles.contactLink}>
                                        CONTACT →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;