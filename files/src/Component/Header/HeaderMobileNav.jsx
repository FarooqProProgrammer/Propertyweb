import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function HeaderMobileNav() {

    const [AboutHandler, setAboutHandler] = useState(false);
    return (
        <nav className="flex">
            <div className="mobile closeNavBtn">
                <a>
                    <i className="fa fa-arrow-left padding-right-05 font-13" />
                    Back
                </a>
            </div>
            <li className="bold">
                <a>Home</a>
            </li>
            <li>
                <a>
                    <b>Buy Real Estate</b>
                </a>
            </li>
            <li>
                <a>
                    <b>Turkish Citizenship</b>
                </a>
            </li>
            <li className={`has-child ${AboutHandler ? 'active' : ''}`}>
                <Link
                    href="/USA"
                    title="About Turkey"
                >
                    <b>About Turkey</b>
                </Link>
                <i onClick={() => setAboutHandler(!AboutHandler)} className="fa fa-angle-down" />
                <div style={{ display: ` ${AboutHandler ? 'block' : 'none'}` }} className={`level-2 ${AboutHandler ? 'open' : ''}`}>
                    <ul className="no-bullets">
                        <li className="has-child">
                            <a>
                                Mediterranean region
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Turkish Mediterranean Region
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Alanya
                                        </a>
                                    </li>
                                    <li className="has-child">
                                        <a>
                                            About Antalya
                                            <i className="fa fa-angle-right" />
                                        </a>
                                        <div className="level-4">
                                            <ul className="no-bullets">
                                                <li>
                                                    <a>
                                                        Konyaalti beach best of both worlds
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Antalya old city or Kaleici of Antalya
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        The vibrant Lara beach district
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a>
                                            About Belek
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Dalaman
                                        </a>
                                    </li>
                                    <li className="has-child">
                                        <a>
                                            About Kalkan
                                            <i className="fa fa-angle-right" />
                                        </a>
                                        <div className="level-4">
                                            <ul className="no-bullets">
                                                <li>
                                                    <a>
                                                        Kalkan for holiday home and investment
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a>
                                            About Kas
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Kemer
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Side
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Aegean region
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Turkish Aegean region
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Altinkum
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Ayvalik
                                        </a>
                                    </li>
                                    <li className="has-child">
                                        <a>
                                            About Bodrum
                                            <i className="fa fa-angle-right" />
                                        </a>
                                        <div className="level-4">
                                            <ul className="no-bullets">
                                                <li>
                                                    <a>
                                                        Bodrum or Halicarnassus in the old days
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Yalikavak the trendy marina town
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Hidden treasures of Gumusluk
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Living la Vida Loca in Turkbuku
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a>
                                            About Cesme
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Dalyan
                                        </a>
                                    </li>
                                    <li className="has-child">
                                        <a>
                                            About Fethiye
                                            <i className="fa fa-angle-right" />
                                        </a>
                                        <div className="level-4">
                                            <ul className="no-bullets">
                                                <li>
                                                    <a>
                                                        Ovacik
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Hisaronu
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Calis
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Uzumlu
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a>
                                            About Gocek
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Izmir
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Kusadasi
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            About Marmaris
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Marmara region
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            About Bursa
                                        </a>
                                    </li>
                                    <li className="has-child">
                                        <a>
                                            About Istanbul
                                            <i className="fa fa-angle-right" />
                                        </a>
                                        <div className="level-4">
                                            <ul className="no-bullets">
                                                <li>
                                                    <a>
                                                        Districts of Istanbul
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Why invest in Beyoglu Istanbul real estate
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Bahcesehir known as the garden city
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Istanbul Real Estate Market Analysis PDF
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a>
                                            About Yalova
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Lycian coast
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Lycia's incredible legacy, the Lycian Way
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Turquoise coast <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Turkish Turquoise Coast
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Black Sea Region
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Bolu City Guide
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Trabzon city guide
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Airports In Turkey
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Third Airport Istanbul
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Ataturk Airport Istanbul
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Sabiha Gokcen Istanbul
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Bodrum Milas Airport
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Antalya Airport
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Adnan Menderes Izmir
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Dalaman International Airport
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Esenboga International Ankara
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a>
                                Weather In Turkey
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="has-child">
                <a>
                    <b>Buyer Guide</b>
                    <i className="fa fa-angle-down" />
                </a>
                <div className="level-2">
                    <ul className="no-bullets">
                        <li className="has-child">
                            <a>
                                Investing in Turkey
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Why invest in property in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            How to set up a business in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Tax and Turkish real estate
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            EU negotiations and Turkish property prices
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Download macro-economic &amp; investment analysis
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Purchase process
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Who Can Buy Property in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            How to buy property in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            How to design and build your own
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Property USA Inspection Trips
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Virtual Tour with Property Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Costs of Purchasing a Property in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Finance for property in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Property maintenance and management
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            How to get a Turkish Title Deed
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Should I use a solicitor to buy property in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Power of Attorney in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Buying property in USA through a company
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Residency permits and visas
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Residency permits in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Work permits in Turkey
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Your pets and cars
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Bringing your pets into Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Bringing your car into Turkey
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Property taxes
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Income Tax On Turkish Property
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Capital Gains Tax On Sale Of Turkish Property
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            VAT exemption when buying Turkish real estate
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Real estate inheritance tax in Turkey
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-child">
                            <a>
                                Living in Turkey
                                <i className="fa fa-angle-down" />
                            </a>
                            <div className="level-3">
                                <ul className="no-bullets">
                                    <li>
                                        <a>
                                            Retire to low cost of living in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Healthcare in Turkey
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Where to buy property in Turkey?
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a>
                                Download Complete Buyer Guide
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="has-child">
                <a>
                    <b>About Us</b>
                    <i className="fa fa-angle-down" />
                </a>
                <div className="level-2">
                    <ul className="no-bullets">
                        <li>
                            <a>
                                Our Services and Fees
                            </a>
                        </li>
                        <li>
                            <a>
                                London
                            </a>
                        </li>
                        <li>
                            <a>
                                Istanbul
                            </a>
                        </li>
                        <li>
                            <a>
                                Bodrum
                            </a>
                        </li>
                        <li>
                            <a>
                                Fethiye
                            </a>
                        </li>
                        <li>
                            <a>
                                Antalya
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a>
                    <b>Contact Us</b>
                </a>
            </li>
            <li className="bold">
                <a>
                    <strong>Property USA TV</strong>
                </a>
            </li>
            <div className="showMb-hideDt auth header-right order-1 flex">
                <a>
                    Login
                </a>
                <a>
                    Register
                </a>
            </div>
            <div className="header-phone-items order-3 showMb-hideDt ">
                <a>
                    EN
                </a>
                <a>
                    RU
                </a>
                <a>
                    AR
                </a>
                <a>
                    DE
                </a>
                <a>
                    中文
                </a>
                <a>
                    FA
                </a>
            </div>
            <div className="currencyy currency-widget showMb-hideDt  order-2">
                <a>
                    <i className="fa fa-gbp" />
                </a>
                <a>
                    <i className="fa fa-eur" />
                </a>
                <a>
                    <i className="fa fa-usd" />
                </a>
                <a>
                    <i className="fa fa-try" />
                </a>
            </div>
        </nav>
    )
}
