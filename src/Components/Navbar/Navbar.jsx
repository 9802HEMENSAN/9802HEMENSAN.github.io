import {
  Box,
  Flex,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
import resume from "./Hemensan-Mahilange-Resume.pdf";
import { useMediaQuery } from "react-responsive";
import { HiMenu } from "react-icons/hi";


import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { hover } from "@testing-library/user-event/dist/hover";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Navbar = () => {


  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* --------------------------Desktop--------------------------------------- */}
      <Desktop>
        <Box>
          <div
            style={{
              backgroundColor: "#4d0026",
              color : "white"
            }}
            className="navbar"
            id="nav-menu"
          >
            <div>
              <div className="navbar_container">
                <ul className="left_navbar">
                  <div className="left_navbar_logo">
                    <h2>
                      Hemensan <span>Mahilange</span>
                    </h2>
                  </div>
                </ul>

                <ul className="navbar_right">
                  <li>
                    <a href="#"  class="nav-link home" >HOME</a>
                  </li>
                  <li>  
                    <a href="#about" class="nav-link about"> ABOUT ME </a>
                  </li>
                  <li>
                    <a href="#skills" class="nav-link skills" >SKILLS</a>
                  </li>
                  <li>
                    <a href="#projects" class="nav-link projects">PROJECT</a>
                  </li>
                  <li>
                    <a href="#contact" class="nav-link contact" >CONTACT</a>
                  </li>
                  <li class="nav-link resume" >


                    <button   id="resume-button-1"
                      style={{
                        backgroundColor: "#ab364d",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "15px",
                        cursor: "pointer",
                        padding: "8px 15px",
                        borderRadius: "15px",
                        // border: "3px solid rgba(11,12,16,0.4)",
                      }}
                      onClick={() =>
                        window.open("https://drive.google.com/file/d/1QeUtzyi-VBmqX7A28A7N1CymmjN5cCHD/view?usp=sharing")
                      }

                    >
                      <a 
                        id="resume-link-1"
                        href={resume}
                        download = "Hemensan-Mahilange-Resume.pdf"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        Resume
                      </a>
                    </button>


                  </li>



                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Desktop>
      {/* ---------------------------Tablet-------------------------------------- */}
      <Tablet>
        <Box>
          <div
            style={{
              backgroundColor: "#4d0026",
              color: "white"
            }}
            className="navbar"
            id="nav-menu"
          >
            <div>
              <div className="navbar_container">
                <ul className="left_navbar">
                  <div className="left_navbar_logo">
                    <h3>
                      Hemensan<span>Mahilange</span>
                    </h3>
                  </div>
                </ul>

                <Flex
                  justifyContent="right"
                  alignItems="center"
                  className="tabletnav"
                  gap="20px"
                  paddingRight="20px"
                >
                  <div className="menubar">
                    <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
                      <HiMenu size="40px" />
                    </Box>
                    <Drawer
                      size="xl"
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent
                        style={{
                          backgroundColor: "#4d0026",
                          color: "white"
                        }}
                      >
                        <DrawerCloseButton fontSize="30px" />

                        <DrawerBody textAlign="center">
                          <ul className="moAndTablet">
                            <li onClick={onClose}>
                              <a href="#" >HOME</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#about" > ABOUT ME</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#skills" >SKILLS</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#projects" >PROJECT</a>
                            </li>

                            <li onClick={onClose}>
                              <a href="#contact" >CONTACT</a>
                            </li>
                            <li onClick={onClose}>
                              <button  
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "25px",
                                  cursor: "pointer",
                                  padding: "8px 15px",
                                  borderRadius: "15px",
                                  border: "3px solid rgba(11,12,16,0.4)",
                                }}
                                onClick={() =>
                                  window.open("https://drive.google.com/file/d/1QeUtzyi-VBmqX7A28A7N1CymmjN5cCHD/view?usp=share_link")
                                }
                              >
                                <a   
                                  href={resume}
                                  download="Hemensan-Mahilange-Resume.pdf"
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  Resume
                                </a>
                              </button>
                            </li>
                          </ul>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </div>

                </Flex>
              </div>
            </div>
          </div>
        </Box>
      </Tablet>
      {/* ----------------------------Mobile------------------------------------- */}
      <Mobile>
        <Box>
          <div
            style={{
              backgroundColor: "#4d0026",
              color : "white"
            }}
            className="navbar"
            id="nav-menu"
          >
            <div>
              <div className="navbar_container">
                <ul className="left_navbar">
                  <div className="left_navbar_logo">
                    <h3>
                      Hemensan<span>Mahilange</span>
                    </h3>
                  </div>
                </ul>

                <Flex
                  justifyContent="right"
                  alignItems="center"
                  className="tabletnav"
                  gap="20px"
                  paddingRight="20px"
                >
                  <div className="menubar">
                    <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
                      <HiMenu size="40px" />
                    </Box>
                    <Drawer
                      size="xl"
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent
                        style={{
                          // backgroundColor: "#751515",
                          backgroundColor: "#4d0026",
                          color : "white",
                          fontFamily : "sans-serif",
                          fontSize: "20px",
                        }}
                      >
                        <DrawerCloseButton fontSize="25px" />

                        <DrawerBody textAlign="center">
                          <ul className="moAndTablet">
                            <li onClick={onClose}>
                              <a href="#">HOME</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#about"> ABOUT ME</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#skills">SKILLS</a>
                            </li>
                            <li onClick={onClose}>
                              <a href="#projects">PROJECT</a>
                            </li>

                            <li onClick={onClose}>
                              <a href="#contact">CONTACT</a>
                            </li>
                            <li onClick={onClose}>
                              <button
                                style={{
                                  backgroundColor: "#a82e98",
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "30px",
                                  cursor: "pointer",
                                  padding: "8px 15px",
                                  borderRadius: "15px",
                                  border: "red",
                                }}
                                onClick={() =>
                                  window.open("https://drive.google.com/file/d/1QeUtzyi-VBmqX7A28A7N1CymmjN5cCHD/view?usp=share_link")
                                }
                              >
                                <a
                                  href={resume}
                                  download="Hemensan-Mahilange-Resume.pdf"
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  Resume
                                </a>
                              </button>
                            </li>
                          </ul>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </div>


                </Flex>
              </div>
            </div>
          </div>
        </Box>
      </Mobile>
    </>
  );
};

export default Navbar