import React, { useState } from "react";
import RealStatesearchdiv from "../../Component/RealState_search_div";
// import $ from 'jquery';
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config";
import Image from "../../ReUseAbleComponent/Image";
import { Link } from "react-router-dom";
import "./State.css";
import { useEffect } from "react";
import { TypeToggleData, cityToggleData } from "../../Data/ToggleData";
import DropDownAnchor from "../../ReUseAbleComponent/DropDownAnchor";
import RealStateHeader from "./RealStateHeader";

export default function RealState() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CarouselID, setCarouselID] = useState();
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();
  const [Description, setDescription] = useState("");
  const user = useSelector((state) => state.AuthReducer);
  const [cityPopuptoggle, setcityPopuptoggle] = useState(false);
  const [TypePopuptoggle, setTypePopuptoggle] = useState(false);
  const [price, setprice] = useState(false);
  const [BedroomToggle, setBedroomToggle] = useState(false);
  const stateChanged = useSelector((state) => state.Enquiry);

  const showModal = (id) => {
    setCarouselID(id);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
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
    });
    console.log("Document written with ID: ", docRef.id);
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // For Filters
  // getting data from local storage
  const localStorage = JSON.parse(window.localStorage.getItem("search"));
  const [cityData, setcityData] = useState("");
  const [typeData, settypeData] = useState("");
  const [BedroomData, setBedroomData] = useState("");

  const [minPriceInputValue, setminPriceInputValue] = useState(0);
  const [maxPriceInputValue, setmaxPriceInputValue] = useState(0);

  useEffect(() => {
    if (localStorage?.cityData && cityData === "") {
      setcityData(localStorage.cityData);
    }
    if (localStorage?.typeData && typeData === "") {
      settypeData(localStorage.typeData);
    }
    if (localStorage?.BedroomData && BedroomData === "") {
      setBedroomData(localStorage.BedroomData);
    }
    if (localStorage?.minPriceInputValue && minPriceInputValue === 0) {
      setminPriceInputValue(localStorage.minPriceInputValue);
    }
    if (localStorage?.maxPriceInputValue && maxPriceInputValue === 0) {
      setmaxPriceInputValue(localStorage.maxPriceInputValue);
    }
  }, []);
  console.log(localStorage);
  console.log({
    cityData,
    typeData,
    BedroomData,
    minPriceInputValue,
    maxPriceInputValue,
  });

  return (
    <div>
      <RealStateHeader
        cityData={cityData}
        typeData={typeData}
        BedroomData={BedroomData}
        minPriceInputValue={minPriceInputValue}
        maxPriceInputValue={maxPriceInputValue}
        setcityData={setcityData}
        settypeData={settypeData}
        setBedroomData={setBedroomData}
        setminPriceInputValue={setminPriceInputValue}
        setmaxPriceInputValue={setmaxPriceInputValue}
        scroll={true}
      />
      <RealStatesearchdiv
        cityData={cityData}
        typeData={typeData}
        BedroomData={BedroomData}
        minPriceInputValue={minPriceInputValue}
        maxPriceInputValue={maxPriceInputValue}
      />
    </div>
  );
}
