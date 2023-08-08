import React from "react";
import Image from "../../ReUseAbleComponent/Image";
import "./index.css";
import { useSelector } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";

import IMGLOGO from "../../assets/PrintPageLogo.png";
import { FaHotel, FaBath, FaLocationArrow } from "react-icons/fa";

export default function PrintPreview() {
  const state = useSelector((state) => state.viewProperty.login);

  const HandlePrint = () => {
    window.print();
  };

  return (
    <div className="container max-w-[1200px] h-screen relative">
      <div className="printpage__parent ">
        {/* =============================  */}
        <div className="PPdiv__Header">
          <div className="ppimg__logo">
            <img src={IMGLOGO} alt="imgLogo" />
          </div>
          <div className="ppheader__text">
            <p>
              Limited Cash Offer! Little Bosphorus investment historic Istanbul
              Centre
            </p>
          </div>
          <div className="ppheader__ref">
            <p>Ref: PTFS6901</p>
          </div>
        </div>
        <hr />

        {/* ============================= */}

        <div className="PPpictures__parent1 mb-2">
          <img
            src={
              "https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-3.jpg"
            }
            alt=""
          />
        </div>
        <div className="PPpictures__parent2 mb-2">
          <img
            src={
              "https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
            }
            alt=""
          />
          <img
            src={
              "https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
            }
            alt=""
          />
        </div>

        {/* ============================= */}
        <div className="PProom__Info">
          <div className="PProomInfo1">
            <div className="PProom__Info__Child">
              <FaHotel style={{ fontSize: 32 }} />
              <p className="quantity">1</p>
            </div>
            <div className="PProom__Info__Child">
              <FaBath style={{ fontSize: 32 }} />
              <p className="quantity">1</p>
            </div>
            <div className="PProom__Info__Child">
              <FaLocationArrow style={{ fontSize: 32 }} />
              <p className="PPCity__name">Istanbul - Eyup</p>
            </div>
          </div>

          <div className="PProomInfo2">
            <p>$245000</p>
          </div>
        </div>

        {/* =================================== */}
        <div className="PProomView__info">
          <p>
            With fantastic views out towards the Golden Horn from Halic, these
            Big Life near Little Bosphorus by Rams apartments are available in
            various types and sizes for buyers to choose from and form part of
            an excellent project equipped with amenities.
          </p>
        </div>
        {/* ======================================== */}
        <div className="PPfooter">
          <div className="PPFooter1">
            <AiOutlineSend />
            <p>info@propertyAmerican.com</p>
          </div>
          <div className="PPFooter2">
            <div>
              <h4>London Office</h4>
              <p>+ 44 (0) 20 8371 0059</p>
            </div>
            <div>
              <h4>Istanbul Office</h4>
              <p>+90 (0) 212 215 0022</p>
            </div>
            <div>
              <h4>Bodrum Office</h4>
              <p>+ 90 252 313 1121</p>
            </div>
            <div>
              <h4>Fethiye - Kalkan Office</h4>
              <p>+90 252 612 38 38</p>
            </div>
            <div>
              <h4>Antalya Office</h4>
              <p>+ 90 242 230 23 88</p>
            </div>
          </div>
        </div>
        <div></div>

        {/* ============================= */}
      </div>

      <div className="ButtonPrint absolute -bottom-[180px] px-6 border-2 border-gray-500 py-2">
        <button onClick={HandlePrint}>Print</button>
      </div>
    </div>
  );
}
