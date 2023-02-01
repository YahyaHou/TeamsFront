import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <h2>Welcome to Our App Go Check Our Teams</h2>
        <button className="homeBtn">
          <Link
            to="/teams"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Teams
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
