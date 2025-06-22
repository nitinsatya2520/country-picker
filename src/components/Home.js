import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // optional if you're adding styles separately


function Home() {
  return (
    <div>
      
    <div className="container fade-in home-wrapper">
      <h1 className="home-title">🌍 Welcome to Country Advisor</h1>
      
      <p className="home-description">
        Thinking of studying abroad? <strong>Country Advisor</strong> is your smart companion to compare countries, tuition fees, job prospects, PR options, and much more.
      </p>

      <section className="info-section">
        <h2>🎓 Why Study Abroad?</h2>
        <ul>
          <li><strong>Global Exposure:</strong> Experience new cultures, languages, and global perspectives.</li>
          <li><strong>High-Quality Education:</strong> Learn from top universities and internationally recognized faculty.</li>
          <li><strong>Career Opportunities:</strong> Build a career in high-demand sectors worldwide.</li>
          <li><strong>PR Pathways:</strong> Many countries offer pathways to permanent residency after graduation.</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>📌 What You Can Do Here</h2>
        <ul>
          <li>🎯 Use the <strong>Country Recommendation Tool</strong> to find the best fit for your goals.</li>
          <li>📊 Compare countries based on tuition, job opportunities, cost of living, PR ease, and more.</li>
          <li>🧮 Consider your background, preferences, and financial status to make an informed decision.</li>
        </ul>
      </section>
      
      
      <section className="spotlights">
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

    

  </div><li> INR Conversion Rates Used (approx, June 2025)</li>
</section>




      <div className="action-buttons">
        <Link to="/calculator" className="button">🎯 Get a Recommendation</Link>
        <Link to="/details" className="button secondary">📊 Explore Country Info</Link>
      </div>

      <footer className="home-footer">
        <p>🚀 Start your journey toward global education and a better future!</p>
      </footer>
    </div></div>
  );
}

export default Home;
