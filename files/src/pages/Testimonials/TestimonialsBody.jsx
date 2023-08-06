import React from 'react'
import ArticalComponent from '../../ReUseAbleComponent/ArticalComponent'
import { TestimonialArticleData } from '../../Data'
import Image from '../../ReUseAbleComponent/Image'
import DownloadIcon from "../../assets/download-icon.svg"
import { Link } from 'react-router-dom'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../Config"

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
            setTestimonials(cities)
        });
    }

    React.useEffect(() => {
        HandleTestimonials()
    }, [])

    return (
        <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix cardListing">
            <div className="col-dis-9 col-tab-9 col-mob-12 cardRow font-13">
                <h1 itemProp="name" className="page-title">
                    Testimonials
                </h1>
                Here you can find a selection of clients who have happily provided us with
                these testimonials and feedback during and after buying property with us in
                Turkey. We do like to go the extra mile for you, our clients. Here are a few
                words from you about what it is like working with us in finding your dream
                home in Turkey.&nbsp;
                <br />
                <br />
                Have a read through some of our testimonials, from real people and from real
                clients.&nbsp;
                <hr />

                {
                    Testimonials.map((item) => {
                        return (
                            <div className="w-full h-auto border-2 border-gray-300 pl-1 pt-2 mt-3">
                                <p className='lg:text-2xl md:text-lg sm:text-sm font-black px-2'>{item.Title}</p>
                                <div className="w-[95%] h-auto py-1 flex lg:flex-row md:flex-col sm:flex-col  justify-between items-center gap-1   pl-2">
                                    <img src={item.img} className='lg:w-[20%] md:w-full sm:w-full lg:h-[150px] md:h-[200px] sm:h-[200px]' alt="" />
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
                        )
                    })
                }







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
                                <Link
                                    to=""
                                    title="Turkey macroeconomic and investment analysis"
                                    className="btn right-widget-hover"
                                >
                                    Download it now
                                </Link>
                            </div>
                        </div>
                        <img
                            src={DownloadIcon}
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
                                    The best Turkish Beers and brands for summer days
                                </a>
                            </li>
                            <li>
                                <a >
                                    10 Delicious Turkish Desserts and Sweets to Try
                                </a>
                            </li>
                            <li>
                                <a >
                                    Best Taxi App in Turkey: Getting About
                                </a>
                            </li>
                            <li>
                                <a >
                                    13 unspoken Turkish rules you might not know
                                </a>
                            </li>
                            <li>
                                <a >
                                    Turkey's most dangerous animals
                                </a>
                            </li>
                            <li>
                                <a >
                                    Love and marriage in Turkey
                                </a>
                            </li>
                            <li>
                                <a >
                                    The Best Supermarkets in Turkey to Shop
                                </a>
                            </li>
                            <li>
                                <a >
                                    15 Beautiful Places in Turkey That Should be on Your Bucket List
                                </a>
                            </li>
                            <li>
                                <a >
                                    Antalya City Centre: Shopping, Beaches and Things to Do
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

                                    title="Property Turkey's 2023 Election Primer"
                                >
                                    Property Turkey's 2023 Election Primer
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Exploring the Bosphorus Strait and the Heart of Istanbul"
                                >
                                    Exploring the Bosphorus Strait and the Heart of Istanbul
                                </a>
                            </li>
                            <li>
                                <a

                                    title="The Importance of the Marmara Sea and Region for Turkey"
                                >
                                    The Importance of the Marmara Sea and Region for Turkey
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Istanbul Finance Center: Turkey's Global Financial Hub Opens"
                                >
                                    Istanbul Finance Center: Turkey's Global Financial Hub Opens
                                </a>
                            </li>
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
                                <a

                                    title="Turkish Airlines records net profit for sixth consecutive quarter"
                                >
                                    Turkish Airlines records net profit for sixth consecutive quarter
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Charging licence granted to Tesla by Turkey"
                                >
                                    Charging licence granted to Tesla by Turkey
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Turnover of $2.7 billion for Pegasus Airlines in 2022"
                                >
                                    Turnover of $2.7 billion for Pegasus Airlines in 2022
                                </a>
                            </li>
                            <li>
                                <a

                                    title="German tourists establish Turkey as top destination"
                                >
                                    German tourists establish Turkey as top destination
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Turkey to designate 15 more 'nature conservation areas'"
                                >
                                    Turkey to designate 15 more 'nature conservation areas'
                                </a>
                            </li>
                            <li>
                                <a

                                    title="January tourism records broken in Turkey’s Antalya"
                                >
                                    January tourism records broken in Turkey’s Antalya
                                </a>
                            </li>
                            <li>
                                <a

                                    title="1 million cruise passengers hosted in Turkey in 2022"
                                >
                                    1 million cruise passengers hosted in Turkey in 2022
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Record visitors head to Cappadocia in January"
                                >
                                    Record visitors head to Cappadocia in January
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Turkey looks to expand free program to 5 million students"
                                >
                                    Turkey looks to expand free program to 5 million students
                                </a>
                            </li>
                            <li>
                                <a

                                    title="Top migration hub of Turkey remains Istanbul once again"
                                >
                                    Top migration hub of Turkey remains Istanbul once again
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>


    )
}
