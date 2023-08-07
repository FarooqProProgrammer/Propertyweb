import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import AboutUsGuideLatestNews from "./AboutUsGuideLatestNews";
import AboutUsGuideLatestPost from "./AboutUsGuideLatestPost";
import DescriptionContent from "../../ReUseAbleComponent/DescriptionContent";
import Image from "../../ReUseAbleComponent/Image";
import SliderComponent from "../../ReUseAbleComponent/SliderComponent";
import { AboutDataGuide, AboutusSlideData } from "../../Data/AboutUsGuideData";
import DisplayComponent from "../../ReUseAbleComponent/DisplayComponent";
import Hqdefault from "../../assets/AboutUsGuideImages/hqdefault.jpg";
import PtBrochure from "../../assets/AboutUsGuideImages/pt-brochure-download.jpg";
import Logo from "../../assets/HeaderImages/logo.png";
import ShareGoldIcon from "../../assets/AboutUsGuideImages/share-alt-solid.-gold.svg";
import Path from "../../assets/AboutTurkeyTagImages/Path302.svg";
import Turkey1 from "../../assets/AboutUsGuideImages/turkey_1.png";
import Offices1 from "../../assets/AboutUsGuideImages/offices_1.png";
import Middlemen from "../../assets/AboutUsGuideImages/middleman_1.png";
import TriangleImage from "../../assets/AboutUsGuideImages/trianglered.png";
import HomeLogo from "../../assets/home-logo.svg";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import SingleCarousel from "../../ReUseAbleComponent/SingleCarousel";

