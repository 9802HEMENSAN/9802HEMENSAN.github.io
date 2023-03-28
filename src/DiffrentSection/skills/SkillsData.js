import f1 from "../../Images/html.png";
import f2 from "../../Images/css.png";
import f3 from "../../Images/boostrap.png";
import f4 from "../../Images/js.jpg";
import f5 from "../../Images/react.svg";
import f6 from "../../Images/redux.png";
import f7 from "../../Images/chakraui.png";
// import f8 from "../../Images/tw.jpg";

import b2 from "../../Images/mongodb.png";
import b3 from "../../Images/nodejs.png";
import b4 from "../../Images/expressjs.webp";
// import b5 from "../../Images/netlify.svg";
import so1 from "../../Images/so1.png"
import so2 from "../../Images/so2.png"
import so3 from "../../Images/so3.png"
import so4 from "../../Images/so4.png"
import so5 from "../../Images/so5.png"


let skills_data = [
  {
    skill_avator: f1,
    name: "HTML",
    frontend: "frontend",
    boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgb(51 65 85)"
  },
  {
    skill_avator: f2,
    name: "CSS",
    frontend: "frontend",
    boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgb(249 115 22)"
  },

  {
    skill_avator: f3,
    name: "Bootstrap",
    frontend: "frontend",
    boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgb(120 53 15)"
  },

  {
    skill_avator: f4,
    name: "JavaScript",
    frontend: "frontend",
    boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgb(113 63 18)"
  },

  {
    skill_avator: f5,
    name: "React",
    frontend: "frontend",
    boxshadow: "0px 4px 8px rgba(118, 69, 246, 0.4)",
    backgroundColor: "rgb(21 128 61)"
  },

  {
    skill_avator: f6,
    name: "Redux",
    frontend: "frontend",
    boxshadow: "0px 4px 8px rgba(118, 69, 246, 0.4)",
    backgroundColor: "rgb(120 53 15)"
  },

  {
    skill_avator: f7,
    name: "Chakra UI",
    frontend: "frontend",
    boxshadow: "0px 4px 8px rgba(118, 69, 246, 0.4)",
    backgroundColor: "rgb(8 145 178)"
  },
  {
    skill_avator: b2,
    name: "Mongo Db",
    backend: "backend",
    boxshadow: "0px 4px 8px rgba(67, 160, 71, 0.4",
    backgroundColor: "rgb(49 46 129)"
  },

  {
    skill_avator: b3,
    name: "Node JS",
    backend: "backend",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "rgb(91 33 182)"
  },

  {
    skill_avator: b4,
    name: "Express JS",
    backend: "backend",
    boxshadow: "0px 4px 8px rgba(234, 101, 96, 0.4)",
    backgroundColor: "rgb(192 38 211)"
  },
  
 
];

const vas="data:image/jpeg;base64,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"
// const codeSand="data:image/jpeg;base64,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"
const postman="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3eMU5KeETDmtyWbfSN1PT9h3VqgH1CXrUlwl1VxSb64HN8g0GzGV6gE_dy31yvHqTs8&usqp=CAU"
const github="data:image/png;base64,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"
const git ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAyVwhbZtVzxwvgNhFZL3jdqdsu8VAEj82keQJIiDeFEjVBOoXvD4C2QEJlZ1CYB2nTCw&usqp=CAU'
const netlify="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWvvRNdzj1WJmIoJQ3LQLJKQZc153ns8dwSdzDxS9vrM0jB3V6gk58kISD8_i2zT3X2Y&usqp=CAU"




const toolsData=[
  {
    skill_avator: vas,
    name: "VS CODE",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#fd1d1d"
  },
  {
    skill_avator: postman,
    name: "Postman",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#22c1c3"
  },
  {
    skill_avator: git,
    name: "Git Bash",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#0fdfb3"
  },
  {
    skill_avator: netlify,
    name: "Netlify",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#9d13d8"
  },
  {
    skill_avator: github,
    name: "GitHub",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#230add"
  }
  
]

const softSkill=[
  {
    skill_avator: so1,
    name: "Collaborative",
    Soft: "soft",
    boxshadow: "0px 4px 8px rgba(255, 193, 7, 0.4)",
    backgroundColor: "#020024"
  },
  {
    skill_avator: so5,
    name: "Communication",
    Soft: "soft",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#a20dd7"
  },
  {
    skill_avator: so2,
    name: "Creative Thinking",
    Soft: "soft",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#1a0521"
  },
  {
    skill_avator: so3,
    name: "Problem Solving",
    Soft: "soft",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#1a0521"
  },
  {
    skill_avator: so4,
    name: "Time Management",
    Soft: "soft",
    boxshadow: "0px 4px 8px rgba(90, 173, 242, 0.4)",
    backgroundColor: "#ab0fdf"
  }
]


export {skills_data,toolsData,softSkill};


