import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { Box } from "@mui/material";
import { Typography } from "antd";
import HomeLogo from "../assets/home-logo.svg";

export default function Header({ title }) {
  return (
    <Box
      className="breadcrumbs"
      itemScope=""
      itemType="http://schema.org/BreadcrumbList"
    >
      <Box className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
        <Typography
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <Link to="/">
            <Image src={HomeLogo} className="img-fluid" alt="" />
          </Link>
          <meta itemProp="name" content="Home" />
          <meta itemProp="item" content="https://www.propertyturkey.com" />
          <meta itemProp="position" content={1} />
        </Typography>
        <Typography>
          <i className="fa fa-angle-right" />
        </Typography>
        <Typography
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
