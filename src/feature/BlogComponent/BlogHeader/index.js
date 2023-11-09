import React from "react";
import { Container, Typography, Box, Grid, Avatar } from "@mui/material";

function BlogHeader() {
  return (
    <header className="py-20 text-center">
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <time dateTime="2023-10-25">October 25, 2023</time>
          </Grid>
          <Grid item>
            <Typography variant="body2">·</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">11 min read</Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          mt={2}
          fontWeight="bold"
        >
          <span
            data-br=":R4qmmljda:"
            data-brr="1"
            style={{
              display: "inline-block",
              verticalAlign: "top",
              textDecoration: "inherit",
              maxWidth: "671px",
            }}
          >
            Linearizable Distributed Map On Kafka
          </span>
        </Typography>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          mt={8}
        >
          <Grid item>
            <Avatar
              alt="Pankaj Kumar Meena"
              src="/images/Home/pankajpic.jpg"
              loading="lazy"
              width={64}
              height={64}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              component="a"
              href="/blog/author/sancar"
              style={{
                textDecoration: "inherit",
                color: "inherit",
              }}
            >
              Pankaj Kumar Meena
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" style={{ color: "#869390" }}>
              Senior Software Engineer @Upstash
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}

export default BlogHeader;
