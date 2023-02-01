import React from "react";
import "./TeamList.css";
const TeamsList = ({ team }) => {
  return (
    <>
      <div className="team">
        <h1>Team: {team.team}</h1>
        <h2>Standing: {team.standing}</h2>
        <p>Points: {team.points}</p>
        <img src={team.image} alt="" />
      </div>
    </>
  );
};

export default TeamsList;
