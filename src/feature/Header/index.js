import React, { useState, useEffect } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import styles from "./style";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    const sections = ["home", "about", "skills", "projects", "blog", "contact"];
    const targetSection = sections[newValue];

    scrollToSection(targetSection);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    position: isScrolled ? "fixed" : "fixed",
    background: isScrolled ? "#fff" : "transparent",
    color: isScrolled ? "#7f8549" : "#000",
    transition: isScrolled ? "background-color 0.10s ease" : "",
    boxShadow: isScrolled ? "0 1px 6px 0 rgba(32, 33, 36, 0.28)" : "none",
  };

  return (
    <Box>
      <AppBar sx={styles.navbar} style={headerStyle}>
        <Toolbar>
          <Typography
            sx={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Typography
              component="h1"
              style={{ fontSize: "24px", fontWeight: "600" }}
            >
              Jupiter
            </Typography>
          </Typography>

          <Tabs
            sx={{ marginLeft: "auto" }}
            indicatorColor="primary"
            textColor="#fff"
            value={value}
            TabIndicatorProps={{
              style: { background: "white" },
            }}
            onChange={handleTabChange}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Skills" />
            <Tab label="Projects" />
            <Tab label="Blog" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
