import React from 'react'

export default function SellPropertyBreadCrumb() {
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
            src="https://www.propertyturkey.com/front/image/images2019/Icons/home-logo.svg"
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
        <a href="">Contact Us</a>

        <meta itemProp="position" content={5} />
      </span>
      <span>
        <i className="fa fa-angle-right" />
      </span>
      <span
        itemProp="itemListElement"
        itemScope=""
        itemType="http://schema.org/ListItem"
      >
        Sell your home with Property Turkey
        <meta itemProp="name" content="Sell your home with Property Turkey" />
        <meta
          itemProp="item"
          content="https://www.propertyturkey.com/contact-us/sell-your-home-with-property-turkey"
        />
        <meta itemProp="position" content={4} />
      </span>
    </div>
  </div>
  
  )
}
