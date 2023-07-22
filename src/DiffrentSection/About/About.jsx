import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import "./about.css";
function About() {
  return (
    <>
      <section
        className="about section"
        id="about"
        style={{
          backgroundColor: "#4d0026",
          // backgroundColor: "#660033",
          color: "white",
        }}
      >
        <Heading className="title">About me</Heading>
        <Box
          clasName="about-content"
          style={{
            display: "flex",
          }}
        >
          <Box clasName="columnAbout rightAbout">
            <Box className="text" classid="user-detail-name">
              I am Hemensan Mahilange{" "}
            </Box>

            <Box className="desc">
              <p className="description">
                I am a full-stack MERN developer with expertise in JavaScript,
                Node.js, Express.js, React.js, Redux, and MongoDB. I possess a
                strong background in developing scalable, efficient, and secure
                web applications. My proficiency lies in building RESTful APIs,
                utilizing modern frontend frameworks, and working with NoSQL
                databases. This allows me to deliver high-quality software
                solutions that meet business requirements. I excel in
                collaborating with cross-functional teams and staying up-to-date
                with emerging trends and technologies. My dedication to
                continuous improvement ensures that I can deliver innovative and
                cutting-edge solutions. Overall, as a MERN developer, I bring a
                comprehensive skill set and a passion for creating exceptional
                user experiences.
              </p>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default About;
