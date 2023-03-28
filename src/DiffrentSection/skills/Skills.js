import React from "react"; 
import { Box, SimpleGrid } from "@chakra-ui/react";

import "./skills.css";

import { useState } from "react";
import { skills_data,softSkill , toolsData } from "./SkillsData";

const Skills = () => {
  
  const [skills, setSkills] = useState(skills_data);
 
  return (
    <div className="skills_container" id="skills"  style={{
      // backgroundColor: "#edf2f8",
      // backgroundColor: "#2c1e4a",
      backgroundColor: "#4d0026",
      color : "white"
    }} >
      <div className="skill_heading">
        <h2 className="title">
          Skills
        </h2>
      </div>

      <div className="skills_btn">

        <button>Tech Stack </button>
      </div>

      <div className="skills_grid"  >
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
          {skills_data?.map((elem) => (
            <Box key={elem.name}   >
              <div className="skills_grid_box skills-card" style={{ boxShadow: elem.boxshadow, backgroundColor: elem.backgroundColor }}>
                <div className="skills_grid_box_img" >
                  <img  className="skills-card-img" src={elem.skill_avator} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3  className="skills-card-name" >{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>

      {/* Soft */}

      <div className="toolsbtn">

        <button>Soft Skill </button>
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
          {softSkill?.map((elem) => (
            <Box key={elem.name} class="skills-card" > 
              <div className="skills_grid_box skills-card" style={{ boxShadow: elem.boxshadow, backgroundColor: elem.backgroundColor }}>
                <div className="skills_grid_box_img">
                  <img  class="skills-card-img" src={elem.skill_avator} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3  class="skills-card-name" >{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>

      {/* Tools */}
      <div className="toolsbtn">

        <button>Tools </button>
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
          {toolsData?.map((elem) => (
            <Box key={elem.name} class="skills-card" >
              <div className="skills_grid_box skills-card" style={{ boxShadow: elem.boxshadow, backgroundColor: elem.backgroundColor }}>
                <div className="skills_grid_box_img">
                  <img  class="skills-card-img" src={elem.skill_avator} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3  class="skills-card-name" >{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>


    </div>
  );
};

export default Skills