import React from "react";
import Box from '@mui/material/Box';
import { Info as InfoIcon, Engineering as EngineeringIcon, FitnessCenter as FitnessCenterIcon } from '@mui/icons-material';
import styles from "./Menu.module.css";

const MenuItem = ({ index, activeIndex, setActiveIndex, url }) => {
  const handleItemClick = () => {
    setActiveIndex(index);
  };

  return (
    <li className={`list ${index === activeIndex ? styles.active : ''} ${styles.navItem}`} onClick={handleItemClick}>
      <a href={url} className={styles.a}>
        <Box className={styles.icon}>
          {index === 1 ? <FitnessCenterIcon/> : index === 2 ? <EngineeringIcon/> : <InfoIcon />}
        </Box>
      </a>
    </li>
  );
};

export { MenuItem };
