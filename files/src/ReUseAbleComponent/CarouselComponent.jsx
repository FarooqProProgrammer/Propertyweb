import React, { Children } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




export default function CarouselComponent(props) {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: props.superLargeItem ? props.superLargeItem : 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: props.desktopItem ? props.desktopItem : 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: props.tablet ? props.tablet : 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: props.mobile ? props.mobile : 1
    }
  };

    const CustomRightArrow = ({ onClick, ...rest }) => {
      const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;
      // onMove means if dragging or swiping in progress.
      return <button onClick={() => onClick()} className="owl-next"><i className="fa fa-angle-right" /></button>
        ;
    };
  
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} className="owl-next"><i className="fa fa-angle-right" /></button>
      ;
  };

  return <Carousel customRightArrow={CustomRightArrow} customLeftArrow={CustomLeftArrow}>{Children}</Carousel>
}



