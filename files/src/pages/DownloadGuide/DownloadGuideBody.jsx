import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {FaChevronUp,FaChevronDown} from "react-icons/fa"

export default function DownloadGuideBody() {
    const [InvestingisOpen,setInvestingisOpen] = useState(false);
    const [PurchaseProcessisOpen,setPurchaseProcessisOpen] = useState(false);
    const [ResidencyisOpen,setResidencyisOpen] = useState(false);
    const [PetAndCatisOpen,setPetAndCatisOpen] = useState(false);


    return (
        <div className="buyer-guide" style={{ backgroundColor: "#f7f5f2" }}>
            <div className="row">
                <div className="col-12 col-md-3 buyer-guide--side-bar-bg">
                    <div className="container-fluid">
                        <p className="buyer-guide--title"> Definitive Buyer Guide PDF</p>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Investing in Turkey">
                                    Investing in Turkey
                                </p>
                                {
                                    InvestingisOpen?<FaChevronDown onClick={()=>setInvestingisOpen(!InvestingisOpen)} className="tabs-icon" aria-hidden="true" />
                                    :<FaChevronUp onClick={()=>setInvestingisOpen(!InvestingisOpen)} className="tabs-icon" aria-hidden="true" />

                                }
                            </div>
                            <ul className={`list-unstyled buyer-guide--ul ${InvestingisOpen?'':'hide'}`}>
                                <li className="">
                                    <Link>
                                        Why invest in property in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        How to set up a business in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Tax and Turkish real estate
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        EU negotiations and Turkish property prices
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Download macro-economic &amp; investment analysis
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Purchase process">
                                    Purchase process
                                </p>
                                {
                                    PurchaseProcessisOpen?<FaChevronDown onClick={()=>setPurchaseProcessisOpen(!PurchaseProcessisOpen)} className="tabs-icon" aria-hidden="true" />
                                    :<FaChevronUp onClick={()=>setPurchaseProcessisOpen(!PurchaseProcessisOpen)} className="tabs-icon" aria-hidden="true" />

                                }
                            </div>
                            <ul className={`list-unstyled buyer-guide--ul ${PurchaseProcessisOpen?'':'hide'}`}>
                                <li className="">
                                    <Link>
                                        Who Can Buy Property in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        How to buy property in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        How to design and build your own
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Property Turkey Inspection Trips
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Virtual Tour with Property Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Costs of Purchasing a Property in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Finance for property in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Property maintenance and management
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        How to get a Turkish Title Deed
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Should I use a solicitor to buy property in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Power of Attorney in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Buying property in Turkey through a company
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p
                                    className="buyer-guide--title-tab"
                                    title="Residency permits and visas"
                                >
                                    Residency permits and visas
                                </p>
                                {
                                    ResidencyisOpen?<FaChevronDown onClick={()=>setResidencyisOpen(!ResidencyisOpen)} className="tabs-icon" aria-hidden="true" />
                                    :<FaChevronUp onClick={()=>setResidencyisOpen(!ResidencyisOpen)} className="tabs-icon" aria-hidden="true" />

                                }
                            </div>
                            <ul className={`list-unstyled buyer-guide--ul ${ResidencyisOpen?'':'hide'}`}>
                                <li className="">
                                    <Link>
                                        Residency permits in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Work permits in Turkey
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Your pets and cars">
                                    Your pets and cars
                                </p>
                                {
                                    PetAndCatisOpen?<FaChevronDown onClick={()=>setPetAndCatisOpen(!PetAndCatisOpen)} className="tabs-icon" aria-hidden="true" />
                                    :<FaChevronUp onClick={()=>setPetAndCatisOpen(!PetAndCatisOpen)} className="tabs-icon" aria-hidden="true" />

                                }
                            </div>
                            <ul className={`list-unstyled buyer-guide--ul ${PetAndCatisOpen?'':'hide'}`}>
                                <li className="">
                                    <Link>
                                        Bringing your pets into Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Bringing your car into Turkey
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Property taxes">
                                    Property taxes
                                </p>
                                <FaChevronUp className="tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <Link>
                                        Income Tax On Turkish Property
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Capital Gains Tax On Sale Of Turkish Property
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        VAT exemption when buying Turkish real estate
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Real estate inheritance tax in Turkey
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p className="buyer-guide--title-tab" title="Living in Turkey">
                                    Living in Turkey
                                </p>
                                <i className="fa fa-angle-up tabs-icon" aria-hidden="true" />
                            </div>
                            <ul className="list-unstyled buyer-guide--ul hide">
                                <li className="">
                                    <Link>
                                        Retire to low cost of living in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Healthcare in Turkey
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                        Where to buy property in Turkey?
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="padding-top-2 side-item">
                            <div className="buyer-guide--supertitle">
                                <p
                                    className="buyer-guide--title-tab"
                                    title="Download Complete Buyer Guide"
                                >
                                    <Link>
                                        Download Complete Buyer Guide
                                    </Link>
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
                                Definitive Buyer Guide PDF
                            </h1>
                            <Link>
                                <img
                                    src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                    className="no-margin"
                                    alt=""
                                />{" "}
                                <span>Share</span>
                            </Link>
                        </div>
                        <div className="buyer-guide--side-bar-bg-details--dates">
                            <span>Updated: </span> 07 April 2015
                            <span className="margin-left-1">Created: </span> 27 February 2014
                        </div>
                        <article className="page-content">
                            <div
                                className="areabody clearfix"
                                itemProp="articleBody"
                                style={{ display: "block" }}
                            >
                                <p>
                                    <img
                                        alt="Property Turkey buying guide"
                                        className="pyro-image alignment-left fr-dii fr-draggable fr-fir"
                                        data-pyroimage="true"
                                        height={290}
                                        src="https://www.propertyturkey.com/uploads/default//files/buyer-guide-header-page-image.jpg"
                                        style={{ width: 390 }}
                                        title="Property Turkey buying guide"
                                    />
                                    <span style={{ fontSize: 14 }}>
                                        Can you buy property in Turkey?
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: 14 }}>
                                        How do you purchase safely and smoothly?
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: 14 }}>
                                        How to become Turkish resident?
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: 14 }}>
                                        How to obtain work permits in Turkey?
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: 14 }}>
                                        What do you need to know about taxes?
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: 14 }}>How about your pets?&nbsp;</span>
                                </p>
                                <p>
                                    <span style={{ fontSize: 14 }}>Where to invest and why?</span>
                                    <br />
                                    &nbsp;
                                </p>
                                <hr />
                                <p>
                                    <span style={{ fontSize: 14 }}>
                                        <strong>Download our free and comprehensive guide</strong>
                                    </span>{" "}
                                    to buying properties in Turkey and find answers to all of the
                                    above and more. We have picked the brains of our experts, listened
                                    to our clients, and gone on the ground to find the information{" "}
                                    <strong>YOU</strong> need in order to make informed decisions
                                    about purchasing real estate in Turkey. <br />
                                    <br />
                                    <img
                                        alt="Free buyer guide download"
                                        className="pyro-image alignment-none fr-dii fr-draggable"
                                        data-pyroimage="true"
                                        src="https://www.propertyturkey.com/uploads/default//files/buyer-guide-banner-690x60.jpg"
                                        style={{ lineHeight: "1.6em", width: 1200 }}
                                        title="Free buyer guide download"
                                    />
                                </p>
                                <p>
                                    Purchasing Turkish property can be a long process, we know that
                                    very well. That's why we offer this extremely useful guide in an
                                    easy to use downloadable format. Download it, take it with you
                                    offline, and feel free to contact us with further questions and
                                    guidance you may be seeking when searching for properties in
                                    Turkey. We have the answers.&nbsp;
                                </p>
                            </div>
                        
                            <div className="">
                                <div className="widget">
                                    <form
                            
                                    >
                                        <h3 className="title" style={{}}>
                                            Complete buyer guide{" "}
                                        </h3>
                                        <div className="body font-13">
                                            <div className="align-dis-center">
                                                <b>Download Request</b>
                                            </div>
                                            <label className="field">
                                                Name
                                                <input
                                                    type="text"
                                                    id="pdf_name"
                                                    name="pdf_name"
                                                    validation=""
                                                />
                                            </label>
                                            <label className="field">
                                                Phone
                                                <input
                                                    type="text"
                                                    id="pdf_phone"
                                                    name="pdf_phone"
                                                    validation=""
                                                />
                                            </label>
                                            <label className="field">
                                                E-mail
                                                <input
                                                    type="text"
                                                    id="pdf_email"
                                                    name="pdf_email"
                                                    validation="email"
                                                />
                                            </label>
                                            <label className="field">
                                                <input
                                                    type="checkbox"
                                                    id="pdf_newsletter"
                                                    name="pdf_newsletter"
                                                    defaultValue={1}
                                                    defaultChecked=""
                                                    className='ml-2'
                                                />
                                                Subscribe to the newsletter
                                            </label>
                                            <input
                                                type="text"
                                                name="DownLoadPDF"
                                                defaultValue=""
                                                style={{ display: "none" }}
                                            />
=                                            <button type="submit" className="btn">
                                                Download
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    )
}
