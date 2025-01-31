import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when resizing to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false); // Close menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="container">
        {/* Logo */}
        <img src="src/assets/logo.png" alt="Logo" className="h-8" />
        <h1>João</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="navbar">
        <a href="/" className="text-gray-400 hover:text-white">
          <span className="text-green-500">//</span>home
        </a>
        <a href="/projects" className="text-gray-400 hover:text-white">
          <span className="text-green-500">//</span>projects
        </a>
        <a href="/about-me" className="text-gray-400 hover:text-white">
          <span className="text-green-500">//</span>about-me
        </a>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`ham-menu ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`nav ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <a href="/" className="block text-gray-300 hover:text-white mb-4">
          <span className="text-green-500">//</span>home
        </a>
        <a href="/projects" className="block text-gray-300 hover:text-white mb-4">
          <span className="text-green-500">//</span>projects
        </a>
        <a href="/about-me" className="block text-gray-300 hover:text-white">
          <span className="text-green-500">//</span>about-me
        </a>
      </nav>
    </header>
  );
};

export default Header;
