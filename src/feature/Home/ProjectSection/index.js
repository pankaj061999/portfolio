import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/iphone.jpg",
    },
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/laptop.jpg",
    },
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/study.jpg",
    },
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/michelangelo.jpg",
    },
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/AI.jpg",
    },
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/robot.jpg",
    },
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/AItrain.jpg",
    },
    {
      title: "Branding & Illustration Design",
      image: "/images/Home/drone.jpg",
    },
  ];

  return (
    <section id="projects-section">
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
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
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
