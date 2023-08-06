import React from 'react'
import { TurkeyNewsData } from '../../Data'
import NewsCard from '../../ReUseAbleComponent/NewsCard'

export default function TurkeyNewsBody() {
  return (
    <div className="pt-tv-bg">
      <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix padding-top-5 cardListing">
        <div className="col-dis-9 col-tab-8 col-mob-12">
          <div className="cf grid cardRow">

            {
              TurkeyNewsData.map((item) => {
                return (
                  <div className="col-dis-12 col-tab-12 col-mob-12 padding-bottom-2 listing-card">
                    <NewsCard img={item.img} time={item.time} Description={item.Description} title={item.title} />
                </div>
                )
                
              })
            }


            <div className="loading-pagination hide">
              <img src="https://www.propertyturkey.com/front/image/AjaxLoader.gif" />
            </div>
            <div className="videos-cards--lastbtn">
              <a
                
                className="btn videos-cards--btn-showmore btn-seemore-listing"
              >
                Show More Results
              </a>
            </div>
          </div>
        </div>
        <aside className="widgets col-dis-3">
          <a  id="scrolltopsmooth" style={{ display: "none" }}>
            <img src="https://www.propertyturkey.com/front/image/scrollTop.svg" />
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
                    
                    title="Turkey macroeconomic and investment analysis"
                    className="btn right-widget-hover"
                  >
                    Download it now
                  </a>
                </div>
              </div>
              <img
                src="https://www.propertyturkey.com/front/image/images2019/Icons/download-icon.svg"
                alt=""
              />
            </div>
          </div>
          <div className="widget">
            <h3 className="title" style={{}}>
              Popular Posts
            </h3>
            <div className="body">
              <ul className="no-bullet">
                <li>
                  <a >
                    What are the best Food Delivery apps in Turkey?
                  </a>
                </li>
                <li>
                  <a >
                    10 Delicious Turkish Desserts and Sweets to Try
                  </a>
                </li>
                <li>
                  <a >
                    The best Turkish Beers and brands for summer days
                  </a>
                </li>
                <li>
                  <a >
                    13 unspoken Turkish rules you might not know
                  </a>
                </li>
                <li>
                  <a >
                    Best Taxi App in Turkey: Getting About
                  </a>
                </li>
                <li>
                  <a >
                    The Best Supermarkets in Turkey to Shop
                  </a>
                </li>
                <li>
                  <a >
                    Love and marriage in Turkey
                  </a>
                </li>
                <li>
                  <a >
                    Turkey's most dangerous animals
                  </a>
                </li>
                <li>
                  <a >
                    15 Beautiful Places in Turkey That Should be on Your Bucket List
                  </a>
                </li>
                <li>
                  <a >
                    Sacred Architecture: The Blue Mosque and Hagia Sophia of
                    Istanbul
                  </a>
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
                  <a
                    
                    title="Unveiling the Best Islands in Turkey for Curious Travellers"
                  >
                    Unveiling the Best Islands in Turkey for Curious Travellers
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Uncovering Secrets of Sardis and Exploring the Ancient City"
                  >
                    Uncovering Secrets of Sardis and Exploring the Ancient City
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Big Life by the Little Bosphorus Istanbul"
                  >
                    Big Life by the Little Bosphorus Istanbul
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Turkish Citizenship benefits for Foreign Investors"
                  >
                    Turkish Citizenship benefits for Foreign Investors
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Experience Old Constantinople Through the Old Hippodrome"
                  >
                    Experience Old Constantinople Through the Old Hippodrome
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Famous Bosphorus Bridges of Istanbul"
                  >
                    Famous Bosphorus Bridges of Istanbul
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Soaring High in the Majestic Taurus Mountains of Turkey"
                  >
                    Soaring High in the Majestic Taurus Mountains of Turkey
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Turkey Earthquake Exposes the Need for Massive Urban Regeneration"
                  >
                    Turkey Earthquake Exposes the Need for Massive Urban
                    Regeneration
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Sultanahmet and the Old City of Istanbul from Past to Present"
                  >
                    Sultanahmet and the Old City of Istanbul from Past to Present
                  </a>
                </li>
                <li>
                  <a
                    
                    title="From Constantinople to Istanbul – The Pride of Turkey"
                  >
                    From Constantinople to Istanbul – The Pride of Turkey
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>

  )
}
