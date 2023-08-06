import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../ReUseAbleComponent/Image";
import Phone from "../../assets/path392.svg";
import Contact from "../../assets/contact.svg";
import Cross from "../../assets/path387.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Box } from "@mui/material";
import { TbMessageCircle2Filled } from "react-icons/tb";
import PhonePopupLogo from "../../assets/whatsapp-brands.svg";

export default function PhonePopup() {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <div className="social-iconss relative" id="s-icons">
      <ul
        className={`navbar-nav absolute -top-4 left-8 ${
          toggleBtn ? "show" : ""
        }`}
      >
        <li className="dropdownn">
          <Link to="" className="btnnn btn-primaryy btn-sociall footer-phone">
            <BsFillTelephoneFill size={25} color="#5081ff" />
          </Link>
          <div className="dropdown-content">
            <Link to="tel:+44 46 7998 4651">LN +44 46 7998 4651</Link>
            <Link to="tel:+44 46 7998 4651">TLN +44 46 7998 4651</Link>
          </div>
        </li>
        <li>
          <Link
            to=""
            target="_blank"
            className="btnnn btn-primaryy btn-sociall"
          >
            <Image className="img-fluid" src={PhonePopupLogo} width={35} />
          </Link>
        </li>
        <li>
          <Link to="" className="btnnn btn-primaryy btn-sociall">
            <Image className="img-fluid" src={Contact} width={35} />
          </Link>
        </li>
      </ul>
      <button
        className="btnnn btn-primaryy-1 btn-social pulse-animation"
        id="btn-share"
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        <Box className="flex relative px-1">
          <BsFillTelephoneFill
            size={25}
            color="#fff"
            className="absolute -top-2"
          />
          <TbMessageCircle2Filled
            size={25}
            color="#fff"
            className="absolute -top-4 right-0"
          />
        </Box>

        <Image
          className="img-fluid close-icon hide"
          id="close-btnn"
          src={Cross}
          width={30}
        />
      </button>
    </div>
  );
}
