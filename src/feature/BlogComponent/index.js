import { Box } from "@mui/material";
import React from "react";
import BlogHeader from "./BlogHeader";
import TableOfContents from "./BlogTableContainer";

export const BlogComponent = () => {
  return (
    <Box>
      <BlogHeader />
      <TableOfContents />
    </Box>
  );
};
