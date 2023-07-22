import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import { FaGithub, FaEye } from "react-icons/fa";


const Projects = () => {

  return (
    <div
      id="projects"
      className="main_container"
      style={{
        backgroundColor: "#4d0026",
        color: "white"
      }}
    >
      <div className="project_container">
        <div className="project_heading">
          <h2 className="title">
            Projects
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing="30px">
          <Box>
              <div
                className="project_box project-card"
      
              >
                <div className="project_image">
                  <img width="100%" src="https://user-images.githubusercontent.com/111531676/243783875-9d97532f-d905-4373-825c-7964f45c93b0.png" alt="Learning managemen" />
                </div>

                <div className="project_name project-title"   >
                  <h2>Caratalane : Indian jewellery brand</h2>
                </div>
                <div className="project_desc project-description"   >
                  <p>
                     Discover fashionable jewelry for the modern generation on our trendy e-commerce site.
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span> JavaScript, Chakra-UI,   React.js, Redux, Nodejs, MongoDB, Express.js
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link project-github-link"   >
                    <a
                      href="https://github.com/9802HEMENSAN/unit-6-project-CaretLane-clone"
                      rel="noopener norefferer"
                      target="_blank"

                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link project-deployed-link"    >
                    <a
                      href="https://caratlane.vercel.app/"
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
   
              >
                <div className="project_image">
                  <img  src="https://user-images.githubusercontent.com/111531676/246809222-28a91ed1-820b-4bc0-83a9-80226b88f072.png" alt="Learning management" />
                </div>

                <div className="project_name project-title"   >
                  <h2>Clone of Sephora : Beauty </h2>
                </div>
                <div className="project_desc project-description"   >
                  <p>
                  Explore a wide range of skincare, makeup, and beauty products, meticulously curated to elevate your self-care routine and enhance your natural radiance.
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript, JSON Server 
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link project-github-link"   >
                    <a
                      href="https://github.com/9802HEMENSAN/Clone-of-Sephora"
                      rel="noopener norefferer"
                      target="_blank"

                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link project-deployed-link"    >
                    <a
                      href="https://timely-wisp-f8d982.netlify.app/"
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
     
              >
                <div className="project_image">
                  <img   src="https://user-images.githubusercontent.com/112754760/229575461-84775f95-e39e-4f1c-89e1-e9cbfab22a77.png" alt="styles-up" />
                </div>

                <div className="project_name project-title"   >
                  <h2>StylesUp : Indian e-commerce marketplace</h2>
                </div>
                <div className="project_desc project-description"   >
                  <p>
                  India's premier online shopping experience, powered by Paytm - convenience and quality guaranteed.
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span>  HTML, CSS, JavaScript, React.js,
                    Chakra-UI
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link project-github-link"   >
                    <a
                      href="https://github.com/9802HEMENSAN/Styles-Up"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link project-deployed-link"    >
                    <a
                      href="https://stylesup121.vercel.app/"
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
             
              >
                <div className="project_image">
                  <img src="https://user-images.githubusercontent.com/111531676/246816272-b9a0805a-e7d5-4545-b960-e4ed16ff9ca0.png" alt="Dress-up.com" />
                </div>

                <div className="project_name project-title"   >
                  <h2>
                  Dress-Up : Embrace the essence of modern fashion</h2>
                </div>
                <div className="project_desc project-description"   >
                  <p  >
                  Dress-up.com is an e-commerce website that aims to provide the new generation with the latest fashion trends.
                  </p>
                </div>
                <div className="project_tech_stack project-tech-stack"   >
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript, React, Chakra-UI
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
  
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
export default Projects;