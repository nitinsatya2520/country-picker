import React, { useState } from "react";
import "./App.css";

const countries = [
  { code: "germany", name: "Germany", flag: "🇩🇪" },
  { code: "australia", name: "Australia", flag: "🇦🇺" },
  { code: "usa", name: "USA", flag: "🇺🇸" },
  { code: "canada", name: "Canada", flag: "🇨🇦" },
];

const countryDetails = {
  germany: {
    tuition: "Low / Mostly Free (Public)",
    jobs: "Moderate for English speakers",
    pr: "Takes 4–6 years, knowledge of German needed",
    cost: "€850–€1,100/month",
    parttime: "120 full days or 240 half-days/year",
  },
  australia: {
    tuition: "AUD 25,000–45,000/year",
    jobs: "Good demand in tech, healthcare, trades",
    pr: "2–3 years post-study + PR options available",
    cost: "AUD 1,500–2,200/month",
    parttime: "40 hrs/fortnight + unlimited during breaks",
  },
  usa: {
    tuition: "USD 20,000–60,000/year",
    jobs: "Excellent in tech but competitive",
    pr: "H1B → Green Card (lengthy, uncertain)",
    cost: "USD 1,500–3,000/month",
    parttime: "Strict on-campus only during study",
  },
  canada: {
    tuition: "CAD 18,000–35,000/year",
    jobs: "Good demand in tech, trades, healthcare",
    pr: "Easier and faster (Express Entry)",
    cost: "CAD 1,200–2,000/month",
    parttime: "Up to 20 hrs/week during semester",
  },
};


const questions = [
  {
    question: "Can you speak or are willing to learn German?",
    key: "german",
    type: "boolean",
    weights: { germany: 2 },
  },
  {
    question: "How much financial support do you have from family?",
    key: "financial",
    type: "select",
    options: ["None", "Partial", "Full"],
    weights: {
      germany: [0, 2, 4],
      australia: [0, 1, 2],
      usa: [0, 0.5, 1],
      canada: [0, 1, 2],
    },
  },
  {
    question: "Are you confident in your coding/technical skills?",
    key: "tech",
    type: "boolean",
    weights: { germany: 1, australia: 2, usa: 3, canada: 2 },
  },
  {
    question: "Will you be applying for an education loan?",
    key: "loan",
    type: "boolean",
    weights: { germany: -1, australia: 0, usa: -2, canada: -1 },
  },
  {
    question: "Can you work part-time jobs during study?",
    key: "parttime",
    type: "boolean",
    weights: { germany: 1, australia: 2, usa: 1, canada: 2 },
  },
  {
    question: "Is your main goal: Settle Abroad (PR)?",
    key: "prgoal",
    type: "boolean",
    weights: { germany: 1, australia: 3, usa: 0, canada: 3 },
  },
  {
    question: "Are you okay with immigration/visa risk?",
    key: "risk",
    type: "boolean",
    weights: { germany: 1, australia: 3, usa: -2, canada: 3 },
  },
  {
    question: "Do you need a smooth PR/citizenship process?",
    key: "prneed",
    type: "boolean",
    weights: { germany: 1, australia: 3, usa: -1, canada: 3 },
  },
  {
    question: "Do you want an English-speaking environment?",
    key: "english",
    type: "boolean",
    weights: { germany: 0, australia: 2, usa: 2, canada: 2 },
  },
  {
    question: "How flexible are you in adjusting to new culture?",
    key: "culture",
    type: "select",
    options: ["Low", "Medium", "High"],
    weights: {
      germany: [0, 1, 2],
      australia: [0, 2, 4],
      usa: [0, 2, 4],
      canada: [0, 2, 4],
    },
  },
];

function App() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const calculateScore = () => {
    let scores = {};
    countries.forEach((c) => (scores[c.code] = 0));

    questions.forEach((q) => {
      const value = answers[q.key];
      if (q.type === "boolean" && value === true) {
        countries.forEach((c) => {
          scores[c.code] += q.weights[c.code] ?? 0;
        });
      } else if (q.type === "select" && value) {
        const index = q.options.indexOf(value);
        countries.forEach((c) => {
          scores[c.code] += q.weights[c.code]?.[index] ?? 0;
        });
      }
    });

    setResult(scores);
  };

  const getBestCountry = () => {
    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    return sorted[0][0].toUpperCase();
  };

  return (
    <div className="container">
      <h1 className="title">🌍 Country Pick Calculator</h1>

      {questions.map((q) => (
        <div key={q.key} className="question-block">
          <label className="label">{q.question}</label>
          {q.type === "boolean" ? (
            <select
              className="select"
              value={answers[q.key] ?? ""}
              onChange={(e) => handleChange(q.key, e.target.value === "yes")}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          ) : (
            <select
              className="select"
              value={answers[q.key] ?? ""}
              onChange={(e) => handleChange(q.key, e.target.value)}
            >
              <option value="">Select</option>
              {q.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      <button onClick={calculateScore} className="button">
        Calculate Best Country
      </button>

      {result && (
        <div className="results">
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Flag</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => (
                <tr key={c.code}>
                  <td>{c.name}</td>
                  <td>{c.flag}</td>
                  <td>{result[c.code].toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="recommendation">
            ✅ Recommended Country: {getBestCountry()}
          </p>
          <div className="country-details">
  <h2>📊 Country Comparison Details</h2>
  <table>
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
      {countries.map((c) => (
        <tr key={c.code}>
          <td>{c.flag} {c.name}</td>
          <td>{countryDetails[c.code].tuition}</td>
          <td>{countryDetails[c.code].jobs}</td>
          <td>{countryDetails[c.code].pr}</td>
          <td>{countryDetails[c.code].cost}</td>
          <td>{countryDetails[c.code].parttime}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
        
      )}
    </div>
  );
}

export default App;
