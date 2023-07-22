import React from "react";
import { IconButton, Link, Stack } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const ContactIcon = () => {
  return (
    <Stack
      align="center"
      justify="space-around"
      direction={{ base: "row" }}
      spacing={{ base: 6, md: 8, lg: 20 }}
    >
      <Link
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXVHrFlWVJbLndGHSWnhmGLcvrjrdklmVVDRbXVNCfPZTPrtvjQwPtxgcShXFfnQKhGq"
        target={"_blank"}
      >
        <IconButton  id="contact-email"
          aria-label="email"
          _hover={{
            color: "rgb(234,67,53)",
            cursor: "pointer",
            transform: " scale(1.2)",
            transition: "all 0.5s ease-in-out",
          }}
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<MdOutlineEmail size="28px" />}
          isRound
        />
      </Link>
      <Link id="contact-github" href="https://github.com/9802HEMENSAN" target={"_blank"} >
        <IconButton
          aria-label="github"
          _hover={{
            color: "rgb(36,41,47)",
            cursor: "pointer",
            transform: " scale(1.2)",
            transition: "all 0.5s ease-in-out",
          }}
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<BsGithub size="28px" />}
          isRound
        />
      </Link>
      <Link  id="contact-linkedin" 
        href="https://www.linkedin.com/in/hemensan-mahilange-4a9499242/"
        target={"_blank"}
      >
        <IconButton
          aria-label="linkedin"
          _hover={{
            color: "rgb(9,97,184)",
            cursor: "pointer",
            transform: " scale(1.2)",
            transition: "all 0.5s ease-in-out",
          }}
          variant="ghost"
          size="lg"
          icon={<BsLinkedin size="28px" />}
          isRound
        />
      </Link>
    </Stack>
  );
};

export default ContactIcon;
{/* <div class="github-icon-contact animated">
                    <img src="Images/icons8-phone-50.png" alt="">
                    <p id="contact-phone"><a style="color: black;" href="tel:+919582820389"
                            target="_blank">+91-9582820389</a></p>
                </div> */}