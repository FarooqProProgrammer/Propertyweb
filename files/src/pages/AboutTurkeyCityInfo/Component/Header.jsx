import React from 'react'
import HomeLogo from "../../../assets/home-logo.svg"
import { Link } from 'react-router-dom'


export default function Header({ data }) {
  return (
    <div
      className="breadcrumbs"
    >
      <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
        <span
        >
          <Link to="/">
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
          <a href="/">{data ? data.link : 'Loading'}</a>
        </span>
        <span>
          <i className="fa fa-angle-right" />
        </span>
        <span

        >
          Turkish Mediterranean Region
        </span>
      </div>
    </div>

  )
}
