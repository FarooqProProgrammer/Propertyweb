import React from 'react'
import { AboutusSlideData } from '../Data/AboutUsGuideData'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Image from './Image'
import YoutubePlayIcon from "../assets/youtube-playicon.svg"


export default function SingleCarousel() {
    const [idCarousel, setCarouselID] = useState(1)

    const CarouselNextFilter = () => {
        if (idCarousel === AboutusSlideData.length) {
            setCarouselID(1)
        }
        else {
            setCarouselID(idCarousel + 1)
        }
    
    }
  

const CarouselPreviousFilter = () => {
    if (idCarousel === 1) {
        setCarouselID(AboutusSlideData.length)
    }
    else {
        setCarouselID(idCarousel - 1)
    }

}

  return (
    <section
    id="new-properties"
    className="col-dis-3 col-tab-3 col-mob-12 widget aboutus-straigntalk prev-next-owl-style"
  >
    <Box display="flex">
      <h2 className="abhaya title" style={{}}>
        Straight Talk - <br />
        Property USA TV
      </h2>
      <Box display={'flex'} marginTop={5}>
        <Box onClick={CarouselNextFilter}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

        </Box>
        <Box onClick={CarouselPreviousFilter}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Box>
      </Box>
    </Box>

    <div>
      {
        AboutusSlideData.filter(item => item.id === idCarousel).map((item) => {
          return (
            <Box
              className="owl-item ml-[10%]"
              style={{ width: "204.453px", marginRight: 30 }}
            >
              <Box className="card">
                <Link
                  data-fancybox=""
                  data-caption="Did you know that USA is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about USA in this new fun episode."
                  to="https://www.youtube.com/watch?v=B2g7571VBe8"
                  className="video-item right-padding-only mb-sm-15 p-17"
                >
                  <Box className="figure-container">
                    <figure>
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt="13 AMAZING Facts About USA"
                      />
                      <Image
                        className="homeVideos-item-play"
                        id="videos-about-turkey"
                        src={YoutubePlayIcon}
                      />
                    </figure>
                  </Box>
                </Link>
                <Box className="card-body">
                  <h2 itemProp="name headline" className="abhaya">
                    {item.title}
                  </h2>
                </Box>
              </Box>
            </Box>
          )
        })
      }



    </div>
    <Link
      className="view-all-btn btn margin-top-2 rednew-border"
      style={{
        padding: ".5rem 2rem !important",
        backgroundColor: "transparent"
      }}
      to=""
    >
      <span>View All</span>
    </Link>
  </section>
  )
}
