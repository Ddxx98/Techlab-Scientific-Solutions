"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const hero1 = "/assets/hero_slide_1.png";
const hero2 = "/assets/hero_slide_2.png";
const hero3 = "/assets/hero_slide_3.png";
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
  const router = useRouter();

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
          <motion.h1 
            key={current}
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {currentSlide.title}
            </motion.span>
             <br />
            <motion.span 
              className={styles.highlight}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {currentSlide.highlight}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {currentSlide.subtitle}
            </motion.span>
            <span className={styles.cursor}>|</span>
          </motion.h1>
        </div>

        {/* Middle Section: Image + Side Projects */}
        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={currentSlide.image}
                alt="Hero Slide"
                className={styles.heroImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
            <div className={styles.controls}>
              <button onClick={prevSlide} className={styles.controlBtn}>←</button>
              <button onClick={nextSlide} className={styles.controlBtn}>→</button>
            </div>
          </div>

        </div>

        {/* Bottom Section: Description + Buttons */}
        <div className={styles.footerSection}>
          <motion.p 
            key={current + "desc"}
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {currentSlide.description}
          </motion.p>
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              className={styles.primaryBtn}
              onClick={() => router.push("/services")}
            >
              View services <span className={styles.arrow}>→</span>
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => router.push("/contact")}
            >
              Talk to an Expert <span className={styles.arrow}>→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
