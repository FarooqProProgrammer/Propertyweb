import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../../ReUseAbleComponent/Image";
import { TestimonialData } from "../../Data";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import ElasticSlider from "../../ReUseAbleComponent/ElasticSlider";
import TestimonialComponent from "../../ReUseAbleComponent/TestimonialComponent";
import { TypographyComponent } from "../../ReUseAbleComponent/TypographyComponent";
import StyledButton from "../../ReUseAbleComponent/StyledButton";
import BusinessImage from "../../assets/business-ptjpg__large__720.jpg";

export default function Testimonial() {
  return (
    <section id="testimonials" className="testemonial-carosuel px-[50px]">
      <TypographyComponent varient={"h2"} className="title-lined abhaya">
        Our clients <strong className="grey-label">Testimonials</strong>
      </TypographyComponent>
      <Box className="" style={{ marginLeft: 10 }}>
        <ElasticSlider ItemShop={3}>
          {TestimonialData.map((item) => {
            return (
              <TestimonialComponent
                Title={item.title}
                Description={item.Description}
              />
            );
          })}
        </ElasticSlider>
      </Box>
      <Box className="text-center p-3-sm padding-top-1">
        <Link
          to="/testimonials"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <StyledButton title="Read More" width={"100px"} size={"small"} />
        </Link>
      </Box>
      <Box className="d-mobile">
        <Box className="container">
          <Box className="card position-relative custom-youtube-video-1">
            <Image
              className="custom-youtube-video--bigimg-1 lazyloaded"
              alt=""
              src={BusinessImage}
            />
            <Image
              className="play_video_youtube-1 lazyloaded"
              alt=""
              src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-brands.svg"
            />
            <iframe
              width="100%"
              height={315}
              className="w-sm-100 hide lazyload"
              data-src="https://www.youtube.com/embed/preRes-n9Ew"
              frameBorder={0}
              title="Lead Youtube"
            ></iframe>
            <Box className="card-body text-center" id="insertbefore-youtube-1">
              <h2 className="title-lined abhaya bold clr-pt-darkgrey font-26">
                Property USA Culture
              </h2>
              <p className="card-text featuredin-title">
                Tap into our unique
                <br /> Style and Culture
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
