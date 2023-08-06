import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function FeaturedPage() {
    return (
        <div className="page-content-container wrap-dis-9 wrap wrap-tab-11 wrap-mob-11 ">
            <article className="page-content col-dis-9 col-tab-9 col-mob-12 no-padding">
                <div
                    className="areabody clearfix f-15-h15"
                    itemProp="articleBody"
                    id="iframe-width-about"
                >
                    <p>
                        Published by The London Magazine on April 30th 2014, Zoe Dare Hall takes
                        us around the world looking at safe, and emerging destinations to invest
                        in real estate – asking the question: are you a safe bet? Or more of a
                        gambler?&nbsp;
                    </p>
                    <p>
                        The last five years have been a topsy turvy time for many international
                        economies, meaning that investing in real estate overseas has become
                        more of a skill than it was before – those ‘in the know’ and those with
                        a knack for picking the right time and right moment to invest – however
                        there is still a fine line between a safe bet and an upcoming
                        destination.&nbsp;
                    </p>
                    <p>
                        The London Magazine takes a look at two safe bet options and two
                        upcoming options where most investors are placing their faith in the
                        long term.&nbsp;
                    </p>
                    <p>
                        The difference between the safe bets and the upcoming destinations is
                        that while the safe bets have been popular for years and have bounced
                        back in recent years following the economic crisis, the up and comers
                        have been reaping benefits from huge projects, growing economies, and
                        government initiatives.&nbsp;
                    </p>
                    <p>&nbsp;</p>
                    <h4>Safe bets:&nbsp;</h4>
                    <p>
                        <br />
                    </p>
                    <h5>Florida:&nbsp;</h5>
                    <p>
                        <img
                            alt="Florida"
                            className="pyro-image alignment-right fr-dii fr-fir fr-draggable"
                            data-pyroimage="true"
                            src="https://www.propertyturkey.com/uploads/default//files/florida.gif"
                            title="Florida"
                            style={{ width: 300 }}
                        />
                        Big architectural structured projects have aided the recovery of the
                        Florida real estate market over the last couple years following the huge
                        economical struggles by the US in recent times – the 1000 Museum project
                        priced from 4 million Dollars and upwards has seen more investment into
                        Florida coming from overseas markets such as Brazil and China who are
                        continuing to invest in infrastructure in the area and beyond.&nbsp;
                    </p>
                    <p>
                        Skyscrapers in Miami and the brand new Miami Worldcenter are set to see
                        Florida’s continued resurgence continue and are selling well into the
                        millions - a sunny destination within an English speaking country,
                        Florida will always prove to be popular amongst Brits.&nbsp;
                    </p>
                    <p>&nbsp;</p>
                    <h5>Spain:</h5>
                    <p>
                        <img
                            alt="Marbella"
                            className="pyro-image alignment-right fr-dii fr-fir fr-draggable"
                            data-pyroimage="true"
                            src="https://www.propertyturkey.com/uploads/default//files/marbella.jpg"
                            title="Marbella"
                            style={{ width: 300 }}
                        />
                        Spain will always be a popular destination amongst British nationals
                        looking to escape the cold weather for warmer seas and idyllic
                        retirement spots. Tourist destinations like Barcelona, the Balearics,
                        and Marbella are beginning to rise once again thanks to Spain’s new
                        ‘golden visa’ system that will see any non-EU citizen who spends over
                        500,000 Euros on a property automatically gain residency to Spain.&nbsp;
                    </p>
                    <p>
                        A large mansion in Spain will still set you back several millions,
                        however smaller villas in Spain have seen dramatic price cuts in recent
                        years of up to 60 percent due to Spain’s economy, so you can now find
                        four bedroom villas from as little as 400,000 euros in Spain – something
                        to tempt the Brit looking to retire, but perhaps scaring away some
                        investors to look at the up and comers below.&nbsp;
                    </p>
                    <p>&nbsp;</p>
                    <h4>Up and coming real estate markets:</h4>
                    <p>
                        <br />
                    </p>
                    <h5>Antigua:&nbsp;</h5>
                    <p>
                        <img
                            alt="Antigua"
                            className="pyro-image alignment-right fr-dii fr-fir fr-draggable"
                            data-pyroimage="true"
                            src="/files/thumb/antigua-view.jpg/301"
                            title="Antigua"
                            style={{ width: 300 }}
                        />
                        Following a low point in 2008 when Antigua’s biggest employer Allen
                        Stanford was jailed and the economic crunch bit hard, a new government
                        system is leading the way for Antigua’s upcoming property market.&nbsp;
                    </p>
                    <p>
                        The Citizenship Investment Programme allows anyone who spends over
                        400,000 dollars on a property to apply for an Antigua passport –
                        attracting plenty of investors and those looking to retire to a sunny
                        destination. High end property can cost into the millions such as the
                        Pearns Point development or Jolly Harbour plots selling for up to 20
                        million dollars.&nbsp;
                    </p>
                    <p>&nbsp;</p>
                    <h5>Turkey:&nbsp;</h5>
                    <p>
                        <img
                            alt="Bodrum houses"
                            className="pyro-image alignment-right fr-dii fr-fir fr-draggable"
                            data-pyroimage="true"
                            src="https://www.propertyturkey.com/uploads/default//files/bodrum-houses.jpg"
                            title="Bodrum houses"
                            style={{ width: 300 }}
                        />
                        Turkey’s top destinations of Bodrum, Kalkan, Fethiye, and Istanbul are
                        proving to be ever popular amongst real estate investors looking beyond
                        Spain, France, and Italy. Turkey’s booming economy is leading the huge
                        potential for those who invest in a Turkish nest egg and the growing
                        tourism market is seeing a trend of rental homes being snapped up by
                        savvy investors who then rent them out during peak summer months for
                        high profit.
                    </p>
                    <p>
                        Luxury homes such as the world famous{" "}
                        <Link 
                            
                            style={{ lineHeight: "1.5rem" }}
                        >
                            Richard Meier’s five villas in Yalikavak, Bodrum
                        </Link>{" "}
                        from 3 million dollars are leading the trend in new luxury homes in
                        Turkey – gone are the days when you would find project after project of
                        similar apartments and villas – Turkey has gone luxury and the world is
                        taking notice.&nbsp;
                    </p>
                    <p>&nbsp;</p>
                    <h5>South Africa:</h5>
                    <p>
                        <img
                            alt="South Africa"
                            className="pyro-image alignment-right fr-dii fr-fir fr-draggable"
                            data-pyroimage="true"
                            src="https://www.propertyturkey.com/uploads/default//files/south-africa-property.jpg"
                            title="South Africa"
                            style={{ width: 300 }}
                        />
                        Beautiful weather and an English speaking community, Cape Town has
                        become the focal point of South Africa’s growing market for properties.
                        No 2 Silo a brand new eco-friendly apartment scheme and beachfront homes
                        such as Camps Bay Beach are offering exquisite views across the city and
                        are selling fast.&nbsp;
                    </p>
                    <p>
                        With the British economy standing in a good position at the moment
                        against many foreign economies, the pound is stretching further, up to
                        36 percent further in South Africa when compared with just a year
                        ago.&nbsp;
                    </p>
                    <p>&nbsp;</p>
                    <h4>Final word:</h4>
                    <p>
                        Whether you are a gambler or a safe bet purchaser, it is still possible
                        to find plenty of options to purchase real estate abroad today – all
                        five destinations listed by The London Magazine offer something
                        different, something unique to each other, an opportunity to step on the
                        overseas real estate ladder at a time when the global economy is still
                        in recovery mode.&nbsp;
                    </p>
                    <p>
                        <br />
                    </p>
                    <p>
                        You can read the full article in The London Magazine by clicking{" "}
                        <Link  >
                            HERE
                        </Link>
                        .&nbsp;
                    </p>
                </div>
                <div
                    className="fb-comments"
                    data-href="http://www.propertyturkey.com/as-featured-in/investing-in-international-property-by-the-london-magazine"
                    data-numposts={5}
                    data-colorscheme="light"
                    width="100%"
                />
                {/*  */}
                <meta itemProp="author" content="Cameron Deggin" />
                <span
                    itemProp="image"
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                >
                    <meta
                        itemProp="url"
                        content="https://www.propertyturkey.com/files/large/bodrum-houses1.jpg"
                    />
                    <meta itemProp="height" content={800} />
                    <meta itemProp="width" content={800} />
                </span>
                <meta
                    itemProp="mainEntityOfPage"
                    content="https://www.propertyturkey.com/as-featured-in/investing-in-international-property-by-the-london-magazine"
                />
                <meta itemProp="datePublished" content="2014-05-04 18:19:51" />
                <meta itemProp="dateModified" content="2015-12-06 21:45:22" />
                <span
                    itemProp="publisher"
                    itemScope=""
                    itemType="http://schema.org/Organization"
                >
                    <meta itemProp="name" content="Property Turkey" />
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
                    <meta itemProp="url" content="https://www.propertyturkey.com" />
                </span>
            </article>
            {/*  */}
            <div className="text-center-xs flex-xl">
                <Link 
                    className="view-all-btn btn rednew-border margin-1"
                    style={{ marginTop: 0, marginLeft: 0 }}
                    data-fancybox=""
                    data-src="#subscribe-media-modal"
                    
                >
                    <span>Subscribe to get the latest Blogs</span>
                </Link>
            </div>
            <section
            id="new-properties"
            className="col-dis-3 col-tab-3 col-mob-12 widget aboutus-straigntalk prev-next-owl-style"
        >
            <h2 className="abhaya title" style={{}}>
                Straight Talk - <br />
                Property Turkey TV
            </h2>
            <Carousel responsive={responsive} >
                <div className="card">
                    <Link 
                        data-fancybox=""
                        data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                        
                        className="video-item right-padding-only mb-sm-15 p-17"
                    >
                        <div className="figure-container">
                            <figure>
                                <img
                                    src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                                    className="card-img-top"
                                    alt="13 AMAZING Facts About Turkey"
                                />
                                <img
                                    className="homeVideos-item-play"
                                    id="videos-about-turkey"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                                />
                            </figure>
                        </div>
                    </Link>
                    <div className="card-body">
                        <h2 itemProp="name headline" className="abhaya">
                            13 AMAZING Facts About Turkey
                        </h2>
                    </div>
                </div>
                <div className="card">
                    <Link 
                        data-fancybox=""
                        data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                        
                        className="video-item right-padding-only mb-sm-15 p-17"
                    >
                        <div className="figure-container">
                            <figure>
                                <img
                                    src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                                    className="card-img-top"
                                    alt="13 AMAZING Facts About Turkey"
                                />
                                <img
                                    className="homeVideos-item-play"
                                    id="videos-about-turkey"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                                />
                            </figure>
                        </div>
                    </Link>
                    <div className="card-body">
                        <h2 itemProp="name headline" className="abhaya">
                            13 AMAZING Facts About Turkey
                        </h2>
                    </div>
                </div>
                <div className="card">
                    <Link 
                        data-fancybox=""
                        data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                        
                        className="video-item right-padding-only mb-sm-15 p-17"
                    >
                        <div className="figure-container">
                            <figure>
                                <img
                                    src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                                    className="card-img-top"
                                    alt="13 AMAZING Facts About Turkey"
                                />
                                <img
                                    className="homeVideos-item-play"
                                    id="videos-about-turkey"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                                />
                            </figure>
                        </div>
                    </Link>
                    <div className="card-body">
                        <h2 itemProp="name headline" className="abhaya">
                            13 AMAZING Facts About Turkey
                        </h2>
                    </div>
                </div>

            </Carousel>

            <Link 
                className="view-all-btn btn margin-top-2 rednew-border"
                style={{ padding: ".5rem 2rem !important", backgroundColor: "transparent" }}
                
            >
                <span>View All</span>
            </Link>
        </section>
            <aside className="widgets col-dis-3 col-tab-3 col-mob-12 no-padding widget-blogendpage">
                <Link 
                    
                    title="download our online borchour"
                >
                    <img
                        data-src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
                        alt="download our online borchour"
                        className="w-100 margin-top-1 ls-is-cached lazyloaded"
                        src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
                    />
                </Link>
                <div className="widget noheader nostyle-widget">
                    <div className="header-img-buyerguide">
                        <div className="container">
                            <h3 className="title no-margin bold" style={{}}>
                                BUYER'S GUIDE
                            </h3>
                            <p>The Definitive guide to buying property in Turkey</p>
                            <div className="padding-bottom-11">
                                <Link 
                                    
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
                                <Link 
                                    
                                    title="Turkey macroeconomic and investment analysis"
                                    className="btn right-widget-hover"
                                >
                                    Download it now
                                </Link>
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
                        Latest Posts
                    </h3>
                    <div className="body">
                        <ul className="no-bullet">
                            <li>
                                <Link 
                                    
                                    title="Unveiling the Best Islands in Turkey for Curious Travellers"
                                >
                                    Unveiling the Best Islands in Turkey for Curious Travellers
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    
                                    title="Uncovering Secrets of Sardis and Exploring the Ancient City"
                                >
                                    Uncovering Secrets of Sardis and Exploring the Ancient City
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    
                                    title="Big Life by the Little Bosphorus Istanbul"
                                >
                                    Big Life by the Little Bosphorus Istanbul
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    
                                    title="Turkish Citizenship benefits for Foreign Investors"
                                >
                                    Turkish Citizenship benefits for Foreign Investors
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    
                                    title="Experience Old Constantinople Through the Old Hippodrome"
                                >
                                    Experience Old Constantinople Through the Old Hippodrome
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    
                                    title="Famous Bosphorus Bridges of Istanbul"
                                >
                                    Famous Bosphorus Bridges of Istanbul
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    
                                    title="Soaring High in the Majestic Taurus Mountains of Turkey"
                                >
                                    Soaring High in the Majestic Taurus Mountains of Turkey
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="Turkey Earthquake Exposes the Need for Massive Urban Regeneration"
                                >
                                    Turkey Earthquake Exposes the Need for Massive Urban Regeneration
                                </Link>
                            </li>
                            <li>
                                <Link 
                                >
                                    Sultanahmet and the Old City of Istanbul from Past to Present
                                </Link>
                            </li>
                            <li>
                                <Link 
                                >
                                    From Constantinople to Istanbul – The Pride of Turkey
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
                                    
                                    title="Turkish Airlines records net profit for sixth consecutive quarter"
                                >
                                    Turkish Airlines records net profit for sixth consecutive quarter
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="Charging licence granted to Tesla by Turkey"
                                >
                                    Charging licence granted to Tesla by Turkey
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="Turnover of $2.7 billion for Pegasus Airlines in 2022"
                                >
                                    Turnover of $2.7 billion for Pegasus Airlines in 2022
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="German tourists establish Turkey as top destination"
                                >
                                    German tourists establish Turkey as top destination
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="Turkey to designate 15 more 'nature conservation areas'"
                                >
                                    Turkey to designate 15 more 'nature conservation areas'
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="January tourism records broken in Turkey’s Antalya"
                                >
                                    January tourism records broken in Turkey’s Antalya
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="1 million cruise passengers hosted in Turkey in 2022"
                                >
                                    1 million cruise passengers hosted in Turkey in 2022
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="Record visitors head to Cappadocia in January"
                                >
                                    Record visitors head to Cappadocia in January
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    title="Turkey looks to expand free program to 5 million students"
                                >
                                    Turkey looks to expand free program to 5 million students
                                </Link>
                            </li>
                            <li>
                                <Link
                                    title="Top migration hub of Turkey remains Istanbul once again"
                                >
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
