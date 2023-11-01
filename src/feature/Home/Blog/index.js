import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { BannerTitleSection } from "@/src/common/BannerTitle";

const BlogSection = () => {
  const blogData = [
    {
      image: "/images/image_1.jpg",
      date: "July 03, 2020",
      author: "Admin",
      comments: 3,
      title: "Why Lead Generation is Key for Business Growth",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "images/image_1.jpg",
      date: "July 03, 2020",
      author: "Admin",
      comments: 3,
      title: "Why Lead Generation is Key for Business Growth",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "images/image_1.jpg",
      date: "July 03, 2020",
      author: "Admin",
      comments: 3,
      title: "Why Lead Generation is Key for Business Growth",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <section className="ftco-section bg-light" id="blog-section">
      <Container>
        <BannerTitleSection
          Title={"Our Blog"}
          subTitle={""}
          description={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          }
        />
      </Container>
    </section>
  );
};

export default BlogSection;
