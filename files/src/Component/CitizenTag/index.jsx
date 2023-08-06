import React from 'react'

export default function CitizenTag() {
    return (
        <div className="endpage-main-intro ">
            <div className="endpage-title-actions">
                <div className="endpage-title">
                    <meta
                        itemProp="url"
                        content="https://www.propertyturkey.com/property-turkey-citizenship-by-investment-programme"
                    />
                    <h3 className="d-mobile"></h3>
                    <div className="endpage-actions d-mobile share-btn-pos">
                        <a href="#" className="social-shares">
                            <img
                                src="https://www.propertyturkey.com/front/image/icons/share-alt-solid.-gold.svg"
                                width={21}
                                alt=""
                            />
                        </a>
                    </div>
                    <h1 itemProp="name headline" className="page-title abhaya">
                        Turkish Citizenship by Investment Programme
                    </h1>
                    <h3 className="d-desk">
                        <div className="flex">
                            <div className="d-desk"></div>
                        </div>
                    </h3>
                    <div className="d-mobile"></div>
                </div>
                <div className="endpage-actions d-desk">
                    <a href="#" className="social-shares">
                        <img
                            src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>

    )
}
