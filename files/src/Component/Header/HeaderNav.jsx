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
              onClick={() => setAboutTurkeyToggle(false)}
              onMouseEnter={() => setAboutTurkeyToggle(true)}
              onMouseLeave={() => setAboutTurkeyToggle(false)}
            >
              <Link
                to="/USA"
                title="About USA"
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
                        <span>
                          {item.title}
                          <i
                            id="MediterraneanRegion"
                            onClick={() => setMediterranean(!Mediterranean)}
                            className="fa fa-angle-down"
                          />
                        </span>
                        {item.innerLinks.map((item, i) => {
                          return (
                            <div
                              id="toggleRegion"
                              className={`${Mediterranean ? "" : "level-3"}`}
                            >
                              <ul className="no-bullets">
                                <li className="has-child">
                                  <Link
                                    state={{
                                      data: {
                                        title: item.innerLinksText,
                                      },
                                    }}
                                  >
                                    {item.innerLinksText}
                                    <i className="fa fa-angle-right" />
                                  </Link>
                                  <div className="level-4">
                                    <ul className="no-bullets">
                                      <li>
                                        <Link
                                          to={`/about/${i + 1}`}
                                          onClick={() => {
                                            window.setTimeout(function () {
                                              setAboutTurkeyToggle(false);
                                            }, 500);
                                          }}
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
          onMouseEnter={() => setBuyerGuide(true)}
          onMouseLeave={() => setBuyerGuide(false)}
          onClick={() => setBuyerGuide(false)}
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
                <Link
                  title="Investing in USA"
                  to={`/about/3`}
                  onClick={() => {
                    window.setTimeout(function () {
                      setAboutTurkeyToggle(false);
                    }, 500);
                  }}
                  state={{
                    data: {
                      title: "Investing in USA",
                    },
                  }}
                >
                  Investing in USA
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link
                        title="Why invest in property in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Why invest in property in USA",
                          },
                        }}
                      >
                        Why invest in property in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="How to set up a business in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "How to set up a business in USA",
                          },
                        }}
                      >
                        How to set up a business in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Tax and American real estate"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Tax and American real estate",
                          },
                        }}
                      >
                        Tax and American real estate
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="EU negotiations and American property prices"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title:
                              "EU negotiations and American property prices",
                          },
                        }}
                      >
                        EU negotiations and American property prices
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Download macro-economic & investment analysis"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title:
                              "Download macro-economic &amp; investment analysis",
                          },
                        }}
                      >
                        Download macro-economic &amp; investment analysis
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link
                  title="Purchase process"
                  to={`/about/3`}
                  onClick={() => {
                    window.setTimeout(function () {
                      setAboutTurkeyToggle(false);
                    }, 500);
                  }}
                  state={{
                    data: {
                      title: "Purchase Process",
                    },
                  }}
                >
                  Purchase process
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link
                        title="Who Can Buy Property in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Investing in USA",
                          },
                        }}
                      >
                        Who Can Buy Property in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="How to buy property in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Investing in USA",
                          },
                        }}
                      >
                        How to buy property in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="How to design and build your own"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Investing in USA",
                          },
                        }}
                      >
                        How to design and build your own
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Property USA Inspection Trips"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Property USA Inspection Trips",
                          },
                        }}
                      >
                        Property USA Inspection Trips
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Virtual Tour with Property USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Virtual Tour with Property USA",
                          },
                        }}
                      >
                        Virtual Tour with Property USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Costs of Purchasing a Property in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Costs of Purchasing a Property in USA",
                          },
                        }}
                      >
                        Costs of Purchasing a Property in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Finance for property in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Finance for property in USA",
                          },
                        }}
                      >
                        Finance for property in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Property maintenance and management"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Property maintenance and management",
                          },
                        }}
                      >
                        Property maintenance and management
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="How to get a American Title Deed"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "How to get a American Title Deed",
                          },
                        }}
                      >
                        How to get a American Title Deed
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Should I use a solicitor to buy property in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title:
                              "Should I use a solicitor to buy property in USA",
                          },
                        }}
                      >
                        Should I use a solicitor to buy property in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Power of Attorney in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Power of Attorney in USA",
                          },
                        }}
                      >
                        Power of Attorney in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Buying property in USA through a company"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Buying property in USA through a company",
                          },
                        }}
                      >
                        Buying property in USA through a company
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link
                  title="Residency permits and visas"
                  to={`/about/3`}
                  onClick={() => {
                    window.setTimeout(function () {
                      setAboutTurkeyToggle(false);
                    }, 500);
                  }}
                  state={{
                    data: {
                      title: "Residency permits and visas",
                    },
                  }}
                >
                  Residency permits and visas
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link
                        title="Residency permits in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Residency permits in USA",
                          },
                        }}
                      >
                        Residency permits in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Work permits in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Work permits in USA",
                          },
                        }}
                      >
                        Work permits in USA
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link
                  title="Your pets and cars"
                  to={`/about/3`}
                  onClick={() => {
                    window.setTimeout(function () {
                      setAboutTurkeyToggle(false);
                    }, 500);
                  }}
                  state={{
                    data: {
                      title: "Your pets and cars",
                    },
                  }}
                >
                  Your pets and cars
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link
                        title="Bringing your pets into USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Bringing your pets into USA",
                          },
                        }}
                      >
                        Bringing your pets into USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Bringing your car into USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Bringing your car into USA",
                          },
                        }}
                      >
                        Bringing your car into USA
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link
                  title="Property taxes"
                  to={`/about/3`}
                  onClick={() => {
                    window.setTimeout(function () {
                      setAboutTurkeyToggle(false);
                    }, 500);
                  }}
                  state={{
                    data: {
                      title: "Property taxes",
                    },
                  }}
                >
                  Property taxes
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link
                        title="Income Tax On American Property"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Income Tax On American Property",
                          },
                        }}
                      >
                        Income Tax On American Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Capital Gains Tax On Sale Of American Property"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title:
                              "Capital Gains Tax On Sale Of American Property",
                          },
                        }}
                      >
                        Capital Gains Tax On Sale Of American Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="VAT exemption when buying American real estate"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title:
                              "VAT exemption when buying American real estate",
                          },
                        }}
                      >
                        VAT exemption when buying American real estate
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Real estate inheritance tax in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Real estate inheritance tax in USA",
                          },
                        }}
                      >
                        Real estate inheritance tax in USA
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-child">
                <Link
                  title="Living in USA"
                  to={`/about/3`}
                  onClick={() => {
                    window.setTimeout(function () {
                      setAboutTurkeyToggle(false);
                    }, 500);
                  }}
                  state={{
                    data: {
                      title: "Living in USA",
                    },
                  }}
                >
                  Living in USA
                  <i className="fa fa-angle-down" />
                </Link>
                <div className="level-3">
                  <ul className="no-bullets">
                    <li>
                      <Link
                        title="Retire to low cost of living in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Retire to low cost of living in USA",
                          },
                        }}
                      >
                        Retire to low cost of living in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Healthcare in USA"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Healthcare in USA",
                          },
                        }}
                      >
                        Healthcare in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Where to buy property in USA?"
                        to={`/about/3`}
                        onClick={() => {
                          window.setTimeout(function () {
                            setAboutTurkeyToggle(false);
                          }, 500);
                        }}
                        state={{
                          data: {
                            title: "Where to buy property in USA?",
                          },
                        }}
                      >
                        Where to buy property in USA?
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  title="Download Complete Buyer Guide"
                  to={`/about/3`}
                  onClick={() => {
                    window.setTimeout(function () {
                      setAboutTurkeyToggle(false);
                    }, 500);
                  }}
                  state={{
                    data: {
                      title: "Download Complete Buyer Guide",
                    },
                  }}
                >
                  Download Complete Buyer Guide
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={`has-child ${Active ? "active z-50" : ""}`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onClick={() => setActive(false)}
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
                <Link
                  title="Our Services and Fees"
                  to={`/about/4`}
                  state={{
                    data: {
                      title: "Our Services and Fees",
                    },
                  }}
                  onClick={() => {
                    window.setTimeout(function () {
                      setActive(false);
                    }, 500);
                  }}
                >
                  Our Services and Fees
                </Link>
              </li>
              <li>
                <Link
                  title="California"
                  to={`/about/4`}
                  state={{
                    data: {
                      title: "California",
                    },
                  }}
                  onClick={() => {
                    window.setTimeout(function () {
                      setActive(false);
                    }, 500);
                  }}
                >
                  California
                </Link>
              </li>
              <li>
                <Link
                  title="San Francisco"
                  to={`/about/4`}
                  state={{
                    data: {
                      title: "San Francisco",
                    },
                  }}
                  onClick={() => {
                    window.setTimeout(function () {
                      setActive(false);
                    }, 500);
                  }}
                >
                  San Francisco
                </Link>
              </li>
              <li>
                <Link
                  title="Nevada"
                  to={`/about/4`}
                  state={{
                    data: {
                      title: "Nevada",
                    },
                  }}
                  onClick={() => {
                    window.setTimeout(function () {
                      setActive(false);
                    }, 500);
                  }}
                >
                  Nevada
                </Link>
              </li>
              <li>
                <Link
                  title="Las Vegas"
                  to={`/about/4`}
                  state={{
                    data: {
                      title: "Las Vegas",
                    },
                  }}
                  onClick={() => {
                    window.setTimeout(function () {
                      setActive(false);
                    }, 500);
                  }}
                >
                  Las Vegas
                </Link>
              </li>
              <li>
                <Link
                  title="Alaska"
                  to={`/about/4`}
                  state={{
                    data: {
                      title: "Alaska",
                    },
                  }}
                  onClick={() => {
                    window.setTimeout(function () {
                      setActive(false);
                    }, 500);
                  }}
                >
                  Alaska
                </Link>
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
          <Link
            rel="nofollow"
            className
            title="American Dollar "
            data-cur="TRY"
          >
            <i className="fa fa-try" />
          </Link>
        </div>
      </nav>
    </>
  );
}
