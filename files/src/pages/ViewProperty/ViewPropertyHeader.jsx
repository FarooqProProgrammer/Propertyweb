import React from 'react'
import HomeLogo from "../../assets/home-logo.svg"
import Image from '../../ReUseAbleComponent/Image'
import { Box } from '@mui/material'

export default function ViewPropertyHeader() {
  return (
    <Box
      className="breadcrumbs"
      itemScope=""
      itemType="http://schema.org/BreadcrumbList"
    >
      <Box className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
        <span
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <a >
            <Image
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
          <a >
            Real Estate
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
          <a >
            Istanbul
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
          <a >
            Sisli
          </a>
        </span>
        <span>
          <i className="fa fa-angle-right" />
        </span>
        <span

        >
          Designer penthouse-style apartment in heart of Istanbul
        </span>
      </Box>
    </Box>

  )
}
