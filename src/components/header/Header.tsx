"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to close the menu on large screens
  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 768) {
        // Change this value to your desired breakpoint
        setIsMenuOpen(false);
      }
    };

    // Call the function on initial render
    closeMenuOnDesktop();

    // Attach resize event listener to update menu state
    window.addEventListener("resize", closeMenuOnDesktop);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", closeMenuOnDesktop);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="nav_content">
          <div className="logo">
            <Link href="/">
              <p>Logo</p>
            </Link>
          </div>

          <div className="toggle_btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>

          <nav className={`menudrop ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="/">Acceuil</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">PortFolio</Link>
              </li>
              <li>
                <Link href="/apropos">A Propos</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div
            className={`dropdown_menu menu_display ${isMenuOpen ? "open" : ""}`}
          >
            <ul>
              <li>
                <Link href="/">Acceuil</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">PortFolio</Link>
              </li>
              <li>
                <Link href="/apropos">A Propos</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
