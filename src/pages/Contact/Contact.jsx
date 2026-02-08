import React, { useState } from "react";
import styles from "./Contact.module.css";
import ContactImg from "../../assets/Contact.png"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        contactingFor: {
            products: false,
            services: true,
            sparePart: false,
            somethingElse: false,
        },
        message: "",
        consent: true,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === "consent") {
            setFormData((prev) => ({ ...prev, consent: checked }));
        } else {
            setFormData((prev) => ({
                ...prev,
                contactingFor: { ...prev.contactingFor, [name]: checked },
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add submission logic here
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Contact Us</h1>

                <div className={styles.contentWrapper}>
                    {/* Left Side: Form */}
                    <div className={styles.formSection}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">NAME *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="|"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="phone">PHONE NUMBER *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Type Here"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email">EMAIL *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Type Here"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="location">YOUR LOCATION *</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="Type Here"
                                    required
                                />
                            </div>

                            <div className={styles.checkboxGroup}>
                                <label>CONTACTING FOR *</label>
                                <div className={styles.checkboxOptions}>
                                    <label className={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            name="products"
                                            checked={formData.contactingFor.products}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className={styles.checkmark}></span>
                                        Products
                                    </label>
                                    <label className={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            name="services"
                                            checked={formData.contactingFor.services}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className={styles.checkmark}></span>
                                        Services
                                    </label>
                                    <label className={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            name="sparePart"
                                            checked={formData.contactingFor.sparePart}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className={styles.checkmark}></span>
                                        Spare part
                                    </label>
                                    <label className={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            name="somethingElse"
                                            checked={formData.contactingFor.somethingElse}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className={styles.checkmark}></span>
                                        Something Else
                                    </label>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">SAY SOMETHING</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Type Here"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className={styles.consentGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span className={styles.consentText}>
                                        I agree with Techlab scientific solutions using the information that I
                                        provided here to contact me
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                SUBMIT <span className={styles.arrow}>→</span>
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Illustration */}
                    <div className={styles.illustrationSection}>
                        <div className={styles.illustrationContent}>
                            <h2 className={styles.illustrationTitle}>
                                Our team will reach you out within next 48 hours as you click on the
                                submit button
                            </h2>
                            <div className={styles.imageWrapper}>
                                {/* Placeholder for the illustration - User can replace src later */}
                                <img
                                    src={ContactImg}
                                    alt="Contact Illustration"
                                    className={styles.illustrationImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Address Section */}
                <div className={styles.addressSection}>
                    <h3 className={styles.addressTitle}>BANGALORE</h3>
                    <div className={styles.addressDetails}>
                        <div className={styles.addressItem}>
                            <span className={styles.icon}>💼</span>
                            <p>
                                Building no. 57, Government press layout, Mallathahalli, <br />
                                Ullal main road, Bengaluru, Karnataka, India - 560 056.
                            </p>
                        </div>
                        <div className={styles.links}>
                            <a href="#" className={styles.actionLink}>Copy Address</a>
                            <a href="#" className={styles.actionLink}>Google Maps ↗</a>
                        </div>

                        <div className={styles.contactRow}>
                            <span className={styles.icon}>✉️</span>
                            <a href="mailto:techlab.tss@gamil.com" className={styles.contactLink}>techlab.tss@gamil.com</a>
                            <a href="#" className={styles.copyLink}>Copy Email</a>
                        </div>

                        <div className={styles.contactRow}>
                            <span className={styles.icon}>📱</span>
                            <a href="tel:+917411723668" className={styles.contactLink}>+91 - 7411723668</a>
                            <a href="#" className={styles.copyLink}>Copy Phone Number</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;