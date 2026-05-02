import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "../../assets/hero_slide_1.png";
import hero2 from "../../assets/hero_slide_2.png";
import hero3 from "../../assets/hero_slide_3.png";
import styles from "./Hero.module.css";

const heroSlides = [
  {
    title: "End to End Solutions for",
    highlight: "Analytical & Laboratory",
    subtitle: "Instruments",
    description: "Sales, service, maintenance, spares, accessories, and consumables, delivered with technical expertise and prompt support.",
    image: hero1,
  },
  {
    title: "Precision & Accuracy in",
    highlight: "Chromatography Systems",
    subtitle: "Solutions",
    description: "High-performance GC, GC-MS, and UV-Vis systems designed for the most demanding research and industrial requirements.",
    image: hero2,
  },
  {
    title: "Reliable Support for",
    highlight: "Scientific Excellence",
    subtitle: "Across India",
    description: "Deep technical expertise and comprehensive service contracts to keep your laboratory running at peak performance.",
    image: hero3,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const currentSlide = heroSlides[current];

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
            {currentSlide.title} <br />
            <span className={styles.highlight}>{currentSlide.highlight}</span>{" "}
            {currentSlide.subtitle}
            <span className={styles.cursor}>|</span>
          </h1>
        </div>

        {/* Middle Section: Image + Side Projects */}
        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <img
              src={currentSlide.image}
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
              <h3 className={styles.cardTitle}>Dr. Rajesh Iyer</h3>
              <p className={styles.cardText}>
                "The Shimadzu systems from Techlab are pivotal for our research. Their technical expertise is unmatched."
              </p>
            </div>
            <div className={styles.projectCard}>
              <span className={styles.cardTag}>Research Lead</span>
              <h3 className={styles.cardTitle}>IIT Madras</h3>
              <p className={styles.cardText}>
                Techlab supports labs and industries that depend on accuracy, consistency, and timely support.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Description + Buttons */}
        <div className={styles.footerSection}>
          <p className={styles.description}>{currentSlide.description}</p>
          <div className={styles.buttons}>
            <button
              className={styles.primaryBtn}
              onClick={() => navigate("/services")}
            >
              View services <span className={styles.arrow}>→</span>
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => navigate("/contact")}
            >
              Talk to an Expert <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
