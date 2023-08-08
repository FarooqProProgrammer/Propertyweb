import React from "react";
import { Link, useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";
import {
  FooterAboutUs,
  FooterLinksBuyerGuideData,
  FooterLinksPopularLocationsData,
  FooterLinksPopularSearchesData,
} from "../../Data/FooterLinksData";
import PTCoins from "../../assets/Footer/PT-coins.svg";
import VirtualTouring from "../../assets/Footer/Virtualtouring.svg";
import PartnerButton from "../../assets/partner-button-01.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

export default function Footer() {
  let location = useLocation();

  // Footer list toggler
  const [search, setSearch] = useState(false);
  const [locations, setLocations] = useState(false);
  const [links, setLinks] = useState(false);

  return (
    <footer
      style={{ display: location.pathname === "/printPreview" ? "none" : "" }}
    >
      <Box className="foooter">
        <Box className="wrap-dis-85 wrap wrap-tab-11 wrap-mob-11">
          <Box className="row padding-top-1">
            <Box className="col-4 col-md-3">
              <ul className={`list-unstyled ${search ? "expanded" : null}`}>
                <li className="li-header">Popular Searches</li>
                {FooterLinksPopularSearchesData.map((item, i) => {
                  return (
                    <li>
                      <Link
                        title={item.link}
                        to={`/about/${i + 1}`}
                        state={{
                          data: {
                            title: item.link,
                          },
                        }}
                      >
                        {item.link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                className="margin-top-05 clr-brightpt-grey expand"
                onClick={() => setSearch(!search)}
              >
                {search ? "Less" : "More"}{" "}
                {search ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Link>
            </Box>
            <Box className="col-4 col-md-2">
              <ul className={`list-unstyled ${locations ? "expanded" : null}`}>
                <li className="li-header">Popular Locations</li>
                {FooterLinksPopularLocationsData.map((item, i) => {
                  return (
                    <li>
                      <Link
                        title={item.Link}
                        to={`/about/${i + 1}`}
                        state={{
                          data: {
                            title: item.link,
                          },
                        }}
                      >
                        {item.Link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                className="margin-top-05 clr-brightpt-grey expand"
                onClick={() => setLocations(!locations)}
              >
                {locations ? "Less" : "More"}{" "}
                {locations ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Link>
            </Box>
            <Box className="col-4 col-md-2">
              <ul className="list-unstyled">
                <li className="li-header">Buyer Guide</li>
                {FooterLinksBuyerGuideData.map((item, i) => {
                  return (
                    <li>
                      <Link
                        title={item.Link}
                        to={`/about/${i + 1}`}
                        state={{
                          data: {
                            title: item.link,
                          },
                        }}
                      >
                        {item.Link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Box>
            <Box className="col-4 col-md-2">
              <ul className="list-unstyled">
                <li className="li-header">About us</li>
                {FooterAboutUs.map((item, i) => {
                  return (
                    <li>
                      <Link
                        title={item.link}
                        to={`/about/${i + 1}`}
                        state={{
                          data: {
                            title: item.link,
                          },
                        }}
                      >
                        {item.link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link className="margin-top-05 clr-brightpt-grey expand d-mobile">
                More <ExpandMoreIcon aria-hidden="true" />
              </Link>
            </Box>
            <Box className="col-4 col-md-3">
              <ul className={`list-unstyled ${links ? "expanded" : null}`}>
                <li className="li-header">Useful Links</li>
                <li>
                  <Link
                    title="American Citizenship By investment"
                    to={`/about/1`}
                    state={{
                      data: {
                        title: "American Citizenship By investment",
                      },
                    }}
                  >
                    American Citizenship By investment
                  </Link>
                </li>
                <li>
                  <Link
                    title="Real Estate Investment Blogs"
                    to={`/about/1`}
                    state={{
                      data: {
                        title: "Real Estate Investment Blogs",
                      },
                    }}
                  >
                    Real Estate Investment Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    title="Istanbul Investment Tips"
                    to={`/about/1`}
                    state={{
                      data: {
                        title: "Istanbul Investment Tips",
                      },
                    }}
                  >
                    San Fransisco Investment Tips
                  </Link>
                </li>
                {/* <li>
                  <Link
                    title="PropertyUSA TV"
                    to={`/about/1`}
                    state={{
                      data: {
                        title: "",
                      },
                    }}
                  >
                    PropertyUSA TV
                  </Link>
                </li> */}
                <li>
                  <Link
                    title="Istanbul Investments Properties"
                    to={`/about/1`}
                    state={{
                      data: {
                        title: "Istanbul Investments Properties",
                      },
                    }}
                  >
                    Istanbul Investments Properties
                  </Link>
                </li>
                <li>
                  <Link
                    title="Istanbul Investments Properties"
                    to={`/about/1`}
                    state={{
                      data: {
                        title: "Sell Your Property",
                      },
                    }}
                  >
                    Sell Your Property
                  </Link>
                </li>
                {/* <li>
                  <Link title="Bargain Properties">Bargain Properties</Link>
                </li>
                <li>
                  <Link title="Beachfront Properties">
                    Beachfront Properties
                  </Link>
                </li>
                <li>
                  <Link title="luxury Properties">luxury Properties</Link>
                </li>
                <li>
                  <Link title="Investment Properties">
                    Investment Properties
                  </Link>
                </li>
                <li>
                  <Link title="Design & build">Design &amp; build</Link>
                </li> */}
              </ul>
              <Link
                className="margin-top-05 clr-brightpt-grey expand"
                onClick={() => setLinks(!links)}
              >
                {links ? "Less" : "More"}{" "}
                {links ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Link>
            </Box>
          </Box>
          <Box className="socialmedia-links text-center padding-top-1 padding-bottom-md-3">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link style={{ display: "block" }}>
                  <img
                    src={PartnerButton}
                    width={95}
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="buyerguide-virtualtour-icon-mobile">
                  <img
                    src={VirtualTouring}
                    width={95}
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link>
                  <img src={PTCoins} width={200} className="img-fluid" alt="" />
                </Link>
              </li>
            </ul>
            <ul className="list-inline">
              <li className="list-inline-item bg-social-links">
                <Link>
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li className="list-inline-item bg-social-links">
                <Link>
                  {/* <i class="fa fa-twitter " aria-hidden="true"></i> */}
                </Link>
              </li>
              <li className="list-inline-item bg-social-links">
                <Link>
                  <i class="fa fa-instagram " aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item bg-social-links">
                <Link>
                  <i class="fa fa-pinterest-p " aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item bg-social-links">
                <Link>
                  <i class="fa fa-youtube-play " aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
            <Box
              className="col-12 flex content-center font-14 margin-bottom-1 flex-dir-row-reverse-ar"
              style={{ zIndex: 99 }}
            >
              {/* <Box className="header-phone-items padding-right-2">
                <Link

                  className="active"
                  title="English"
                >
                  EN
                </Link>
                <Link

                  title="Russian"
                  className=""
                >
                  RU
                </Link>
                <Link title="Arabic">
                  AR
                </Link>
                <Link title="German">
                  DE
                </Link>
                <Link title="Chinese">
                  中文
                </Link>
                <Link title="Farsi">
                  FA
                </Link>
              </Box>
              <Box className="currencyy flex-align-self-center">
                <Link
                  rel="nofollow"

                  className=""
                  title="Sterling Pound  "
                >
                  <i className="fa fa-gbp" />
                </Link>
                <Link
                  rel="nofollow"

                  className=""
                  title="Euro "
                >
                  <i className="fa fa-eur" />
                </Link>
                <Link
                  rel="nofollow"
                  href="javascript:void(0)"
                  className="active"
                  title="Dollar "
                >
                  <IoLogoUsd />
                </Link>
                <Link
                  rel="nofollow"

                  className=""
                  title="Turkish Lira "
                >
                  <i className="fa fa-try" />
                </Link>
              </Box> */}
            </Box>
            {/* TrustBox widget */}
            <Box
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="5419b6a8b0d04a076446a9ad"
              data-businessunit-id="5e19dabeef2a2d0001bd0c4c"
              data-style-height="30px"
              data-style-width="100%"
              data-theme="light"
              data-stars="4,5"
              style={{ position: "relative" }}
            >
              <iframe
                title="Customer reviews powered by Trustpilot"
                loading="auto"
                src="https://widget.trustpilot.com/trustboxes/5419b6a8b0d04a076446a9ad/index.html?templateId=5419b6a8b0d04a076446a9ad&businessunitId=5e19dabeef2a2d0001bd0c4c#locale=en-US&styleHeight=30px&styleWidth=100%25&theme=light&stars=4%2C5"
                style={{
                  position: "relative",
                  height: 30,
                  width: "100%",
                  borderStyle: "none",
                  display: "block",
                  overflow: "hidden",
                }}
              />
            </Box>
            {/* End TrustBox widget */}
          </Box>
        </Box>
      </Box>
      <Box className="coppywrite">
        <Box className="container">
          <p>Copyright © 2023 Property USA Limited. All Rights Reserved.</p>
        </Box>
      </Box>
    </footer>
  );
}
