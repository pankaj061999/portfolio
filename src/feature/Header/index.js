import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./style";
import dynamic from "next/dynamic";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
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

  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleTabChange = (newValue) => {
    setValue(newValue);
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
            onChange={handleTabChange}
            value={value}
            TabIndicatorProps={{
              style: { background: "white" },
            }}
          >
            <Tab label="Home" onClick={() => router.push(`/`)} />
            <Tab label="About" />
            <Tab label="Skills" />
            <Tab label="Services" />
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
