import React from "react"; 
import { Box, SimpleGrid , Heading } from "@chakra-ui/react";
 
import "./skills.css";

import { useState } from "react";
import { skills_data,softSkill , toolsData } from "./SkillsData";

const Skills = () => {
  
  const [skills, setSkills] = useState(skills_data);
 
  return (
    <section className="skills_container" id="skills"  style={{
      boxshadow: "0px 4px 8px rgba(118, 69, 246, 0.4)",
      backgroundColor: "#4d0026",
      // backgroundColor: "#660033",
      color : "white"
    }} >
      <div className="skill_heading"    >
        <Heading className="title" >
          Skills
        </Heading>
      </div>

      <div className="skills_btn">

        <button>Tech Stack </button>
      </div>

      <div className="skills_grid"  >
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
          {skills_data?.map((elem) => (
            <Box key={elem.name}   >
              <div className="skills_grid_box skills-card" style={{ 
                  //  boxShadow: "rgba(152, 66, 87, 0.9) 0px 18px 50px -10px"
                  }}>
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
              <div className="skills_grid_box skills-card" style={{               
                boxShadow: "rgba(152, 66, 87, 0.9) 0px 18px 50px -10px"
              
                 }}>
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
              <div className="skills_grid_box skills-card" 
 
              >
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


    </section>
  );
};

export default Skills