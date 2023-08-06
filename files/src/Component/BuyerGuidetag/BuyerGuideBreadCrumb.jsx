import React from 'react'
import { Link } from 'react-router-dom'
import HomeLogo from "../../assets/home-logo.svg"


export default function BuyerGuideBreadCrumb() {
  return (
    <div
      className="breadcrumbs"
     >
      <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
        <span
        >
          <Link >
            <img
              src={HomeLogo}
              className="img-fluid"
              alt=""
            />
          </Link>
        </span>
        <span>
          <i className="fa fa-angle-right" />
        </span>
        <span
        >
          Buyer Guide
        </span>
      </div>
    </div>
  )
}
