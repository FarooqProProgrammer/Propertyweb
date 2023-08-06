import React from 'react'
import "./Listing.css"
import { Link } from 'react-router-dom';
import Image from '../../ReUseAbleComponent/Image';
import { Box, Typography } from '@mui/material';
import SearchArrowBlue from "../../assets/search_arrow_red.svg"

export default function Listing() {
    return (
            <div className="w-100 bg-pt-off-white p-4 showRefId" id="search-filter">
                <Link

                    className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2"
                >
                    <div className="col-auto">
                        <Image
                            src={SearchArrowBlue}
                            width={32}
                            height={32}
                            loading="lazy"
                            alt="bodrum icon"
                        />
                    </div>
                    <Box className="col text-center">
                        <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                            search all bodrum
                        </span>
                    </Box>
                    <div className="col-auto">
                        <Image
                            src={SearchArrowBlue}
                            width={10}
                            height="32.5"
                            loading="lazy"
                            alt="browse arrow"
                            style={{ transform: "unset" }}
                        />
                    </div>
                </Link>
                <Typography varient="p" className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                    <Link

                        className="text-pt-dark-red fs-6"
                    >
                        <em className="text-uppercase">
                            Click to browse all listings within bodrum
                        </em>
                        <em className="fa fa-arrow-right ms-2" />
                    </Link>
                </Typography>
                <Typography varient="p" className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                    <span className="text-pt-dark-red fs-6">
                        <em className="text-uppercase">or filter bodrum properties below</em>
                        <em className="fa fa-arrow-down ms-2" />
                    </span>
                </Typography>
                <div className="row pb-3 responsive-links">
                    <div className="col-md-4 mb-1">
                        <Link 

                            className="text-pt-dark-red fs-6"
                        >
                            <span>Villas in Bodrum Under $750,000</span>
                            <em className="fa fa-arrow-right ms-2" />
                        </Link>
                    </div>
                    <div className="col-md-4 mb-1">
                        <Link 

                            className="text-pt-dark-red fs-6"
                        >
                            <span>Beachfront Homes in Bodrum</span>
                            <em className="fa fa-arrow-right ms-2" />
                        </Link>
                    </div>
                    <div className="col-md-4 mb-1">
                        <Link 

                            className="text-pt-dark-red fs-6"
                        >
                            <span>Luxury Villas for Sale in Bodrum</span>
                            <em className="fa fa-arrow-right ms-2" />
                        </Link>
                    </div>
                    <div className="col-md-4 mb-1">
                        <Link 

                            className="text-pt-dark-red fs-6"
                        >
                            <span>Villas in Yalikavak for Sale</span>
                            <em className="fa fa-arrow-right ms-2" />
                        </Link>
                    </div>
                    <div className="col-md-4 mb-1">
                        <Link 

                            className="text-pt-dark-red fs-6"
                        >
                            <span>4 Bedroom Villas in Bodrum</span>
                            <em className="fa fa-arrow-right ms-2" />
                        </Link>
                    </div>
                    <div className="col-md-4 mb-1">
                        <Link 

                            className="text-pt-dark-red fs-6"
                        >
                            <span>Villas in Gumusluk for Sale</span>
                            <em className="fa fa-arrow-right ms-2" />
                        </Link>
                    </div>
                </div>
                <div className="row" id="search">
                    {/*----------------- L O C A T I O N ------------------*/}
                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                        <div
                            className="search-filter-input search-tab-input search-location-input originValue"
                            linktype="location"
                        >
                            {/* Desktop Dropdown */}
                            <div className="filter-type-dropdown-wrap">
                                <div className="filter-type-dropdown area-dropdown">
                                    <h4>Area</h4>
                                    <ul>
                                        <label className="checkbox-container bold" value="Yalikavak">
                                            {" "}
                                            Yalikavak
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Yalikavak"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Gumusluk">
                                            {" "}
                                            Gumusluk
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Gumusluk"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Turkbuku">
                                            {" "}
                                            Turkbuku
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Turkbuku"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Torba">
                                            {" "}
                                            Torba
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Torba"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Bitez">
                                            {" "}
                                            Bitez
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Bitez"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Gundogan">
                                            {" "}
                                            Gundogan
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Gundogan"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Ortakent">
                                            {" "}
                                            Ortakent
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Ortakent"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Bodrum Town">
                                            {" "}
                                            Bodrum Town
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Bodrum Town"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Konacik">
                                            {" "}
                                            Konacik
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Konacik"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Turgutreis">
                                            {" "}
                                            Turgutreis
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Turgutreis"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Gumbet">
                                            {" "}
                                            Gumbet
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Gumbet"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Kadikalesi">
                                            {" "}
                                            Kadikalesi
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Kadikalesi"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Gulluk">
                                            {" "}
                                            Gulluk
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Gulluk"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Yaliciftlik">
                                            {" "}
                                            Yaliciftlik
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Yaliciftlik"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Tuzla">
                                            {" "}
                                            Tuzla
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Tuzla"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Guvercinlik">
                                            {" "}
                                            Guvercinlik
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Guvercinlik"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Adabuku">
                                            {" "}
                                            Adabuku
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Adabuku"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container bold" value="Bozbuk">
                                            {" "}
                                            Bozbuk
                                            <input
                                                defaultValue="bodrum"
                                                type="radio"
                                                name="city_slug"
                                                className="checkbox-filter"
                                            />
                                            <input
                                                defaultValue="Bozbuk"
                                                type="radio"
                                                name="area_slug"
                                                className="checkbox-filter"
                                                id="area_slug"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </ul>
                                    <input
                                        type="hidden"
                                        name="selected_area_slug"
                                        className="checkbox-filter"
                                        id="selected_area_slug"
                                        defaultValue=""
                                    />
                                    <input type="hidden" name="city_slug" defaultValue="bodrum" />
                                </div>
                            </div>
                            {/* Mobile Span */}
                            <span
                                className="search-filter-input-title search-tab-input-title browse-text fs-5 fw-bold lh-0 px-0"
                                id="bodrum_default_area_wrapper"
                            >
                                Area <br />
                                <span className="search-filter-input-area-value" />
                            </span>
                            <span
                                className="search-filter-input-title search-tab-input-title text-center fs-5 fw-bold lh-0 px-0 d-none"
                                id="bodrum_selected_area_wrapper"
                            >
                                <span className="small">Area</span>
                                <br />
                                <span id="bodrum_selected_area" />
                                <br />
                                <span className="search-filter-input-area-value" />
                            </span>
                            {/* Mobile Dropdown */}
                            <div
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
                            </div>
                            <div className="search-filter-input-dropdown label">
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Yalikavak
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Yalikavak"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Gumusluk
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Gumusluk"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Turkbuku
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Turkbuku"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Torba
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Torba"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Bitez
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Bitez"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Gundogan
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Gundogan"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Ortakent
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Ortakent"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Bodrum Town
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Bodrum Town"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Konacik
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Konacik"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Turgutreis
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Turgutreis"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Gumbet
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Gumbet"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Kadikalesi
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Kadikalesi"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Gulluk
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Gulluk"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Yaliciftlik
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Yaliciftlik"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Tuzla
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Tuzla"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Guvercinlik
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Guvercinlik"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Adabuku
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Adabuku"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                    Bozbuk
                                    <input
                                        defaultValue="bodrum"
                                        type="radio"
                                        name="city_slug"
                                        className="checkbox-filter"
                                    />
                                    <input
                                        defaultValue="Bozbuk"
                                        type="radio"
                                        name="area_slug"
                                        className="checkbox-filter"
                                        id="area_slug"
                                    />
                                </label>
                                <input
                                    type="hidden"
                                    name="selected_area_slug"
                                    className="checkbox-filter"
                                    id="selected_area_slug"
                                    defaultValue=""
                                />
                                <input type="hidden" name="city_slug" defaultValue="bodrum" />
                            </div>
                        </div>
                    </div>
                    {/*------------------- T Y P E S ---------------------*/}
                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                        <div
                            className="search-filter-input search-tab-input originValue"
                            linktype="type"
                        >
                            <div className="filter-type-dropdown-wrap">
                                <div className="filter-type-dropdown">
                                    <h4>Type</h4>
                                    <ul>
                                        <label className="checkbox-container">
                                            {" "}
                                            Apartment
                                            <input
                                                defaultValue="apartment"
                                                type="radio"
                                                name="type"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container">
                                            {" "}
                                            Bungalow
                                            <input
                                                defaultValue="bungalow"
                                                type="radio"
                                                name="type"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container">
                                            {" "}
                                            Commercial
                                            <input
                                                defaultValue="commercial"
                                                type="radio"
                                                name="type"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container">
                                            {" "}
                                            Hotel for sale
                                            <input
                                                defaultValue="hotel-for-sale"
                                                type="radio"
                                                name="type"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container">
                                            {" "}
                                            Land for sale
                                            <input
                                                defaultValue="land-for-sale"
                                                type="radio"
                                                name="type"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container">
                                            {" "}
                                            Penthouse
                                            <input
                                                defaultValue="penthouse"
                                                type="radio"
                                                name="type"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container">
                                            {" "}
                                            Villa
                                            <input
                                                defaultValue="villa"
                                                type="radio"
                                                name="type"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </ul>
                                    <input
                                        type="hidden"
                                        name="type_slug"
                                        id="#type_slug"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                Type <i className="search-filter-input-value" />
                            </span>
                            <div
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
                            </div>
                            <div className="search-filter-input-dropdown  label">
                                <label
                                    value="apartment"
                                    type="type_slug"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    Apartment
                                </label>
                                <label
                                    value="bungalow"
                                    type="type_slug"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    Bungalow
                                </label>
                                <label
                                    value="commercial"
                                    type="type_slug"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    Commercial
                                </label>
                                <label
                                    value="hotel-for-sale"
                                    type="type_slug"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    Hotel for sale
                                </label>
                                <label
                                    value="land-for-sale"
                                    type="type_slug"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    Land for sale
                                </label>
                                <label
                                    value="penthouse"
                                    type="type_slug"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    Penthouse
                                </label>
                                <label
                                    value="villa"
                                    type="type_slug"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    Villa
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*------------------- P R I C E S ---------------------*/}
                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                        <div
                            className="search-filter-input search-tab-input d-lg-flex price-toggle"
                            id="price-toggle"
                        >
                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                Price
                                <div className="priceValues" style={{ display: "none" }}>
                                    <i className="search-filter-input-value minPriceValue" /> -{" "}
                                    <i className="search-filter-input-value maxPriceValue" />
                                </div>
                                <input
                                    type="hidden"
                                    name="priceRange"
                                    id="priceRange"
                                    defaultValue=""
                                />
                            </span>
                            <div
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
                            </div>
                            <div
                                className="filter-type-dropdown-wrap price"
                                style={{ display: "block !important" }}
                            >
                                <div className="filter-type-dropdown">
                                    <h4> Price range</h4>
                                    <div>
                                        <div className="minPrice">
                                            <input
                                                className="minPrice-input filter-input-text width-unset"
                                                readOnly=""
                                                type="text"
                                                placeholder="Min Price"
                                                defaultValue=""
                                            />
                                            <ul>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    0
                                                    <input
                                                        defaultValue={0.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $50k
                                                    <input
                                                        defaultValue={50000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $100k
                                                    <input
                                                        defaultValue={100000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $150k
                                                    <input
                                                        defaultValue={150000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $200k
                                                    <input
                                                        defaultValue={200000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $250k
                                                    <input
                                                        defaultValue={250000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $300k
                                                    <input
                                                        defaultValue={300000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $400k
                                                    <input
                                                        defaultValue={400000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $500k
                                                    <input
                                                        defaultValue={500000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $750k
                                                    <input
                                                        defaultValue={750000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $1,000k
                                                    <input
                                                        defaultValue={1000000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $1,500k
                                                    <input
                                                        defaultValue={1500000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $2,000k
                                                    <input
                                                        defaultValue={2000000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $2,500k
                                                    <input
                                                        defaultValue={2500000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $5,000k
                                                    <input
                                                        defaultValue={5000000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    {" "}
                                                    $10,000k
                                                    <input
                                                        defaultValue={10000000.0}
                                                        type="radio"
                                                        name="minPrice"
                                                        className="checkbox-filter-minPrice hide"
                                                    />
                                                </label>
                                            </ul>
                                        </div>
                                        <small> - </small>
                                        <div className="maxPrice">
                                            <input
                                                className="maxPrice-input filter-input-text width-unset"
                                                readOnly=""
                                                type="text"
                                                placeholder="Max Price"
                                                defaultValue=""
                                            />
                                            <ul>
                                                <label className="checkbox-container">
                                                    $50k
                                                    <input
                                                        defaultValue={50000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $100k
                                                    <input
                                                        defaultValue={100000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $150k
                                                    <input
                                                        defaultValue={150000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $200k
                                                    <input
                                                        defaultValue={200000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $250k
                                                    <input
                                                        defaultValue={250000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $300k
                                                    <input
                                                        defaultValue={300000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $400k
                                                    <input
                                                        defaultValue={400000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $500k
                                                    <input
                                                        defaultValue={500000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $750k
                                                    <input
                                                        defaultValue={750000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $1,000k
                                                    <input
                                                        defaultValue={1000000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $1,500k
                                                    <input
                                                        defaultValue={1500000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $2,000k
                                                    <input
                                                        defaultValue={2000000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $2,500k
                                                    <input
                                                        defaultValue={2500000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $5,000k
                                                    <input
                                                        defaultValue={5000000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $10,000k
                                                    <input
                                                        defaultValue={10000000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                                <label className="checkbox-container">
                                                    $10,000k+
                                                    <input
                                                        defaultValue={10000000.0}
                                                        type="radio"
                                                        name="maxPrice"
                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                    />
                                                </label>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="search-filter-input search-tab-input hide minPrice"
                            linktype="min_price"
                        >
                            <span
                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                value=""
                                type="minPrice"
                            >
                                Min Price <i className="search-filter-input-value" />
                            </span>
                            <div
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
                            </div>
                            <div className="search-filter-input-dropdown ">
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
                            </div>
                        </div>
                        <div
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
                            <div
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
                            </div>
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
                    </div>
                    {/*----------------- B E D R O O M S ------------------*/}
                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                        <div
                            className="search-filter-input search-tab-input bedrooms"
                            linktype="bedrooms"
                            id="bedroom-toggle"
                        >
                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                {" "}
                                Beds
                                <i className="search-filter-input-value" />
                            </span>
                            <div
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
                            </div>
                            <div className="filter-type-dropdown-wrap">
                                <div className="filter-type-dropdown">
                                    <h4> Bedrooms </h4>
                                    <ul>
                                        <label className="checkbox-container" value={0}>
                                            {" "}
                                            0
                                            <input
                                                defaultValue={0}
                                                type="radio"
                                                name="city"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container" value={1}>
                                            {" "}
                                            1
                                            <input
                                                defaultValue={1}
                                                type="radio"
                                                name="city"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container" value={2}>
                                            {" "}
                                            2
                                            <input
                                                defaultValue={2}
                                                type="radio"
                                                name="city"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container" value={3}>
                                            {" "}
                                            3
                                            <input
                                                defaultValue={3}
                                                type="radio"
                                                name="city"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container" value={4}>
                                            {" "}
                                            4
                                            <input
                                                defaultValue={4}
                                                type="radio"
                                                name="city"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container" value={5}>
                                            {" "}
                                            5
                                            <input
                                                defaultValue={5}
                                                type="radio"
                                                name="city"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                        <label className="checkbox-container" value={6}>
                                            {" "}
                                            5+
                                            <input
                                                defaultValue={6}
                                                type="radio"
                                                name="city"
                                                className="checkbox-filter"
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </ul>
                                    <input
                                        type="hidden"
                                        name="bedrooms"
                                        id="#bedrooms"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="search-filter-input-dropdown label">
                                <label
                                    value={0}
                                    type="bedrooms"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    {" "}
                                    0
                                </label>
                                <label
                                    value={1}
                                    type="bedrooms"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    {" "}
                                    1
                                </label>
                                <label
                                    value={2}
                                    type="bedrooms"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    {" "}
                                    2
                                </label>
                                <label
                                    value={3}
                                    type="bedrooms"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    {" "}
                                    3
                                </label>
                                <label
                                    value={4}
                                    type="bedrooms"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    {" "}
                                    4
                                </label>
                                <label
                                    value={5}
                                    type="bedrooms"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    {" "}
                                    5
                                </label>
                                <label
                                    value={6}
                                    type="bedrooms"
                                    className="search-filter-input-dropdown-link searchDO"
                                >
                                    {" "}
                                    5+{" "}
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*--------------------- T A G S ----------------------*/}
                    {/*--------------------- R E F E R E C E ----------------------*/}
                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                        <div className="search-filter-input search-tab-input norrow refId flex items-center">
                            <input
                                className="px-0 fs-5 fw-bold"
                                type="text"
                                name="ref"
                                placeholder="#ID"
                                defaultValue=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                        <button
                            id="createSearchData"
                            className="bg-pt-dark-red createSearchData"
                            type="button"
                            style={{ padding: "12px 0" }}
                        >
                            <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-3">
                                SEARCH
                            </span>
                            <img
                                src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                                alt="search arrow"
                                className="contact-arrow col-auto pe-md-0 ps-0"
                                width={91}
                                height={150}
                                loading="lazy"
                            />
                        </button>
                    </div>
                </div>
            </div>
    )
}
