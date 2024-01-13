import React from "react";
import Section from "../../components/Section/Section";
import TopStoriesCard from "../../components/TopStoriesCard/TopStoriesCard";
import { Box, Button } from "@mui/material";
import { topStories } from "../../Constants/TopStories";
import { trending } from "../../Constants/Trending";
import { topDestination } from "../../Constants/TopDestination";
import TrendingCard from "../../components/TrendingCard/TrendingCard";
import TopDestinationCarousel from "../../components/TopDestinationCarousel/TopDestinationCarousel";

import "./HomePage.css";

const HomePage = () => {
  return (
    <Box className="container home-page-container">
      <Section title="Top Stories">
        <Box className="top-stories-card-container">
          {topStories.length > 0 &&
            topStories.map((story) => {
              return <TopStoriesCard key={story.id} data={story} />;
            })}
        </Box>
        <Box className="view-more-btn-wrapper">
          <Button disableRipple variant="outlined" className="btn btn-outlined">
            View More Article
          </Button>
        </Box>
      </Section>
      <Section title="Trending">
        <Box className="trending-card-container">
          {trending.length > 0 &&
            trending.map((story) => {
              return <TrendingCard key={story.id} data={story} />;
            })}
        </Box>
      </Section>
      <Section
        title="Top Destination"
        description="Tick one more destination off of your bucket list with one of our most popular vacations in 2022"
      >
        <Box className="top-destination-container">
          <TopDestinationCarousel sliderData={topDestination} />
        </Box>
      </Section>
    </Box>
  );
};

export default HomePage;
