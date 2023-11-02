import React from "react";
import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const ProjectContact = () => {
  return (
    <section
      style={{
        backgroundColor: "rgb(177 180 147)",
        marginTop: "120px",
      }}
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={8}>
            <Box>
              <Typography variant="h4">Have a project on your mind.</Typography>
              <Typography variant="body1">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "16px" }}
              >
                Contact me
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Home/author.png.webp"
              alt="Author"
              width={300}
              height={200}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProjectContact;
