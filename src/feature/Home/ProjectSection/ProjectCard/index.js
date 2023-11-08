import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
        transition: "transform 0.2s",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={project.image}
          alt={project.title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* {!isHovered ? ( */}
          <>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              {project?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Web Design
            </Typography>
          </>
          {/* ) : null} */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
