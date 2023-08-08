import React from "react";
import HomeLogo from "../../assets/home-logo.svg";
import { Link } from "react-router-dom";

export default function FeaturedBreadCrumb() {
  return (
    <div className="breadcrumbs">
      <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
        <span
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <Link to="/">
            <img src={HomeLogo} className="img-fluid" alt="" />
          </Link>
        </span>
        <span>
          <i className="fa fa-angle-right" />
        </span>
        <span>
          <i className="fa fa-angle-right" />
        </span>
        <span
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          Dive in to American real estate say The Guardian
        </span>
      </div>
    </div>
  );
}
