import React from 'react'
import { Link } from 'react-router-dom'
import SingleCarousel from '../../ReUseAbleComponent/SingleCarousel'


const BulletOne = [
  {
    href: "https://www.propertyturkey.com/blog-turkey/the-famous-taksim-square-in-istanbul",
    title: "The Famous Taksim Square in Istanbul"
  },

  {
    href: "https://www.propertyturkey.com/blog-turkey/early-days-of-erdogans-reelection-a-period-of-action-for-turkey",
    title: " Early Days of Erdogan’s Re-election: A Period of Action for Turkey"
  },

]

const BulletTwo = [
  {
    href: "https://www.propertyturkey.com/news/inauguration-of-new-metro-line-in-istanbul",
    title: " Inauguration of new metro line in Istanbul"
  },

  {
    href: "https://www.propertyturkey.com/news/high-hopes-in-pamukkale-for-tourist-arrivals",
    title: "High hopes in Pamukkale for tourist arrivals"
  },



]

const Advertising = [
  {
    title: "Any links or references to third party web sites will not be published",
  },

  {
    title: "Minimum three images are needed before a listing will be published.",
  },

  {
    title: "Maximum image size is 150kb and only JPG images are allowed",
  },

  {
    title: "Images with watermarks or similar marks will not be published",
  },

  {
    title: "Poor image quality or poor visuals will not be published",
  },

  {
    title: "Listings with insufficient / short narratives will not be published",
  },
]

const ContactBodyData = [
  {
    title: "We are all over the country",
    description: "Our regional offices in Istanbul, Bodrum, Fethiye, Kalkan, Kas, Antalya and Side mean we can build local relationships with no need to rely on third parties. You can meet our team by By having offices all over the country, we can guarantee specialised guidance in each region of Turkey with a dedicated regional manager ready to assist you.",
    img: "https://placehold.co/600x400",
  }
]

export default function ContactBody() {



  return (
    <div
      className="article-container"
      itemScope=""
      itemType="http://schema.org/Article"
    >
      <div className="endpage-main-intro ">
        <div className="endpage-title-actions">
          <div className="endpage-title">
            <meta
              itemProp="url"
              content="https://www.propertyturkey.com/contact-us/sell-your-home-with-property-turkey"
            />
            <h3 className="d-mobile">
              <label className="date">Updated : 13 August 2015</label>
              <label className="date ">Created : 21 July 2014</label>
            </h3>
            <div className="endpage-actions d-mobile share-btn-pos">
              <a href="#" className="social-shares">
                <img
                  src="https://www.propertyturkey.com/front/image/icons/share-alt-solid.-gold.svg"
                  width={21}
                  alt=""
                />
              </a>
            </div>
            <h1 itemProp="name headline" className="page-title abhaya">
              Sell your home with Property Turkey
            </h1>
            <h3 className="d-desk">
              <div className="flex">
                <div className="d-desk"></div>
                <label className="date no-margin">
                  <span className="clr-pt">Updated</span> : 13 August 2015
                </label>
                <label className="date no-margin ml-1-important">
                  <span className="clr-pt">Created</span> : 21 July 2014
                </label>
              </div>
            </h3>
            <div className="d-mobile"></div>
          </div>
          <div className="endpage-actions d-desk">
            <a href="#" className="social-shares">
              <img
                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="page-content-container wrap-dis-9 wrap wrap-tab-11 wrap-mob-11 ">
        <article className="page-content col-dis-9 col-tab-9 col-mob-12 no-padding">
          <div
            className="areabody clearfix f-15-h15"
            itemProp="articleBody"
            id="iframe-width-about"
          >
            <p>
              Are you up-sizing your Turkish home or has time come to cash in your
              investment? Whatever your reasons for selling your property in Turkey,
              you certainly will want to achieve a handsome price with minimum
              imposition on your time. &nbsp; &nbsp; &nbsp;
            </p>
            <p>
              <br />
            </p>
            <p>
              <em>
                <span style={{ fontSize: 18 }}>“</span>We bought our home through
                Property Turkey eight years ago and they were fantastic then so
                naturally we returned when it was time to sell. Aykut and his
                Fethiye team were completely professional, walking us through the
                sale process and helping us get a fair price for our home. Thanks so
                much, team!<span style={{ fontSize: 18 }}>”</span>
              </em>{" "}
              - <strong>The Johnson family, UK/Ovacik</strong>
            </p>
            {
              ContactBodyData.map((item) => {
                return (
                  <>
                    <h4>

                      <br />
                      <img
                        alt="We are here to help you sell"
                        className="pyro-image alignment-right fr-dii fr-fir fr-draggable"
                        data-pyroimage="true"
                        src={item.img}
                        title="We are here to help you sell"
                        style={{ width: 250 }}
                      />
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                  </>
                )
              })
            }

            <p>
              <br />
            </p>
            <p>&nbsp;</p>

            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <h4>Property Turkey terms of advertising</h4>
            {
              Advertising.map((item, index) => {
                return (
                  <p>
                    {index}. {item.title}
                  </p>
                )
              })
            }


          </div>
          {/*  */}
          <div className="cf col-dis-12 col-tab-12 col-dis-12 controls">
            <Link
              to="/addproperty"
              className="col-dis-12 col-tab-12 col-mob-12 btn w-full border border-[#ff0000] cursor-pointer"
            >
              Want to sell property ?
            </Link>
          </div>


        </article>
        {/*  */}
        <div className="text-center-xs flex-xl">
          <a
            className="view-all-btn btn rednew-border margin-1"
            style={{ marginTop: 0, marginLeft: 0 }}
            data-fancybox=""
            data-src="#subscribe-media-modal"
            href="javascript:;"
          >
            <span>Subscribe to get the latest Blogs</span>
          </a>
        </div>

        <SingleCarousel />
        <aside className="widgets col-dis-3 col-tab-3 col-mob-12 no-padding widget-blogendpage">
          <a

          >
            <img
              data-src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
              alt="download our online borchour"
              className="w-100 margin-top-1 lazyloaded"
              src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
            />
          </a>
          <div className="widget noheader nostyle-widget">
            <div className="header-img-buyerguide">
              <div className="container">
                <h3 className="title no-margin bold">BUYER'S GUIDE</h3>
                <p>The Definitive guide to buying property in Turkey</p>
                <div className="padding-bottom-11">
                  <a
                    href="https://www.propertyturkey.com/buyer-guide/definitive-buyer-guide-pdf"
                    title="Definitive Buyer Guide PDF"
                    className="btn right-widget-hover"
                  >
                    Download it now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="title">Latest Posts</h3>
            <div className="body">
              <ul className="no-bullet">
                {
                  BulletOne.map((item) => {
                    return (
                      <li>
                        <a
                          href={item.href}
                          title="The Famous Taksim Square in Istanbul"
                        >
                          {item.title}
                        </a>
                      </li>
                    )
                  })
                }


              </ul>
            </div>
          </div>
          <div className="widget">
            <h3 className="title">Latest News</h3>
            <div className="body">
              <ul className="no-bullet">
                {
                  BulletTwo.map((item) => {
                    return (
                      <li>
                        <a
                          href={item.href}
                          title="Inauguration of new metro line in Istanbul"
                        >
                          {item.title}
                        </a>
                      </li>
                    )
                  })
                }


              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>

  )
}
