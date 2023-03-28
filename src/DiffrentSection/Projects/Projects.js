import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import lms from "../../Images/lms.png"
import y from "../../Images/y.png"
import b from "../../Images/b.png"
import s from "../../Images/s.jpg"
import e_com from "../../Images/Products_Page.PNG"
import { FaGithub, FaEye } from "react-icons/fa";

 
  const Projects = () => {

  return (
    <div
      id="projects"
      className="main_container"
      style={{
        // backgroundColor: "#edf2f8",
        // backgroundColor: "#2c1e4a",
        backgroundColor: "#4d0026",
        color : "white"
      }} 
    >
      <div className="project_container">
        <div className="project_heading">
          <h2 className="title">
            Projects
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">

            <Box>
              <div 
                className="project_box project-card"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src="https://user-images.githubusercontent.com/106810850/208999215-29b192e9-53fb-48a4-a8aa-54192e093086.png" alt="Learning management" />
                </div>

                <div className="project_name project-title"   >
                  <h2>Learning Management</h2>
                </div>
                <div className="project_desc project-description"   >
                  <p>
                  This is one of the best project that I have made. There are two main persons. One 
                  is Admin and another Student
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span> JavaScript, Html, Css
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link project-github-link"   >
                    <a
                      href="https://github.com/9802HEMENSAN/potent-toothbrush-7925"
                      rel="noopener norefferer"
                      target="_blank"
                     
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link project-deployed-link"    >
                    <a
                      href="https://hemensan-dress-up.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div 
                className="project_box project-card"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src="https://user-images.githubusercontent.com/111531676/227760034-b783c050-c82b-45a3-aedb-17da6632f01a.png" alt="Learning managemen" />
                </div>

                <div className="project_name project-title"   >
                  <h2>Clone of Dollar General Website</h2>
                </div>
                <div className="project_desc project-description"   >
                  <p>
               An E-Commerce Website : Clone of Dollar General (US based company)
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span>React, JavaScript, HTML, CSS
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link project-github-link"   >
                    <a
                      href="https://github.com/9802HEMENSAN/dysfunctional-stomach-1310"
                      rel="noopener norefferer"
                      target="_blank"
                     
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link project-deployed-link"    >
                    <a
                      href="https://indiasmarket.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div 
                className="project_box project-card"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src="https://user-images.githubusercontent.com/111531676/221751824-b3bb73fe-ba78-4c56-8ced-4f671d3dbfce.png" alt="Learning managemen" />
                </div>

                <div className="project_name project-title"   >
                  <h2>Dress-Up </h2>
                </div>
                <div className="project_desc project-description"   >
                  <p>
                  This is one of the best project that I have made.Its an Indivisual Project completed withing 5 days.
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span>React, JavaScript, HTML, CSS
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link project-github-link"   >
                    <a
                      href="https://github.com/9802HEMENSAN/potent-toothbrush-7925"
                      rel="noopener norefferer"
                      target="_blank"
                     
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link project-deployed-link"    >
                    <a
                      href="https://hemensan-dress-up.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div 
                className="project_box project-card"
                style={{
                  backgroundColor:  "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src="https://user-images.githubusercontent.com/111531676/227760361-52ceda03-c279-4a05-bc89-770cd7f849c8.png" alt="Learning managemen" />
                </div>

                <div className="project_name project-title"   >
                  <h2>Solutions Management</h2>
                </div>
                <div className="project_desc project-description"   >
                  <p>
                 An Platform that provides solutions for every software technologies.
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span> JavaScript, HTML, CSS
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link project-github-link"   >
                    <a
                      href="https://github.com/9802HEMENSAN/haloed-stick-4627"
                      rel="noopener norefferer"
                      target="_blank"
                     
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link project-deployed-link"    >
                    <a
                      href="https://fanciful-croquembouche-2f4752.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

           
 
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
export default Projects;