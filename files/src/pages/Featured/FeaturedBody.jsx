import React from 'react'
import FeaturedContent from '../../Data/FaeturedContent'
import FeaturedArticle from './FeaturedArticle'
import { Link } from 'react-router-dom'
import DownLoadIcon from "../../assets/download-icon.svg"

export default function FeaturedBody() {
  return (
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
      <div className="col-dis-9 col-tab-9 col-mob-12">
        <h1 itemProp="name" className="page-title">
          As Featured In
        </h1>
        As a leading company in the Turkish real estate market, from time to time we
        get requested by national and international newspapers and magazines for
        quotes, stories, and insight into the Turkey property market. Here is a
        sample of some of the articles and stories&nbsp;that we have been featured
        in over the years.&nbsp;
        <br />
        <br />
        As Turkey's economy grows from strength to strength and more foreign
        nationals look to Turkey, the amount of stories&nbsp;and articles around
        Turkish property has gone up exponentially over the last few years. We
        provide credible and up to date insight into the Turkish property market,
        market moves, future predictions, investment tips, economy strength, and
        more.&nbsp;
        <br />
        <br />
        If you are a national or international newspaper or magazine or&nbsp;website
        and are looking for professional quotes for your story, don't hesitate to
        contact us.&nbsp;
        <hr />

        <div className="w-full h-auto border-2 border-gray-300 pl-1 pt-2">
          <p className='lg:text-2xl md:text-lg sm:text-sm font-black'>Proud to Become a turkish Citizen</p>
          <div className="w-[95%] h-auto py-1 flex lg:flex-row md:flex-col sm:flex-col  justify-between items-center gap-1   pl-2">
            <img src="https://placehold.co/600x400" className='lg:w-[20%] md:w-full sm:w-full lg:h-[150px] md:h-[200px] sm:h-[200px]' alt="" />
            <div className="">
              <p>I am very grateful and thankful to Property Turkey and to all staff headed by esteemed Cameron Deggin for the help and support given to us in the purchase of property in Turkey. Today we are very happy and proud to become new citizens of this wonderful country.</p>
            </div>
          </div>
          <footer className="meta cf my-3">
            <div className=" col-dis-12 col-tab-12 col-mob-12">
              <i className="fa fa-calendar" /> 13 December 2022
            </div>
          </footer>

        </div>


    
      </div>
      <aside className="widgets col-dis-3 col-tab-3 col-mob-12 clearfix">
        <div className="widget noheader nostyle-widget">
          <div className="header-img-buyerguide">
            <div className="container">
              <h3 className="title no-margin bold">BUYER'S GUIDE</h3>
              <p>The Definitive guide to buying property in Turkey</p>
              <div className="padding-bottom-11">
                <Link
                  to=""
                  title="Definitive Buyer Guide PDF"
                  className="btn right-widget-hover"
                >
                  Download it now
                </Link>
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
                <Link>
                  Download it now
                </Link>
              </div>
            </div>
            <img
              src={DownLoadIcon}
              alt=""
            />
          </div>
        </div>
        <div className="widget">
          <h3 className="title">Popular Posts</h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link>
                  What are the best Food Delivery apps in Turkey?
                </Link>
              </li>
              <li>
                <Link>
                  The best Turkish Beers and brands for summer days
                </Link>
              </li>
              <li>
                <Link>
                  10 Delicious Turkish Desserts and Sweets to Try
                </Link>
              </li>
              <li>
                <Link>
                  Best Taxi App in Turkey: Getting About
                </Link>
              </li>
              <li>
                <Link>
                  13 unspoken Turkish rules you might not know
                </Link>
              </li>
              <li>
                <Link>
                  Love and marriage in Turkey
                </Link>
              </li>
              <li>
                <Link>
                  Turkey's most dangerous animals
                </Link>
              </li>
              <li>
                <Link>
                  The Best Supermarkets in Turkey to Shop
                </Link>
              </li>
              <li>
                <Link>
                  15 Beautiful Places in Turkey That Should be on Your Bucket List
                </Link>
              </li>
              <li>
                <Link>
                  Antalya City Centre: Shopping, Beaches and Things to Do
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <h3 className="title">Latest Posts</h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link>
                  The Importance of the Marmara Sea and Region for Turkey
                </Link>
              </li>
              <li>
                <Link>
                  Istanbul Finance Center: Turkey's Global Financial Hub Opens
                </Link>
              </li>
              <li>
                <Link>
                  Unveiling the Best Islands in Turkey for Curious Travellers
                </Link>
              </li>
              <li>
                <Link>
                  Uncovering Secrets of Sardis and Exploring the Ancient City
                </Link>
              </li>
              <li>
                <Link>
                  Big Life by the Little Bosphorus Istanbul
                </Link>
              </li>
              <li>
                <Link>
                  Turkish Citizenship benefits for Foreign Investors
                </Link>
              </li>
              <li>
                <Link>
                  Experience Old Constantinople Through the Old Hippodrome
                </Link>
              </li>
              <li>
                <Link>
                  Famous Bosphorus Bridges of Istanbul
                </Link>
              </li>
              <li>
                <Link>
                  Soaring High in the Majestic Taurus Mountains of Turkey
                </Link>
              </li>
              <li>
                <Link>
                  Turkey Earthquake Exposes the Need for Massive Urban Regeneration
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <h3 className="title">Latest News</h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link>
                  Turkish Airlines records net profit for sixth consecutive quarter
                </Link>
              </li>
              <li>
                <Link>
                  Charging licence granted to Tesla by Turkey
                </Link>
              </li>
              <li>
                <Link>
                  Turnover of $2.7 billion for Pegasus Airlines in 2022
                </Link>
              </li>
              <li>
                <Link>
                  German tourists establish Turkey as top destination
                </Link>
              </li>
              <li>
                <Link>
                  Turkey to designate 15 more 'nature conservation areas'
                </Link>
              </li>
              <li>
                <Link>
                  January tourism records broken in Turkey’s Antalya
                </Link>
              </li>
              <li>
                <Link>
                  1 million cruise passengers hosted in Turkey in 2022
                </Link>
              </li>
              <li>
                <Link>
                  Record visitors head to Cappadocia in January
                </Link>
              </li>
              <li>
                <Link>
                  Turkey looks to expand free program to 5 million students
                </Link>
              </li>
              <li>
                <Link>
                  Top migration hub of Turkey remains Istanbul once again
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>



  )
}
