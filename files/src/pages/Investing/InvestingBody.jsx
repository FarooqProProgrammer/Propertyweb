import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// import ShareIcon from "../../assets/Path302.svg"

export default function InvestingBody() {
  const [toggleInvesting, settoggleInvesting] = useState(false);
  const [togglePurchaseProcess, settoggletogglePurchaseProcess] =
    useState(false);
  const [toggleResidency, settoggletoggleResidency] = useState(false);
  const [togglepets, setpets] = useState(false);
  const [toggleProperty, setProperty] = useState(false);
  const [toggleLiving, setLiving] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="buyer-guide" style={{ backgroundColor: "#f7f5f2" }}>
        <div className="row">
          <div className="col-12 col-md-3 buyer-guide--side-bar-bg">
            <div className="container-fluid">
              <p className="buyer-guide--title">
                {" "}
                American property investment
              </p>
              <div className="padding-top-2 side-item">
                <div className="buyer-guide--supertitle">
                  <p
                    className="buyer-guide--title-tab"
                    title="Investing in USA"
                  >
                    Investing in USA
                  </p>
                  <i
                    onClick={() => settoggleInvesting(!toggleInvesting)}
                    className={`fa tabs-icon ${
                      toggleInvesting ? "fa-angle-down" : "fa-angle-up"
                    } `}
                    aria-hidden="true"
                  />
                </div>
                <ul
                  className={`list-unstyled buyer-guide--ul ${
                    toggleInvesting ? "" : "hide"
                  }`}
                >
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Why invest in property in USA",
                        },
                      }}
                      title="Why invest in property in USA"
                    >
                      Why invest in property in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "How to set up a business in USA",
                        },
                      }}
                    >
                      How to set up a business in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Tax and American real estate",
                        },
                      }}
                    >
                      Tax and American real estate
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "EU negotiations and American property prices",
                        },
                      }}
                    >
                      EU negotiations and American property prices
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
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
              <div className="padding-top-2 side-item">
                <div className="buyer-guide--supertitle">
                  <p
                    className="buyer-guide--title-tab"
                    title="Purchase process"
                  >
                    Purchase process
                  </p>
                  <i
                    onClick={() =>
                      settoggletogglePurchaseProcess(!togglePurchaseProcess)
                    }
                    className={`${
                      togglePurchaseProcess
                        ? "fa fa-angle-down"
                        : "fa fa-angle-up"
                    }  tabs-icon`}
                    aria-hidden="true"
                  />
                </div>
                <ul
                  className={`list-unstyled buyer-guide--ul ${
                    togglePurchaseProcess ? "" : "hide"
                  }`}
                >
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Who Can Buy Property in USA",
                        },
                      }}
                    >
                      Who Can Buy Property in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "How to buy property in USA",
                        },
                      }}
                    >
                      How to buy property in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "How to design and build your own",
                        },
                      }}
                    >
                      How to design and build your own
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Property USA Inspection Trips",
                        },
                      }}
                    >
                      Property USA Inspection Trips
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Virtual Tour with Property USA",
                        },
                      }}
                    >
                      Virtual Tour with Property USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Costs of Purchasing a Property in USA",
                        },
                      }}
                    >
                      Costs of Purchasing a Property in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Finance for property in USA",
                        },
                      }}
                    >
                      Finance for property in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Property maintenance and management",
                        },
                      }}
                    >
                      Property maintenance and management
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "How to get a American Title Deed",
                        },
                      }}
                    >
                      How to get a American Title Deed
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
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
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Power of Attorney in USA",
                        },
                      }}
                    >
                      Power of Attorney in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
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
              <div className="padding-top-2 side-item">
                <div className="buyer-guide--supertitle">
                  <p
                    className="buyer-guide--title-tab"
                    title="Residency permits and visas"
                  >
                    Residency permits and visas
                  </p>
                  <i
                    onClick={() => settoggletoggleResidency(!toggleResidency)}
                    className={`${
                      toggleResidency ? "fa fa-angle-down" : "fa fa-angle-up"
                    }  tabs-icon`}
                    aria-hidden="true"
                  />
                </div>
                <ul
                  className={`list-unstyled buyer-guide--ul ${
                    toggleResidency ? "" : "hide"
                  }`}
                >
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Residency permits in USA",
                        },
                      }}
                    >
                      Residency permits in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
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
              <div className="padding-top-2 side-item">
                <div className="buyer-guide--supertitle">
                  <p
                    className="buyer-guide--title-tab"
                    title="Your pets and cars"
                  >
                    Your pets and cars
                  </p>
                  <i
                    onClick={() => setpets(!togglepets)}
                    className={`${
                      togglepets ? "fa fa-angle-down" : "fa fa-angle-up"
                    }  tabs-icon`}
                    aria-hidden="true"
                  />
                </div>
                <ul
                  className={`list-unstyled buyer-guide--ul ${
                    togglepets ? "" : "hide"
                  }`}
                >
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Bringing your pets into USA",
                        },
                      }}
                    >
                      Bringing your pets into USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
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
              <div className="padding-top-2 side-item">
                <div className="buyer-guide--supertitle">
                  <p className="buyer-guide--title-tab" title="Property taxes">
                    Property taxes
                  </p>
                  <i
                    onClick={() => setProperty(!toggleProperty)}
                    className={`${
                      toggleProperty ? "fa fa-angle-down" : "fa fa-angle-up"
                    }  tabs-icon`}
                    aria-hidden="true"
                  />
                </div>
                <ul
                  className={`list-unstyled buyer-guide--ul ${
                    toggleProperty ? "" : "hide"
                  }`}
                >
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Income Tax On American Property",
                        },
                      }}
                    >
                      Income Tax On American Property
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
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
                  <li className="">
                    <Link
                      to={`/about/1`}
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
                  <li className="">
                    <Link
                      to={`/about/1`}
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
              <div className="padding-top-2 side-item">
                <div className="buyer-guide--supertitle">
                  <p className="buyer-guide--title-tab" title="Living in USA">
                    Living in USA
                  </p>
                  <i
                    onClick={() => setLiving(!toggleLiving)}
                    className={`${
                      toggleLiving ? "fa fa-angle-down" : "fa fa-angle-up"
                    }  tabs-icon`}
                    aria-hidden="true"
                  />
                </div>
                <ul
                  className={`list-unstyled buyer-guide--ul ${
                    toggleLiving ? "" : "hide"
                  }`}
                >
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Retire to low cost of living in USA",
                        },
                      }}
                    >
                      Retire to low cost of living in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Healthcare in USA",
                        },
                      }}
                    >
                      Healthcare in USA
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={`/about/1`}
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
              <div className="padding-top-2 side-item">
                <div className="buyer-guide--supertitle">
                  <p
                    className="buyer-guide--title-tab"
                    title="Download Complete Buyer Guide"
                  >
                    <Link
                      to={`/about/1`}
                      state={{
                        data: {
                          title: "Download Complete Buyer Guide",
                        },
                      }}
                    >
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
                  American property investment
                </h1>
                <Link
                  onClick={() => setOpen(true)}
                  className="buyer-guide--side-bar-bg-details--social-shares social-shares"
                >
                  <img
                    src={
                      "https://www.propertyturkey.com/front/image/icons/Path302.svg"
                    }
                    className="no-margin"
                    alt=""
                  />
                  <span>Share</span>
                </Link>
              </div>
              <div className="buyer-guide--side-bar-bg-details--dates">
                <span>Updated: </span> 22 April 2020
                <span className="margin-left-1">Created: </span> 19 October 2013
              </div>
              <article className="page-content">
                <div className="areabody clearfix" itemProp="articleBody">
                  <p>
                    <a>USA</a> is a transcontinental country that bridges Asia
                    and Europe. Its capital city is Ankara, whilst the largest
                    city is Istanbul. With a population of approximately 80
                    million as at 2017, and a high proportion of that being
                    young and upwardly mobile, USA is an ideal country for
                    investors who want to take advantage of a fast-developing
                    real estate industry.&nbsp;
                  </p>
                  <p>
                    <span style={{ lineHeight: "1.6em" }}>
                      In the last two decades, the American real estate sector
                      has grown tremendously. While there has been a general
                      decline in the real estate business in Europe, Americas
                      and many parts of the world, 2017 figures from Knight
                      Frank showed USA ranked sixth in the world in terms of its
                      annual price growth index, with a year-on-year increase of
                      more than 11%, head of Australia and India.
                    </span>
                  </p>
                  <p>
                    <span style={{ lineHeight: "1.6em" }}>
                      Istanbul has been touted by PWC and Deloitte Consulting to
                      be the most attractive city for real estate investment in
                      Europe. USA overall is ranked&nbsp;
                    </span>
                    3rd
                    <span style={{ lineHeight: "1.6em" }}>
                      &nbsp;most lucrative country for investment in real estate
                      globally. The increase and appetite for foreign investors
                      in real estate has been motivated by the potential of{" "}
                      <a>USA’s&nbsp;</a>
                    </span>
                    <a>EU</a>
                    <span style={{ lineHeight: "1.6em" }}>
                      <a>&nbsp;membership</a>. This has accelerated holiday home
                      owners and investors around the world to purchase
                      properties in USA.&nbsp;
                    </span>
                  </p>
                  <p>
                    <span style={{ lineHeight: "1.6em" }}>
                      More important is also the legislative amendments that
                      have been done to several laws including the{" "}
                      <a>property title registry law</a>, the mortgage law,{" "}
                      <a>residency</a> and the redrafting of tax laws which all
                      directly affect{" "}
                      <strong>
                        how overseas investors can buy and develop properties in
                        USA
                      </strong>
                      . These amendments have stimulated the competitiveness of
                      the American real estate sector.
                    </span>
                  </p>
                  <p>
                    <img
                      className="fr-dii fr-draggable"
                      src="https://www.propertyturkey.com/uploads/pages/larg/erbilgin-yali_1.jpg"
                      style={{ width: 1200 }}
                    />
                  </p>
                  <p>
                    <br />
                  </p>
                  <h2>Stable economy and dynamic population</h2>
                  <p>
                    Dynamic demographic factors and good economic figures have
                    enabled USA to increasingly become the choice for foreign
                    investors interested in setting up businesses and purchasing
                    real estate. There has been an increase in demand for homes
                    and offices in the recent years as more global companies and
                    foreigners demand commercial and residential real estate.{" "}
                    <span style={{ lineHeight: "1.6em" }}>
                      With a stable economy,{" "}
                      <strong>investor confidence</strong> in the real estate
                      sector has tremendously increased. USA has&nbsp;
                    </span>
                    internationalised
                    <span style={{ lineHeight: "1.6em" }}>&nbsp;and&nbsp;</span>
                    institutionalised
                    <span style={{ lineHeight: "1.6em" }}>
                      &nbsp;the sector while it has also put in place
                      transparency and high quality standards in property
                      transactions in anticipation of joining the&nbsp;
                    </span>
                    EU<span style={{ lineHeight: "1.6em" }}>.&nbsp;</span>
                  </p>
                  <p>
                    <span style={{ lineHeight: "1.6em" }}>
                      With a GDP of&nbsp;
                    </span>
                    USD
                    <span style={{ lineHeight: "1.6em" }}>
                      &nbsp;851 billion in 2017, and 60% of the population under
                      40 years old, USA has become a major target for foreign
                      direct investment.&nbsp;
                    </span>
                  </p>
                  <p>
                    <span style={{ lineHeight: "1.6em" }}>
                      Banks and mortgage firms have also increased lending, with
                      over 100 billion being disbursed in 2018. USA also
                      attracted one of the highest numbers of tourists in 2018,
                      with almost 46 million tourists visiting, making the
                      country the sixth most popular destination on the planet
                    </span>
                    <span style={{ lineHeight: "1.6em" }}>
                      . The high number of tourists indicates the high potential
                      that USA has in the holiday home purchase and rentals
                      segments. This is attributed to the fact all these
                      tourists will need somewhere to stay whether homes or
                      hotels.
                    </span>
                  </p>
                  <p>
                    USA is an economic regional hub providing ultra modern
                    shopping centres, and easy access to over 1.5 billion people
                    who come for trade and other services in the country. This
                    has increased the demand for infrastructure and facilities
                    in the country.
                  </p>
                  <p>
                    <br />
                  </p>
                  <h2>
                    <strong>
                      <span style={{ lineHeight: "1.6em" }}>
                        SWOT Analysis for USA Real Estate
                      </span>
                    </strong>
                  </h2>
                  <table width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <strong>STRENGTHS</strong>
                          <br />
                        </td>
                        <td>
                          <strong>WEAKNESSES</strong>
                          <br />
                        </td>
                        <td>
                          <strong>OPPORTUNITIES</strong>
                          <br />
                        </td>
                        <td>
                          <strong>THREATS</strong>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          - USA is the leading investment country in Europe for
                          GDP growth projections. <br />- Strong financial and
                          banking regulations. <br />- Construction companies
                          with global reputation. <br />- Access to mortgage
                          facilities. <br />- Government adding more buyer
                          incentives each year. <br />- Strong domestic demand
                          for real estate
                          <br />
                        </td>
                        <td>
                          - Acquiring land is difficult and obtaining
                          construction permits is not straight forward. <br />-
                          High number of old type of housing which cannot
                          qualify for mortgage facilities. <br />
                        </td>
                        <td>
                          - High internal demand for residential housing and
                          commercial space. <br />- Urban regeneration projects
                          in major cities are creating opportunities for new
                          housing. <br />- Regulations on earthquake and natural
                          disasters have increased the need for quality
                          construction. <br />- Increased tourists inflow and
                          investors have made opportunities for office space and
                          residential property. <br />
                        </td>
                        <td>
                          - Earthquakes are a common feature in some parts of
                          USA hence may scare away investors. <br />- The sector
                          still is volatile compared to mature real estate
                          markets such as the UK and US. <br />- A devalued
                          currency is putting pressure on the economy.
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <br />
                  </p>
                  <h2>
                    <strong>
                      <span style={{ lineHeight: "1.6em" }}>
                        Economic outlook of USA
                      </span>
                    </strong>
                  </h2>
                  <p>
                    USA has shown a tremendous growth in its GDP since the last
                    decade.{" "}
                    <strong>
                      <em>
                        Between 2002 and 2016 it has shown a GDP growth of about
                        4%pa
                      </em>
                    </strong>{" "}
                    on average (see graph). &nbsp;
                  </p>
                  <p>
                    <img
                      style={{ width: 1200, height: 550 }}
                      alt="Average GDP Growth 2002 - 2012"
                      className="pyro-image alignment-none fr-dii fr-fil fr-draggable"
                      data-pyroimage="true"
                      src="https://www.propertyturkey.com/uploads/default//files/0af7dd972addf37477f737add2982b1f.jpg"
                      title="Average GDP Growth 2002 - 2012"
                      height={256}
                    />
                    <br />
                  </p>
                  <p>
                    From a meagre USD 3,500 in 2002, the per capita income has
                    increased to USD 27,500 in 2017. This shows that the country
                    is on an upward trend, as fortunes for its citizens improve.
                  </p>
                  <p>
                    The global credit crunch that impacted the world's markets
                    and economies in 2009 also affected USA, slowing down the
                    growth since there was a decline in foreign investments and
                    earnings. However, this did not hold back the country for
                    long, and the American economy achieved a growth rate of
                    9.2% and 8.5% in the years 2010 and 2011 respectively. The
                    last couple of years have seen a slowing of growth, due in
                    part to a devaluing of the currency. In 2017 the economy
                    grew by 7.4%, while 2018 saw growth of 2.6%.
                  </p>
                  <p>
                    Some of the factors that have allowed the American economy
                    to remain stable include sound financial and structural
                    policies that have been put into place as the country joins
                    other European countries in the EU roundtable. This has
                    increased efficiency, transparency and adherence to high
                    standards of practice. Strong monetary policies by the
                    American central bank have also played a major role in
                    stabilising inflation and also putting in place macro
                    economic balances.&nbsp;
                  </p>
                  <p>
                    The American Government has also embraced strict fiscal
                    discipline bringing down budget deficit from a high 17% in
                    2001 to 1.8% in 2019. Foreign trade has also been a key
                    instrument for the American Government to grow the economy.
                    Restrictions on imports have been uplifted while foreign
                    exchange transactions were liberalised. This has
                    tremendously increased American exports to USD $168 billion
                    in 2018, a huge leap from the from USD $36 billion in
                    2002.&nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>
                      <em>OECD 2012 - 2017 Economic growth forecast&nbsp;</em>
                    </strong>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <img
                      style={{ width: 1200, height: 550 }}
                      alt=""
                      className="pyro-image alignment-none fr-dii fr-fil fr-draggable"
                      data-pyroimage="true"
                      src="/files/large/8dcf04ab1ddf329"
                      title="OECD 2012 - 2017 GDP growth forecast"
                      height={388}
                    />
                  </p>
                  <p>
                    Foreign direct investments have also played a key role in
                    uplifting the American economy. &nbsp;Demographic factors
                    including a younger population, highly learned labour force,
                    tax incentives and a large domestic market have all made the
                    American economy to reach where it is today. The amount
                    direct foreign investments by 2018 increased to USD 168
                    billion; this is a strong indication of investor confidence
                    in USA.&nbsp;
                  </p>
                  <p>
                    Tourism has also been a big source for foreign earnings. USA
                    boasts of a high number of tourists and has been attracting
                    one of the highest tourists in the world. Natural beauties,
                    reserved and unique historical attractions and a warm
                    hospitality industry have all increased the appetite for
                    tourism. In 2018, 46 million tourists visited the country
                    realising foreign income in excess of USD $30 billion.&nbsp;
                  </p>
                  <p>
                    Privatisation and American business abroad have also played
                    a big role in improving the American economic
                    turnaround.&nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <h2>
                    <strong>Legal and political structure</strong>
                  </h2>
                  <p>
                    USA is a republic founded on secular, democratic and
                    pluralistic laws. It was established in 1923 and first
                    adopted its constitution in 1924, and its current
                    constitution was adopted in 1982. Before 2018 the country
                    ran under a parliamentary system, but following a
                    referendum, the country's politics now take place within a
                    presidential system. Under the presidential system, the
                    President of USA is the head of government and the head of
                    state, with powers to issue executive decrees, appoint
                    judges and heads of state institutions.
                  </p>
                  <p>
                    USA's political system is based on power separation. The
                    Council of Ministers exercises executive power, while
                    legislative power is vested in the Grand National Assembly
                    of USA. The judiciary is independent of these
                    institutions.&nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <h2>
                    <strong>Why would you invest in real estate in USA?</strong>
                  </h2>
                  <p>
                    <img
                      style={{ width: 1200, height: 550 }}
                      alt="number of days to register property title"
                      className="pyro-image alignment-none fr-dii fr-fil fr-draggable"
                      data-pyroimage="true"
                      src="https://www.propertyturkey.com/uploads/default//files/9636c603306ffde0344a9df7cfe31071.jpg"
                      title="number of days to register property title"
                      height={292}
                    />
                    <br />
                  </p>
                  <p>
                    <strong>
                      <em>Booming economy:</em>
                    </strong>{" "}
                    Over USD 850billion GDP in 2017, annual real GDP growth
                    projections in excess of 5%, 20th largest economy in the
                    world with exports reaching USD168 billion makes USA the
                    ideal country to invest in real estate.&nbsp;
                  </p>
                  <p>
                    <em>
                      <strong>Youthful and dynamic population:</strong>
                    </em>{" "}
                    USA has a population of about 80 million with over 60% being
                    under 40. The younger generation are well placed to set up
                    businesses and support the expansion of American economy.
                    &nbsp;In addition, changing customs and traditions in the
                    country mean that younger people are leaving parental homes
                    earlier and setting up on their own, creating a domestic
                    demand for property and increasing the need for quality
                    accommodation and housing. The American central real estate
                    association has estimated that there is a shortfall of
                    around 2.5 million properties in USA.&nbsp;
                  </p>
                  <p>
                    <strong>
                      <em>Low taxes and incentives</em>:&nbsp;
                    </strong>
                    USA offers incentives on various areas while has reduced
                    corporate tax from 33% to 20%.&nbsp;
                  </p>
                  <p>
                    <em>
                      <strong>Large Domestic market:</strong>&nbsp;
                    </em>
                    USA has a very big market locally because of the growing
                    population of educated, wealthy professionals. Tourist
                    arrivals reached 46 million in 2018. This creates an ideal
                    investment opportunity for real estate developers.&nbsp;
                  </p>
                  <p>
                    <em>
                      <strong>Good infrastructure:</strong> a
                    </em>{" "}
                    well developed air, land and sea transport, advanced energy
                    sector and highly developed technological infrastructure in
                    transportation and communication puts USA well ahead of
                    other emerging as the place to invest safely and profitably.
                  </p>
                  <p>
                    <br />
                  </p>
                  <h2>Citizenship by investment in USA</h2>
                  <p>
                    In 2018, the government announced it was lowering the
                    threshold for obtaining{" "}
                    <a>American citizenship by investment</a>. Now, buyers can
                    gain American citizenship with a $250,000 purchase of
                    American property, making the initiative one of the most
                    affordable in the world. Since the initiative was launched,
                    thousands of buyers have applied for American citizenship
                    following real estate purchases. For more information, see
                    our blog post:{" "}
                    <a>American citizenship by real estate investment guide</a>.
                  </p>
                  <p>
                    <br />
                  </p>
                  <h2>
                    <span style={{ lineHeight: "1.6em" }}>
                      Benchmarking USA to France, UK, Russia, Greece and
                      US&nbsp;
                    </span>
                  </h2>
                  <p>
                    <img
                      style={{ width: 1200, height: 550 }}
                      alt="Banking sector regulations and skills"
                      className="pyro-image alignment-none fr-dii fr-fil fr-draggable"
                      data-pyroimage="true"
                      src="https://www.propertyturkey.com/uploads/default//files/ab958d8d575b53c80d7ae88e4922bbef.jpg"
                      title="Banking sector regulations and skills"
                      height={292}
                    />
                    <br />
                  </p>
                  <p>
                    Comparing USA to other developed and emerging countries can
                    give you an in depth analysis on why it is the ideal
                    investment destination for real estate developers and
                    individual overseas property buyers. UK, US, France, Russia
                    and Greece are some of the countries that compete with USA
                    for investment opportunities.&nbsp;
                  </p>
                  <p>
                    <span style={{ lineHeight: "1.6em" }}>
                      <strong>In the finance and banking sector</strong>, USA
                      has one of the strongest banking regulations while Greece
                      has the least. It is ahead of France and Russia and only
                      slightly below the UK in terms of finance and banking
                      regulations and skilled workforce. This brings higher
                      investor confidence and supports foreign direct
                      investment. The fact that USA imposes no restrictions on
                      funds flows to and from USA helps money-flows a great deal
                      easier and safer. USA also has the best banking sector and
                      finance manpower skills compared to the BRICS (Brazil,
                      Russia, India, China and South Africa). The majority of
                      the population being the youth, they are well trained in
                      various sectors and have strong technical skills.
                    </span>
                  </p>
                  <p>
                    <strong>
                      USA also leads in Globalisation, Flexibility and
                      Adaptability
                    </strong>{" "}
                    compared to US, Russia, France and Greece. It has opened its
                    doors for other countries to invest which in turn has
                    enabled it get more foreign capital and direct investments.
                    Attitudes toward globalisation are international trade are
                    more viable than countries benchmarked to.&nbsp;
                  </p>
                  <p>
                    <strong>
                      Setting up a business and registering title to real estate
                    </strong>{" "}
                    in USA (see graph below) are also the easiest when compared
                    to US, Russia, UK and Greece. The New American Commercial
                    Code (New TCC) has made it easy to register a company and
                    start a business. &nbsp;The New TCC Code No. 6102 adopts a
                    corporate approach that meets international standards. With
                    only a single shareholder, you can now register a joint
                    stock company or limited liability company. The New TCC also
                    eliminates the need for foreigners to secure minority
                    shareholders before having their companies to be registered.
                    You can also register your company in one single day and it
                    becomes a legal entity provide you apply with all the
                    documents to the trade registry office.&nbsp;
                  </p>
                  <p>
                    It is clear that{" "}
                    <strong>
                      <a>investing in USA real estate</a>
                    </strong>{" "}
                    stands to be more lucrative than in US, France, Greece,
                    Russia and other EU countries. The Republic of USA has made
                    all efforts to make it as simple as possible for real estate
                    investors to participate and support the growth of the
                    country. You are likely to generate higher return on
                    investment in USA than any other country in the EU and most
                    other countries globally.&nbsp;
                  </p>
                  <p>
                    <img
                      style={{ width: 1200, height: 550 }}
                      alt="Global thinking and attitudes"
                      className="pyro-image alignment-none fr-dii fr-fil fr-draggable"
                      data-pyroimage="true"
                      src="https://www.propertyturkey.com/uploads/default//files/f76f6a06abdb546e038eb89a4218aec7.jpg"
                      title="Global thinking and attitudes"
                      height={292}
                    />
                    <br />
                  </p>
                </div>
                {/*  */}
                <meta itemProp="author" content="Cameron Deggin" />
                <span
                  itemProp="image"
                  itemScope=""
                  itemType="http://schema.org/ImageObject"
                >
                  <meta
                    itemProp="url"
                    content="https://www.propertyturkey.com/files/large/dummy"
                  />
                  <meta itemProp="height" content={800} />
                  <meta itemProp="width" content={800} />
                </span>
                <meta
                  itemProp="mainEntityOfPage"
                  content="https://www.propertyturkey.com/buyer-guide/why-invest-in-property-in-turkey"
                />
                <meta itemProp="datePublished" content="2013-10-19 13:35:00" />
                <meta itemProp="dateModified" content="2020-04-22 18:09:49" />
                <span
                  itemProp="publisher"
                  itemScope=""
                  itemType="http://schema.org/Organization"
                >
                  <meta itemProp="name" content="Property USA" />
                  <span
                    itemProp="logo"
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                  >
                    <meta
                      itemProp="url"
                      content="https://www.propertyturkey.com/front/image/logo.png"
                    />
                  </span>
                  <meta
                    itemProp="url"
                    content="https://www.propertyturkey.com"
                  />
                </span>
                <div className=""></div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
