import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeLogo from "../../assets/home-logo.svg"

export default function NewsHeader() {
    return (
        <div
        className="breadcrumbs"
        itemScope=""
        itemType="http://schema.org/BreadcrumbList"
      >
        <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
          <span
            itemProp="itemListElement"
            itemScope=""
            itemType="http://schema.org/ListItem"
          >
            <a href="">
              <img
                src={HomeLogo}
                className="img-fluid"
                alt=""
              />
            </a>
           </span>
          <span>
            <i className="fa fa-angle-right" />
          </span>
          <span
            itemProp="itemListElement"
            itemScope=""
            itemType="http://schema.org/ListItem"
          >
            Property Turkey Blog
            <meta itemProp="name" content="Property Turkey Blog" />
            <meta
              itemProp="item"
              content="https://www.propertyturkey.com/blog-turkey"
            />
            <meta itemProp="position" content={4} />
          </span>
        </div>
      </div>
      


    )
}
