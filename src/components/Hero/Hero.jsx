import React, { useState } from "react";
import heroImage from "../../assets/hero.png";
import styles from "./Hero.module.css";

// Sample data (replace with your real content)
const heroSlides = [
  {
    title: "End to End Solutions for",
    highlight: "Analytical & Laboratory",
    subtitle: "Instruments",
    description:
      "Sales, service, maintenance, spares, accessories, and consumables, delivered with technical expertise and prompt support.",
    image: heroImage,
  },
  {
    title: "Reliable Support for",
    highlight: "Scientific Equipment",
    subtitle: "Across India",
    description:
      "We support laboratories with accurate, consistent, and timely scientific solutions.",
    image: heroImage,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Top Heading */}
        <div className={styles.headerSection}>
          <h1 className={styles.title}>
            {heroSlides[current].title} <br />
            <span className={styles.highlight}>{heroSlides[current].highlight}</span>{" "}
            {heroSlides[current].subtitle}
            <span className={styles.cursor}>|</span>
          </h1>
        </div>

        {/* Middle Section: Image + Side Projects */}
        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <img
              src={heroSlides[current].image}
              alt="Hero Slide"
              className={styles.heroImage}
            />
            <div className={styles.controls}>
              <button onClick={prevSlide} className={styles.controlBtn}>←</button>
              <button onClick={nextSlide} className={styles.controlBtn}>→</button>
            </div>
          </div>

          {/* Side Projects (Desktop Only) */}
          <div className={styles.sideSection}>
            <div className={styles.projectCard}>
              <span className={styles.cardTag}>24/42 Labs</span>
              <h3 className={styles.cardTitle}>Amith Krishna</h3>
              <p className={styles.cardText}>
                Techlab Scientific Solutions is a Bengaluru based company supporting laboratories with reliable scientific and analytical instrument solutions.
              </p>
            </div>
            <div className={styles.projectCard}>
              <span className={styles.cardTag}>24/42 Labs</span>
              <h3 className={styles.cardTitle}>Amith Krishna</h3>
              <p className={styles.cardText}>
                We work closely with labs, institutions, and industries that depend on accuracy, consistency, and timely support.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Description + Buttons */}
        <div className={styles.footerSection}>
          <p className={styles.description}>{heroSlides[current].description}</p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              View services <span className={styles.arrow}>→</span>
            </button>
            <button className={styles.secondaryBtn}>
              Talk to an Expert <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
