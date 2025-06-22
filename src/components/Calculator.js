import React, { useState } from "react";
import { countries, questions } from "./data";
import './Calculator.css';

function Calculator() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [isCardView, setIsCardView] = useState(false);

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const calculateScore = () => {
    let scores = {};
    countries.forEach((c) => (scores[c.code] = 0));

    questions.forEach((q) => {
      const value = answers[q.key];
      if (value === undefined || value === "") return;

      if (q.type === "boolean" && typeof value === "boolean") {
        if (value) {
          countries.forEach((c) => {
            scores[c.code] += q.weights[c.code] ?? 0;
          });
        }
      } else if (q.type === "select") {
        const index = q.options.indexOf(value);
        if (index >= 0) {
          countries.forEach((c) => {
            scores[c.code] += q.weights[c.code]?.[index] ?? 0;
          });
        }
      }
    });

    setResult(scores);
  };

  const getBestCountry = () => {
    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  const getRowColor = (score, maxScore) => {
    const ratio = score / maxScore;
    if (ratio > 0.8) return "#004d00";
    if (ratio > 0.6) return "#1f4e78";
    if (ratio > 0.4) return "#665c00";
    return "#4a1a1a";
  };

  return (
    <div className="container">
        

      <h1 className="title">🌍 Country Pick Calculator</h1>

      {questions.map((q) => (
        <div key={q.key} className="question-block">
          <label className="label">{q.question}</label>
          <select
            className="select"
            value={answers[q.key] ?? ""}
            onChange={(e) =>
              handleChange(
                q.key,
                q.type === "boolean" ? e.target.value === "yes" : e.target.value
              )
            }
          >
            <option value="">Select</option>
            {q.type === "boolean" ? (
              <>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </>
            ) : (
              q.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))
            )}
          </select>
        </div>
      ))}

      <button onClick={calculateScore} className="button">
        Calculate Best Country
      </button>

      {result && (
        <>
          <button
            onClick={() => setIsCardView(!isCardView)}
            className="button"
            style={{ marginTop: "1rem" }}
          >
            Switch to {isCardView ? "Table" : "Card"} View
          </button>

          {isCardView ? (
            <div className="card-container">
              {countries.map((c) => {
                const max = Math.max(...Object.values(result));
                const isTop = c.code === getBestCountry();
                return (
                  <div
                    className={`country-card ${isTop ? "highlight" : ""}`}
                    key={c.code}
                  >
                    <div className="emoji-flag">{c.flag}</div>
                    <h3>{c.name}</h3>
                    <p>Score: {result[c.code].toFixed(1)}</p>
                    <div className="score-bar">
  <div
    className="fill"
    style={{
      width: `${(result[c.code] / Math.max(...Object.values(result))) * 100}%`,
    }}
  ></div>
</div>

                  </div>
                );
              })}
            </div>
          ) : (
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Flag</th>
                  <th>Score</th>
                  <th>Score Bar</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => {
                  const maxScore = Math.max(...Object.values(result));
                  const isTop = c.code === getBestCountry();
                  return (
                    <tr
                      key={c.code}
                      style={{
                        backgroundColor: getRowColor(result[c.code], maxScore),
                        fontWeight: isTop ? "bold" : "normal",
                      }}
                    >
                      <td>{c.name}</td>
                      <td className="emoji-flag">{c.flag}</td>
                      <td>{result[c.code].toFixed(1)}</td>

                      <td>
  {result[c.code].toFixed(1)}
  <div className="score-bar">
    <div
      className="fill"
      style={{
        width: `${(result[c.code] / Math.max(...Object.values(result))) * 100}%`,
      }}
    ></div>
  </div>
</td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          

          <p className="recommendation">
            ✅ Recommended Country:{" "}
            <strong>{getBestCountry().toUpperCase()}</strong>
          </p>
          <div className="insight-box">
  <h3>🔍 Why {getBestCountry()} is Recommended</h3>
  <ul>
    <li>✅ High job opportunities</li>
    <li>📉 Affordable tuition and cost of living</li>
    <li>🛂 Easy PR process</li>
    <li>📊 Good quality of life</li>
    <li>📌 Great cultural diversity</li>
    <li>🌐 International student-friendly environment</li>
    <li>🎯 Great educational opportunities</li>
    <li>👨‍🎓 Excellent faculty</li>
    <li>🌐 Great international student support</li>
    <li>🎉 Excellent student life</li>
    <li>🎓 Great academic reputation</li>
    <li>🎯 Great career prospects</li>
    <p>For you 👇,on your preferences</p>

  </ul>
</div>

        </>
      )}
    </div>
    
  );
}

export default Calculator;
