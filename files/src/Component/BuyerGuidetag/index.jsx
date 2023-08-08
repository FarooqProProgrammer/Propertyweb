import React, { useState } from "react";
import { Link } from "react-router-dom";
import BuyerGuideTitle from "./BuyerGuideTitle";
import BuyerGuideBreadCrumb from "./BuyerGuideBreadCrumb";
import Header from "../../ReUseAbleComponent/Header";
import { Box, Typography } from "@mui/material";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function BuyerGuidetag() {
  const [toggleInvesting, settoggleInvesting] = useState(false);
  const [togglePurchase, settogglePurchase] = useState(false);
  const [toggleResidency, settoggleResidency] = useState(false);
  const [togglepets, settogglepets] = useState(false);
  const [toggleproperty, settoggleproperty] = useState(false);
  const [toggleLiving, settoggleLiving] = useState(false);

  const filterDataInvest = [
    {
      link: "Why invest in property in USA",
    },

    {
      link: "How to set up a business in USA",
    },
  ];

  return (
    <>
      <section id="main" className="cf  disable-copy ">
        <Header title="Buyer Guide" />
        <div className="buyer-guide" style={{ backgroundColor: "#f7f5f2" }}>
          <div className="row">
            <div className="col-12 col-md-3 buyer-guide--side-bar-bg">
              <div className="container-fluid">
                <p className="buyer-guide--title"> Buyer Guide</p>
                <div className="padding-top-2 side-item">
                  <div className="buyer-guide--supertitle">
                    <p
                      className="buyer-guide--title-tab"
                      title="Investing in USA"
                    >
                      Investing in USA
                    </p>
                    {toggleInvesting ? (
                      <FiChevronDown
                        onClick={() => settoggleInvesting(!toggleInvesting)}
                        className="tabs-icon"
                      />
                    ) : (
                      <FiChevronUp
                        onClick={() => settoggleInvesting(!toggleInvesting)}
                        className="tabs-icon"
                      />
                    )}
                  </div>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      toggleInvesting ? "" : "hide"
                    }`}
                  >
                    {filterDataInvest.map((item) => {
                      return (
                        <li className="">
                          <Link title={item.link}>{item.link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="padding-top-2 side-item">
                  <div className="buyer-guide--supertitle">
                    <p
                      className="buyer-guide--title-tab"
                      title="Purchase process"
                    >
                      Purchase process
                    </p>
                    {togglePurchase ? (
                      <FiChevronDown
                        onClick={() => settogglePurchase(!togglePurchase)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiChevronUp
                        onClick={() => settogglePurchase(!togglePurchase)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      togglePurchase ? "" : "hide"
                    }`}
                  >
                    <li className="">
                      <Link title="Who Can Buy Property in USA">
                        Who Can Buy Property in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="How to buy property in USA">
                        How to buy property in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="How to design and build your own">
                        How to design and build your own
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Property USA Inspection Trips">
                        Property USA Inspection Trips
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Virtual Tour with Property USA">
                        Virtual Tour with Property USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Costs of Purchasing a Property in USA">
                        Costs of Purchasing a Property in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Finance for property in USA">
                        Finance for property in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Property maintenance and management">
                        Property maintenance and management
                      </Link>
                    </li>
                    <li className="">
                      <Link title="How to get a USA Title Deed">
                        How to get a USA Title Deed
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Should I use a solicitor to buy property in USA">
                        Should I use a solicitor to buy property in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Power of Attorney in USA">
                        Power of Attorney in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Buying property in USA through a company">
                        Buying property in USA through a company
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
                    {toggleResidency ? (
                      <FiChevronDown
                        onClick={() => settoggleResidency(!toggleResidency)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiChevronUp
                        onClick={() => settoggleResidency(!toggleResidency)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      toggleResidency ? "" : "hide"
                    }`}
                  >
                    <li className="">
                      <Link title="Residency permits in USA">
                        Residency permits in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Work permits in USA">
                        Work permits in USA
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="padding-top-2 side-item">
                  <div className="buyer-guide--supertitle">
                    <p
                      className="buyer-guide--title-tab"
                      title="Your pets and cars"
                    >
                      Your pets and cars
                    </p>
                    {togglepets ? (
                      <FiChevronDown
                        onClick={() => settogglepets(!togglepets)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiChevronUp
                        onClick={() => settogglepets(!togglepets)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      togglepets ? "" : "hide"
                    }`}
                  >
                    <li className="">
                      <Link title="Bringing your pets into USA">
                        Bringing your pets into USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Bringing your car into USA">
                        Bringing your car into USA
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="padding-top-2 side-item">
                  <div className="buyer-guide--supertitle">
                    <p
                      className="buyer-guide--title-tab"
                      title="Property taxes"
                    >
                      Property taxes
                    </p>
                    {toggleproperty ? (
                      <FiChevronDown
                        onClick={() => settoggleproperty(!toggleproperty)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiChevronUp
                        onClick={() => settoggleproperty(!toggleproperty)}
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      toggleproperty ? "" : "hide"
                    }`}
                  >
                    <li className="">
                      <Link title="Income Tax On USA Property">
                        Income Tax On USA Property
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Capital Gains Tax On Sale Of USA Property">
                        Capital Gains Tax On Sale Of USA Property
                      </Link>
                    </li>
                    <li className="">
                      <Link title="VAT exemption when buying USA real estate">
                        VAT exemption when buying USA real estate
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Real estate inheritance tax in USA">
                        Real estate inheritance tax in USA
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="padding-top-2 side-item">
                  <div className="buyer-guide--supertitle">
                    <p className="buyer-guide--title-tab" title="Living in USA">
                      Living in USA
                    </p>
                    {toggleLiving ? (
                      <FiChevronDown
                        onClick={() => settoggleLiving(!toggleLiving)}
                        className="fa fa-angle-up tabs-icon"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiChevronUp
                        onClick={() => settoggleLiving(!toggleLiving)}
                        className="fa fa-angle-up tabs-icon"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      toggleLiving ? "" : "hide"
                    }`}
                  >
                    <li className="">
                      <Link title="Retire to low cost of living in USA">
                        Retire to low cost of living in USA
                      </Link>
                    </li>
                    <li className="">
                      <Link title="Healthcare in USA">Healthcare in USA</Link>
                    </li>
                    <li className="">
                      <Link title="Where to buy property in USA?">
                        Where to buy property in USA?
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
                      <Link title="Download Complete Buyer Guide">
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
            <BuyerGuideTitle />
          </div>
        </div>
      </section>
    </>
  );
}
