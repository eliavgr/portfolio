import React, { useState } from "react";
import Box from '@mui/material/Box';
import styles from "./Menu.module.css";
import { getImageUrl } from "../../utils";
import { MenuItem } from "./menu-item";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const urls = ["#about", "#experience", "#projects"];

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/portfolio">
        Portfolio
      </a>
      {/* <Box className={styles.menu}>
        {menuOpen ? (
          <Box className={styles.navigation}>
            <ul className={styles.navItems}>
              {urls.map((url, index) => (
                <MenuItem
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  url={url}
                />
              ))}
              <Box className={styles.indicator}><span></span></Box>
            </ul>
          </Box>
        ) : (
          <></>
        )}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </Box> */}
    </nav>
  );
};

    
