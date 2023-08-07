import React from 'react'
import Image from '../../ReUseAbleComponent/Image'
import MobilePicture from "../../assets/Screenreplacement@2x.png"
import AppStore from "../../assets/app-store.png"
import Playstore from "../../assets/app-store.png"
import { Link } from 'react-router-dom'

export default function MobileStore() {
  return (
    <section className="app-banner">
      <div className="wrap-dis-85 wrap-tab-11 wrap-mob-11 margin-bottom-13">
        <figure className="fl-dis-right fl-tab-right">
          <Image
            className=" lazyloaded"
            data-src="https://www.propertyturkey.com/front/image/images2019/Images/Screenreplacement@2x.png"
            src={'https://www.propertyturkey.com/front/image/images2019/Images/Screenreplacement@2x.png'}
          />
        </figure>
        <div className="fl-dis-left fl-tab-left banner-element-first">
          <h2 className="abhaya extra-bold">
            Download Property USA <br /> Mobile Application
          </h2>
        </div>
        <div className="fl-dis-left fl-tab-left banner-element">
          <div className="app-icons">
            <Link

              className="col-tab-6 col-dis-6 col-mob-6"
            >
              <Image
                className=" lazyloaded"
                data-src="https://www.propertyturkey.com/front/image/app-store.png"
                src={AppStore}
              />
            </Link>
            <Link

              className="col-tab-6 col-dis-6 col-mob-6"
            >
              <Image
                className=" lazyloaded"
                data-src="https://www.propertyturkey.com/front/image/play-store.png"
                src={Playstore}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}
