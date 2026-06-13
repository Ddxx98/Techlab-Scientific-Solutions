"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

const logo = "/assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src={logo} alt="Techlab Scientific Solutions" width="144" height="88" />
          <span>Techlab Scientific Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={isActive ? styles.active : ""}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            className={styles.contactBtn}
            onClick={() => router.push("/contact")}
          >
            CONTACT <span>→</span>
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={isActive ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <button onClick={() => { router.push("/contact"); setMenuOpen(false); }} className={styles.mobileContactBtn}>
            CONTACT <span>→</span>
          </button>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
