import React, { useState } from "react";
import styles from "./Contact.module.css";
import SEO from "../../components/SEO/SEO";
import ContactImg from "../../assets/contact.png"

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
        consent: true
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        if (!formData.consent) newErrors.consent = "You must agree to be contacted";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleCheckboxChange = (option) => {
        setFormData((prev) => ({
            ...prev,
            contactingFor: {
                ...prev.contactingFor,
                [option]: !prev.contactingFor[option]
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus({ submitting: true, submitted: false, error: null });

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatus({ submitting: false, submitted: true, error: null });
            setFormData({
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
                consent: true
            });
            setErrors({});
        } catch (err) {
            setStatus({ submitting: false, submitted: false, error: "Something went wrong. Please try again later." });
        }
    };

    return (
        <div className={styles.contactPage}>
            <SEO
                title="Contact Us"
                description="Get in touch with Techlab Scientific Solutions for any inquiries regarding laboratory equipment, services, or support."
            />
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Contact Us</h1>

                <div className={styles.contentWrapper}>
                    {/* Left Side: Form */}
                    <div className={styles.formSection}>
                        <form className={styles.form} onSubmit={handleSubmit} noValidate>
                            {status.submitted && (
                                <div className={styles.successMessage} role="alert">
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}
                            {status.error && (
                                <div className={styles.errorMessage} role="alert">
                                    {status.error}
                                </div>
                            )}

                            <div className={styles.inputGroup}>
                                <label htmlFor="name">NAME <span>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    aria-invalid={errors.name ? "true" : "false"}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && <span id="name-error" className={styles.errorText}>{errors.name}</span>}
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="phone">PHONE NUMBER</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+91 - 0000000000"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email">EMAIL <span>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="username@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    aria-invalid={errors.email ? "true" : "false"}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && <span id="email-error" className={styles.errorText}>{errors.email}</span>}
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="location">LOCATION</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder="Your City/Location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={styles.checkboxGroup}>
                                <label>CONTACTING FOR</label>
                                <div className={styles.checkboxOptions} role="group" aria-label="Contact options">
                                    {Object.keys(formData.contactingFor).map((option) => (
                                        <label key={option} className={styles.checkboxLabel}>
                                            <input
                                                type="checkbox"
                                                checked={formData.contactingFor[option]}
                                                onChange={() => handleCheckboxChange(option)}
                                            />
                                            <span className={styles.checkmark}></span>
                                            {option.charAt(0).toUpperCase() + option.slice(1).replace(/([A-Z])/g, ' $1')}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">YOUR MESSAGE <span>*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    aria-invalid={errors.message ? "true" : "false"}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                ></textarea>
                                {errors.message && <span id="message-error" className={styles.errorText}>{errors.message}</span>}
                            </div>

                            <div className={styles.consentGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={formData.consent}
                                        onChange={() => setFormData(prev => ({ ...prev, consent: !prev.consent }))}
                                        aria-invalid={errors.consent ? "true" : "false"}
                                        aria-describedby={errors.consent ? "consent-error" : undefined}
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span className={styles.consentText}>
                                        I agree to the processing of my personal data for the purpose of contacting me.
                                    </span>
                                </label>
                                {errors.consent && <span id="consent-error" className={styles.errorText}>{errors.consent}</span>}
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status.submitting}
                                aria-busy={status.submitting}
                            >
                                {status.submitting ? "SENDING..." : "SUBMIT"}
                                {!status.submitting && <span className={styles.arrow} aria-hidden="true">→</span>}
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Illustration & Text */}
                    <div className={styles.illustrationSection}>
                        <h2 className={styles.illustrationTitle}>
                            Our team will reach you out within next 48 hours as you click on the
                            submit button
                        </h2>
                        <div className={styles.imageWrapper}>
                            <img
                                src={ContactImg}
                                alt="Contact Illustration"
                                className={styles.illustrationImage}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Address Section */}
                <div className={styles.addressSection} aria-labelledby="bangalore-office">
                    <h3 id="bangalore-office" className={styles.addressTitle}>BANGALORE</h3>
                    <div className={styles.addressList}>
                        <div className={styles.addressRow}>
                            <span className={styles.icon} aria-hidden="true">💼</span>
                            <div className={styles.addressContent}>
                                <p>
                                    Building no. 57, Government press layout, Mallathahalli, <br />
                                    Ullal main road, Bengaluru, Karnataka, India - 560 056.
                                </p>
                                <div className={styles.linkGroup}>
                                    <button className={styles.inlineLink} onClick={() => navigator.clipboard.writeText("Building no. 57, Government press layout, Mallathahalli, Ullal main road, Bengaluru, Karnataka, India - 560 056.")} aria-label="Copy office address">Copy Address</button>
                                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>Google Maps ↗</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contactRow}>
                            <span className={styles.icon} aria-hidden="true">✉️</span>
                            <p className={styles.contactInfo}>
                                techlab.tss@gamil.com <button className={styles.inlineLink} onClick={() => navigator.clipboard.writeText("techlab.tss@gamil.com")} aria-label="Copy email address">Copy Email</button>
                            </p>
                        </div>

                        <div className={styles.contactRow}>
                            <span className={styles.icon} aria-hidden="true">📱</span>
                            <p className={styles.contactInfo}>
                                +91 - 7411723668 <button className={styles.inlineLink} onClick={() => navigator.clipboard.writeText("+917411723668")} aria-label="Copy phone number">Copy Phone Number</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;