import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // optional if you're adding styles separately
import { motion } from "framer-motion";


function Home() {
  return (
    <div>
      
    <div className="container fade-in home-wrapper">
      <h1 className="home-title">
        <img src="/logo192.png" alt="Logo" className="log-img" /> Welcome to Country Advisor</h1>
      
      <p className="home-description">
        Thinking of studying abroad? <strong>Country Advisor</strong> is your smart companion to compare countries, tuition fees, job prospects, PR options, and much more.
      </p>

       <div className="start-here-banner">🧭 Not sure where to begin? Try our calculator to get personalized suggestions!</div>

        <motion.section className="info-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2>🎓 Why Study Abroad?</h2>
          <ul>
            <li><strong>Global Exposure:</strong> Experience new cultures, languages, and global perspectives.</li>
            <li><strong>High-Quality Education:</strong> Learn from top universities and internationally recognized faculty.</li>
            <li><strong>Career Opportunities:</strong> Build a career in high-demand sectors worldwide.</li>
            <li><strong>PR Pathways:</strong> Many countries offer pathways to permanent residency after graduation.</li>
          </ul>
        </motion.section>

        <motion.section className="info-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2>📌 What You Can Do Here</h2>
          <ul>
            <li>🎯 Use the <strong>Country Recommendation Tool</strong> to find the best fit for your goals.</li>
            <li>📊 Compare countries based on tuition, job opportunities, cost of living, PR ease, and more.</li>
            <li>🧮 Consider your background, preferences, and financial status to make an informed decision.</li>
          </ul>
        </motion.section>

        <motion.section className="spotlights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h2>🌟 Popular Country Spotlights</h2>
          <div className="country-cards">

    <div className="country-card">
      <h3>🇨🇦 Canada</h3>
      <ul>
        <li>PR-friendly with Express Entry</li>
        <li>Tuition: CAD 18k–35k/year</li>
        <li>Living: CAD 1.2k–2k/month</li>
        <li><strong>In INR:</strong> ₹11L–21L tuition/year, ₹74k–1.2L/month living</li>
      </ul>
      <a href="/details#CA" className="spotlight-link">Explore Canada →</a>
    </div>

    <div className="country-card">
      <h3>🇦🇺 Australia</h3>
      <ul>
        <li>Post-study work visa available</li>
        <li>Tuition: AUD 25k–45k/year</li>
        <li>Living: AUD 1.5k–2.2k/month</li>
        <li><strong>In INR:</strong> ₹13L–24L tuition/year, ₹82k–1.2L/month living</li>
      </ul>
      <a href="/details#AU" className="spotlight-link">Explore Australia →</a>
    </div>

    <div className="country-card">
      <h3>🇩🇪 Germany</h3>
      <ul>
        <li>Low or free tuition (public universities)</li>
        <li>Living: €850–1,100/month</li>
        <li><strong>In INR:</strong> ₹75k–98k/month living</li>
      </ul>
      <a href="/details#DE" className="spotlight-link">Explore Germany →</a>
    </div>

    <div className="country-card">
      <h3>🇺🇸 United States</h3>
      <ul>
        <li>Top-ranked global universities</li>
        <li>Tuition: USD 20k–60k/year</li>
        <li>Living: USD 1.5k–3k/month</li>
        <li><strong>In INR:</strong> ₹16L–49L tuition/year, ₹1.2L–2.5L/month living</li>
      </ul>
      <a href="/details#US" className="spotlight-link">Explore USA →</a>
    </div>

    <div className="country-card">
      <h3>🇬🇧 United Kingdom</h3>
      <ul>
        <li>1–2 year post-study work visa</li>
        <li>Tuition: GBP 15k–35k/year</li>
        <li>Living: GBP 1.2k–2k/month</li>
        <li><strong>In INR:</strong> ₹16L–37L tuition/year, ₹1.2L–2L/month living</li>
      </ul>
      <a href="/details#UK" className="spotlight-link">Explore UK →</a>
    </div>

    <div className="country-card">
      <h3>🇮🇪 Ireland</h3>
      <ul>
        <li>Strong job market in tech & pharma</li>
        <li>Tuition: EUR 10k–25k/year</li>
        <li>Living: EUR 1k–1.8k/month</li>
        <li><strong>In INR:</strong> ₹9L–22L tuition/year, ₹88k–1.6L/month living</li>
      </ul>
      <a href="/details#IE" className="spotlight-link">Explore Ireland →</a>
    </div>

    <div className="country-card">
      <h3>🇳🇿 New Zealand</h3>
      <ul>
        <li>PR possible via post-study work visa</li>
        <li>Tuition: NZD 20k–40k/year</li>
        <li>Living: NZD 1.2k–1.8k/month</li>
        <li><strong>In INR:</strong> ₹10L–20L tuition/year, ₹60k–90k/month living</li>
      </ul>
      <a href="/details#NZ" className="spotlight-link">Explore NZ →</a>
    </div>

    

  </div>
          <p className="rate-disclaimer">ℹ️ INR Conversion Rates as of <strong>June 2025</strong> — actual values may vary.</p>
        </motion.section>

        <motion.section className="trends-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2>📈 Trends & Updates</h2>
          <ul>
            <li>🇨🇦 Canada recently lowered PR points threshold for graduates.</li>
            <li>🇦🇺 Australia increased minimum funds requirement for visa in 2025.</li>
            <li>🇩🇪 Germany streamlining visa process for STEM students.</li>
          </ul>
        </motion.section>

        <motion.section className="testimonials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <h2>💬 What Students Say</h2>
          <blockquote>"Thanks to Country Advisor, I found the perfect country to study AI!" – Priya, India</blockquote>
          <blockquote>"The comparison tool made my decision so easy!" – John, Nigeria</blockquote>
        </motion.section>

        <motion.section className="video-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <h2>🎥 Quick Intro</h2>
<div className="video-wrapper">
  <iframe 
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
    title="Intro Video" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
</div>
        </motion.section>

        <div className="action-buttons">
          <Link to="/calculator" className="button">🎯 Get a Recommendation</Link>
          <Link to="/details" className="button secondary">📊 Explore Country Info</Link>
          <Link to="/details" className="button tertiary">🌐 View All Countries</Link>
        </div>

        <footer className="home-footer">
          <p>🚀 Start your journey toward global education and a better future!</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
