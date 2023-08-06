import React from 'react'
import HomeLogo from "../../assets/home-logo.svg"

export default function InvestingHeader() {
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
                    <a >
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

                >
                    <a href="">Buyer Guide</a>
                </span>
                <span>
                    <i className="fa fa-angle-right" />
                </span>
                <span
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                >
                    Turkish property investment
                </span>
            </div>
        </div>

    )
}
