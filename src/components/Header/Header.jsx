import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png"; // replace with your logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className={styles.header}>
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
          <button className={styles.contactBtn}>
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
          <button className={styles.mobileContactBtn}>
            CONTACT →
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
