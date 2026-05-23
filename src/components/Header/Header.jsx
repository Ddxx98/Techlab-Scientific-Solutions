import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png"; // replace with your logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Techlab Scientific Solutions" />
          <span>Techlab Scientific Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {link.name}
            </NavLink>
          ))}
          <button
            className={styles.contactBtn}
            onClick={() => navigate("/contact")}
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
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <button onClick={() => navigate("/contact")} className={styles.mobileContactBtn}>
            CONTACT <span>→</span>
          </button>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
