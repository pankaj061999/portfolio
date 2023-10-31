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

const MySkillSection = () => {
  const skills = [
    { name: "CSS", value: 95 },
    { name: "HTML", value: 98 },
    { name: "jQuery", value: 68 },
    { name: "Photoshop", value: 92 },
    { name: "WordPress", value: 83 },
    { name: "SEO", value: 95 },
  ];

  return (
    <Box component="section" id="skills-section" sx={{ marginTop: "120px" }}>
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
          <Typography
            variant="h5"
            sx={{ textTransform: "capitalize", color: "#b1b493" }}
          >
            Skills
          </Typography>
          <Typography variant="h2" sx={{ mb: 4 }}>
            My Skills
          </Typography>
          <Typography variant="body1">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ marginTop: "52px", gap: "50px" }}
        >
          {/*  Progress bar according to skill bases*/}
          {skills.map((skill, index) => (
            <Grid
              item
              xs={12}
              lg={4}
              key={index}
              sx={{ maxWidth: "27% !important" }}
            >
              <Paper
                elevation={10}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{skill?.name}</Typography>
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={skill.value}
                    size={100}
                    thickness={4}
                    color="primary"
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
                    <Typography
                      variant="h5"
                      component="div"
                      color="textSecondary"
                    >
                      {`${Math.round(skill.value)}%`}
                    </Typography>
                  </Box>
                </Box>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ marginLeft: "120px" }}
                >
                  <Grid item xs={6}>
                    <Typography variant="h6" className="font-weight-bold mb-0">
                      28%
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Last week
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" className="font-weight-bold mb-0">
                      60%
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Last month
                    </Typography>
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
