import { Box, Typography } from "@mui/material";
import React from "react";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <Box className="no-match-container">
      <img src="./images/brokenCup.png" alt="broken cup" />
      <Typography component="h1">This Page is Broken</Typography>
    </Box>
  );
};

export default NoMatch;
