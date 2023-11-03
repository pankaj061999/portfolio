import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  LinearProgress,
  CircularProgress,
  Paper,
} from "@mui/material";
import dynamic from "next/dynamic";
import style from "./style";

const MySkillSection = () => {
  const skills = [
    { name: "CSS", value: 95 },
    { name: "HTML", value: 98 },
    { name: "NEXT.js", value: 90 },
    { name: "React.js", value: 92 },
    { name: "Node.js", value: 60 },
    { name: "SEO", value: 95 },
    { name: "GA-Tracking", value: 85 },
    { name: "MongoDB", value: 55 },
  ];

  return (
    <Box component="section" id="skills-section" sx={style.skillSection}>
      <Container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={style.headingDetails}>
            <Typography variant="h5">Skills</Typography>
            <Typography variant="h2">My Skills</Typography>
            <Typography variant="body1">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={3.5}>
          {/*  Progress bar according to skill bases*/}
          {skills.map((skill, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <Paper
                elevation={2}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "30px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "800" }}>
                  {skill?.name}
                </Typography>
                <Box position="relative" display="inline-flex" margin="30px">
                  <CircularProgress
                    variant="determinate"
                    value={skill.value}
                    size={150}
                    thickness={2}
                    style={{ color: "#b1b493" }}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="h5" sx={{ fontWeight: "800" }}>
                      {`${Math.round(skill.value)}%`}
                    </Typography>
                  </Box>
                </Box>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  textAlign="center"
                >
                  <Grid item xs={6} borderRight="1px solid #dee2e6">
                    <Box sx={style.gridList}>
                      <Typography variant="h6">28%</Typography>
                      <Typography variant="body1">Last week</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={style.gridList}>
                      <Typography variant="h6">60%</Typography>
                      <Typography variant="body1">Last month</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(MySkillSection), { ssr: false });
