import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import dynamic from "next/dynamic";
import Image from "next/image";
import { detailsObj } from "@/utils/common";

const CounterBox = styled(Box)`
  text-align: center;
  padding: 30px 15px;
`;

const DetailsSection = () => {
  return (
    <Box component="section" id="section-counter" sx={{ marginTop: "20px" }}>
      <Container>
        <Grid container spacing={2}>
          {detailsObj?.length > 0 &&
            detailsObj.flat(1).map((item) => {
              return (
                <Grid xs={12} md={3} key={item?.id}>
                  <CounterBox
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        background: "#3ddea0",
                      }}
                    >
                      <Image
                        src={item?.Imagepath}
                        height={40}
                        width={40}
                        style={{ marginTop: "10px" }}
                      />
                    </Box>
                    <Box sx={{ fontSize: "26px", fontWeight: "bold" }}>
                      {item?.number}{" "}
                      <Typography variant="h6" sx={{ fontSize: "20px" }}>
                        {item?.name}
                      </Typography>
                    </Box>
                  </CounterBox>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(DetailsSection), { ssr: false });
