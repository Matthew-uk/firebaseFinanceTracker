import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ navBtn, handleMobileMenu }) {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>Zeus Exchange</h2>
      </div>
      <div data-visible={navBtn} className="nav-links">
        <ul>
          <li>Home</li>
          <li>Trends</li>
          <li>Get Started</li>
          <li>Explore</li>
          <li>Partners</li>
          <li>FAQs</li>
          <li>Mining</li>
          <li>Our Reviews</li>
        </ul>
      </div>
      <div className="wallet">
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
        <div
          onClick={handleMobileMenu}
          className="mobile-menu"
          data-visible={navBtn}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
