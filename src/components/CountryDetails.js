import React, { useState } from "react";
import { countries, countryDetails } from "./data";
import './CountryDetails.css';

function CountryDetails() {
  const [isCardView, setIsCardView] = useState(false);

  const getRowColor = (pr) => {
    if (!pr) return "white";
    const text = pr.toLowerCase();
    if (text.includes("easy") || text.includes("faster")) return "#d4edda";
    if (text.includes("moderate") || text.includes("available")) return "#fff3cd";
    if (text.includes("lengthy") || text.includes("uncertain")) return "#f8d7da";
    return "white";
  };

  return (
    <div className="container fade-in">
        
      <h2 className="title">
         <img src="/logo192.png" alt="Logo" className="log-img" /> Country Comparison Details</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button className="button" onClick={() => setIsCardView(!isCardView)}>
          Switch to {isCardView ? "Table" : "Card"} View
        </button>
      </div>

      {isCardView ? (
        <div className="card-view">
          {countries.map((c) => {
            const details = countryDetails[c.code];
            if (!details) return null;

            return (
              <div
                key={c.code}
                className="country-card"
                style={{ backgroundColor: getRowColor(details.pr) }}
              >
                <div className="emoji-flag">
  <span role="img" aria-label={c.name}>
    {c.flag || c.code}
  </span>
</div>


                <h3>{c.name}</h3>
                <p><strong>Tuition Fee:</strong> {details.tuition}</p>
                <p><strong>Jobs:</strong> {details.jobs}</p>
                <p><strong>PR Ease:</strong> {details.pr}</p>
                <p><strong>Cost of Living:</strong> {details.cost}</p>
                <p><strong>Part-time Work:</strong> {details.parttime}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Tuition Fee</th>
                <th>Jobs</th>
                <th>PR Ease</th>
                <th>Cost of Living</th>
                <th>Part-time Work</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => {
                const details = countryDetails[c.code];
                if (!details) return null;

                return (
                  <tr
                    key={c.code}
                    style={{ backgroundColor: getRowColor(details.pr) }}
                  >
                    <td style={{ fontSize: "1.5rem" }}>{c.name}</td>

                    <td>{details.tuition}</td>
                    <td>{details.jobs}</td>
                    <td>{details.pr}</td>
                    <td>{details.cost}</td>
                    <td>{details.parttime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}<div className="tip-banner">🎓 Tip: Always check part-time work hours allowed by visa!</div>
    </div>
  );
}

export default CountryDetails;
