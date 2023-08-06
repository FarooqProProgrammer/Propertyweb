import React from 'react'

export default function HeaderFeatured() {
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
                    <a href="">As Featured In</a>
                    <meta itemProp="name" content="As Featured In" />
                    <meta
                        itemProp="item"
                        content="https://www.propertyturkey.com/as-featured-in"
                    />
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
                    Investing in international property by the London Magazine
                    <meta
                        itemProp="name"
                        content="Investing in international property by the London Magazine"
                    />
                    <meta
                        itemProp="item"
                        content="https://www.propertyturkey.com/as-featured-in/investing-in-international-property-by-the-london-magazine"
                    />
                    <meta itemProp="position" content={4} />
                </span>
            </div>
        </div>

    )
}
