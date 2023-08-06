import React from 'react'
import { Link } from 'react-router-dom'
export default function Featuredtitle() {
    return (
        <div className="endpage-main-intro ">
            <div className="endpage-title-actions">
                <div className="endpage-title">
                    <meta
                        itemProp="url"
                        content="https://www.propertyturkey.com/as-featured-in/investing-in-international-property-by-the-london-magazine"
                    />
                    <h3 className="d-mobile">
                        <label className="date">Updated : 06 December 2015</label>
                        <label className="date ">Created : 04 May 2014</label>
                    </h3>
                    <div className="endpage-actions d-mobile share-btn-pos">
                        <Link href="#" className="social-shares">
                            <img
                                src="https://www.propertyturkey.com/front/image/icons/share-alt-solid.-gold.svg"
                                width={21}
                                alt=""
                            />
                        </Link>
                    </div>
                    <h1 itemProp="name headline" className="page-title abhaya">
                        Investing in international property by the London Magazine
                    </h1>
                    <h3 className="d-desk">
                        <div className="flex">
                            <div className="d-desk"></div>
                            <label className="date no-margin">
                                <span className="clr-pt">Updated</span> : 06 December 2015
                            </label>
                            <label className="date no-margin ml-1-important">
                                <span className="clr-pt">Created</span> : 04 May 2014
                            </label>
                        </div>
                    </h3>
                    <div className="d-mobile"></div>
                </div>
                <div className="endpage-actions d-desk">
                    <Link href="#" className="social-shares">
                        <img
                            src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </div>

    )
}