export default function AboutusGuideTag({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Box
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <Box className="flex justify-center items-center">
            <Link
              to="#"
              className="mx-4 w-[100px] h-[100px] flex flex-col gap-1"
            >
              <AiFillFacebook className="w-full h-full text-blue-900" />
              <Typography>facebook</Typography>
            </Link>
            <Link
              to="#"
              className="mx-4 w-[100px] h-[100px] flex flex-col gap-1"
            >
              <AiOutlineTwitter className="w-full h-full text-cyan-500" />
              <Typography>Twitter</Typography>
            </Link>
            <Link
              to="#"
              className="mx-4 w-[100px] h-[100px] flex flex-col gap-1"
            >
              <AiOutlineInstagram className="w-full h-full text-pink-700" />
              <Typography>Instagram</Typography>
            </Link>

            <Link
              to="#"
              className="mx-4 w-[100px] h-[100px] flex flex-col gap-1"
            >
              <AiFillLinkedin className="w-full h-full text-blue-900" />
              <Typography>Linkedin</Typography>
            </Link>
          </Box>
        </Box>
      )}
      <section id="main" className="cf  disable-copy ">
        <Box className="breadcrumbs">
          <Box className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
            <span>
              <Link to="">
                <Image src={HomeLogo} className="img-fluid" alt="" />
              </Link>
            </span>
            <span>
              <i className="fa fa-angle-right" />
            </span>
            <span>About Us</span>
            <span>
              <i className="fa fa-angle-right" />
            </span>
            <span>{title}</span>
          </Box>
        </Box>
        <Box className="article-container">
          <Box className="endpage-main-intro ">
            <Box className="endpage-title-actions">
              <Box className="endpage-title">
                <h3 className="d-mobile">
                  <label className="date">Updated : 24 April 2020</label>
                  <label className="date ">Created : 16 May 2013</label>
                </h3>
                <Box className="endpage-actions d-mobile share-btn-pos">
                  <Link to="#" className="social-shares">
                    <img src={ShareGoldIcon} width={21} alt="" />
                  </Link>
                </Box>
                <h1 itemProp="name headline" className="page-title abhaya">
                  {title}
                </h1>
                <h3 className="d-desk">
                  <Box className="flex">
                    <Box className="d-desk"></Box>
                    <label className="date no-margin">
                      <span className="clr-pt">Updated</span> : 24 April 2020
                    </label>
                    <label className="date no-margin ml-1-important">
                      <span className="clr-pt">Created</span> : 16 May 2013
                    </label>
                  </Box>
                </h3>
                <Box className="d-mobile"></Box>
              </Box>
              <Box className="endpage-actions d-desk">
                <Link onClick={() => setOpen(true)} className="social-shares">
                  <img src={Path} alt="" />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="page-content-container wrap-dis-9 wrap wrap-tab-11 wrap-mob-11 ">
            <article className="page-content col-dis-9 col-tab-9 col-mob-12 no-padding">
              <Box
                className="areabody clearfix f-15-h15"
                itemProp="articleBody"
                id="iframe-width-about"
              >
                <p>
                  <Typography
                    varient="span"
                    className="fr-video fr-dvb fr-draggable"
                    contentEditable="false"
                    draggable="true"
                  >
                    <iframe
                      src="https://www.youtube.com/embed/preRes-n9Ew"
                      title="YouTube video player"
                      frameBorder={0}
                      allowFullScreen=""
                      style={{ width: "100%", height: 550 }}
                    />
                  </Typography>
                </p>
                <h4>
                  <strong>Vision Statement</strong>
                </h4>
                <p>
                  To be the most trusted reference for lifestyle and investment
                  property in USA.
                </p>
                <p>
                  <br />
                </p>
                <h4>
                  <span
                    style={{
                      color: "#5081ff",
                      fontSize: 18,
                      lineHeight: "1.1",
                    }}
                  >
                    <strong className="text-[#5081ff]">
                      Mission Statement
                    </strong>
                  </span>
                </h4>
                <p>
                  To open up USA's lifestyle and investment opportunities to a
                  global audience.&nbsp;
                </p>
                <p>
                  To use our passion and knowledge to inspire and empower people
                  to invest in their future.
                </p>
                <p>
                  <br />
                </p>
                <h2 style={{ textAlign: "left" }}>
                  <strong>The Property USA Difference</strong>
                </h2>
                <p>
                  With 20+ years experience in the Turkish real estate market,
                  team Property USA are your experienced, friendly, and
                  independent overseas real estate consultants. Our head office
                  is located in London, UK with regional operational offices
                  in:&nbsp;
                </p>
                <p>
                  <Link  title="">
                    Bodrum
                  </Link>
                  &nbsp;
                </p>
                <p>
                  <Link  title="">
                    Fethiye &amp; Kalkan
                  </Link>
                  &nbsp;
                </p>
                <p>
                  <Link  title="">
                    Antalya
                  </Link>{" "}
                  &nbsp;
                </p>
                <p>
                  <Link  title="">
                    Istanbul
                  </Link>
                  &nbsp;
                </p>
                <p>
                  For us buying a property in USA is not about buying 'bricks
                  and mortar' but about 'lifestyle and investment'.
                </p>
                <p>
                  <Image
                    alt="Property USA"
                    className="fr-image-dropped fr-fin fr-dib fr-draggable"
                    src={Turkey1}
                    title="Property USA"
                    style={{ width: 1200 }}
                  />
                </p>
                <p>
                  <br />
                </p>
                <h2>
                  <strong>Industry Leaders</strong>
                </h2>
                <p>
                  In the crowded field of Turkish investment and property,
                  Property USA stands head and shoulders above the rest. Our
                  success in Turkish real estate and investment over the past
                  20+ years has cemented our position as industry leaders and
                  experts. Client-focused, knowledgeable and thorough, we’re
                  simply the most effective investment consultants for property
                  in USA.
                </p>
                <p>
                  <br />
                </p>
                {AboutDataGuide.map((item,index) => {
                  return (
                    <DisplayComponent
                    key={index}
                      title={item.title}
                      Description={item.Description}
                      img={item.img}
                    />
                  );
                })}

                <h2>
                  <strong>Our Offices</strong>
                </h2>
                <DescriptionContent
                  text=" Headed by director Cameron Deggin, our consultants work together to
                provide an unrivalled, specialised service in their respective
                fields and regions."
                />
                <DescriptionContent
                  text=" Headquartered in London with offices in Istanbul, Bodrum, Fethiye,
                Antalya and Kalkan, each office is staffed by highly trained and
                experienced consultants. Our offices are highly regarded, with a
                reputation for providing clients with the local knowledge necessary
                for investment or lifestyle purchases."
                />
                <p>
                  <img
                    alt="Offices in London and USA"
                    className="fr-fin fr-dib fr-draggable"
                    src={Offices1}
                    title="Offices in London and USA"
                    style={{ width: 1200 }}
                  />
                </p>
                <p>
                  <br />
                </p>
                <h2>
                  <strong>The Property USA Experience</strong>
                </h2>
                <DescriptionContent
                  text=" Property USA does not use agents or intermediaries. Each regional
                office is staffed by our very own trained consultants. As well as
                keeping prices down for our clients, this strategy means service
                quality stays high, wherever you are: our clients receive the same
                expert client care from London to Istanbul to Fethiye."
                />

                <p>
                  <img
                    alt="The property USA experience"
                    className="fr-fin fr-dib fr-draggable"
                    src={Middlemen}
                    title="The property USA experience"
                    style={{ width: 1200 }}
                  />
                </p>
              </Box>
              <Box className="cameron-section-aboutus">
                <Box className="col-12 col-md-9 no-padding">
                  <Box className="card">
                    <Box className="card-body">
                      <Box className="row">
                        <Box className="col-md-3 position-relative text-center">
                          <Box className="position-abs">
                            <img
                              data-src={TriangleImage}
                              className="lazyload"
                              alt=""
                            />
                          </Box>
                          <Box
                            className="owl-carousel carousel owl-images-initialized owl-loaded owl-drag"
                            items={1}
                            touch={1}
                            dots={1}
                          >
                            <Box className="owl-stage-outer">
                              <Box
                                className="owl-stage"
                                style={{
                                  transform: "translate3d(0px, 0px, 0px)",
                                  transition: "all 0s ease 0s",
                                  width: 264,
                                }}
                              ></Box>
                            </Box>
                          </Box>
                          <p className="cameron-section-author">
                            Cameron Deggin
                          </p>
                          <p className="cameron-section-pturkey">
                            Property USA
                          </p>
                        </Box>
                        <Box className="col-md-9 cameron-section-quotesbg flex items-center">
                          <DescriptionContent
                            className="cameron-section-blackquote"
                            text="“Property USA is different: our interests lie with you,
                          the buyer. Contrary to industry practices, we don’t
                          receive any payments from sellers, which means we maintain
                          our independence and can focus on securing you the best
                          possible terms. We aim to provide candid, expert advice on
                          everything USA, from lifestyle purchases to investment.
                          We know you’re not just buying bricks and mortar - but
                          making an investment into your lifestyle. From first
                          contact to rental management, we’ll be by your side to
                          guide and assist you."
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <p className="margin-top-3">
                    {" "}
                    <span style={{ lineHeight: "1.6em" }}>
                      Contact us via telephone&nbsp;
                    </span>
                    <em style={{ lineHeight: "1.6em" }}>
                      <strong>+44 (0) 20 8371 0059</strong>
                    </em>
                    <span style={{ lineHeight: "1.6em" }}>
                      &nbsp;or via email&nbsp;
                    </span>
                    <Link to="mailto:info@propertyUSA.com">
                      <em style={{ lineHeight: "1.6em" }}>
                        <strong>info@propertyUSA.com</strong>
                      </em>
                    </Link>
                    <span style={{ lineHeight: "1.6em" }}>
                      &nbsp;and one of our knowledgeable and friendly team will
                      get back to you with the advice and assistance that you
                      need.
                      <br />
                      <br />
                      USA.com was designed and developed by{" "}
                      <em>
                        <strong>
                          <Link to="">BuxUp.co.uk</Link>
                        </strong>
                      </em>
                    </span>
                    <br />
                    <br />
                    <br />
                    &nbsp;
                  </p>
                </Box>
              </Box>
            </article>
            <SingleCarousel />
            <aside className="widgets col-dis-3 col-tab-3 col-mob-12 no-padding widget-blogendpage">
              <Link to="" title="download our online borchour" target="_blank">
                <img
                  alt="download our online borchour"
                  className="w-100 margin-top-1 ls-is-cached lazyloaded"
                  src={PtBrochure}
                />
              </Link>
              <Box className="widget noheader nostyle-widget">
                <Box className="header-img-buyerguide">
                  <Box className="container">
                    <h3 className="title no-margin bold" style={{}}>
                      BUYER'S GUIDE
                    </h3>
                    <p>The Definitive guide to buying property in USA</p>
                    <Box className="padding-bottom-11">
                      <Link
                        to="/buyer-guide/definitive-buyer-guide-pdf"
                        title="Definitive Buyer Guide PDF"
                        className="btn right-widget-hover"
                      >
                        Download it now
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <AboutUsGuideLatestPost />
              <AboutUsGuideLatestNews />
            </aside>
          </Box>
        </Box>
        <Box style={{ display: "none" }} id="logins1">
          <Box className="container text-center">
            <Box className="register-form">
              <Box>
                {" "}
                <img
                  src={Logo}
                  width={80}
                  className="img-fluid lazyload"
                  alt="Property USA"
                />{" "}
              </Box>
              <h3 className="margin-bottom-3 margin-top-1">
                Sign up to Save Properties
              </h3>
              <form className="padding-top-15 randompassform">
                <Box className="form-field">
                  <label>Name</label>
                  <input
                    placeholder="Name"
                    validation=""
                    name="firstName"
                    type="text"
                  />
                </Box>
                <Box className="form-field">
                  <label>E-mail*</label>
                  <input
                    placeholder="E-mail"
                    validation="email"
                    name="email"
                    type="email"
                  />
                </Box>
                <Box className="form-field">
                  <label> Contact Number*</label>
                  <Box className="intl-tel-input allow-dropdown">
                    <Box className="flag-container">
                      <Box
                        className="selected-flag"
                        role="combobox"
                        aria-owns="country-listbox"
                        tabIndex={0}
                        title="Pakistan (‫پاکستان‬‎): +92"
                      >
                        <Box className="iti-flag pk" />
                        <Box className="iti-arrow" />
                      </Box>
                    </Box>
                    <input
                      placeholder="Mobile"
                      className="input-tel"
                      name="mobile"
                      type="text"
                      autoComplete="off"
                    />
                  </Box>
                </Box>
                <Box className="form-field hide">
                  <label>Password*</label>
                  <input
                    placeholder="Password"
                    validation=""
                    name="password"
                    type="password"
                    defaultValue=""
                  />
                </Box>
                <Box className="form-field hide">
                  <label>Confirm Password*</label>
                  <input
                    placeholder="Confirm Password"
                    validation=""
                    name="confirm_password"
                    type="password"
                    defaultValue=""
                  />
                </Box>
                <input type="hidden" name="RegisterUser" defaultValue="" />
                <input
                  className="btn btn-block bg-pt crl-white margin-ver-1"
                  type="submit"
                  defaultValue="Register"
                />
              </form>
              <p className="text-left">
                {" "}
                Do you have an account?{" "}
                <Link className="clr-pt" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </Box>
          </Box>
        </Box>
        <Box id="subscribe-media-modal" style={{ display: "none", padding: 0 }}>
          <Box className="container subscribe-media">
            <Box className="box white clearfix" style={{ marginTop: "1rem" }}>
              <section id="search">
                <h3 className="title text-center clr-pt-darkgrey abhaya font-2">
                  Subscribe To Our Media
                </h3>
              </section>
              <form action="/subscribe-to-media" method="post">
                <label htmlFor="email">
                  Full Name :
                  <input type="text" name="full_name" id="email" />
                </label>
                <label htmlFor="email">
                  Email :
                  <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="email">
                  Telephone :
                  <Box className="intl-tel-input allow-dropdown">
                    <Box className="flag-container">
                      <Box
                        className="selected-flag"
                        role="combobox"
                        aria-owns="country-listbox"
                        tabIndex={0}
                        title="Pakistan (‫پاکستان‬‎): +92"
                      >
                        <Box className="iti-flag pk" />
                        <Box className="iti-arrow" />
                      </Box>
                    </Box>
                    <input
                      type="text"
                      className="input-tel"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      placeholder="+92 301 2345678"
                    />
                  </Box>
                </label>
                <label htmlFor="email">
                  Notes :
                  <input type="text" name="notes" id="notes" />
                </label>
                <input name="requestUrl" type="hidden" defaultValue="/" />
                <label htmlFor="to_news">
                  Subscribe To our News
                  <input
                    type="checkbox"
                    name="to_news"
                    defaultChecked=""
                    id=""
                  />
                </label>
                <label htmlFor="to_news">
                  Subscribe To our Blog
                  <input
                    type="checkbox"
                    name="to_blog"
                    defaultChecked=""
                    id=""
                  />
                </label>
                <label htmlFor="to_news">
                  Subscribe To our videos
                  <input
                    type="checkbox"
                    name="to_videos"
                    defaultChecked=""
                    id=""
                  />
                </label>
                <Box
                  className="g-recaptcha"
                  data-sitekey="6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC"
                >
                  <Box style={{ width: 304, height: 78 }}>
                    <Box>
                      <iframe
                        title="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC&co=aHR0cHM6Ly93d3cucHJvcGVydHl0dXJrZXkuY29tOjQ0Mw..&hl=en&v=vkGiR-M4noX1963Xi_DB0JeI&size=normal&cb=dsc7v0d4dai3"
                        width={304}
                        height={78}
                        role="presentation"
                        name="a-xq5k7jvy0nxx"
                        frameBorder={0}
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      />
                    </Box>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: 250,
                        height: 40,
                        border: "1px solid rgb(193, 193, 193)",
                        margin: "10px 25px",
                        padding: 0,
                        resize: "none",
                        display: "none",
                      }}
                      defaultValue={""}
                    />
                  </Box>
                  <iframe title="Beautifull" style={{ display: "none" }} />
                </Box>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="enqID"
                  defaultValue=""
                />
                <input
                  type="submit"
                  defaultValue="Join Us"
                  className="btn contactus-hover bg-pt crl-white"
                />
              </form>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}
