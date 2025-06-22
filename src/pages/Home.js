import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>🌍 Country Comparison Advisor</h1>
      <p>Compare Germany, Australia, USA, Canada based on your needs!</p>
      <button className="button bounce" onClick={() => navigate("/start")}>
        Start Questionnaire →
      </button>
    </div>
  );
};

export default Home;
