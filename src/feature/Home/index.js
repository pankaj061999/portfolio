import { Box } from "@mui/material";
import React from "react";
import { BannerComponent } from "./Banner";
import DetailsSection from "./DetailsSection";
import AboutSection from "./About/index";
import SkillSection from "./SkillSection";

export const HomeComponent = () => {
  return (
    <Box style={{ marginBottom: "20px" }}>
      <BannerComponent />
      <DetailsSection />
      <AboutSection />
      <SkillSection />
    </Box>
  );
};
