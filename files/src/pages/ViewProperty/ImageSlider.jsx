import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Image from '../../ReUseAbleComponent/Image';
import { useSelector } from "react-redux"
// import './ImageSlider.css'

function ImageSlider() {

  useEffect(() => {
    var main = new Splide('#main-carousel', {
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: true,
      perPage: 1,
    });

    var thumbnails = new Splide('#thumbnail-carousel', {
      perMove: 1,
      fixedWidth: 100,
      fixedHeight: 60,
      gap: 10,
      rewind: true,
      pagination: false,
      isNavigation: true,
      breakpoints: {
        600: {
          fixedWidth: 60,
          fixedHeight: 44,
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    return () => {
      main.destroy();
      thumbnails.destroy();
    };
  }, []);

  const ImagesData = useSelector(state => state.viewProperty.login.property_urls)
  console.log(ImagesData)

  return (
    <>
    
    <div className='parent__carousel'>
      <div id="main-carousel" className="splide splide__manual">
        <div className="splide__track">
          <div className="splide__list">
            {
              ImagesData.map((item) => {
                return (
                  <div className="splide__slide">
                    <Image src={item} />
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>

      <div id="thumbnail-carousel" className="splide">
        <div className="splide__track">
          <div className="splide__list">
            <div className="splide__slide">
              <Image src="https://source.unsplash.com/user/c_v_r/1900x800" />
            </div>
            <div className="splide__slide">
              <Image src="https://source.unsplash.com/user/c_v_r/100x100" />
            </div>
            <div className="splide__slide">
              <Image src="https://www.propertyturkey.com/front/image/images2021/homepage/design-build-slider/5.jpg" />
            </div>
            <div className="splide__slide">
              <Image src="https://www.propertyturkey.com/front/image/images2021/homepage/design-build-slider/5.jpg" />
            </div>
            <div className="splide__slide">
              <Image src="https://www.propertyturkey.com/front/image/images2021/homepage/design-build-slider/5.jpg" />
            </div>
            <div className="splide__slide">
              <Image src="https://www.propertyturkey.com/front/image/images2021/homepage/design-build-slider/5.jpg" />
            </div>


          </div>
        </div>
      </div>
    </div>
    

  </>

  );
}

export default ImageSlider;
