import React from "react";
import "./Index.css";
import { Box, Button, Typography } from "@mui/material";
import ConnecPt from "./ConnecPt";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../ReUseAbleComponent/Image";
import { AiOutlineSearch } from "react-icons/ai";
import { FcFactoryBreakdown } from "react-icons/fc";
import { GiCargoShip, GiSinkingShip } from "react-icons/gi";
import { FaHelicopter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDown } from "react-icons/ai";
import { HomeBanner } from "../../Data/HomeBannerData";
import FethiyaIcon from "../../assets/fethiye_icon.svg";
import SearchArrow from "../../assets/search_arrow_red.svg";
import IstanbulIcon from "../../assets/istanbul_icon.svg";
import BodrumIcon from "../../assets/bodrum_icon.svg";
import AnatalyaIcon from "../../assets/antalya_icon.svg";
import BursaIcon from "../../assets/bursa_icon.svg";
import {
  cityToggle,
  TypeDataToggle,
  Bedroomtoggle,
  PriceData,
} from "../../Data/CityToggle";
import { FiChevronDown } from "react-icons/fi";
import NavTab from "../../ReUseAbleComponent/NavTab";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PropertyFilter } from "../../Redux/Action/PropertyFilter";
import ColumnBox from "../../ReUseAbleComponent/ColumnBox";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

