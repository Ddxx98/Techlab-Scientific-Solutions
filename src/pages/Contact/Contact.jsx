import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import SEO from "../../components/SEO/SEO";
import ContactImg from "../../assets/contact.png";
import AnimationWrapper from "../../components/AnimationWrapper";

// EmailJS Configuration - You can replace these with your actual IDs from the EmailJS dashboard
const EMAILJS_SERVICE_ID = "service_06nvgci"; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "template_l557hy3"; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "JxblGGRwCnaMoTIuK"; // Replace with your Public Key

// Google Sheets Configuration - Paste your Google Web App URL here after deploying the Apps Script
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz7JktKTuA_2AbGe_iNCXBE-sMVC0lWVfSTGg88CCe83-9_CBxLATjXCGqpRfs5BTthQA/exec"; 
const deployment_id = "AKfycbz7JktKTuA_2AbGe_iNCXBE-sMVC0lWVfSTGg88CCe83-9_CBxLATjXCGqpRfs5BTthQA";

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

        // Format the 'contactingFor' categories into a readable string
        const selectedCategories = Object.entries(formData.contactingFor)
            .filter(([_, checked]) => checked)
            .map(([key, _]) => key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'))
            .join(", ");

        // Prepare template parameters
        const templateParams = {
            name: formData.name,
            phone: formData.phone || "Not provided",
            email: formData.email,
            location: formData.location || "Not provided",
            contacting_for: selectedCategories,
            message: formData.message,
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            // Optional: Store leads in Google Sheets if the Web App URL is configured
            if (GOOGLE_SHEET_WEBAPP_URL) {
                fetch(GOOGLE_SHEET_WEBAPP_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(templateParams),
                }).catch((err) => console.error("Google Sheets Error:", err));
            }

            setStatus({ submitting: false, submitted: true, error: null });
            
            // Reset form
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

            // Hide success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 5000);

        } catch (err) {
            console.error("EmailJS Error:", err);
            setStatus({ 
                submitting: false, 
                submitted: false, 
                error: "Failed to send message. Please try again or contact us directly via email." 
            });
        }
    };

    return (
        <div className={styles.contactPage}>
            <SEO
                title="Contact Us"
                description="Get in touch with Techlab Scientific Solutions for any inquiries regarding laboratory equipment, services, or support."
            />
            <div className={styles.container}>
                <AnimationWrapper type="fade-down">
                    <h1 className={styles.pageTitle}>Contact Us</h1>
                </AnimationWrapper>

                <div className={styles.contentWrapper}>
                    {/* Left Side: Form */}
                    <AnimationWrapper type="fade-right" className={styles.formSection}>
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

                            {(status.submitted || status.error) && <div style={{ height: "1.5rem" }} />}

                            {status.submitted && (
                                <div className={styles.successMessage} role="alert" style={{ marginBottom: 0 }}>
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}
                            {status.error && (
                                <div className={styles.errorMessage} role="alert" style={{ marginBottom: 0 }}>
                                    {status.error}
                                </div>
                            )}
                        </form>
                    </AnimationWrapper>

                    {/* Right Side: Illustration & Text */}
                    <AnimationWrapper type="fade-left" className={styles.illustrationSection}>
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
                    </AnimationWrapper>
                </div>

                {/* Bottom Address Section */}
                <AnimationWrapper type="fade-up">
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
                                <div className={styles.contactDetails}>
                                    <a href="mailto:sales@techlabscientific.com" className={styles.detailLink}>sales@techlabscientific.com</a>
                                    <button className={styles.inlineLink} onClick={() => navigator.clipboard.writeText("sales@techlabscientific.com")} aria-label="Copy email address">Copy Email</button>
                                </div>
                            </div>

                            <div className={styles.contactRow}>
                                <span className={styles.icon} aria-hidden="true">📱</span>
                                <div className={styles.contactDetails}>
                                    <a href="tel:+917411723668" className={styles.detailLink}>+91 - 7411723668</a>
                                    <a href="tel:+917411723669" className={styles.detailLink}>+91 - 7411723669</a>
                                    <button className={styles.inlineLink} onClick={() => navigator.clipboard.writeText("+917411723668, +917411723669")} aria-label="Copy phone numbers">Copy Numbers</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationWrapper>
            </div>
        </div>
    );
};

export default Contact;