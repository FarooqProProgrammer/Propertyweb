import React from 'react'
import RawHTMLRenderer from '../../../ReUseAbleComponent/RawHTMLRenderer';
import "./index.css"


export default function CityGuide({data}) {
 
    return (
        <div className="buyer-guide" style={{ backgroundColor: "#f7f5f2" }}>
            <div className="row">
                <div className="col-12 col-md-3 buyer-guide--side-bar-bg">
                    <div className="container-fluid">
                        <p className="buyer-guide--title"> About Turkey</p>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Mediterranean region">
                                    Mediterranean region
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="active">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/turkish-mediterranean-region"
                                        title="Turkish Mediterranean Region"
                                    >
                                        Turkish Mediterranean Region
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-alanya"
                                        title="About Alanya"
                                    >
                                        About Alanya
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-antalya"
                                        title="About Antalya"
                                    >
                                        About Antalya
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-belek"
                                        title="About Belek"
                                    >
                                        About Belek
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-dalaman"
                                        title="About Dalaman"
                                    >
                                        About Dalaman
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-kalkan"
                                        title="About Kalkan"
                                    >
                                        About Kalkan
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-kas"
                                        title="About Kas"
                                    >
                                        About Kas
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-kemer"
                                        title="About Kemer"
                                    >
                                        About Kemer
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-side"
                                        title="About Side"
                                    >
                                        About Side
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Aegean region">
                                    Aegean region
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/turkish-aegean-region"
                                        title="Turkish Aegean region"
                                    >
                                        Turkish Aegean region
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-altinkum"
                                        title="About Altinkum"
                                    >
                                        About Altinkum
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-ayvalik-and-cunda-island"
                                        title="About Ayvalik"
                                    >
                                        About Ayvalik
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-bodrum"
                                        title="About Bodrum"
                                    >
                                        About Bodrum
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-cesme"
                                        title="About Cesme"
                                    >
                                        About Cesme
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-dalyan"
                                        title="About Dalyan"
                                    >
                                        About Dalyan
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-fethiye"
                                        title="About Fethiye"
                                    >
                                        About Fethiye
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-gocek"
                                        title="About Gocek"
                                    >
                                        About Gocek
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/ut-izmir"
                                        title="About Izmir"
                                    >
                                        About Izmir
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-kusadasi"
                                        title="About Kusadasi"
                                    >
                                        About Kusadasi
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-marmaris"
                                        title="About Marmaris"
                                    >
                                        About Marmaris
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Marmara region">
                                    Marmara region
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/bursa-first-capital-of-the-ottoman-empire"
                                        title="About Bursa"
                                    >
                                        About Bursa
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/about-istanbul"
                                        title="About Istanbul"
                                    >
                                        About Istanbul
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/yalova-city-in-marmara"
                                        title="About Yalova"
                                    >
                                        About Yalova
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Lycian coast">
                                    Lycian coast
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/lycian-coast"
                                        title="Lycia's incredible legacy, the Lycian Way"
                                    >
                                        Lycia's incredible legacy, the Lycian Way
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Turquoise coast ">
                                    Turquoise coast{" "}
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/turkish-turquoise-coast"
                                        title="Turkish Turquoise Coast"
                                    >
                                        Turkish Turquoise Coast
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Black Sea Region">
                                    Black Sea Region
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/bolu-city-guide"
                                        title="Bolu City Guide"
                                    >
                                        Bolu City Guide
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/trabzon-city-guide"
                                        title="Trabzon city guide"
                                    >
                                        Trabzon city guide
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Airports In Turkey">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey"
                                        title="Airports In Turkey"
                                    >
                                        Airports In Turkey
                                    </a>
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/istanbul-airport"
                                        title="Third Airport Istanbul"
                                    >
                                        Third Airport Istanbul
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/ataturk-airport-istanbul"
                                        title="Ataturk Airport Istanbul"
                                    >
                                        Ataturk Airport Istanbul
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/sabiha-gokcen-istanbul"
                                        title="Sabiha Gokcen Istanbul"
                                    >
                                        Sabiha Gokcen Istanbul
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/bodrum-milas-airport"
                                        title="Bodrum Milas Airport"
                                    >
                                        Bodrum Milas Airport
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/antalya-airport"
                                        title="Antalya Airport"
                                    >
                                        Antalya Airport
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/adnan-menderes-izmir"
                                        title="Adnan Menderes Izmir"
                                    >
                                        Adnan Menderes Izmir
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/dalaman-international-airport"
                                        title="Dalaman International Airport"
                                    >
                                        Dalaman International Airport
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/airports-in-turkey/esenboga-international-ankara"
                                        title="Esenboga International Ankara"
                                    >
                                        Esenboga International Ankara
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Weather In Turkey">
                                    <a
                                        href="https://www.propertyturkey.com/about-turkey/weather-in-turkey"
                                        title="Weather In Turkey"
                                    >
                                        Weather In Turkey
                                    </a>
                                </p>
                                <i
                                    className="fa fa-angle-up tabs-icon"
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12  col-md-9  buyer-guide--side-bar-bg-details">
                    <div className="container-fluid">
                        <div className="flex content-space-between items-center">
                            <h1
                                itemProp="name headline"
                                className="page-title abhaya buyer-guide--side-bar-bg-details--main-title"
                            >
                                Turkish Mediterranean Region
                            </h1>
                            <a
                                href="#"
                                className="buyer-guide--side-bar-bg-details--social-shares social-shares"
                            >
                                <img
                                    src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                    className="no-margin"
                                    alt=""
                                />{" "}
                                <span>Share</span>
                            </a>
                        </div>
                        <div className="buyer-guide--side-bar-bg-details--dates">
                            <span>Updated: </span> 03 August 2021
                            <span className="margin-left-1">Created: </span> 13 January 2014
                        </div>
                        <article className="page-content">
                        <RawHTMLRenderer html={data ?  data.value : 'Loading'} />

                        </article>
                    </div>
                </div>
            </div>
        </div>

    )
}
