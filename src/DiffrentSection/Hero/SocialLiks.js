import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import styles from "./Social.module.css";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/hemensan-mahilange-4a9499242/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> GitHub
        </>
      ),
      href: "https://github.com/9802HEMENSAN",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto: hmahilange9802@gmail.com",
    },
  
  ];
  return (
    <div className={styles.social_links}>
      <ul className={styles.all_list}>
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={styles.list}>
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
