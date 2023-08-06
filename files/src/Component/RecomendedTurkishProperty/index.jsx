import React, { useEffect, useRef, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import { RealState } from "../../Data";
import ListingCards from "../../ReUseAbleComponent/ListingCards";
import Image from "../../ReUseAbleComponent/Image";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import RecommendedTurkishPropertyData from "../../Data/RecommendedTurkishProperty";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../Config";
import ViewPropertyAction from "../../Redux/Action/ViewPropertyAction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ElasticSlider from "../../ReUseAbleComponent/ElasticSlider";
import LocationSvg from "../../assets/location.svg";
import BathroomSvg from "../../assets/bathrooms.svg";
import BedroomsIcon from "../../assets/bedrooms.svg";
import PhoneComponent from "../../ReUseAbleComponent/PhoneComponent";
import LoadingModal from "../../ReUseAbleComponent/LoadingModal";
import ModalComponent from "../../ReUseAbleComponent/ModalComponent";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import useProperties from "../../Hooks/useProperties";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function RecomendedTurkishProperty() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CarouselID, setCarouselID] = useState();
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();
  const [Description, setDescription] = useState("");
  const [navigateProperty, setnavigateProperty] = useState(false);
  const [property, setForPropertyStatus] = useState();
  const [Active, setActive] = useState();
  const user = useSelector((state) => state.AuthReducer);
  const states = useSelector((state) => state.AboutTurkey.Nav);
  const { propertiesData, isContinue } = useProperties("/properties");
  useEffect(() => {
    console.log(propertiesData);
  }, []);

  const [data, setData] = useState("California");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const showModal = (id, Active) => {
    setCarouselID(id);
    setActive(Active);
    setIsOpen(true);
  };
  const handlePhoneInputChange = (telNumber, selectedCountry) => {
    setPhone(selectedCountry);
    console.log(Phone);
  };
  const handleOk = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const HandleSubmitEnquiryForm = async (e) => {
    e.preventDefault();
    console.log(CarouselID);
    console.log(user.login.uid);
    console.log(Name);
    console.log(Phone);
    console.log(Email);
    console.log(Description);

    const docRef = await addDoc(collection(db, "EnquiryForm"), {
      propertyID: CarouselID,
      id: user.login.uid,
      name: Name,
      phone: Phone,
      Email: Email,
      desc: Description,
      purpose: property,
      Deal: "pending",
      Active: Active,
    });
    console.log("Document written with ID: ", docRef.id);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const NavigateProperty = (item) => {
    dispatch(ViewPropertyAction(item));
    setnavigateProperty(true);
  };

  return (
    <>
      <Box className={`hot-properties-bg ${states ? "z-50" : "-z-50"}    `}>
        <section
          id="hot-properties"
          className="wrap-dis-85 wrap-tab-11 wrap-mob-11 hot-properties-carousel"
          touch={1}
        >
          <h1 className="title-lined abhaya">
            <Box className="font-small-29">
              <b>Today</b>'s Recommended Turkish Properties
            </Box>
          </h1>
          <Box className="section--filter-wrapper">
            <ul className="popular-cities section--filter " style={{}}>
              <li>
                <StyledButton
                  title={"All"}
                  onClick={() => setData("All")}
                  mode={data === "All" ? true : false}
                />
                {/* <Link
                  onClick={() => setData("All")}
                  className="btn section--filter-Link"
                  // ripple button button-default active
                  style={{ background: data === "All" ? "#5081ff" : "white" }}
                >
                  All
                </Link> */}
              </li>
              <li>
                <StyledButton
                  title={"California"}
                  onClick={() => setData("California")}
                  mode={data === "California" ? true : false}
                />

                {/* <Link
                  onClick={() => setData("California")}
                  className="btn section--filter-Link "
                  // rel="Istanbul"
                  style={{
                    background: data === "California" ? "#5081ff" : "white",
                  }}
                >
                  California
                </Link> */}
              </li>

              <li>
                <StyledButton
                  title={"San Francisco"}
                  onClick={() => setData("San Francisco")}
                  mode={data === "San Francisco" ? true : false}
                />
                {/* <Link
                  onClick={() => setData("San Francisco")}
                  className="btn section--filter-Link "
                  // rel="Istanbul"
                  style={{
                    background: data === "San Francisco" ? "#5081ff" : "white",
                  }}
                >
                  San Francisco
                </Link> */}
              </li>
            </ul>
          </Box>
          <ElasticSlider ItemShop={4}>
            {propertiesData
              .filter((item) =>
                data === "All" ? item : item.property_Location === data
              )
              .map((item) => {
                return (
                  <Box
                    key={item.id}
                    style={{ width: 300 }}
                    className="property-box  cf hot-property gap-10"
                  >
                    <Box className={`position-relative `}>
                      {!states && (
                        <>
                          <Box className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                            <span>{item.Property_Type}</span>
                          </Box>
                          <Link
                            className="btn --circle position-abs  heart-label border-none"
                            id="inline"
                            href="#logins2"
                            data-id={6199}
                          >
                            <span className="flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.189"
                                height="18.465"
                                viewBox="0 0 20.189 18.465"
                              >
                                <path
                                  id="Heart"
                                  d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                                  transform="translate(0.975 0.975)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeWidth={2}
                                  fillRule="evenodd"
                                />
                              </svg>
                            </span>
                          </Link>
                        </>
                      )}

                      <figure className="cardImgInListing skelton-loading">
                        <Link
                          rel="nofollow"
                          className="prevent-newtab-onmobile"
                        >
                          <LazyLoadImage
                            alt="pic 08"
                            className=" lazyloaded"
                            src={item.property_urls[0]}
                          />
                        </Link>
                      </figure>
                      <Link
                        // to="/viewproperty"
                        onClick={() => NavigateProperty(item)}
                        title="Bargain apartments for sale in Adabuku Bodrum complex"
                        itemProp="name"
                        className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                      >
                        {item.Property_Name}
                      </Link>
                      <Link
                        rel="nofollow"
                        className="prevent-newtab-onmobile"
                        to="/viewproperty"
                      >
                        <p
                          itemProp="description"
                          limit={600}
                          className="skelton-loading"
                        >
                          {item.Overview}
                        </p>
                      </Link>
                      <Box className="features skelton-loading">
                        <Box className="location">
                          <img
                            alt="pic 08"
                            className="icon-location img-fluid"
                            src={LocationSvg}
                          />
                          <span className="quantity">
                            {item.property_Location}
                          </span>
                        </Box>
                        <Box className="bedrooms flex content-space-evenly">
                          <Box>
                            <Image
                              alt="pic 03"
                              className="icon-bedroom img-fluid"
                              src={BedroomsIcon}
                            />
                          </Box>
                          <Box>
                            <span className="quantity">
                              {item.property_BedRoom}
                            </span>
                          </Box>
                        </Box>
                        {/* <Box className="bathrooms flex content-space-evenly padding-left-05">
                          <Box>
                            <Image
                              alt="pic 04"
                              className="icon-bathrooms img-fluid"
                              src={BathroomSvg}
                            />
                          </Box>
                          <Box>
                            <span className="quantity">
                              {item.Propert_Bathroom}
                            </span>
                          </Box>
                        </Box>
                        <Box className="quantity  padding-dir-05">
                          {item.Propert_Living_space}
                        </Box> */}
                      </Box>
                      <Box className="features skelton-loading">
                        {/* <Box className="location">
                          <img
                            alt="pic 08"
                            className="icon-location img-fluid"
                            src={LocationSvg}
                          />
                          <span className="quantity">
                            {item.property_Location}
                          </span>
                        </Box>
                        <Box className="bedrooms flex content-space-evenly">
                          <Box>
                            <Image
                              alt="pic 03"
                              className="icon-bedroom img-fluid"
                              src={BedroomsIcon}
                            />
                          </Box>
                          <Box>
                            <span className="quantity">
                              {item.property_BedRoom}
                            </span>
                          </Box>
                        </Box> */}
                        <Box className="bathrooms flex content-space-evenly padding-left-05">
                          <Box>
                            <Image
                              alt="pic 04"
                              className="icon-bathrooms img-fluid"
                              src={BathroomSvg}
                            />
                          </Box>
                          <Box>
                            <span className="quantity">
                              {item.Propert_Bathroom}
                            </span>
                          </Box>
                        </Box>
                        <Box className="bathrooms flex content-space-evenly padding-left-05">
                          {item.Propert_Living_space}
                        </Box>
                        {/* <Box className="quantity  padding-dir-05">
                          
                        </Box> */}
                      </Box>
                      <Box className="card-actions flex padding-1 content-space-between skelton-loading">
                        <Box className="price flex-align-self-center">
                          <span className="unit-price flex">
                            ${item.Property_Price}
                          </span>
                        </Box>
                        <Box>
                          <StyledButton
                            title={"Quick Enquiry"}
                            onClick={() => showModal(item.id, item.isActive)}
                            size="small"
                            font="10"
                          />
                          {/* <Link
                            onClick={() => showModal(item.id, item.isActive)}
                            className="quich-enquire-btn abhaya"
                            id="inline"
                          >
                            <span>Quick Enquire</span>
                          </Link> */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </ElasticSlider>
        </section>
      </Box>

      <ModalComponent
        style={{
          position: "relative",
          top: 300,
          height: "400px",
          marginTop: 100,
          zIndex: 999,
        }}
        isOpen={isOpen}
        onClose={closeModal}
      >
        <Box
          className="form_popup newcolor fancybox-content"
          id="data"
          style={{ display: "inline-block" }}
        >
          <form
            onSubmit={HandleSubmitEnquiryForm}
            className="box white clearfix"
          >
            <h3 className="title col-dis-12 col-tab-12 col-mob-12">
              Property Enquiry
            </h3>
            <Box grid="">
              <Box className="col-dis-12 col-tab-12 col-mob-12">
                <label className="field col-dis-12 col-tab-6 col-mob-12">
                  <input
                    name="first_name"
                    type="text"
                    placeholder="your name *"
                    defaultValue=""
                    validation=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <Box className="field col-dis-12 col-tab-6 col-mob-12">
                  <IntlTelInput
                    containerClassName="intl-tel-input"
                    inputClassName="form-control"
                    onPhoneNumberChange={handlePhoneInputChange}
                    defaultCountry={"us"}
                  />
                </Box>
                <label className="field col-dis-12 col-tab-6 col-mob-12">
                  <input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    defaultValue=""
                    validation="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="field col-dis-12 col-tab-6 col-mob-12">
                  <input
                    type="text"
                    placeholder="For Purpose Rent | Buy"
                    defaultValue=""
                    onChange={(e) => setForPropertyStatus(e.target.value)}
                  />
                </label>
                <label className="field col-dis-12 col-tab-12 col-mob-12">
                  <textarea
                    name="msg"
                    placeholder="Message"
                    defaultValue={"I'm interested in this property"}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
              </Box>
            </Box>
            <Box className="actions  col-dis-12 col-tab-12 col-mob-12 flex content-center padding-bottom-05">
              <input name="requestUrl" type="hidden" />
              <input
                type="hidden"
                id="propertyID"
                defaultValue={6173}
                name="propertyID[]"
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="enqID"
                defaultValue=""
              />
              <input
                type="submit"
                defaultValue="Send"
                className=" bg-[#5081ff] px-3 text-white rounded-md py-2"
                onclick=""
              />
            </Box>
          </form>{" "}
          <button
            type="button"
            data-fancybox-close=""
            className="fancybox-button fancybox-close-small"
            title="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version={1}
              viewBox="0 0 24 24"
            >
              <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z" />
            </svg>
          </button>
        </Box>
      </ModalComponent>
    </>
  );
}
