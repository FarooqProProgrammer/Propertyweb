import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { Box, Typography } from "@mui/material";

export default function CardComponent() {
  return (
    <Box className="col-dis-12 col-tab-12 col-mob-12 padding-bottom-2 listing-card">
      <Box className="card tvlist-card">
        <Box className="row no-gutters shadow-card">
          <Box className="col-md-4 position-relative">
            <Link
              className="flex blogCardImg"
              to="blog-turkey/exploring-the-bosphorus-strait-and-the-heart-of-istanbul"
            >
              <Image
                className="img-width-height-100 lazyloaded"
                alt="Exploring the Bosphorus Strait and the Heart of Istanbul"
                src="https://www.propertyturkey.com/files/yalikavak-bodrum-yachts_1681071686.jpg"
              />
            </Link>
          </Box>
          <Box className="col-md-8">
            <Box className="card-body card-body-blog">
              <Typography varient="p" className="propertynews-date">
                <span>
                  <span className="clr-pt-dark">
                    <Link to="" title="istanbul">
                      istanbul
                    </Link>
                  </span>
                  <span className="clr-pt-dark">
                    <Link to="related-blogs/keyword?keyword=" title="" />
                  </span>
                  &nbsp;&nbsp;/&nbsp;&nbsp; 03 May 2023
                </span>
              </Typography>
              <Link
                className="propertynews-title"
                to="blog-turkey/exploring-the-bosphorus-strait-and-the-heart-of-istanbul"
                title="Exploring the Bosphorus Strait and the Heart of Istanbul"
              >
                Exploring the Bosphorus Strait and the Heart of Istanbul
              </Link>
              <span className="propertynews-span" limit={300}>
                ‍The Bosphorus Strait, also called the Istanbul Strait, or
                Bosporus Strait, has captivated empires, artists, and travellers
                for centuries. Alongside the naval traffic, this narrow, winding
                waterway of north western Turkey meanders through the heart of
              </span>
              <Box className="margin-top-1 propertynews-btn">
                <Link
                  to="blog-turkey/exploring-the-bosphorus-strait-and-the-heart-of-istanbul"
                  className="btn tvlist-card--btn"
                  target="_blank"
                >
                  Read More
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
