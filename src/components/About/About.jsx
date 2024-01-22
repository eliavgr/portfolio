import React from "react";
import Box from '@mui/material/Box';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CardTravelIcon from '@mui/icons-material/CardTravel';
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <Box className={styles.content}>
        <img
          src={getImageUrl("about/vector.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <KeyboardIcon style={{ width: '2em',  height: '2em' }} className={styles.imageItem}/>
            <Box className={styles.aboutItemText}>
              <h3>Fullsatck Developer</h3>
              <p>
                I'm a Fullsatck developer with experience in building responsive
                and optimized websites
              </p>
            </Box>
          </li>
          <li className={styles.aboutItem}>
            <FlashOnIcon style={{ width: '2em',  height: '2em' }} className={styles.imageItem}/>
            <Box className={styles.aboutItemText}>
              <h3>Electornics Engineer</h3>
              <p>
              I did a bachelor's degree in electrical and electronics engineering
              during my high school studies
              </p>
            </Box>
          </li>
          <li className={styles.aboutItem}>
            <CardTravelIcon style={{ width: '2em',  height: '2em' }} className={styles.imageItem} />
            <Box className={styles.aboutItemText}>
              <h3>MBA</h3>
              <p>
              I graduated with honors with a master's degree
              in business administration with a specialization in finance
              </p>
            </Box>
          </li>
        </ul>
      </Box>
    </section>
  );
};
