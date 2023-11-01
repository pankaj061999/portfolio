import { Grid, Typography } from "@mui/material";
import React from "react";

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
      <Typography
        variant="h5"
        sx={{ textTransform: "capitalize", color: "#b1b493" }}
      >
        {Title}
      </Typography>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {subTitle}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Grid>
  );
};
