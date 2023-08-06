import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import $ from "jquery";
import { NavigationData } from "../../Data";
import "./Header.css";
import { useDispatch } from "react-redux";
import { AboutTurkeyNavHandle } from "../../Redux/Action/AboutTurkeyNavHandle";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function HeaderNav() {
  const handleNavRemoveButtonClick = (e) => {
    e.preventDefault();
    $("nav").removeClass("open");
  };

  //   ---------------------- ABOUT TURKEY NAVIGATION -----------------------------
  const [AboutTurkeyToggle, setAboutTurkeyToggle] = useState(false);
  const [Mediterranean, setMediterranean] = useState(false);
  const [Active, setActive] = useState(false);
  const dispatch = useDispatch();

  const AboutToggle = () => {
    setAboutTurkeyToggle(true);
    setBuyerGuide(false);
    setActive(false);
    dispatch(AboutTurkeyNavHandle(!AboutTurkeyToggle));
  };

  const BuyerToggle = () => {
    setBuyerGuide(true);
    setAboutTurkeyToggle(false);
    setActive(false);
    dispatch(AboutTurkeyNavHandle(!BuyerGuide));
  };

  const AboutUsToggle = () => {
    setActive(true);
    setAboutTurkeyToggle(false);
    setBuyerGuide(false);
    dispatch(AboutTurkeyNavHandle(!Active));
  };

  //   ---------------- BUYER GUID NAVIGATION ---------------------------
  const [BuyerGuide, setBuyerGuide] = useState(false);

  //   Params
  let location = useLocation();

  return (
    <>
      {/* ---------------- DESKTOP Nav ---------------------------- */}

      <nav className={` flex ${AboutTurkeyToggle ? "" : "close"}  `}>
        <div className="mobile closeNavBtn">
          <Link
            to="#"
            onClick={handleNavRemoveButtonClick}
            className="closeNav"
          >
            <i className="fa fa-arrow-left padding-right-05 font-13" />
            Back
          </Link>
        </div>
        <li className="bold">
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "#5081ff" : "black",
              fontWeight: location.pathname === "/" ? "bold" : "normal",
            }}
          >
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link
            to="/realState"
            style={{
              color: location.pathname === "/realState" ? "#5081ff" : "black",
              fontWeight:
                location.pathname === "/realState" ? "bold" : "normal",
            }}
            title="Buy Real Estate"
          >
            <b>Buy Real Estate</b>
          </Link>
        </li>
        {NavigationData.map((item) => {
          return (
            <li
              className={`has-child `}
              style={{ zIndex: 999999 }}
              onMouseOver={() => setAboutTurkeyToggle(true)}
              onMouseOut={() => setAboutTurkeyToggle(false)}
            >
              <Link
                to="/USA"
                title="About Turkey"
                style={{
                  color: location.pathname === "/USA" ? "#5081ff" : "black",
                  fontWeight: location.pathname === "/USA" ? "bold" : "normal",
                }}
              >
                <b>{item.title}</b>
              </Link>
              <div className="DesktopNav">
                <FiChevronDown className="IconMove cursor-pointer fa fa-angle-down" />
                {/* {AboutTurkeyToggle ? (
                  
                ) : (
                  <FiChevronDown
                    onMouseOut={() => setAboutTurkeyToggle(false)}
                    className="IconMove cursor-pointer fa fa-angle-down"
                  />
                )} */}
              </div>

              <div className="MobileNav">
                <i
                  onClick={AboutToggle}
                  className="IconMove cursor-pointer fa fa-angle-down"
                />
              </div>

              <div
                className={`level-2 ${AboutTurkeyToggle ? "open z-50" : ""}`}
              >
                <ul className="no-bullets">
                  {item.innerLinks.map((item) => {
                    return (
                      <li className="has-child">
                        <Link title="Mediterranean region">
                          {item.title}
                          <i
                            id="MediterraneanRegion"
                            onClick={() => setMediterranean(!Mediterranean)}
                            className="fa fa-angle-down"
                          />
                        </Link>
                        {item.innerLinks.map((item, i) => {
                          return (
                            <div
                              id="toggleRegion"
                              className={`${Mediterranean ? "" : "level-3"}`}
                            >
                              <ul className="no-bullets">
                                <li className="has-child">
                                  <Link title="About Antalya">
                                    {item.innerLinksText}
                                    <i className="fa fa-angle-right" />
                                  </Link>
                                  <div className="level-4">
                                    <ul className="no-bullets">
                                      <li>
                                        <Link
                                          to={`/about/${i + 1}`}
                                          state={{
                                            data: {
                                              title:
                                                "Konyaalti beach best of both worlds",
                                            },
                                          }}
                                        >
                                          Konyaalti beach best of both worlds
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={`/about/${i + 1}`}
                                          state={{
                                            data: {
                                              title:
                                                "Antalya old city or Kaleici of Antalya",
                                            },
                                          }}
                                        >
                                          Antalya old city or Kaleici of Antalya
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={`/about/${i + 1}`}
                                          state={{
                                            data: {
                                              title:
                                                "The vibrant Lara beach district",
                                            },
                                          }}
                                        >
                                          The vibrant Lara beach district
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          );
                        })}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}

        <li
          className={`has-child  ${BuyerGuide ? "active z-auto" : ""}`}
          onMouseOver={() => setBuyerGuide(true)}
          onMouseOut={() => setBuyerGuide(false)}
        >
          <Link
            to="/buyer"
            title="Buyer Guide"
            style={{
              color: location.pathname === "/buyer" ? "#5081ff" : "black",
              fontWeight: location.pathname === "/buyer" ? "bold" : "normal",
            }}
          >
            <b>Buyer Guide</b>
          </Link>
          <div className="DesktopNav">
            <FiChevronDown
              // onClick={BuyerToggle}
              className="IconMove cursor-pointer fa fa-angle-down"
            />
          </div>

          <div className="MobileNav">
            <i
              onClick={BuyerToggle}
              className="IconMove cursor-pointer fa fa-angle-down"
            />
          </div>

          <div className={`level-2 ${BuyerGuide ? "open  z-50" : ""}`}>
            <ul className="no-bullets">
              <li className="has-child">
                <Link title="Investing in Turkey">
                  Investing in Turkey
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link title="Why invest in property in Turkey">
                        Why invest in property in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="How to set up a business in Turkey">
                        How to set up a business in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Tax and Turkish real estate">
                        Tax and Turkish real estate
                      </Link>
                    </li>
                    <li>
                      <Link title="EU negotiations and Turkish property prices">
                        EU negotiations and Turkish property prices
                      </Link>
                    </li>
                    <li>
                      <Link title="Download macro-economic & investment analysis">
                        Download macro-economic &amp; investment analysis
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link title="Purchase process">
                  Purchase process
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link title="Who Can Buy Property in Turkey">
                        Who Can Buy Property in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="How to buy property in Turkey">
                        How to buy property in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="How to design and build your own">
                        How to design and build your own
                      </Link>
                    </li>
                    <li>
                      <Link title="Property USA Inspection Trips">
                        Property USA Inspection Trips
                      </Link>
                    </li>
                    <li>
                      <Link title="Virtual Tour with Property Turkey">
                        Virtual Tour with Property Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Costs of Purchasing a Property in Turkey">
                        Costs of Purchasing a Property in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Finance for property in Turkey">
                        Finance for property in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Property maintenance and management">
                        Property maintenance and management
                      </Link>
                    </li>
                    <li>
                      <Link title="How to get a Turkish Title Deed">
                        How to get a Turkish Title Deed
                      </Link>
                    </li>
                    <li>
                      <Link title="Should I use a solicitor to buy property in Turkey">
                        Should I use a solicitor to buy property in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Power of Attorney in Turkey">
                        Power of Attorney in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Buying property in USA through a company">
                        Buying property in USA through a company
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link title="Residency permits and visas">
                  Residency permits and visas
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link title="Residency permits in Turkey">
                        Residency permits in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Work permits in Turkey">
                        Work permits in Turkey
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link title="Your pets and cars">
                  Your pets and cars
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link title="Bringing your pets into Turkey">
                        Bringing your pets into Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Bringing your car into Turkey">
                        Bringing your car into Turkey
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link title="Property taxes">
                  Property taxes
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link title="Income Tax On Turkish Property">
                        Income Tax On Turkish Property
                      </Link>
                    </li>
                    <li>
                      <Link title="Capital Gains Tax On Sale Of Turkish Property">
                        Capital Gains Tax On Sale Of Turkish Property
                      </Link>
                    </li>
                    <li>
                      <Link title="VAT exemption when buying Turkish real estate">
                        VAT exemption when buying Turkish real estate
                      </Link>
                    </li>
                    <li>
                      <Link title="Real estate inheritance tax in Turkey">
                        Real estate inheritance tax in Turkey
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link title="Living in Turkey">
                  Living in Turkey
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link title="Retire to low cost of living in Turkey">
                        Retire to low cost of living in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Healthcare in Turkey">
                        Healthcare in Turkey
                      </Link>
                    </li>
                    <li>
                      <Link title="Where to buy property in Turkey?">
                        Where to buy property in Turkey?
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link title="Download Complete Buyer Guide">
                  Download Complete Buyer Guide
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={`has-child ${Active ? "active z-50" : ""}`}
          onMouseOver={() => setActive(true)}
          onMouseOut={() => setActive(false)}
        >
          <Link
            to="/aboutusguide"
            title="About Us"
            style={{
              color:
                location.pathname === "/aboutusguide" ? "#5081ff" : "black",
              fontWeight:
                location.pathname === "/aboutusguide" ? "bold" : "normal",
            }}
          >
            <b>About Us</b>
          </Link>
          <div className="DesktopNav">
            <FiChevronDown
              // onClick={AboutUsToggle}
              className="IconMove cursor-pointer fa fa-angle-down"
            />
          </div>

          <div className="MobileNav">
            {Active ? (
              <FiChevronUp
                onClick={AboutUsToggle}
                className="IconMove cursor-pointer fa fa-angle-down"
              />
            ) : (
              <FiChevronDown
                onClick={AboutUsToggle}
                className="IconMove cursor-pointer fa fa-angle-down"
              />
            )}
          </div>

          <div className={`level-2 ${Active ? "open" : ""}`}>
            <ul className="no-bullets">
              <li>
                <Link title="Our Services and Fees">Our Services and Fees</Link>
              </li>
              <li>
                <Link title="London">London</Link>
              </li>
              <li>
                <Link title="Istanbul">Istanbul</Link>
              </li>
              <li>
                <Link title="Bodrum">Bodrum</Link>
              </li>
              <li>
                <Link title="Fethiye">Fethiye</Link>
              </li>
              <li>
                <Link title="Antalya">Antalya</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            to="/contact"
            title="Contact Us"
            style={{
              color: location.pathname === "/contact" ? "#5081ff" : "black",
              fontWeight: location.pathname === "/contact" ? "bold" : "normal",
            }}
          >
            <b>Contact Us</b>
          </Link>
        </li>
        <li className="bold">
          {/* <Link to="propertyTurkey"><strong>Property USA TV</strong></Link> */}
        </li>
        <div className="showMb-hideDt auth header-right order-1 flex">
          <button className="login fl-dis-right  fl-tab-right fl-mob-right">
            Login
          </button>
          <Link className="login fl-dis-right  fl-tab-right fl-mob-right ">
            Register
          </Link>
        </div>
        <div className="header-phone-items order-3 showMb-hideDt ">
          <Link to="" className="active" title="English">
            EN
          </Link>
          <Link to="" title="Russian" className>
            RU
          </Link>
          <Link to="" title="Arabic">
            AR
          </Link>
          <Link to="" title="German">
            DE
          </Link>
          <Link to="" title="Chinese">
            中文
          </Link>
          <Link to="" title="Farsi">
            FA
          </Link>
        </div>
        <div className="currencyy currency-widget showMb-hideDt  order-2">
          <Link
            rel="nofollow"
            className
            title="Sterling Pound  "
            data-cur="GBP"
          >
            <i className="fa fa-gbp" />
          </Link>
          <Link rel="nofollow" className title="Euro " data-cur="EUR">
            <i className="fa fa-eur" />
          </Link>
          <Link
            rel="nofollow"
            to=""
            className="active"
            title="Dollar "
            data-cur="USD"
          >
            <i className="fa fa-usd" />
          </Link>
          <Link rel="nofollow" className title="Turkish Lira " data-cur="TRY">
            <i className="fa fa-try" />
          </Link>
        </div>
      </nav>
    </>
  );
}
