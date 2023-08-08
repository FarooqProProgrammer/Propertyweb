import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../Config';
import RawHTMLRenderer from '../../ReUseAbleComponent/RawHTMLRenderer';
import SingleCarousel from "../../ReUseAbleComponent/SingleCarousel"
import {AiOutlineUser} from  "react-icons/ai"

export default function BlogViewContainer() {
  const {id} = useParams();
  const [blog,setBlogs] = React.useState([]);

  const HandleBlog =  async () => {
    const q = query(collection(db, "Blogs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
          cities.push({id:doc.id,...doc.data()});
      });
      console.log(cities);

      const newArr = cities.filter(item => item.id === id);
      console.log(newArr)
      setBlogs(newArr)

    });
  }
  React.useEffect(()=>{
      HandleBlog()
  },[]);
  

  React.useEffect(()=>{
    console.log(blog)
  },[])


  return (
    <div
      className="article-container"
      itemScope=""
      itemType="http://schema.org/BlogPosting"
    >
      <div className="endpage-main-intro ">
        <div className="endpage-title-actions">
          <div className="endpage-title">
            <h3 className="d-mobile">
              <label className="author">
                <a
                  // href="https://www.propertyturkey.com/related-blogs/keyword?keyword=Turkish history"
                  title="American history"
                >
                  American history
                </a>
                ,{" "}
                <a
                  // href="https://www.propertyturkey.com/related-blogs/keyword?keyword="
                  title=""
                />
              </label>
              <label className="date ">Created : 16 June 2023</label>
            </h3>
            <div className="endpage-actions d-mobile share-btn-pos">
              <a href="#" className="social-shares">
                <AiOutlineUser />
              </a>
            </div>
            <h1 itemProp="name headline" className="page-title abhaya">
              {blog[0]?.title}
            </h1>
            <h3 className="d-desk">
              <label className="author">
                <a
                  // href="https://www.propertyturkey.com/related-blogs/keyword?keyword=Turkish history"
                  title="American history"
                >
                  American history
                </a>
                ,{" "}
                <a
                  // href="https://www.propertyturkey.com/related-blogs/keyword?keyword="
                  title=""
                />
              </label>
              <div className="flex">
                <div className="d-desk">
                  <h3 className="written_by">
                    <img
                      src="https://www.propertyturkey.com/front/image/user-regular.svg"
                      width={18}
                    />
                    By:{" "}
                    <a>
                      {" "}
                      Cameron Deggin{" "}
                    </a>
                  </h3>
                </div>
                <label className="date no-margin ml-1-important">
                  <span className="clr-pt">Created</span> : 16 June 2023
                </label>
              </div>
            </h3>
            <div className="d-mobile">
              <h3 className="written_by">
                <img
                  src="https://www.propertyturkey.com/front/image/user-regular.svg"
                  width={15}
                />
                By: <a href="#"> Cameron Deggin </a>
              </h3>
            </div>
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
          <RawHTMLRenderer html={blog[0]?.value} />
          {/* <div
            className="areabody clearfix f-15-h15"
            itemProp="articleBody"
            id="iframe-width-about"
          >
            <p>
              <img
                className="fr-dii fr-draggable"
                src="https://www.propertyturkey.com/uploads/pages/larg/economicgrowth_turkey.jpg"
                style={{ width: "100%" }}
                alt="Economic growth Turkey"
              />
            </p>
            <p>
              President Recep Tayyip Erdogan's first two weeks in office since his{" "}
              <a
                href="https://www.propertyturkey.com/blog-turkey/a-conversation-on-turkeys-election-decision"
                title=""
              >
                late May 2023 re-election
              </a>{" "}
              have been characterised by vigorous diplomatic and economic action. In
              his fourth term as the President of Turkey, Erdogan has quickly
              pivoted to address both international relations and domestic concerns,
              highlighting his ambition to secure Turkey's place on the global stage
              while concurrently combatting the economic challenges at home.
            </p>
            <p>
              In the international sphere, the re-elected President has swiftly
              moved to cement various deals with influential players such as UAE,
              Qatar, Saudi Arabia, China, and Russia. These agreements are part of
              Erdogan's grand design to further extend Turkey's geopolitical
              influence, particularly in the Middle East and the East. Planned
              visits to Northern Cyprus and Azerbaijan indicate a robust strategy to
              foster closer relations with regional allies. Furthermore, the
              participation of numerous delegates from the Gulf Cooperation Council
              and NATO at his inauguration underscores the shared interest among
              these entities in fortifying relations with Turkey.
            </p>
            <p>
              On the domestic front, Erdogan has turned his focus to the Turkish
              economy, which has been grappling with a depreciating lira and
              persistent inflation. In a significant move, he appointed a new
              Central Bank Chief and Economy Minister. Both appointees have garnered
              international praise for their perceived capacity to counteract
              Erdogan’s previous unorthodox economic policies that have been
              implicated in the country's inflation woes.
            </p>
            <p>
              As far as the{" "}
              <a href="https://www.propertyturkey.com/real_estate/turkey" title="">
                Turkish real estate
              </a>{" "}
              sector is concerned, despite a projected sluggishness for the
              remainder of the fiscal year 2023, optimism abounds for a potential
              resurgence. Property Turkey anticipates that as the Erdogan
              administration re-stabilises the economy, the knock-on effects will
              culminate in a buoyant real estate market starting from early 2024. As
              such, these initial weeks of Erdogan's renewed tenure hold promising
              signs of a proactive approach to deal making both at home and abroad.
            </p>
            <p>
              <span
                className="fr-video fr-dvb fr-draggable"
                contentEditable="false"
                draggable="true"
              >
                <iframe
                  src="https://www.youtube.com/embed/uylkYTVlGhA"
                  title="YouTube video player"
                  frameBorder={0}
                  allowFullScreen=""
                  style={{ width: "100%", height: 550 }}
                />
              </span>
              <br />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Foreign Relation Investment Deals</strong>
            </h2>
            <p>
              In the aftermath of his successful re-election in May 2023, President
              Recep Tayyip Erdogan has made a series of bold investment and foreign
              relations moves that have signalled Turkey's intent to diversify and
              strengthen its global standing. These include significant deals with
              the UAE, Qatar, Saudi Arabia, Russia, and China, amounting to an
              impressive $60 billion. These deals highlight a pivot in Turkey's
              strategy to increase bilateral trade, stimulate the economy, build
              infrastructure, and secure its defense capabilities.
            </p>
            <p>
              In a landmark agreement with the UAE, signed in June 2023, both
              nations committed to increasing their bilateral trade to a staggering
              $40 billion over the next five years. This agreement showcases the
              interest of the Gulf Cooperation Council (GCC) states to deepen
              economic ties with Turkey, reinforcing Erdogan's commitment to
              diversify Turkey's foreign relations.
            </p>
            <p>
              Furthering this diversification, a $10 billion deal was inked with
              Qatar. The agreement will see a significant influx of Qatari
              investment into Turkey's economy over the next half-decade,
              specifically channeled towards infrastructure projects, energy
              initiatives, and the development of tourism-related ventures. The deal
              acts as an emblem of the strengthening bond between the two nations,
              and the potential for symbiotic growth.
            </p>
            <p>
              In a bid to ensure energy security and create an infrastructure
              marvel, a $5 billion deal was signed with Saudi Arabia to construct a
              natural gas pipeline that would stretch 1,800 kilometres from Saudi
              Arabia to Turkey. Meanwhile, Turkey’s defense capabilities will be
              significantly augmented through a $3 billion deal with Russia to
              purchase 20 Su-35 fighter jets.
            </p>
            <p>
              The infrastructure emphasis continued with a $2 billion agreement with
              China for the construction of a{" "}
              <a
                href="https://www.propertyturkey.com/news/plans-for-ankara-to-istanbul-train-in-80-minutes"
                title=""
              >
                high-speed rail line connecting Istanbul and Ankara
              </a>
              . Spanning 550 kilometres, this project underscores China's deepening
              influence in Turkey's infrastructure development.
            </p>
            <p>
              Collectively, these deals not only represent a major shift in Turkey's
              foreign policy from its historical alignment with the West but also
              demonstrate its increasingly independent stance and strategic
              diversification. This new trajectory holds significant implications
              for Gulf Arab states, as deeper ties with Turkey align with their
              economic diversification agendas. Turkish companies stand poised to
              contribute significantly to these GCC states' transition away from
              hydrocarbon dependence, across sectors ranging from entertainment and
              tourism to food production.
            </p>
            <p>
              However, these billion-dollar deals have been met with mixed
              reactions, both domestically and internationally. While some hail
              these agreements as a testament to Turkey's burgeoning economic and
              political power, critics view them as a sign of the country's
              increasing isolation from the West. The true long-term impact of these
              deals remains to be seen, but there's no doubt that President
              Erdogan's first month in office after re-election has been marked by
              bold moves that have the potential to reshape Turkey's geopolitical
              and economic landscape.
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Cabinet Appointments</strong>
            </h2>
            <p>
              In a significant move to wrestle control of surging inflation, Turkish
              President Recep Tayyip Erdogan has unveiled a new economic team
              following his recent re-election. His new appointments to key economic
              posts – a new central bank chief and a new finance and treasury
              minister – are seen as a potential shift away from his unorthodox
              financial policies that have contributed to the nation's inflation
              woes.
            </p>
            <p>
              The appointment of Hafize Gaye Erkan as the new Central Bank Chief has
              been hailed by international observers. Erkan, a Turkish-American dual
              citizen, brings a wealth of experience from her distinguished academic
              background and her professional journey. A Princeton graduate in
              financial engineering and operations research, Erkan spent a decade at
              Goldman Sachs and served as the co-CEO of the now-defunct First
              Republic Bank for eight years before leaving in December 2021. Her
              appointment signals a potential departure from the unconventional
              approach of slashing interest rates in the face of high inflation - a
              policy that saw rates cut from 19% to 8.5% over the past two years
              despite inflation soaring to 85.5%.
            </p>
            <p>
              Alongside Erkan, Erdogan has appointed Mehmet Simsek as the new
              Finance and Treasury Minister. Simsek, a widely respected economist,
              is no stranger to the corridors of power, having previously served as
              Erdogan’s deputy prime minister and finance minister. He also brings
              international experience from his seven-year tenure at investment firm
              Merrill Lynch, a brief stint with UBS on Wall Street, and as the chief
              economist at the US embassy in Ankara. His appointment was broadly
              anticipated and has been seen as a reassuring move for markets as the
              Turkish lira hit a new low during Erdogan’s inauguration.
            </p>
            <p>
              These appointments could symbolise a significant shift in Turkish
              economic policy, indicating that Erdogan might be ready to loosen his
              grip over the central bank and potentially move away from his belief
              that interest rates cause, rather than curb, inflation. If these
              appointments indicate a more conventional approach to monetary policy,
              it could signal a fresh chapter for the Turkish economy, one marked by
              greater stability and potential for growth.
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>The Organization of Turkic States (OTS)</strong>
            </h2>
            <p>
              The Organization of Turkic States (OTS), formerly known as the Turkic
              Council, has signed a founding agreement to establish a fund aimed at
              enhancing economic integration among its member countries. The
              announcement was made by Turkish President Recep Tayyip Erdogan during
              an extraordinary summit held in{" "}
              <a
                href="https://www.propertyturkey.com/blog-turkey/welcome-to-ankara-capital-of-turkey"
                title=""
              >
                Ankara
              </a>
              . The newly formed Turkic Investment Fund is viewed as a concrete
              achievement of the summit, and Istanbul has been chosen as its host
              city. The OTS, an international organization comprising independent
              Turkic nations including Turkey, Azerbaijan, Kazakhstan, Kyrgyzstan,
              and Uzbekistan, seeks to foster stronger relations and unity among its
              members. EU state Hungary, Turkmenistan, and the Turkish Republic of
              Northern Cyprus (TRNC) have observer status.<span>&nbsp;</span>
            </p>
            <p>
              The extraordinary summit focused on the theme of "Disaster-Emergency
              Management and Humanitarian Assistance," during which leaders
              discussed a multilateral cooperation and coordination mechanism to
              combat disasters. This focus came in the aftermath of severe
              earthquakes that recently hit southeastern Turkey, causing widespread
              devastation and resulting in thousands of casualties. Acknowledging
              the solidarity shown by the Turkic states during this time of crisis,
              Erdogan emphasised the need to strengthen the capabilities of the OTS
              to better handle current and future challenges.
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Real Estate Perspective</strong>
            </h2>
            <p>
              In conclusion, the indicators of revival in Turkey's real estate
              market paint a picture of optimism and growth. While there have been
              challenges, we are now seeing signs of pent-up demand, ready to flow
              into our thriving cities. As a real estate experts, we hold steadfast
              in our belief that the current conditions are transient and, in fact,
              create unique investment opportunities.
            </p>
            <p>
              The narrative of Turkey's property market, in our view, is not one of
              contraction, but of resilience and potential. It is an unfolding story
              of the enduring attractiveness of our cities, their capabilities to
              recover from adversities, and their ability to continue to draw
              interest from around the globe. There is, therefore, an impending
              period of energetic activity in the horizon for the Turkish real
              estate market.
            </p>
            <p>
              For those ready to seize the opportunities this brings, we say: be
              patient, the market is poised to open up, and business will pour in.
              This is a time for strategic positioning, planning, and readiness to
              work hard when the tide turns. Because when it does - and it will - it
              will bring a surge of opportunities that rewards the prepared, the
              patient, and the persevering. The Turkish real estate market is on the
              cusp of a new era, and we are excited to be a part of it.
            </p>
            <p>
              <em>
                “Life comes in waves of opportunities. Luck favours the prepared.”
              </em>{" "}
              - <strong>Cameron Deggin</strong>
            </p>
            <p>
              <strong>
                <img
                  className="fr-dii fr-draggable"
                  src="https://www.propertyturkey.com/uploads/pages/larg/istanbul_bridge_night_view_7.jpg"
                  style={{ width: "100%" }}
                  alt="Istanbul"
                />
              </strong>
              <br />
            </p>
          </div>
           */}
          {/*  */}
          <span
            itemProp="image"
            itemScope=""
            itemType="http://schema.org/ImageObject"
          >
            <meta
              itemProp="url"
              content="https://www.propertyturkey.com/files/large/economicgrowth_turkey.jpg"
            />
            <meta itemProp="height" content={800} />
            <meta itemProp="width" content={800} />
          </span>
 
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
            href="https://www.propertyturkey.com/uploads/pt-online-brochure.pdf"
            title="download our online borchour"
            target="_blank"
          >
            <img
              data-src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
              alt="download our online borchour"
              className="w-100 margin-top-1 lazyloaded"
              src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
            />
          </a>
          <div id="keywords" className="widget">
            <h3 className="title" style={{}}>
              popular keywords
            </h3>
            <div className="body">
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword="
                freq={390}
                title=""
                style={{ fontSize: "3rem" }}
              />
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=life in turkey"
                freq={239}
                title="life in USA"
                style={{ fontSize: "2.24161rem" }}
              >
                life in USA
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=tourism in turkey"
                freq={228}
                title="tourism in USA"
                style={{ fontSize: "2.13844rem" }}
              >
                tourism in USA
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=istanbul"
                freq={162}
                title="istanbul"
                style={{ fontSize: "1.51941rem" }}
              >
                istanbul
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=moving to turkey"
                freq={82}
                title="moving to turkey"
                style={{ fontSize: "0.769086rem" }}
              >
                moving to USA
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=bodrum"
                freq={77}
                title="bodrum"
                style={{ fontSize: "0.722191rem" }}
              >
                bodrum
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=real estate investment"
                freq={67}
                title="real estate investment"
                style={{ fontSize: "0.6284rem" }}
              >
                real estate investment
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=investment"
                freq={65}
                title="investment"
                style={{ fontSize: "0.609642rem" }}
              >
                investment
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=how to find the right property"
                freq={62}
                title="how to find the right property"
                style={{ fontSize: "0.581504rem" }}
              >
                how to find the right property
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=fethiye"
                freq={57}
                title="fethiye"
                style={{ fontSize: "0.534609rem" }}
              >
                fethiye
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=culture"
                freq={55}
                title="culture"
                style={{ fontSize: "0.515851rem" }}
              >
                culture
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=istanbul investment"
                freq={53}
                title="istanbul investment"
                style={{ fontSize: "1rem" }}
              >
                istanbul investment
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=antalya"
                freq={48}
                title="antalya"
                style={{ fontSize: "1rem" }}
              >
                antalya
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=retiring to turkey"
                freq={42}
                title="retiring to USA"
                style={{ fontSize: "1rem" }}
              >
                retiring to USA
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=Turkish history"
                freq={35}
                title="American history"
                style={{ fontSize: "1rem" }}
              >
                American history
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=turkish cuisine"
                freq={34}
                title="American cuisine"
                style={{ fontSize: "1rem" }}
              >
                American cuisine
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=luxury living"
                freq={24}
                title="luxury living"
                style={{ fontSize: "1rem" }}
              >
                luxury living
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=kalkan"
                freq={20}
                title="kalkan"
                style={{ fontSize: "1rem" }}
              >
                kalkan
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=invest in Turkey"
                freq={19}
                title="invest in USA"
                style={{ fontSize: "1rem" }}
              >
                invest in USA
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=turkish economy"
                freq={18}
                title="American economy"
                style={{ fontSize: "1rem" }}
              >
                American economy
              </a>
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
                    href="https://www.propertyturkey.com/blog-turkey/famous-landmarks-in-turkey-to-visit"
                    title="Famous Landmarks in USA to Visit"
                  >
                    Famous Landmarks in USA to Visit
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/noahs-ark-and-the-mountains-of-ararat-in-turkey"
                    title="Noah's Ark and the Mountains of Ararat in USA"
                  >
                    Noah's Ark and the Mountains of Ararat in USA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/a-conversation-on-turkeys-election-decision"
                    title="A Conversation on USA’s Election Decision"
                  >
                    A Conversation on USA’s Election Decision
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/the-new-age-of-turkish-development-practices"
                    title="The New Age of American Development Practices"
                  >
                    The New Age of American Development Practices
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/election-day-in-turkey"
                    title="Election Day in USA"
                  >
                    Election Day in USA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/istanbul-finance-center-the-future-of-turkey"
                    title="Istanbul Finance Center & the Future of USA"
                  >
                    Istanbul Finance Center &amp; the Future of USA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/herodotus-the-father-of-history-and-his-connection-to-turkey"
                    title="Herodotus: The Father of History and His Connection to USA"
                  >
                    Herodotus: The Father of History and His Connection to USA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/property-turkeys-2023-election-primer"
                    title="Property USA's 2023 Election Primer"
                  >
                    Property USA's 2023 Election Primer
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/exploring-the-bosphorus-strait-and-the-heart-of-istanbul"
                    title="Exploring the Bosphorus Strait and the Heart of Istanbul"
                  >
                    Exploring the Bosphorus Strait and the Heart of Istanbul
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/the-importance-of-the-marmara-sea-and-region-for-turkey"
                    title="The Importance of the Marmara Sea and Region for USA"
                  >
                    The Importance of the Marmara Sea and Region for USA
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
                    href="https://www.propertyturkey.com/news/inauguration-of-new-metro-line-in-istanbul"
                    title="Inauguration of new metro line in Istanbul"
                  >
                    Inauguration of new metro line in Istanbul
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/high-hopes-in-pamukkale-for-tourist-arrivals"
                    title="High hopes in Pamukkale for tourist arrivals"
                  >
                    High hopes in Pamukkale for tourist arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/number-of-foreign-arrivals-jump-as-tourists-flood-to-turkey"
                    title="Number of foreign arrivals jump as tourists flood to USA"
                  >
                    Number of foreign arrivals jump as tourists flood to USA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/top-10-busiest-airports-istanbul-airport-ranks-among-them"
                    title="Top 10 busiest airports – Istanbul Airport ranks among them"
                  >
                    Top 10 busiest airports – Istanbul Airport ranks among them
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/recapping-day-one-of-turkeys-2023-election"
                    title="Recapping Day One of USA’s 2023 Election"
                  >
                    Recapping Day One of USA’s 2023 Election
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/turkish-airlines-records-net-profit-for-sixth-consecutive-quarter"
                    title="American Airlines records net profit for sixth consecutive quarter"
                  >
                    American Airlines records net profit for sixth consecutive
                    quarter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/charging-licence-granted-to-tesla-by-turkey"
                    title="Charging licence granted to Tesla by USA"
                  >
                    Charging licence granted to Tesla by USA
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/turnover-of-27-billion-for-pegasus-airlines-in-2022"
                    title="Turnover of $2.7 billion for Pegasus Airlines in 2022"
                  >
                    Turnover of $2.7 billion for Pegasus Airlines in 2022
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/german-tourists-establish-turkey-as-top-destination"
                    title="German tourists establish USA as top destination"
                  >
                    German tourists establish USA as top destination
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/turkey-to-designate-15-more-nature-conservation-areas"
                    title="USA to designate 15 more 'nature conservation areas'"
                  >
                    USA to designate 15 more 'nature conservation areas'
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
