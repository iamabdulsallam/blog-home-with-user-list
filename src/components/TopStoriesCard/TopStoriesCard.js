import React from "react";
import "./TopStoriesCard.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const TopStoriesCard = ({ data }) => {
  return (
    <Card className="top-storiees-card">
      <CardContent className="top-storiees-card-content">
        <Box className="top-storiees-card-img-wrapper">
          <Link to="">
            <img src={data.imgUrl} alt="card media" />
          </Link>
        </Box>
        <Box className="top-storiees-card-typo-wrapper">
          <Button
            disableRipple
            variant="contained"
            className="btn btn-light-blue"
          >
            Technology
          </Button>
          <Typography component="h5">{data.title}</Typography>
          <Box className="top-storiees-card-user-info-wrapper">
            <Avatar src={data.userImageUrl} alt={data.userName} />
            <Typography component="p">{data.userName}</Typography>
            <Typography component="p">{data.publishDate}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TopStoriesCard;
