import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Box from '@mui/material/Box';

export const Hero = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Eliav</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:eliav4@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </Box>
      <img
        src={getImageUrl("hero/dive.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <Box className={styles.topBlur} />
      <Box className={styles.bottomBlur} />
    </Box>
  );
};
