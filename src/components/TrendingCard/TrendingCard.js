import React from "react";
import "./TrendingCard.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const TrendingCard = ({ data }) => {
  return (
    <Card className="trending-card">
      <CardContent className="trending-card-content">
        <Box className="trending-card-img-wrapper">
          <Link to="">
            <img src={data.imgUrl} alt="card media" />
          </Link>
        </Box>
        <Box className="trending-card-typo-wrapper">
          <Button
            disableRipple
            variant="contained"
            className="btn btn-light-blue"
          >
            Technology
          </Button>
          <Typography component="h5">{data.title}</Typography>
          <Box className="trending-card-user-info-wrapper">
            <Avatar src={data.userImageUrl} alt={data.userName} />
            <Typography component="p">{data.userName}</Typography>
            <Typography component="p">{data.publishDate}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrendingCard;
