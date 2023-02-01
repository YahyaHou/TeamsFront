import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TeamsList from "./TeamsList/TeamsList";
const Teams = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/teams");
      if (response.status === 200) {
        setTeams(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTeams();
  }, []);
  return (
    <>
      {teams &&
        teams.map((team) => {
          return <TeamsList team={team} key={team._id} />;
        })}
    </>
  );
};

export default Teams;
