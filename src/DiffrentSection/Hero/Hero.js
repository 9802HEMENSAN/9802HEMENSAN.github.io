import React from "react";
import "./Hero.css";
import profile from "../../Images/Hemensan_Mahilange_img.jpg";
import { Box, Button, SimpleGrid, useColorMode, Flex } from "@chakra-ui/react";
import resume from "../../Components/Navbar/Hemensan-Mahilange-Resume.pdf";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";
// import SocialLinks from "./SocialLiks";

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

const Hero = () => {
  return (
    <>
      <Desktop>
        <section id="home">
          <div
            style={{
              backgroundColor: "#4d0026",
              // backgroundColor: "#660033",
              color: "white",
            }}
            className="home_Container"
            id="home"
          >
            <SimpleGrid columns={[1, 1, 1, 2]}>
              <Box height="auto">
                <div className="home_Container_box">
                  <div className="home_box_content">
                    <h5>Hello, my name is</h5>
                    <h2 id="user-detail-name">Hemensan Mahilange</h2>

                    <div className="full" id="user-detail-intro">
                      <p>I'm a</p>
                      <span>
                        <Typewriter
                          options={{
                            strings: [
                              "Mern Stack Developer.",
                              "A Tech Enthusiastic.",
                              "And ",
                              "Front End Developer.",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </div>

                    {/* <a href="Hemensan-Mahilange-Resume.pdf" class="btn" id="resume-button-2" download> 
                  <Button id="resume-button-2" >Download Resume</Button></a>           */}
                    <button
                      id="resume-button-2"
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
                        window.open(
                          "https://drive.google.com/file/d/1QeUtzyi-VBmqX7A28A7N1CymmjN5cCHD/view?usp=sharing"
                        )
                      }
                    >
                      <a
                        id="resume-link-2"
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
                  </div>
                </div>
              </Box>

              <Box height="auto">
                <div className="home_Container_box">
                  <div className="home_box_img">
                    <img class="home-img" src={profile} alt="Profile_image" />
                  </div>
                </div>
              </Box>
            </SimpleGrid>
          </div>
        </section>
      </Desktop>

      <Tablet>
        <div
          style={{
            // backgroundColor: "#4d0026",
            backgroundColor: "#660033",
            color: "white",
          }}
          className="home_Container_tablet"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_img_tablet">
                  <img class="home-img" src={profile} alt="Profile_image" />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_tablet">
                <div className="home_box_content_tablet">
                  <h5>Hello, my name is</h5>
                  <h2>Hemensan Mahilange</h2>
                  <div className="full_tablet">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Developer.",
                            "Mern Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <Flex justify="center">
                    <Button
                      mt={10}
                      h="50px"
                      fontFamily="Poppins"
                      w="150px"
                      fontWeight="bold"
                      fontSize="20px"
                      color="white"
                      bg="#dc143c"
                      _hover={{
                        background: "transparent",
                        color: "#dc143c",
                        border: "2px solid #dc143c",
                      }}
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/1QeUtzyi-VBmqX7A28A7N1CymmjN5cCHD/view?usp=sharing"
                        );
                        const link = document.createElement("a");
                        link.setAttribute("id", "resume-link-2");
                        link.href = resume;
                        link.download = "Hemensan-Mahilange.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      RESUME
                    </Button>
                  </Flex>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </Tablet>

      <Mobile>
        <div
          style={{
            backgroundColor: "#660033",
            color: "white",
          }}
          className="home_Container_mobile"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_img_mobile">
                  <img class="home-img" src={profile} alt="Profile_image" />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_content_mobile">
                  <h5>Hello, my name is</h5>
                  <h2>Hemensan Mahilange</h2>
                  <div className="full_phone">
                    <p>I'm a</p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Developer.",
                            "Mern Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>

                  <a
                    href="Hemensan-Mahilange-Resume.pdf"
                    class="btn"
                    id="resume-button-2"
                    download
                  >
                    <Flex justify="center">
                      <Button id="resume-button-2">Download Resume</Button>
                    </Flex>
                  </a>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </Mobile>
    </>
  );
};
export default Hero;
