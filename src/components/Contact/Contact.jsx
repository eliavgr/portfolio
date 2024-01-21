import React from "react";
import Box from '@mui/material/Box';

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <Box className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </Box>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:eliav4@gmail.com">eliav4@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/eliav-grabovsky-34b1b290/">linkedin.com/eliav-grabovsky</a>
        </li>
        {/* <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li> */}
      </ul>
    </footer>
  );
};
