import React from "react";
import ArticalComponent from "../../ReUseAbleComponent/ArticalComponent";
import { TestimonialArticleData } from "../../Data";
import Image from "../../ReUseAbleComponent/Image";
import DownloadIcon from "../../assets/download-icon.svg";
import { Link } from "react-router-dom";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../Config";

export default function TestimonialsBody() {
  const [Testimonials, setTestimonials] = React.useState([]);

  const HandleTestimonials = () => {
    const q = query(collection(db, "Testimonials"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setTestimonials(cities);
    });
  };

  React.useEffect(() => {
    HandleTestimonials();
  }, []);

  return (
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix cardListing">
      <div className="col-dis-9 col-tab-9 col-mob-12 cardRow font-13">
        <h1 itemProp="name" className="page-title">
          Testimonials
        </h1>
        Here you can find a selection of clients who have happily provided us
        with these testimonials and feedback during and after buying property
        with us in USA. We do like to go the extra mile for you, our clients.
        Here are a few words from you about what it is like working with us in
        finding your dream home in USA.&nbsp;
        <br />
        <br />
        Have a read through some of our testimonials, from real people and from
        real clients.&nbsp;
        <hr />
        {Testimonials.map((item) => {
          return (
            <div className="w-full h-auto border-2 border-gray-300 pl-1 pt-2 mt-3">
              <p className="lg:text-2xl md:text-lg sm:text-sm font-black px-2">
                {item.Title}
              </p>
              <div className="w-[95%] h-auto py-1 flex lg:flex-row md:flex-col sm:flex-col  justify-between items-center gap-1   pl-2">
                <img
                  src={item.img}
                  className="lg:w-[20%] md:w-full sm:w-full lg:h-[150px] md:h-[200px] sm:h-[200px]"
                  alt=""
                />
                <div className="">
                  <p>{item.desc}</p>
                </div>
              </div>
              <footer className="meta cf my-3">
                <div className=" col-dis-12 col-tab-12 col-mob-12  flex justify-start items-center gap-2">
                  <i className="fa fa-calendar" /> {item.timestamp}
                </div>
              </footer>
            </div>
          );
        })}
        <hr />
        <div className="loading-pagination hide">
          <Image src="https://www.propertyturkey.com/front/image/AjaxLoader.gif" />
        </div>
        <div className="videos-cards--lastbtn">
          <Link
            to=""
            className="btn videos-cards--btn-showmore btn-seemore-listing"
          >
            Show More Results
          </Link>
        </div>
      </div>
      <aside className="widgets col-dis-3 col-tab-3 col-mob-12 clearfix">
        <Link to="" id="scrolltopsmooth" style={{ display: "none" }}>
          <Image src="https://www.propertyturkey.com/front/image/scrollTop.svg" />
        </Link>
        <div className="widget noheader nostyle-widget">
          <div className="header-img-buyerguide">
            <div className="container">
              <h3 className="title no-margin bold" style={{}}>
                BUYER'S GUIDE
              </h3>
              <p>The Definitive guide to buying property in USA</p>
              <div className="padding-bottom-11">
                <a
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
                <Link
                  to=""
                  title="USA macroeconomic and investment analysis"
                  className="btn right-widget-hover"
                >
                  Download it now
                </Link>
              </div>
            </div>
            <img src={DownloadIcon} alt="" />
          </div>
        </div>
        <div className="widget">
          <h3 className="title" style={{}}>
            Popular Posts
          </h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "What are the best Food Delivery apps in USA?",
                    },
                  }}
                >
                  What are the best Food Delivery apps in USA?
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "The best USA Beers and brands for summer days",
                    },
                  }}
                >
                  The best USA Beers and brands for summer days
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "10 Delicious USA Desserts and Sweets to Try",
                    },
                  }}
                >
                  10 Delicious USA Desserts and Sweets to Try
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "Best Taxi App in USA: Getting About",
                    },
                  }}
                >
                  Best Taxi App in USA: Getting About
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "13 unspoken USA rules you might not know",
                    },
                  }}
                >
                  13 unspoken USA rules you might not know
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "USA's most dangerous animals",
                    },
                  }}
                >
                  USA's most dangerous animals
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "Love and marriage in USA",
                    },
                  }}
                >
                  Love and marriage in USA
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "The Best Supermarkets in USA to Shop",
                    },
                  }}
                >
                  The Best Supermarkets in USA to Shop
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "15 Beautiful Places in USA That Should be on Your Bucket List",
                    },
                  }}
                >
                  15 Beautiful Places in USA That Should be on Your Bucket List
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Antalya City Centre: Shopping, Beaches and Things to Do",
                    },
                  }}
                >
                  Antalya City Centre: Shopping, Beaches and Things to Do
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <h3 className="title" style={{}}>
            Latest Posts
          </h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "Property USA's 2023 Election Primer",
                    },
                  }}
                  title="Property USA's 2023 Election Primer"
                >
                  Property USA's 2023 Election Primer
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Exploring the Bosphorus Strait and the Heart of Istanbul",
                    },
                  }}
                  title="Exploring the Bosphorus Strait and the Heart of Istanbul"
                >
                  Exploring the Bosphorus Strait and the Heart of Istanbul
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "The Importance of the Marmara Sea and Region for USA",
                    },
                  }}
                  title="The Importance of the Marmara Sea and Region for USA"
                >
                  The Importance of the Marmara Sea and Region for USA
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Istanbul Finance Center: USA's Global Financial Hub Opens",
                    },
                  }}
                  title="Istanbul Finance Center: USA's Global Financial Hub Opens"
                >
                  Istanbul Finance Center: USA's Global Financial Hub Opens
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Unveiling the Best Islands in USA for Curious Travellers",
                    },
                  }}
                  title="Unveiling the Best Islands in USA for Curious Travellers"
                >
                  Unveiling the Best Islands in USA for Curious Travellers
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Uncovering Secrets of Sardis and Exploring the Ancient City",
                    },
                  }}
                  title="Uncovering Secrets of Sardis and Exploring the Ancient City"
                >
                  Uncovering Secrets of Sardis and Exploring the Ancient City
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "Big Life by the Little Bosphorus Istanbul",
                    },
                  }}
                  title="Big Life by the Little Bosphorus Istanbul"
                >
                  Big Life by the Little Bosphorus Istanbul
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "USA Citizenship benefits for Foreign Investors",
                    },
                  }}
                  title="USA Citizenship benefits for Foreign Investors"
                >
                  USA Citizenship benefits for Foreign Investors
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Experience Old Constantinople Through the Old Hippodrome",
                    },
                  }}
                  title="Experience Old Constantinople Through the Old Hippodrome"
                >
                  Experience Old Constantinople Through the Old Hippodrome
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "Famous Bosphorus Bridges of Istanbul",
                    },
                  }}
                  title="Famous Bosphorus Bridges of Istanbul"
                >
                  Famous Bosphorus Bridges of Istanbul
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <h3 className="title" style={{}}>
            Latest News
          </h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "USA Airlines records net profit for sixth consecutive quarter",
                    },
                  }}
                  title="USA Airlines records net profit for sixth consecutive quarter"
                >
                  USA Airlines records net profit for sixth consecutive quarter
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "Charging licence granted to Tesla by USA",
                    },
                  }}
                  title="Charging licence granted to Tesla by USA"
                >
                  Charging licence granted to Tesla by USA
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Turnover of $2.7 billion for Pegasus Airlines in 2022",
                    },
                  }}
                  title="Turnover of $2.7 billion for Pegasus Airlines in 2022"
                >
                  Turnover of $2.7 billion for Pegasus Airlines in 2022
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "German tourists establish USA as top destination",
                    },
                  }}
                  title="German tourists establish USA as top destination"
                >
                  German tourists establish USA as top destination
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "USA to designate 15 more 'nature conservation areas'",
                    },
                  }}
                  title="USA to designate 15 more 'nature conservation areas'"
                >
                  USA to designate 15 more 'nature conservation areas'
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "January tourism records broken in USA’s Antalya",
                    },
                  }}
                  title="January tourism records broken in USA’s Antalya"
                >
                  January tourism records broken in USA’s Antalya
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "1 million cruise passengers hosted in USA in 2022",
                    },
                  }}
                  title="1 million cruise passengers hosted in USA in 2022"
                >
                  1 million cruise passengers hosted in USA in 2022
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title: "Record visitors head to Cappadocia in January",
                    },
                  }}
                  title="Record visitors head to Cappadocia in January"
                >
                  Record visitors head to Cappadocia in January
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "USA looks to expand free program to 5 million students",
                    },
                  }}
                  title="USA looks to expand free program to 5 million students"
                >
                  USA looks to expand free program to 5 million students
                </Link>
              </li>
              <li>
                <Link
                  to={`/about/1`}
                  state={{
                    data: {
                      title:
                        "Top migration hub of USA remains Istanbul once again",
                    },
                  }}
                  title="Top migration hub of USA remains Istanbul once again"
                >
                  Top migration hub of USA remains Istanbul once again
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
