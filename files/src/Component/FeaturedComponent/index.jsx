import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { FeaturedData } from "../../Data";
import ElasticSlider from "../../ReUseAbleComponent/ElasticSlider";
import Image from "../../ReUseAbleComponent/Image";
import { Box } from "@mui/material";
import { TypographyComponent } from "../../ReUseAbleComponent/TypographyComponent";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

export default function FeaturedComponent() {
  return (
    <section className="featured-in">
      <Box className="wrap-dis-85 wrap wrap-tab-11 wrap-mob-11">
        <TypographyComponent
          varient={"h2"}
          className="title-lined abhaya padding-bottom-1"
        >
          Property USA <b>Featured In</b>
        </TypographyComponent>

        <Box className="">
          <ElasticSlider ItemShop={4}>
            {FeaturedData.map((item) => {
              return (
                <Box className="card" style={{ width: "18rem" }}>
                  <Image src={item.img} className="card-img-top" alt="..." />
                  <Box className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <TypographyComponent varient={"p"} className="card-text">
                      {item.desc}
                    </TypographyComponent>
                  </Box>
                </Box>
              );
            })}
          </ElasticSlider>
        </Box>

        <Box className="text-center padding-3">
          <Link
            to="/featured"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <StyledButton title={"View All"} width={"100px"} size={"small"} />
          </Link>
        </Box>
      </Box>
    </section>
  );
}
