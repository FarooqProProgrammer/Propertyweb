import React from 'react'

export default function TurkeyNewsHeader() {
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
                    <a  className=''>
                        <img
                            src="https://www.propertyturkey.com/front/image/images2019/Icons/home-logo.svg"
                            className="img-fluid"
                            alt=""
                        />
                    </a>
                    <meta itemProp="name" content="Home" />
                    <meta itemProp="item" content="https://www.propertyturkey.com" />
                    <meta itemProp="position" content={1} />
                </span>
                <span>
                    <i className="fa fa-angle-right" />
                </span>
                <span
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                >
                    Turkish property &amp; economy news
                </span>
            </div>
        </div>

    )
}
