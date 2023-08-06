import React, { useEffect, useState } from "react";
import Image from "../../ReUseAbleComponent/Image";
import { Link, useLocation } from "react-router-dom";
import LocationGold from "../../assets/location-gold-filled.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  Bedroomtoggle,
  cityToggle,
  PriceData,
  TypeDataToggle,
} from "../../Data/CityToggle";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { PropertyFilter } from "../../Redux/Action/PropertyFilter";
import { PropertyTypeFilter } from "../../Redux/Action/PropertyTypeFilter";
import { PropertyBedroom } from "../../Redux/Action/PropertyBedroom";
import CloseIcon from "@mui/icons-material/Close";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

export default function RealStateHeader({
  setcityData,
  settypeData,
  setBedroomData,
  setminPriceInputValue,
  setmaxPriceInputValue,
  cityData,
  typeData,
  BedroomData,
  minPriceInputValue,
  maxPriceInputValue,
  setsearchModelToggle,
  searchModelToggle,
  scroll,
}) {
  const [openLocation, setOpenLocation] = useState(false);
  const [openType, setOpenopenType] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openBedroom, setopenBedroom] = useState(false);
  const [HandleZipCode, setHandleZipCode] = useState(false);

  const [minPrice, setminPrice] = useState(false);
  const [maxPrice, setmaxPrice] = useState(false);

  const [zip_code, setzip_code] = useState();
  const [toggleFilter, setToggleFilter] = useState(false);
  const dispatch = useDispatch();

  // States (Moeez)
  const location = useLocation();
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [miniPrice, setMiniPrice] = useState(0);
  const [maxiPrice, setMaxiPrice] = useState(0);
  const handleSearchClick = () => {
    const data = {
      cityData: city,
      typeData: type,
      BedroomData: bedroom,
      minPriceInputValue: miniPrice,
      maxPriceInputValue: maxiPrice,
    };
    window.localStorage.setItem("search", JSON.stringify(data));
    if (location.pathname !== "/realState") {
      window.location.replace("/realState");
    } else window.location.reload();
  };

  const HandleBedroom = (value) => {
    setBedroomData(value);
    dispatch(PropertyBedroom(value));
  };

  const HandleOpenLocation = () => {
    setOpenLocation(!openLocation);
    setOpenopenType(false);
    setOpenPrice(false);
    setopenBedroom(false);
    setHandleZipCode(false);
  };
  const HandleOpenType = () => {
    setOpenopenType(!openType);
    setOpenPrice(false);
    setopenBedroom(false);
    setOpenLocation(false);
    setHandleZipCode(false);
  };

  const handleTypeClose = () => {
    dispatch(PropertyTypeFilter(false));
    settypeData("");
  };
  const HandlePriceToggle = () => {
    setOpenPrice(!openPrice);
    setopenBedroom(false);
    setOpenLocation(false);
    setOpenopenType(false);
    setHandleZipCode(false);
  };

  const HandleBedroomToggle = () => {
    setopenBedroom(!openBedroom);
    setOpenLocation(false);
    setOpenopenType(false);
    setOpenPrice(false);
    setHandleZipCode(false);
  };
  const HandleZip = () => {
    setHandleZipCode(!HandleZipCode);
    setopenBedroom(false);
    setOpenLocation(false);
    setOpenopenType(false);
    setOpenPrice(false);
  };

  const HandleZipCountry = (item) => {
    setzip_code(item.zip_code);
    const cityValue = cityToggle.filter(
      (value) => value.zip_code === item.zip_code
    );
    console.log(cityValue[0].city);
    setcityData(cityValue[0].city);
  };

  const [scrollValue, setScrollValue] = useState(0);
  const state = useSelector((state) => state.HideComponent.Hide);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setScrollValue(scrollTop);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HandleCity = (item) => {
    setcityData(item.County);
    setOpenLocation(false);
    setzip_code(item.zip_code);
    dispatch(PropertyFilter(item.County));
  };

  const HandlecloseCity = () => {
    setcityData("");
    dispatch(PropertyFilter(false));
  };
  const HandleTypeData = (item) => {
    settypeData(item.link);
    setOpenopenType(false);
    dispatch(PropertyTypeFilter(item.link));
  };

  const HandleMinPrice = () => {
    setminPrice(true);
    setmaxPrice(false);
  };

  const HandleMaxPrice = () => {
    setmaxPrice(true);
    setminPrice(false);
  };

  return (
    <div
      id="search-filter"
      className={`showRefId ${
        scroll && scrollValue > 120 ? `${state ? "" : "fixed"}` : ""
      } `}
    >
      {searchModelToggle && (
        <IconButton
          sx={{ position: "absolute", top: "10px", left: "10px" }}
          size="large"
          onClick={() => setsearchModelToggle(false)}
        >
          <CloseIcon sx={{ color: "#5081ff" }} />
        </IconButton>
      )}
      <div id="search" className="sec-search ">
        <div className="search-functioned wrap-dis-85 wrap wrap-tab-11 wrap-mob-11">
          <p className="search-logo abhaya d-mobile">
            <b>Find</b>
            <small>
              Your Ideal Home
              <br />
            </small>
            <small>&amp; Investment</small>
          </p>
          <Link href="#" className="toggle-search-filters fa fa-arrow-right" />
          <div className="search-input-wrap flex wrappping-hidden  ">
            <div
              className={`${
                openLocation ? "open" : ""
              } search-filter-input search-filter-input-city originValue cursor-pointer`}
              linktype="location"
              onClick={HandleOpenLocation}
            >
              <Image className="search-icon" src={LocationGold} />
              <div className="filter-type-dropdown-wrap">
                <div className="filter-type-dropdown">
                  <h4>City </h4>
                  <ul>
                    {cityToggle.map((item) => {
                      return (
                        <label
                          className="checkbox-container"
                          onClick={() => {
                            HandleCity(item);
                            setCity(item.County);
                          }}
                        >
                          {item.County}
                          <input
                            defaultValue={item.County}
                            type="radio"
                            name="city"
                            className="checkbox-filter"
                          />
                          <span className="checkmark" />
                        </label>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <span className="search-filter-input-title relative h-[40px]  text-mdd-center">
                <p
                  className={`absolute ${
                    cityData ? "text-sm top-1" : "text-md top-3"
                  } `}
                >
                  City
                </p>
                <p className="absolute -bottom-2">{cityData}</p>
                {cityData && (
                  <RxCross2
                    onClick={HandlecloseCity}
                    color={"#5018ff"}
                    className="absolute right-2 top-3  text-2xl font-black"
                  />
                )}
              </span>
              <i
                className={`${
                  openLocation
                    ? "fa-solid fa-angle-up"
                    : "fa-solid fa-angle-down"
                }  search-filter-input-icon pp-0`}
              />

              <div className="search-filter-input-dropdown anchor">
                {cityToggle.map((item) => {
                  return (
                    <Link
                      className="search-filter-input-dropdown-link hola"
                      link="didim"
                      title="Didim"
                    >
                      {item.County} <span className="count">1</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/*----------------------------------------------A R E A---------------------------------------------------------*/}
            {/*----------------------------------------------T Y P E S---------------------------------------------------------*/}
            <div
              onClick={HandleOpenType}
              className={` ${
                openType ? "open" : ""
              } search-filter-input originValue cursor-pointer`}
              linktype="type"
            >
              <div className="filter-type-dropdown-wrap">
                <div className="filter-type-dropdown">
                  <h4>Type</h4>
                  <ul>
                    {TypeDataToggle.map((item) => {
                      return (
                        <label
                          className="checkbox-container"
                          onClick={() => {
                            HandleTypeData(item);
                            setType(item.link);
                          }}
                        >
                          {item.link}
                          <input
                            defaultValue={item.link}
                            type="radio"
                            name="type"
                            className="checkbox-filter"
                          />
                          <span className="checkmark" />
                        </label>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Image
                className="search-icon showMb-hideDt"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/property-type.svg"
              />
              <span className="search-filter-input-title h-[40px] relative text-mdd-center">
                <p
                  className={`absolute ${
                    typeData ? "text-sm top-1" : "text-lg top-3"
                  }`}
                >
                  Type
                </p>
                <p className={"absolute -bottom-3"}>{typeData}</p>

                {typeData && (
                  <RxCross2
                    onClick={handleTypeClose}
                    color={"#5018ff"}
                    className="absolute right-1 top-3  text-2xl font-black"
                  />
                )}
              </span>
              <i
                className={`${
                  openType ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
                } search-filter-input-icon`}
              />
              <div className="search-filter-input-dropdown  anchor">
                {TypeDataToggle.map((item) => {
                  return (
                    <Link
                      className="search-filter-input-dropdown-link"
                      link="apartment"
                      to=""
                      title="Apartment"
                    >
                      {item.link}
                      <span className="count">1119</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/*---------------------------------------------------------------------------------------------------------------------------*/}
            <div
              className={`search-filter-input d-desk price-toggle OriginValue cursor-pointer ${
                openPrice ? "open" : ""
              }`}
              id="price-toggle"
            >
              <span
                className="search-filter-input-title relative"
                onClick={HandlePriceToggle}
              >
                <p
                  className={`absolute ${
                    minPriceInputValue ? "top-1 text-sm" : "top-3 text-md"
                  }`}
                >
                  Price
                </p>
                <p className={`absolute top-5`}>
                  {minPriceInputValue ? minPriceInputValue + "-" : ""}
                  {maxPriceInputValue ? maxPriceInputValue : ""}
                </p>
                {minPriceInputValue && (
                  <RxCross2
                    onClick={() => {
                      setminPriceInputValue(0);
                      setmaxPriceInputValue(0);
                    }}
                    color={"#5018ff"}
                    className="absolute right-2 top-3  text-2xl font-black"
                  />
                )}

                <div className="priceValues">
                  <i className="search-filter-input-value minPriceValue" /> -
                  <i className="search-filter-input-value maxPriceValue" />
                </div>
              </span>
              <i
                className={`${
                  openPrice ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
                } search-filter-input-icon`}
                onClick={HandlePriceToggle}
              />
              <div className="filter-type-dropdown-wrap price">
                <div className="filter-type-dropdown">
                  <h4> Price range</h4>
                  <div className="flex ">
                    <div className="minPrice">
                      <input
                        className="minPrice-input filter-input-text width-unset cursor-pointer"
                        readOnly=""
                        type="text"
                        placeholder="Min Price"
                        value={minPriceInputValue}
                        onClick={HandleMinPrice}
                      />
                      <ul>
                        {PriceData.map((item) => {
                          return (
                            <label className="checkbox-container">
                              {item.dollar}
                              <input
                                defaultValue={0.0}
                                type="radio"
                                name="minPrice"
                                value={minPriceInputValue}
                                className="checkbox-filter-minPrice hide"
                              />
                            </label>
                          );
                        })}
                      </ul>
                      <ul className={`${minPrice ? "open" : ""}`}>
                        {PriceData.map((item) => {
                          return (
                            <label
                              className="checkbox-container"
                              onClick={() => {
                                setminPriceInputValue(item.dollar);
                                setMiniPrice(item.dollar);
                              }}
                            >
                              {item.dollar}
                              <input
                                defaultValue={0.0}
                                type="radio"
                                name="minPrice"
                                className="checkbox-filter-minPrice hide"
                              />
                            </label>
                          );
                        })}
                      </ul>
                    </div>
                    <small> - </small>
                    <div className="maxPrice">
                      <input
                        className="maxPrice-input filter-input-text width-unset"
                        readOnly=""
                        type="text"
                        placeholder="Max Price"
                        value={maxPriceInputValue}
                        onClick={HandleMaxPrice}
                      />
                      <ul className={`${maxPrice ? "open" : ""}`}>
                        {PriceData.map((item) => {
                          return (
                            <label
                              className="checkbox-container"
                              onClick={() => {
                                setmaxPriceInputValue(item.dollar);
                                setMaxiPrice(item.dollar);
                              }}
                            >
                              {item.dollar}
                              <input
                                defaultValue={0.0}
                                type="radio"
                                name="maxPrice"
                                className="checkbox-filter-maxPrice hide"
                              />
                            </label>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="search-filter-input hide  minPrice"
              linktype="min_price"
            >
              <Image
                className="search-icon showMb-hideDt"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/low-price.svg"
              />
              <span
                className="search-filter-input-title text-mdd-center"
                value=""
                type="minPrice"
              >
                Min Price <i className="search-filter-input-value" />
              </span>
              <i className="fa fa-angle-down search-filter-input-icon" />
              <div className="search-filter-input-dropdown ">
                <label
                  value={0.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  0
                </label>
                <label
                  value={50000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $50k
                </label>
                <label
                  value={100000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $100k
                </label>
                <label
                  value={150000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $150k
                </label>
                <label
                  value={200000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $200k
                </label>
                <label
                  value={250000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $250k
                </label>
                <label
                  value={300000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $300k
                </label>
                <label
                  value={400000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $400k
                </label>
                <label
                  value={500000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $500k
                </label>
                <label
                  value={750000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $750k
                </label>
                <label
                  value={1000000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $1,000k
                </label>
                <label
                  value={1500000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $1,500k
                </label>
                <label
                  value={2000000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $2,000k
                </label>
                <label
                  value={2500000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $2,500k
                </label>
                <label
                  value={5000000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $5,000k
                </label>
                <label
                  value={10000000.0}
                  type="minPrice"
                  className="search-filter-input-dropdown-link searchDO minPricehidden"
                >
                  $10,000k
                </label>
              </div>
            </div>
            <div
              className="search-filter-input hide   maxPrice"
              linktype="max_price"
            >
              <Image
                className="search-icon showMb-hideDt"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/low-price.svg"
                style={{ transform: "rotate(180deg)" }}
              />
              <span
                className="search-filter-input-title text-mdd-center"
                value=""
                type="maxPrice"
              >
                Max Price <i className="search-filter-input-value" />
              </span>
              <i className="fa fa-angle-down search-filter-input-icon" />
              <div className="search-filter-input-dropdown">
                <label
                  value={50000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $50k
                </label>
                <label
                  value={100000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $100k
                </label>
                <label
                  value={150000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $150k
                </label>
                <label
                  value={200000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $200k
                </label>
                <label
                  value={250000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $250k
                </label>
                <label
                  value={300000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $300k
                </label>
                <label
                  value={400000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $400k
                </label>
                <label
                  value={500000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $500k
                </label>
                <label
                  value={750000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $750k
                </label>
                <label
                  value={1000000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $1,000k
                </label>
                <label
                  value={1500000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $1,500k
                </label>
                <label
                  value={2000000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $2,000k
                </label>
                <label
                  value={2500000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $2,500k
                </label>
                <label
                  value={5000000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $5,000k
                </label>
                <label
                  value={10000000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $10,000k
                </label>
                <label
                  value={10000000.0}
                  type="maxPrice"
                  className="search-filter-input-dropdown-link searchDO maxPricehidden"
                >
                  $10,000k+
                </label>
              </div>
            </div>
            {/*-----------------------------------------B E D R O O M S-------------------------------------------*/}
            <div
              className={`search-filter-input  bedrooms hideMobile cursor-pointer ${
                openBedroom ? "open" : ""
              }`}
              linktype="bedrooms"
              id="bedroom-toggle"
              onClick={HandleBedroomToggle}
            >
              <Image
                className="search-icon showMb-hideDt"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/bed.svg"
              />
              <span className="search-filter-input-title relative h-[40px] text-mdd-center">
                <p
                  className={`absolute ${
                    BedroomData ? "text-sm top-1" : "text-lg top-3"
                  }`}
                >
                  {" "}
                  Bedrooms
                </p>
                <p className={`absolute -bottom-3`}>{BedroomData}</p>

                {BedroomData && (
                  <RxCross2
                    onClick={() => setBedroomData("")}
                    color={"#5018ff"}
                    className="absolute right-2 top-3  text-2xl font-black"
                  />
                )}
              </span>
              <i
                className={`${
                  openBedroom
                    ? "fa-solid fa-angle-up"
                    : "fa-solid fa-angle-down"
                } search-filter-input-icon`}
              />
              <div className="filter-type-dropdown-wrap">
                <div className="filter-type-dropdown">
                  <h4> Bedrooms </h4>
                  <ul>
                    {Bedroomtoggle.map((item) => {
                      return (
                        <label
                          className="checkbox-container"
                          onClick={() => {
                            HandleBedroom(item.link);
                            setBedroom(item.link);
                          }}
                        >
                          {item.link}
                          <input
                            defaultValue={0}
                            type="radio"
                            name="city"
                            className="checkbox-filter"
                          />
                          <span className="checkmark" />
                        </label>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="search-filter-input-dropdown anchor">
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={0}
                >
                  0 <span className="count">136</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={1}
                >
                  1 <span className="count">260</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={2}
                >
                  2 <span className="count">480</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={3}
                >
                  3 <span className="count">525</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={4}
                >
                  4 <span className="count">506</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={5}
                >
                  5 <span className="count">235</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link="5+  "
                >
                  5+ <span className="count">216</span>
                </Link>
              </div>
            </div>
            {/*----------------------------------------------------T A G S------------------------------------------------------*/}
            <div
              className="search-filter-input hide tags  originValue"
              linktype="tags"
            >
              <Image
                className="search-icon showMb-hideDt"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/tag-search.svg"
              />
              <div className="filter-type-dropdown-wrap">
                <div className="filter-type-dropdown">
                  <h4>Tags </h4>
                  <ul>
                    <label className="checkbox-container">
                      Bargain
                      <input
                        defaultValue="bargain"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Beachfront
                      <input
                        defaultValue="beachfront"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Exclusive
                      <input
                        defaultValue="exclusive"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Golf
                      <input
                        defaultValue="golf"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Holiday homes
                      <input
                        defaultValue="holiday-homes-for-sale"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Investment
                      <input
                        defaultValue="investment"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Luxury
                      <input
                        defaultValue="luxury"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Marina
                      <input
                        defaultValue="marina"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Off plan
                      <input
                        defaultValue="off-plan"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Resale
                      <input
                        defaultValue="resale"
                        type="radio"
                        name="tag"
                        className="checkbox-filter"
                      />
                      <span className="checkmark" />
                    </label>
                  </ul>
                </div>
              </div>
              <span className="search-filter-input-title text-mdd-center">
                Tags <i className="search-filter-input-value" />
              </span>
              <i className="fa fa-angle-down search-filter-input-icon" />
              <div className="search-filter-input-dropdown anchor">
                <Link
                  className="search-filter-input-dropdown-link"
                  link="bargain"
                  title="Bargain"
                >
                  Bargain <span className="count">23</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="beachfront"
                  title="Beachfront"
                >
                  Beachfront <span className="count">78</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="exclusive"
                  title="Exclusive"
                >
                  Exclusive <span className="count">30</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="golf"
                  title="Golf"
                >
                  Golf <span className="count">1</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="holiday-homes-for-sale"
                  title="Holiday homes"
                >
                  Holiday homes <span className="count">10</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="investment"
                  title="Investment"
                >
                  Investment <span className="count">87</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="luxury"
                  title="Luxury"
                >
                  Luxury <span className="count">147</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="marina"
                  title="Marina"
                >
                  Marina <span className="count">3</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="off-plan"
                  title="Off plan"
                >
                  Off plan <span className="count">7</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  link="resale"
                  title="Resale"
                >
                  Resale <span className="count">20</span>
                </Link>
              </div>
            </div>
            <div
              className={`search-filter-input  bedrooms hideMobile cursor-pointer ${
                HandleZipCode ? "open" : ""
              }`}
              linktype="bedrooms"
              id="bedroom-toggle"
              onClick={HandleZip}
            >
              <Image
                className="search-icon showMb-hideDt"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/bed.svg"
              />
              <span className="search-filter-input-title relative h-[40px] text-mdd-center">
                <p
                  className={`absolute ${
                    zip_code ? "text-sm top-1" : "text-lg top-3"
                  }`}
                >
                  {" "}
                  Zip Code
                </p>
                <p className={`absolute -bottom-3`}>{zip_code}</p>

                {zip_code && (
                  <RxCross2
                    onClick={() => setzip_code("")}
                    color={"#5018ff"}
                    className="absolute right-2 top-3  text-2xl font-black"
                  />
                )}
              </span>
              <i
                className={`${
                  openBedroom
                    ? "fa-solid fa-angle-up"
                    : "fa-solid fa-angle-down"
                } search-filter-input-icon`}
              />
              <div className="filter-type-dropdown-wrap h-[300px] overflow-y-auto">
                <div className="filter-type-dropdown">
                  <h4> Zip Code </h4>
                  <ul>
                    {cityToggle.map((item) => {
                      return (
                        <label
                          className="checkbox-container"
                          onClick={() => HandleZipCountry(item)}
                        >
                          {item.zip_code}
                          <input
                            defaultValue={0}
                            type="radio"
                            name="city"
                            className="checkbox-filter"
                          />
                          <span className="checkmark" />
                        </label>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="search-filter-input-dropdown anchor">
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={0}
                >
                  0 <span className="count">136</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={1}
                >
                  1 <span className="count">260</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={2}
                >
                  2 <span className="count">480</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={3}
                >
                  3 <span className="count">525</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={4}
                >
                  4 <span className="count">506</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link={5}
                >
                  5 <span className="count">235</span>
                </Link>
                <Link
                  className="search-filter-input-dropdown-link"
                  rel="nofollow"
                  dir="ltr"
                  link="5+  "
                >
                  5+ <span className="count">216</span>
                </Link>
              </div>
            </div>
            <Link className="searchMore more-style">More</Link>
            <button
              id="createSearchData"
              type="button"
              className="primary search-filter-input  hide text-[#5081ff]"
            >
              <i className="fa fa-search text-[#5081ff]" aria-hidden="true" />
              Search
            </button>
          </div>
          <div className="search-filter-buttons flex listing">
            {searchModelToggle ? (
              <StyledButton
                title={"Search"}
                onClick={() => handleSearchClick()}
              />
            ) : (
              // <button
              //   id="createSearchData"
              //   style={{ lineHeight: "1rem !important" }}
              //   type="button"
              //   className="primary btn  text-[#5081ff]"
              //   onClick={() => handleSearchClick()}
              // >
              //   SEARCH
              // </button>
              <StyledButton
                title={"Search"}
                // onClick={() => handleSearchClick()}
              />

              // <button
              //   id="createSearchData"
              //   style={{ lineHeight: "1rem !important" }}
              //   type="button"
              //   className="primary btn  text-[#5081ff]"
              // >
              //   SEARCH
              // </button>
            )}
            <span className="or-seperator">OR</span>
            <Link
              type="button"
              className="secondary btn"
              id="inline"
              title="Get Property <b>ALERTS</b>"
            >
              Get Property <b>ALERTS</b>
            </Link>
            <div id="searchh-iconss" className="d-mobile">
              <img
                src="https://www.propertyturkey.com/front/image/images2019/Icons/add-icon.png"
                alt=""
                className="plusicon"
              />
              <img
                src="https://www.propertyturkey.com/front/image/images2019/Icons/horizontal-line.svg"
                className="minusicon hide"
                width={25}
                height={25}
                alt=""
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="priceRange" id="priceRange" />
        <div className="default-search">
          <h2 className="search-filter-title">
            <strong>Find</strong> Your Ideal Home
            <small> &amp; Investment</small>
          </h2>
          <Link className="toggle-search-filters fa fa-arrow-right" />
          <div className="search-filter-input">
            <span className="search-filter-input-title">
              City <i className="search-filter-input-value" />
            </span>
            <i className="fa fa-angle-down search-filter-input-icon" />
            <div className="search-filter-input-dropdown">
              {cityToggle.map((item) => {
                return (
                  <label
                    value="istanbul"
                    type="city_slug"
                    className="search-filter-input-dropdown-link searchDO"
                  >
                    {item.County}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="search-filter-input">
            <span className="search-filter-input-title">
              Type <i className="search-filter-input-value" />
            </span>
            <i className="fa fa-angle-down search-filter-input-icon" />
            <div className="search-filter-input-dropdown">
              {TypeDataToggle.map((item) => {
                return (
                  <label
                    value="apartment"
                    type="type_slug"
                    className="search-filter-input-dropdown-link searchDO"
                  >
                    {item.link}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="search-filter-input minPrice">
            <span
              className="search-filter-input-title"
              value=""
              type="minPrice"
            >
              Min Price <i className="search-filter-input-value" />
            </span>
            <i className="fa fa-angle-down search-filter-input-icon" />
            <div className="search-filter-input-dropdown">
              <label
                value={0.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                0
              </label>
              <label
                value={50000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $50k
              </label>
              <label
                value={100000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $100k
              </label>
              <label
                value={150000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $150k
              </label>
              <label
                value={200000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $200k
              </label>
              <label
                value={250000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $250k
              </label>
              <label
                value={300000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $300k
              </label>
              <label
                value={400000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $400k
              </label>
              <label
                value={500000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $500k
              </label>
              <label
                value={750000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $750k
              </label>
              <label
                value={1000000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $1,000k
              </label>
              <label
                value={1500000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $1,500k
              </label>
              <label
                value={2000000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $2,000k
              </label>
              <label
                value={2500000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $2,500k
              </label>
              <label
                value={5000000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $5,000k
              </label>
              <label
                value={10000000.0}
                type="minPrice"
                className="search-filter-input-dropdown-link searchDO"
              >
                $10,000k
              </label>
            </div>
          </div>
          <div className="search-filter-input maxPrice">
            <span
              className="search-filter-input-title"
              value=""
              type="maxPrice"
            >
              Max Price <i className="search-filter-input-value" />
            </span>
            <i className="fa fa-angle-down search-filter-input-icon" />
            <div className="search-filter-input-dropdown">
              {PriceData.map((item) => {
                return (
                  <label
                    value={50000.0}
                    type="maxPrice"
                    className="search-filter-input-dropdown-link searchDO"
                  >
                    {item.dollar}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="search-filter-input norrow bedrooms">
            <span className="search-filter-input-title">
              Bedrooms <i className="search-filter-input-value" />
            </span>
            <i className="fa fa-angle-down search-filter-input-icon" />
            <div className="search-filter-input-dropdown">
              {Bedroomtoggle.map((item) => {
                return (
                  <label
                    value={0}
                    type="bedrooms"
                    className="search-filter-input-dropdown-link searchDO"
                  >
                    {item.link}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="search-filter-buttons">
            {searchModelToggle && (
              <>
                <Link
                  id="createSearchData"
                  className="bg-pt-dark-red createSearchData"
                  type="button"
                  onClick={() => handleSearchClick()}
                  style={{ padding: "5px 0" }}
                >
                  <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-5">
                    SEARCH
                  </span>
                </Link>
                <span className="or-seperator">OR</span>
              </>
            )}
            <Link
              type="button"
              className="secondary btn"
              id="inline"
              title="Get Property <b>ALERTS</b>"
            >
              Get Property <b>ALERTS</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
