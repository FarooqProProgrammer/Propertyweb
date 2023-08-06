import React from "react";
import { getDocs, collection, doc, query } from "firebase/firestore";
import { db } from "../../Config";
import { useState } from "react";
import RawHTMLRenderer from "../../ReUseAbleComponent/RawHTMLRenderer";
import { Link } from "react-router-dom";
import PopularPost from "../../ReUseAbleComponent/PopularPost";
import { Typography } from "@mui/material";

const PopularKeyWord = [
  "life in turkey",
  "tourism in turkey",
  "istanbul",
  "moving to turkey",
];

const PostData = [
  {
    link: "What are the best Food Delivery apps in Turkey?",
  },
  {
    link: "The best Turkish Beers and brands for summer days",
  },
  {
    link: "Turkey's most dangerous animals",
  },
];

function NewsBodyContainer() {
  const [Blogs, setBlogs] = useState([]);
  const [ImageValue, setImageValue] = useState();

  const HandleBlogData = async () => {
    const q = query(collection(db, "Blogs"));
    const blogData = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      blogData.push({ id: doc.id, ...doc.data() });
      console.log({ id: doc.id, ...doc.data() });
    });
    const newBlogData = blogData.map((item) => {
      const image = extractSrcValues(item.value);
      return { ...item, image };
    });
    console.log(newBlogData);
    setBlogs(newBlogData);
  };

  function extractSrcValues(rawHTML) {
    var srcRegex = /src=["'](.*?)["']/g;
    var srcValues = [];
    var match;
    while ((match = srcRegex.exec(rawHTML)) !== null) {
      srcValues.push(match[1]);
    }

    return srcValues[0];
  }

  React.useEffect(() => {}, [Blogs]);

  React.useEffect(() => {
    HandleBlogData();
  }, []);

  return (
    <div className="pt-tv-bg">
      <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix padding-top-5 cardListing">
        <div className="col-dis-9 col-tab-8 col-mob-12">
          <div className="cf grid cardRow">
            {Blogs.map((item) => {
              return (
                <div className="col-dis-12 col-tab-12 col-mob-12 padding-bottom-2 listing-card">
                  <div className="card tvlist-card">
                    <div className="row no-gutters shadow-card">
                      <div className="col-md-4 position-relative">
                        <a
                          className="flex blogCardImg"
                          href="/early-days-of-erdogans-reelection-a-period-of-action-for-turkey"
                        >
                          <img
                            data-src="files/economicgrowth_turkey.jpg"
                            className="img-width-height-100 lazyloaded"
                            alt="Early Days of Erdogan’s Re-election: A Period of Action for Turkey"
                            src={item.image}
                          />
                        </a>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body card-body-blog">
                          <p className="propertynews-date">
                            <span>
                              <span className="clr-pt-dark">
                                <a
                                  href="=Turkish history"
                                  title="Turkish history"
                                >
                                  Turkish history
                                </a>{" "}
                              </span>
                              &nbsp;&nbsp;/&nbsp;&nbsp; {item.time}
                            </span>
                          </p>
                          <Link to={`/blog/${item.id}`}>
                            <Typography
                              variant="h4"
                              sx={{ color: "#5e5a59", fontFamily: "serif" }}
                            >
                              {item.title}
                            </Typography>
                          </Link>
                          <span
                            className="propertynews-span max-h-[200px]"
                            limit={300}
                          >
                            {/* <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>Read more</a></span>}> */}

                            <RawHTMLRenderer
                              html={item.value}
                              className={"max-h-[100px] overflow-y-hidden"}
                            />
                            {/* </Truncate> */}
                          </span>
                          <div className="margin-top-1 propertynews-btn">
                            <Link
                              to={`/blog/${item.id}`}
                              className="btn tvlist-card--btn"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="loading-pagination hide">
              <img src="front/image/AjaxLoader.gif" />
            </div>
            <div className="videos-cards--lastbtn">
              <a
                href="#"
                className="btn videos-cards--btn-showmore btn-seemore-listing"
              >
                {" "}
                Show More Results
              </a>
            </div>
            <div className="container">
              <div className="continue-readingg">
                <p>
                  Property Turkey's blog is designed to give you an insight into
                  all things Turkish, including tips about life in Turkey,
                  Turkish culture, economic &amp; political matters and how to
                  get the best out of your home and investment. Showcasing many
                  case studies of those who invested and/or moved to Turkey and
                  integrated into the Turkish lifestyle, this blog is your
                  informative guide for all you need to know about making the
                  big move overseas to Turkey.&nbsp;
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Focusing on the main hotspots of Bodrum, Antalya, Fethiye,
                  Kalkan, Istanbul, Kas, Side, and more - you can expect us to
                  blog weekly about the latest trends, case studies and news
                  coming out of the top cities in Turkey. Also expect several
                  investment tips and hot tips for real estate and properties
                  that are hot and ready to sell now.&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
        <aside className="widgets col-dis-3">
          <a href="#" id="scrolltopsmooth" style={{ display: "none" }}>
            <img src="front/image/scrollTop.svg" />
          </a>
          <div className="widget noheader nostyle-widget">
            <div className="header-img-buyerguide">
              <div className="container">
                <h3 className="title no-margin bold" style={{}}>
                  BUYER'S GUIDE
                </h3>
                <p>The Definitive guide to buying property in Turkey</p>
                <div className="padding-bottom-11">
                  <a
                    href=""
                    title="Definitive Buyer Guide PDF"
                    className="btn right-widget-hover"
                  >
                    Download it now
                  </a>
                </div>
              </div>
            </div>
            <div className="header-img-buyerguide margin-top-1">
              <div className="container">
                <h3 className=" no-margin bold title-2">
                  Macroeconomic And <br />
                  Investment <br />
                  Analysis
                </h3>
                <div className="padding-bottom-11 padding-top-3">
                  <a
                    href=""
                    title="Turkey macroeconomic and investment analysis"
                    className="btn right-widget-hover"
                  >
                    Download it now
                  </a>
                </div>
              </div>
              <img
                src="front/image/images2019/Icons/download-icon.svg"
                alt=""
              />
            </div>
          </div>
          <div id="keywords" className="widget">
            <h3 className="title" style={{}}>
              popular keywords
            </h3>
            <div className="body">
              {PopularKeyWord.map((item) => {
                return (
                  <a
                    href="=turkish economy"
                    freq={18}
                    title="turkish economy"
                    style={{ fontSize: "1rem" }}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
          <PopularPost PostData={PostData} />
          <div className="widget">
            <h3 className="title" style={{}}>
              Latest News
            </h3>
            <div className="body">
              <ul className="no-bullet">
                <li>
                  <a
                    href="#"
                    title="Inauguration of new metro line in Istanbul"
                  >
                    Inauguration of new metro line in Istanbul
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="High hopes in Pamukkale for tourist arrivals"
                  >
                    High hopes in Pamukkale for tourist arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Number of foreign arrivals jump as tourists flood to Turkey"
                  >
                    Number of foreign arrivals jump as tourists flood to Turkey
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Top 10 busiest airports – Istanbul Airport ranks among them"
                  >
                    Top 10 busiest airports – Istanbul Airport ranks among them
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Recapping Day One of Turkey’s 2023 Election"
                  >
                    Recapping Day One of Turkey’s 2023 Election
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Turkish Airlines records net profit for sixth consecutive quarter"
                  >
                    Turkish Airlines records net profit for sixth consecutive
                    quarter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Charging licence granted to Tesla by Turkey"
                  >
                    Charging licence granted to Tesla by Turkey
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Turnover of $2.7 billion for Pegasus Airlines in 2022"
                  >
                    Turnover of $2.7 billion for Pegasus Airlines in 2022
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="German tourists establish Turkey as top destination"
                  >
                    German tourists establish Turkey as top destination
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Turkey to designate 15 more 'nature conservation areas'"
                  >
                    Turkey to designate 15 more 'nature conservation areas'
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default NewsBodyContainer;
