import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../../ReUseAbleComponent/Image";
import { PropertyTurkeyCarouselData } from "../../Data";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "./Turkish.css";
import ElasticSlider from "../../ReUseAbleComponent/ElasticSlider";
import TurkeyPropertyComponent from "../../ReUseAbleComponent/TurkeyPropertyComponent";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function TurkeyProperty() {
  return (
    <Box className="sec-about flex flex-direction-column lg:px-0 md:px-0 sm:px-1">
      <Typography varient="p" className="aboutpt-header text-center abhaya">
        <strong
          className="text-5xl"
          style={{ lineHeight: "3.5rem", display: "block" }}
        >
          Property USA
        </strong>
        <i className="font-24">for lifestyle &amp; investment</i>{" "}
      </Typography>
      <Box className="col-md-10 mx-auto margin-bottom-3 mb-3 text-center">
        <p className="text-2xl">
          Since 2001,{" "}
          <span className="font-bold text-gray-500">Property USA</span> has
          helped clients from all over the world buy
          <span className="font-bold text-gray-500">Turkish properties</span> in
          all regions of Turkey. From lifestyle buyers wishing to{" "}
          <span className="font-bold text-gray-500">
            buy a property in USA for sale,
          </span>{" "}
          to discerning investors seeking to buy property in Turkey, our range
          of luxury villas, sea view penthouse apartments, USA houses, and
          unique hotels for sale ensure a range of lifestyle and investment
          opportunities to suit any requirement. Trusted for over 20 years, our
          portfolio of{" "}
          <span className="font-bold text-gray-500">
            houses for sale in USA{" "}
          </span>
          is the widest available with offices throughout the country constantly
          sourcing new and exciting opportunities.
        </p>
      </Box>
      <Box className="row text-center ">
        <Box
          className="card-md-deck wrap wrap-dis-85 wrap-tab-11 wrap-mob-11 margin-bottom-3 mb-sm-0 owl-carousel carousel owl-images-initialized owl-loaded"
          items={3}
          margin={10}
        >
          <ElasticSlider ItemShop={3}>
            {PropertyTurkeyCarouselData.map((item) => {
              return (
                <TurkeyPropertyComponent
                  Description={item.Description}
                  Img={item.img}
                />
              );
            })}
          </ElasticSlider>
        </Box>
        <Box className="col-12">
          <Box className="text-center mt-4">
            <Link to="/invest" style={{display :'flex', justifyContent: 'center'}}>
              <StyledButton title="Read More" width={'100px'} size={'small'} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
