// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2025 Country Advisor</p>
      <p>
        Developed by{" "}
        <a
          href="https://techverrasolutions.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Techverra Solutions Pvt. Ltd.</strong>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
