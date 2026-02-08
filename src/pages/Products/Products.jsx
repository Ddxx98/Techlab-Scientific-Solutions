import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

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
                            {activeCategory === category && (
                                <span className={styles.arrow}>▲</span>
                            )}
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
                            {/* Image Placeholder */}
                            <div className={styles.productImage}></div>

                            {/* Product Details */}
                            <div className={styles.productDetails}>
                                <div>
                                    <h2 className={styles.productName}>{product.name}</h2>
                                    <p className={styles.productDescription}>
                                        {product.description}
                                    </p>

                                    <table className={styles.attributesTable}>
                                        <tbody>
                                            {Object.entries(product.attributes).map(([key, value]) => (
                                                <tr key={key}>
                                                    <td>{key}</td>
                                                    <td>{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <Link to="/contact" className={styles.contactLink}>
                                    CONTACT
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;