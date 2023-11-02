import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "@/src/feature/Home/SkillSection/style";

export const BannerTitleSection = ({ Title, subTitle, description }) => {
  return (
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
      <Box style={style.headingDetails}>
        <Typography variant="h5">{Title}</Typography>
        <Typography variant="h2">{subTitle}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Grid>
  );
};