export default function HeroSection() {
  const [locationtoggle, setLocationToggle] = React.useState(true);
  const [Typetogglebtn, setTypetoggle] = React.useState(true);
  const [PriceToggle, setPriceToggle] = React.useState(true);
  const [BedRom, setBedRom] = React.useState(true);
  const [HandleZip, setHandleZip] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(true);
  const [tabOneActive, settabOneActive] = React.useState(false);
  const [CityData, setCityData] = React.useState();
  const [index, setIndex] = React.useState(0);
  const [ZipCode, SetZipCode] = React.useState();
  const [locationToggleName, setlocationToggleName] =
    React.useState("Location");
  const [cityKey, setcityKey] = React.useState("Browse");
  const [TypeData, setTypeData] = React.useState();
  const [BedroomData, seBedroomData] = React.useState();
  const [minimunPrice, seminimunPrice] = React.useState(false);
  const [maximumPrice, setmaximumPrice] = React.useState(false);
  const dispatch = useDispatch();

  const [minimumPriceValue, setmimumPriceValue] = React.useState();
  const [maximumPriceValue, setmaximumPriceValue] = React.useState();

  const [HandleZipInput, setHandleZipInput] = useState();
  const [ZipCodeCountry, setZipCodeCountry] = useState();

  // States (Moeez)
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [miniPrice, setMiniPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleSearchClick = () => {
    const data = {
      cityData: city,
      typeData: type,
      BedroomData: bedroom,
      minPriceInputValue: miniPrice,
      maxPriceInputValue: maxPrice,
    };
    window.localStorage.setItem("search", JSON.stringify(data));
    window.location.replace("/realState");
  };

  const navigate = useNavigate();

  const states = useSelector((state) => state.AboutTurkey.Nav);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const LocationToggle = () => {
    setLocationToggle(!locationtoggle);
    setTypetoggle(true);
    setHandleZip(true);
    setPriceToggle(true);
    setBedRom(true);
  };
  const TypeToggle = () => {
    setTypetoggle(!Typetogglebtn);
    setHandleZip(true);
    setLocationToggle(true);
    setPriceToggle(true);
    setBedRom(true);
  };

  const PricesToggle = () => {
    setPriceToggle(!PriceToggle);
    setTypetoggle(true);
    setLocationToggle(true);
    setBedRom(true);
  };

  const BedToggle = () => {
    setBedRom(!BedRom);
    setHandleZip(true);
    setPriceToggle(true);
    setTypetoggle(true);
    setLocationToggle(true);
  };

  const HandleZipCode = () => {
    setHandleZip(!HandleZip);
    setBedRom(true);
    setPriceToggle(true);
    setTypetoggle(true);
    setLocationToggle(true);
  };

  const IstanbulInfo = () => {
    setIndex(1);
    setcityKey("California");
    setlocationToggleName("Area");

    const cities = cityToggle.filter((item) => item.key === cityKey);
    console.log(cities);
  };

  const BodrumInfo = () => {
    setcityKey("California");
    setIndex(2);
    setlocationToggleName("Area");
  };
  const AnatalyaInfo = () => {
    setcityKey("California");
    setIndex(3);
    setlocationToggleName("Area");
  };

  const BursaInfo = () => {
    setIndex(4);
    setcityKey("California");
    setlocationToggleName("Area");
  };
  const FethiyaInfo = () => {
    setIndex(5);
    setcityKey("California");
    setlocationToggleName("Area");
  };

  const BrowseAll = () => {
    setcityKey("California");
    setlocationToggleName("location");
    setIndex(0);
  };

  const ZipCodehandler = (item) => {
    setCityData(item.city);
    setZipCodeCountry("");
    setHandleZipInput(item.zip_code);
    SetZipCode(item.zip_code);
    setLocationToggle(true);

    dispatch(PropertyFilter(item.County));
  };

  const TypeDataHide = (item) => {
    setTypeData(item.link);
  };

  const BedroomToggle = (item) => {
    seBedroomData(item.link);
    setBedRom(true);
  };

  const setMinPrice = () => {
    seminimunPrice(true);
  };

  const HandleMaxPrice = () => {
    setmaximumPrice(true);
  };

  const SetMinmimumValue = (item) => {
    setmimumPriceValue(item.dollar);
  };

  const HandleMaximun = (item) => {
    setmaximumPriceValue(item.dollar);
  };

  const handleValue = (item, index) => {
    setHandleZipInput(item.zip_code);
    const cityValue = cityToggle.filter(
      (value) => value.zip_code === item.zip_code
    );
    console.log(cityValue[0].County);
    setCityData(cityValue[0].County);
  };

  // Saving in LocalStorage
  const handleLocalStorage = (data) => {
    window.localStorage.setItem("search", JSON.stringify(data));
    window.location.replace('/realState')
  };

  return (
    <section
      className={`bg-pt-off-white ${states ? "-z-50 absolute" : "z-50 "} `}
    >
      <input type="hidden" id="currentCurrency" />
      <Box
        className="tab-content d-block position-relative abhaya"
        id="myTabContent"
        style={{
          backgroundImage: `url(${HomeBanner[index].img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          className={`tab-pane home-tab fade ${
            tabOneActive ? "" : "show active"
          }`}
          id="tab-1"
        >
          <Box className="d-block d-lg-flex flex-column align-items-center gap-3">
            <Box className="card container-pt bg-transparent border-0">
              <Image
                className="of-cover tab-background d-md-none d-block"
                src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-mobile-1.jpg"
              />
              <NavTab>
                <li className="nav-item">
                  <Button
                    className="nav-link px-lg-4 px-2 rounded-0 active"
                    data-target="#tab-1"
                    type="button"
                    onClick={BrowseAll}
                  >
                    <AiOutlineSearch />
                    <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                      browse
                    </span>
                    <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                      All
                    </span>
                  </Button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link px-lg-4 px-2 rounded-0"
                    data-target="#tab-2"
                    type="button"
                    onClick={IstanbulInfo}
                  >
                    <Image src={IstanbulIcon} className="text-[#fff]" />
                    <span className="ps-md-1 ps-0 fs-6 fw-bold text-uppercase">
                      California
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <Button
                    className="nav-link px-lg-4 px-2 rounded-0"
                    data-target="#tab-3"
                    type="button"
                    onClick={BodrumInfo}
                  >
                    <GiCargoShip />
                    <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                      San Fransisco
                    </span>
                  </Button>
                </li>
                {/* <li className="nav-item mt-0">
                  <button
                    className="nav-link px-lg-4 px-2 rounded-0"
                    data-target="#tab-4"
                    type="button"
                    onClick={AnatalyaInfo}
                  >
                    <FaHelicopter />
                    <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                      Arizona
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <Button
                    className="nav-link px-lg-4 px-2 rounded-0"
                    data-target="#tab-5"
                    type="button"
                    onClick={BursaInfo}
                  >
                    <GiCargoShip />
                    <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                      Florida
                    </span>
                  </Button>
                </li>
                <li className="nav-item me-0">
                  <button
                    className="nav-link px-lg-4 px-2 rounded-0"
                    data-target="#tab-6"
                    type="button"
                    onClick={FethiyaInfo}
                  >
                    <img
                      src={FethiyaIcon}
                      width={40}
                      height={40}
                      loading="lazy"
                      alt="fethiye icon"
                    />
                    <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                      Georgia
                    </span>
                  </button>
                </li> */}
              </NavTab>
              <Box
                className="w-100 bg-pt-off-white p-4 showRefId"
                id="search-filter"
              >
                <Link className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2">
                  <Box className="col-auto">
                    <AiOutlineSearch />
                  </Box>
                  <Box className="col text-center">
                    <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                      browse all properties
                    </span>
                  </Box>
                  <Box className="col-auto">
                    <Image
                      src={SearchArrow}
                      width={10}
                      height="32.5"
                      loading="lazy"
                      alt="browse arrow"
                      style={{ transform: "unset" }}
                    />
                  </Box>
                </Link>
                <p className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                  <Link className="text-pt-dark-red fs-6">
                    <em className="text-uppercase">
                      {HomeBanner[index].title}
                    </em>
                    <em className="fa fa-arrow-right ms-2" />
                  </Link>
                </p>
                <p className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                  <span className="text-pt-dark-red fs-6">
                    <em className="text-uppercase">
                      or filter all properties below
                    </em>
                    <em className="fa fa-arrow-down ms-2" />
                  </span>
                </p>
                <Box className="row pb-3 responsive-links">
                  {HomeBanner[index].links.map((item) => {
                    return (
                      <Box className="col-md-4 mb-1">
                        <Link
                          className="text-pt-dark-red fs-6"
                          onClick={() => handleLocalStorage(item?.data)}
                        >
                          <span>{item.title}</span>
                          <em className="fa fa-arrow-right ms-2" />
                        </Link>
                      </Box>
                    );
                  })}
                </Box>

                <Box className="row" id="search">
                  {/*----------------- L O C A T I O N ------------------*/}
                  <Box
                    className="col-lg-2 col-md-4 col-12 mb-4"
                    onClick={LocationToggle}
                  >
                    <Box
                      className={`${
                        locationtoggle ? "hasValue" : "open"
                      } search-filter-input search-tab-input search-location-input originValue`}
                      linktype="location"
                    >
                      <Box className="filter-type-dropdown-wrap max-h-[400px] overflow-y-auto">
                        <Box className="filter-type-dropdown">
                          <p>{locationToggleName}</p>
                          <ul>
                            {cityToggle.map((item) => {
                              return (
                                <label
                                  className="checkbox-container"
                                  onChange={() => {
                                    ZipCodehandler(item);
                                    setCity(item.County);
                                  }}
                                >
                                  <p> {item.County}</p>
                                  <input
                                    defaultValue="istanbul"
                                    type="radio"
                                    name="city"
                                    className="checkbox-filter"
                                  />
                                  <span className="checkmark" />
                                </label>
                              );
                            })}
                          </ul>
                          <input
                            type="hidden"
                            name="city_slug"
                            id="#city_slug"
                          />
                        </Box>
                      </Box>
                      <span className="search-filter-input-title relative h-[40px]  search-tab-input-title bold py-3 text-center px-0">
                        <p
                          className={`block mb-0 font-black absolute ${
                            CityData ? "text-sm top-1" : "text-lg top-3"
                          }`}
                        >
                          {locationToggleName}
                        </p>

                        <p
                          className={`block mb-0 font-black absolute bottom-0 text-sm`}
                        >
                          {CityData}
                        </p>
                      </span>
                      <Box
                        className="search-filter-input-title ml-[22px] relative"
                        style={{ width: "fit-content !important" }}
                      >
                        <img
                          src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                          width={20}
                          height={20}
                          className="dropdown-arrow absolute -top-1 -right-0"
                          alt="dropdown arrow"
                          loading="lazy"
                        />
                      </Box>
                      <Box className="search-filter-input-dropdown label max-h-[400px] overflow-y-auto">
                        {cityToggle.map((item) => {
                          return (
                            <label
                              value="istanbul"
                              type="city_slug"
                              className="search-filter-input-dropdown-link searchDO city-mob-search"
                            >
                              {item.city}
                            </label>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>

                  {/*------------------- T Y P E S ---------------------*/}
                  <ColumnBox
                    onClick={TypeToggle}
                    className="col-lg-2 col-md-4 col-12 mb-4"
                  >
                    <div
                      className={`search-filter-input search-tab-input originValue ${
                        Typetogglebtn ? "" : "open"
                      }`}
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
                                    TypeDataHide(item);
                                    setType(item.link);
                                  }}
                                >
                                  {item.link}
                                  <input
                                    defaultValue="apartment"
                                    type="radio"
                                    name="type"
                                    className="checkbox-filter"
                                  />
                                  <span className="checkmark" />
                                </label>
                              );
                            })}
                          </ul>
                          <input
                            type="hidden"
                            name="type_slug"
                            id="#type_slug"
                          />
                        </div>
                      </div>
                      <span className="search-filter-input-title relative text-center h-[40px] search-tab-input-title fs-5 fw-bold px-0">
                        <p
                          className={`absolute top-3 ${
                            TypeData ? "text-sm" : "text-md"
                          }`}
                        >
                          Type
                        </p>
                        <p className="absolute -bottom-4 text-sm">{TypeData}</p>
                      </span>
                      <div
                        className="search-filter-input-title relative"
                        style={{ width: "fit-content !important" }}
                      >
                        <img
                          src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                          width={20}
                          height={20}
                          className="dropdown-arrow absolute -top-1 -right-0"
                          alt="dropdown arrow"
                          loading="lazy"
                        />
                      </div>
                      <div className="search-filter-input-dropdown  label">
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
                  </ColumnBox>

                  {/*------------------- P R I C E S ---------------------*/}
                  <ColumnBox
                    className="col-lg-2 col-md-4 col-12 mb-4"
                    onClick={PricesToggle}
                  >
                    <Box
                      className={`${
                        PriceToggle ? "" : "open"
                      } h-[45px] py-3 originValue search-filter-input search-tab-input d-lg-flex price-toggle`}
                      id="price-toggle"
                    >
                      <span className="search-filter-input-title relative search-tab-input-title fs-5 fw-bold px-0">
                        <p
                          className={`absolute ${
                            minimumPriceValue || maximumPriceValue
                              ? "text-sm -top-3 font-bold"
                              : "text-xl -top-3 font-bold"
                          } `}
                        >
                          Price
                        </p>
                        <p className="absolute text-sm">
                          {minimumPriceValue}-{maximumPriceValue}
                        </p>

                        <Box className="priceValues">
                          <i className="search-filter-input-value minPriceValue" />
                          -{" "}
                          <i className="search-filter-input-value maxPriceValue" />
                        </Box>
                        <input
                          type="hidden"
                          name="priceRange"
                          id="priceRange"
                        />
                      </span>
                      <Box
                        className="search-filter-input-title content__Alignment relative"
                        style={{ width: "fit-content !important" }}
                      >
                        <img
                          src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                          width={20}
                          height={20}
                          className="dropdown-arrow absolute -right-2 -top-2"
                          alt="dropdown arrow"
                          loading="lazy"
                        />
                      </Box>
                      <Box
                        className="filter-type-dropdown-wrap price"
                        style={{ display: "block !important" }}
                      >
                        <Box className="filter-type-dropdown">
                          <h4> Price range</h4>
                          <Box>
                            <Box className="minPrice">
                              <input
                                className="minPrice-input filter-input-text width-unset"
                                value={minimumPriceValue}
                                type="text"
                                placeholder="Min Price"
                                defaultValue=""
                                onClick={setMinPrice}
                              />
                              <ul className={`${minimunPrice ? "open" : ""}`}>
                                {PriceData.map((item) => {
                                  return (
                                    <label
                                      className="checkbox-container"
                                      onClick={() => {
                                        SetMinmimumValue(item);
                                        setMiniPrice(item.dollar);
                                      }}
                                    >
                                      {" "}
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
                            </Box>
                            <small> - </small>
                            <Box className="maxPrice">
                              <input
                                className="maxPrice-input filter-input-text width-unset"
                                value={maximumPriceValue}
                                type="text"
                                placeholder="Max Price"
                                onClick={HandleMaxPrice}
                              />
                              <ul
                                className={`maxPriceValues ${
                                  maximumPrice ? "open" : ""
                                }`}
                              >
                                {PriceData.map((item) => {
                                  return (
                                    <label
                                      className="checkbox-container"
                                      onClick={() => {
                                        HandleMaximun(item);
                                        setMaxPrice(item.dollar);
                                      }}
                                    >
                                      {item.dollar}
                                      <input
                                        defaultValue={50000.0}
                                        type="radio"
                                        name="maxPrice"
                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                      />
                                    </label>
                                  );
                                })}
                              </ul>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      className="search-filter-input search-tab-input hide minPrice"
                      linktype="min_price"
                    >
                      <span
                        className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                        value=""
                        type="minPrice"
                      >
                        Min Price <i className="search-filter-input-value"></i>
                      </span>
                      <Box
                        className="search-filter-input-title"
                        style={{ width: "fit-content !important" }}
                      >
                        <img
                          src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                          width={20}
                          height={20}
                          className="dropdown-arrow"
                          alt="dropdown arrow"
                          loading="lazy"
                        />
                      </Box>
                      <Box className="search-filter-input-dropdown ">
                        <label
                          value={0.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          0
                        </label>
                        <label
                          value={50000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $50k
                        </label>
                        <label
                          value={100000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $100k
                        </label>
                        <label
                          value={150000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $150k
                        </label>
                        <label
                          value={200000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $200k
                        </label>
                        <label
                          value={250000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $250k
                        </label>
                        <label
                          value={300000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $300k
                        </label>
                        <label
                          value={400000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $400k
                        </label>
                        <label
                          value={500000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $500k
                        </label>
                        <label
                          value={750000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $750k
                        </label>
                        <label
                          value={1000000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $1,000k
                        </label>
                        <label
                          value={1500000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $1,500k
                        </label>
                        <label
                          value={2000000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $2,000k
                        </label>
                        <label
                          value={2500000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $2,500k
                        </label>
                        <label
                          value={5000000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $5,000k
                        </label>
                        <label
                          value={10000000.0}
                          type="minPrice"
                          className="search-filter-input-dropdown-link searchDO minPricehidden"
                        >
                          {" "}
                          $10,000k
                        </label>
                      </Box>
                    </Box>
                    <Box
                      className="search-filter-input search-tab-input hide maxPrice"
                      linktype="max_price"
                    >
                      <span
                        className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                        value=""
                        type="maxPrice"
                      >
                        Max Price <i className="search-filter-input-value" />
                      </span>
                      <Box
                        className="search-filter-input-title"
                        style={{ width: "fit-content !important" }}
                      >
                        <img
                          src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                          width={20}
                          height={20}
                          className="dropdown-arrow"
                          alt="dropdown arrow"
                          loading="lazy"
                        />
                      </Box>
                      <Box className="search-filter-input-dropdown">
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
                      </Box>
                    </Box>
                  </ColumnBox>
                  {/*----------------- B E D R O O M S ------------------*/}
                  <ColumnBox
                    onClick={BedToggle}
                    className="col-lg-2 col-md-4 col-12 mb-4"
                  >
                    <Box
                      className={`${
                        BedRom ? "" : "open"
                      } h-[45px] search-filter-input search-tab-input bedrooms`}
                      linktype="bedrooms"
                      id="bedroom-toggle"
                    >
                      <span className="search-filter-input-title relative text-center h-[40px] search-tab-input-title fs-5 fw-bold px-0">
                        <p
                          className={`absolute top-3 ${
                            BedroomData ? "text-sm" : "text-md"
                          }`}
                        >
                          Bedroom
                        </p>
                        <p className="absolute -bottom-4 text-sm">
                          {BedroomData}
                        </p>
                      </span>
                      <Box
                        className="search-filter-input-title relative"
                        style={{ width: "fit-content !important" }}
                      >
                        <img
                          src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                          width={20}
                          height={20}
                          className="dropdown-arrow absolute  -top-1 -right-0"
                          alt="dropdown arrow"
                          loading="lazy"
                        />
                      </Box>
                      <Box className="filter-type-dropdown-wrap">
                        <Box className="filter-type-dropdown">
                          <h4> {bedroom || "Bedrooms"} </h4>

                          <ul>
                            {Bedroomtoggle.map((item) => {
                              return (
                                <label className="checkbox-container">
                                  {item.link}
                                  <input
                                    type="radio"
                                    name="city"
                                    className="checkbox-filter"
                                    onClick={() => {
                                      BedroomToggle(item);
                                      setBedroom(item.link);
                                    }}
                                  />
                                  <span className="checkmark" />
                                </label>
                              );
                            })}
                          </ul>
                          <input type="hidden" name="bedrooms" id="#bedrooms" />
                        </Box>
                      </Box>
                      <Box className="search-filter-input-dropdown label">
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
                      </Box>
                    </Box>
                  </ColumnBox>
                  {/*--------------------- T A G S ----------------------*/}
                  {/*--------------------- R E F E R E C E ----------------------*/}
                  <Box
                    onClick={HandleZipCode}
                    className="col-lg-2 col-md-4 col-12 mb-4 cursor-pointer"
                  >
                    <Box
                      className={`${
                        HandleZip ? "" : "open"
                      } h-[45px] search-filter-input search-tab-input bedrooms`}
                      linktype="bedrooms"
                      id="bedroom-toggle"
                    >
                      <span className="search-filter-input-title relative text-center h-[40px] search-tab-input-title fs-5 fw-bold px-0">
                        <p
                          className={`absolute ${
                            HandleZipInput ? "top-1 text-sm" : "top-3 text-lg"
                          }`}
                        >
                          Zip Code
                        </p>
                        <p className={`absolute top-5 text-md`}>
                          {HandleZipInput}
                        </p>
                      </span>
                      <Box
                        className="search-filter-input-title relative"
                        style={{ width: "fit-content !important" }}
                      >
                        <img
                          src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                          width={20}
                          height={20}
                          className="dropdown-arrow absolute  -top-1 -right-0"
                          alt="dropdown arrow"
                          loading="lazy"
                        />
                      </Box>
                      <Box className="filter-type-dropdown-wrap">
                        <Box className="filter-type-dropdown">
                          <h4> Zip Code </h4>

                          <ul className="h-[200px] overflow-y-auto">
                            {cityToggle.map((item) => {
                              return (
                                <label
                                  className="checkbox-container"
                                  onClick={() => handleValue(item)}
                                >
                                  {item.zip_code}
                                  <input
                                    type="radio"
                                    name="city"
                                    className="checkbox-filter"
                                    onClick={() => BedroomToggle(item)}
                                  />
                                  <span className="checkmark" />
                                </label>
                              );
                            })}
                          </ul>
                          <input type="hidden" name="bedrooms" id="#bedrooms" />
                        </Box>
                      </Box>
                      <Box className="search-filter-input-dropdown label">
                        {cityToggle.map((item, index) => {
                          return (
                            <label
                              value={0}
                              type="bedrooms"
                              className="search-filter-input-dropdown-link searchDO"
                              onClick={() => handleValue(item, index)}
                            >
                              {item.zip_code}
                            </label>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-lg-2 col-md-4 col-12 mb-4">
                    <StyledButton title={'Search'} onClick={() => handleSearchClick()}  />
                    {/* <Link
                      id="createSearchData"
                      className="bg-pt-dark-red createSearchData"
                      type="button"
                      onClick={() => handleSearchClick()}
                      style={{ padding: "5px 0" }}
                    >
                      <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-5">
                        SEARCH H
                      </span>
                      <img
                        src={SearchArrow}
                        alt="search arrow"
                        className="contact-arrow col-auto pe-md-0 ps-0"
                        width={91}
                        height={150}
                        loading="lazy"
                      />
                    </Link> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* CONNECT WITH PT */}
      <ConnecPt />
    </section>
  );
}
