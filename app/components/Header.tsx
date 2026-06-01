"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightPage, setLightPage] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setLightPage(path === "/about-us" || path === "/contact-us");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""} ${lightPage ? "light-page" : ""}`}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="/Logoo.png" alt="Software Elits" className="home-logo" />
          </a>
          <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                <div className="dropdown-menu dropdown-services">
                  <a className="dropdown-item" href="/website">Website Development</a>
                  <a className="dropdown-item" href="/logo">Logo Design</a>
                  <a className="dropdown-item" href="/ecommerce">Ecommerce Solutions</a>
                  <a className="dropdown-item" href="/animation">Video Animation</a>
                  <a className="dropdown-item" href="/illustration">Illustration</a>
                  <a className="dropdown-item" href="/marketing-collateral">Marketing Collateral</a>
                  <a className="dropdown-item" href="/digital-marketing">Digital Marketing</a>
                  <a className="dropdown-item" href="/creative-copywriting">Creative Copywriting</a>
                  <a className="dropdown-item" href="/mobile-app">Mobile Apps</a>
                  <a className="dropdown-item" href="/seo">SEO Services</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/combo-package">Combo Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact Us</a>
              </li>
              <li className="nav-item header-phone-item">
                <a className="nav-link phone-link" href="tel:+15106715343"><i className="fas fa-phone-alt"></i> +1 (510) 671-5343</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
