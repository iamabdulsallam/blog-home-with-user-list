import React from "react";
import Slider from "react-slick";
import "./TopDestinationCarousel.css";
import { Box, Typography } from "@mui/material";
const TopDestinationCarousel = ({ sliderData = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings} className="carousel-container">
        {sliderData.length > 0 &&
          sliderData.map((slide) => {
            return (
              <Box key={slide.id} className="carousel-slide">
                <Box className="carousel-slide-content">
                  <img src={slide.imgUrl} alt="slide" />
                  <Box className="carousel-slide-overlay">
                    <Typography
                      className="carousel-slide-destination-name"
                      component="p"
                    >
                      {slide.destinationName}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Slider>
    </>
  );
};

export default TopDestinationCarousel;
