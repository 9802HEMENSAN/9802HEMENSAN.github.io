import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Calendar.css";
import {
  Box,
  Flex,
  useDisclosure,
  Button,
} from "@chakra-ui/react"

function Calendar() {
  return (
    <>
    <div className="calendar"   style={{
        backgroundColor: "#4d0026",
        color : "white"
      }}   >
      <div className="head_text">
        <h2>
          Github <span>Activity</span>
        </h2>
      </div>
      <div className="Graph">
        <GitHubCalendar username="9802HEMENSAN" />
      </div>
    </div>

  

    <Flex
      className="stats"
      style={{
        display: "flex",
        flexDirection: ["column", "column", "column", "row"],
        gap: "10px",
        backgroundColor: "#4d0026",
        color: "white"
      }}
    >
      <img
        id="github-top-langs"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=9802HEMENSAN&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
      />
      <img
        id="github-streak-stats"
        src="https://github-readme-streak-stats.herokuapp.com?user=9802HEMENSAN&theme=dark"
        alt="stats"
      />
      <img
        id="github-stats-card"
        src="https://github-readme-stats.vercel.app/api?username=9802HEMENSAN&theme=tokyonight&hide_border=false&include_all_commits=true&count_public=true&count_private=true"
        alt="Github tropy"
      />
    </Flex>
    </>
  );
}

export default Calendar;
// GitHub streak stats : id="github-streak-stats" [Link to refer : https://github-readme-streak-stats.herokuapp.com/demo/]
// GitHub top languages : id="github-top-langs" [Link to refer : https://github.com/anuraghazra/github-readme-stats]
// GitHub stats card : id="github-stats-card" [Link to refer : https://github.com/anuraghazra/github-readme-stats]

 