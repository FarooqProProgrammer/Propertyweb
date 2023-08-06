import { Box } from "@mui/material";
import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import Location from "../assets/location.svg";
import { useSelector } from "react-redux";

export default function PropertyCard({
  title,
  LocationSvg,
  BathroomSvg,
  location,
  ModalListerner,
  Overview,
  WhishListListener,
  Property_Name,
  NavigateListener,
  img,
}) {
  const states = useSelector((state) => state.AboutTurkey.Nav);

  return (
    <Box
      className={`listing-card col-12 col-md-6 col-lg-3 margin-ver-1 ${
        states ? "z-50" : "-z-50"
      } `}
    >
      <Box style={{ width: 300 }} className="property-box  cf hot-property">
        <Box className="position-relative">
          <Link
            to="/viewproperty"
            className="card-type btn --circle position-abs card-label raleway border-none opacity-73"
          >
            <Typography>{title}</Typography>
          </Link>
          <Link
            className="btn --circle position-abs heart-label border-none"
            onClick={WhishListListener}
            data-id={6199}
          >
            <Typography className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.189"
                height="18.465"
                viewBox="0 0 20.189 18.465"
              >
                <path
                  id="Heart"
                  d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                  transform="translate(0.975 0.975)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  fillRule="evenodd"
                />
              </svg>
            </Typography>
          </Link>
          <figure className="cardImgInListing skelton-loading">
            <Link rel="nofollow" className="prevent-newtab-onmobile">
              <Image className=" lazyloaded" src={img} />
            </Link>
          </figure>
          <Link
            onClick={NavigateListener}
            to="/viewproperty"
            className="property-title abhaya skelton-loading
                                prevent-newtab-onmobile cursor-pointer"
          >
            {Property_Name}
          </Link>
          <p
            rel="nofollow"
            onClick={NavigateListener}
            className="prevent-newtab-onmobile"
          >
            <p className="skelton-loading">{Overview}</p>
          </p>
          <Box className="features skelton-loading">
            <Box className="location">
              <Image className="icon-location img-fluid" src={LocationSvg} />
              <Typography className="quantity">{location}</Typography>
            </Box>
            <Box className="bedrooms flex content-space-evenly">
              <Box>
                <Image className="icon-bedroom img-fluid" src={BathroomSvg} />
              </Box>
              <Box>
                <Typography className="quantity">2</Typography>
              </Box>
            </Box>
            <Box className="bathrooms flex content-space-evenly padding-left-05">
              <Box>
                <Image className="icon-bathrooms img-fluid" src={BathroomSvg} />
              </Box>
              <Box>
                <Typography className="quantity">1</Typography>
              </Box>
            </Box>
            <Box className="quantity  padding-dir-05">75 sq.m</Box>
          </Box>
          <Box className="card-actions flex padding-1 content-space-between skelton-loading">
            <Box className="price flex-align-self-center">
              <Typography className="unit-price flex">$154,300</Typography>
            </Box>
            <Box className="h-[40px] flex justify-center items-center bg-[#5081ff] ">
              <Link
                className="mt-3 cursor-pointer"
                id="inline"
                title="Quick Enquire"
                onClick={ModalListerner}
              >
                <p className="text-white">Quick Enquire</p>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
