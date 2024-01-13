import { Box, Typography } from "@mui/material";
import React from "react";
import "./Section.css";

const Section = ({
  title = "Section Title",
  titleClassName,
  children,
  description,
}) => {
  return (
    <Box className="section-wrapper">
      <Box className="section-title-box">
        <Typography
          className={`${titleClassName} section-title`}
          component="h1"
        >
          {title}
        </Typography>
        <Typography className="section-description" component="p">
          {description}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default Section;
