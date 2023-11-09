import { Box } from "@mui/material";
import { HomeComponent } from "@/src/feature/Home";
import { BlogComponent } from "@/src/feature/BlogComponent";

export default function Blog() {
  return (
    <Box style={{ marginTop: "70px", color: "#fff", background: "#090b0c" }}>
      <BlogComponent />
    </Box>
  );
}
