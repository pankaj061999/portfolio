import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import style from "../SkillSection/style";
import { projects } from "@/utils/common";

const ProjectSection = () => {
  return (
    <section id="projects">
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ pb: 5, marginTop: "80px" }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <Box sx={style.headingDetails}>
              <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
                Accomplishments
              </Typography>
              <Typography variant="h2" sx={{ mb: 4 }}>
                Our Projects
              </Typography>
              <Typography variant="body1">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {projects?.flat(1)?.map((project, index) => (
            <Grid item key={index} xs={12} md={3} sx={{ mb: 4 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ProjectSection;
