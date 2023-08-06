import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ViewContactForm from './ViewContactForm';
import Image from '../../ReUseAbleComponent/Image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageSlider from './ImageSlider';
import ElasticSlider from '../../ReUseAbleComponent/ElasticSlider';
import RecommendedTurkishPropertyData from '../../Data/RecommendedTurkishProperty';
import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { locationSvg, BathroomSvg, BedroomsIcon } from '../../Images';
import ModalComponent from "../../ReUseAbleComponent/ModalComponent"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Config';
import PhoneComponent from '../../ReUseAbleComponent/PhoneComponent';
import CameronContactHeader from "../../assets/ViewProperty/cameron-contact-header.png"
import { IoLogoUsd } from "react-icons/io"
import { AiOutlineEuroCircle } from "react-icons/ai"
import QuestionMark from "../../assets/ViewProperty/questionmark.svg"

export default function ViewPropertyBody() {




  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CarouselID, setCarouselID] = useState();
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();
  const [HideComponent, setHideComponent] = useState(false);
  const [Description, setDescription] = useState('');
  const user = useSelector(state => state.AuthReducer)
  const state = useSelector(state => state.HideComponent.Hide)
  const [isOpen, setIsOpen] = useState(false);
  const ImagesData = useSelector(state => state.viewProperty.login)
  
  console.log(ImagesData)

  const closeModal = () => {
    setIsOpen(false);
  };
  const HandleSubmitEnquiryForm = async (e) => {
    e.preventDefault()
    console.log(CarouselID)
    console.log(user.login.uid)
    console.log(Name)
    console.log(Phone)
    console.log(Email)
    console.log(Description)

    const docRef = await addDoc(collection(db, "EnquiryForm"), {
      propertyID: CarouselID,
      id: user.login.uid,
      name: Name,
      phone: Phone,
      Email: Email,
      desc: Description
    });
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <>
      <div className="pt-tv-bg padding-top-3">
        <div className="wrap-dis-9 wrap-tab-12 wrap-mob-12 clearfix property-end">
          <article className="clearfix padding-bottom-4" itemScope=""
            style={
              {}
            }>
            <span className=" Contact__form col-dis-3 col-tab-12 col-mob-12 property_right_side" id="reachtoform-end">
              <div id="enquire_form_end" className="property-price-box align-dis-right align-tab-right align-mob-left enquire-box">
                <div className="cameron-header"
                  style={
                    { marginBottom: "-5px" }
                  }>
                  <Image src={CameronContactHeader} alt="Cameron Deggin" />
                </div>
                <ViewContactForm />
              </div>
            </span>
            <div className="position-relative bottom-0">
              <div className="lg:w-[900px] md:w-[700px] sm:w-[80%] h-[700px]  flex flex-col justify-center items-center">
                <ImageSlider />
              </div>
            </div>
            <div className="Hide"
              style={
                { display: 'none' }
              }>
              <h3 itemProp="name" className="property-title abhaya">
                Designer penthouse-style apartment in heart of Istanbul
              </h3>
              <div className="card-actions flex padding-1 content-space-between">
                <div className="price flex-ver-hor-cen-sm" sp-slide sp-selected itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
                  <span className="unit-price flex content-center">$1,600,000</span>

                  <div className="d-mobile">
                    <ul className="top-nav-head">
                      <li className="active">
                        {" "}
                        <Link>
                          Change currency
                          <i className="fa fa-angle-down" />
                        </Link>
                        <ul style={
                          { display: "none" }
                        }>
                          <li>
                            <Link rel="nofollow" to="" className="" title="Sterling Pound  ">
                              <i className="fa fa-gbp" />
                            </Link>
                            <Link rel="nofollow" to="" className="" title="Euro ">
                              <AiOutlineEuroCircle />
                            </Link>
                            <Link rel="nofollow" to="" className="active" title="Dollar ">
                              <IoLogoUsd />
                            </Link>
                            <Link rel="nofollow" to="" className="" title="Turkish Lira ">
                              <i className="fa fa-try" />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to="" className="add_enquire  scrollToForm btn col-dis-12 col-tab-12 col-mob-12">
                <Image src={QuestionMark} />
                REQUEST DETAILS
              </Link>
            </div>
            <div className="col-dis-9 col-tab-12 col-mob-12">
              <div className="roomcard-desc">
                <div className="row">
                  <div className="col-12 col-md-3 flex col content-center border-right-greyline pt-about-title ">
                    <span>Overview</span>
                  </div>
                  <div className="col-12 col-md-9 border-left-greyline">
                    <p>
                      {ImagesData.overview}
                        {/* lorem10 */}
                    </p>
                    {" "}
                    <p />
                  </div>
                </div>
              </div>
            </div>
            <section className="col-dis-9 col-tab-12 col-mob-12 clearfix"></section>
            <section className="property_features col-dis-9 col-tab-12 col-mob-12 clearfix">
              <div className="roomcard-desc">
                <div className="flex-xl">
                  <div className="col-12 col-md-3 flex col content-center pt-about-title"
                    style={
                      { padding: 0 }
                    }>
                    <span>
                      Property
                      <span>Features</span>
                    </span>
                  </div>
                  <div className="col-12 col-md-3  border-left-greyline property_features--centercontent flex content-start">
                    <div className="cf">
                      <Image src="https://www.propertyturkey.com/front/image/images2019/Icons/pro-feature1.svg" />
                      Property Type:{" "}
                      <span className="cf--title">
                        {" "}
                        <Link to="" title="Apartment">
                          {ImagesData.Property_Type}
                        </Link>
                      </span>
                    </div>
                    <div className="cf">
                      <Image src="https://www.propertyturkey.com/front/image/images2019/Icons/pro-feature2.svg" />
                      Bedrooms:
                      <span className="cf--title">{ImagesData.property_BedRoom}</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-3  border-left-greyline property_features--centercontent flex content-start">
                    <div className="cf">
                      <Image src="https://www.propertyturkey.com/front/image/images2019/Icons/pro-feature3.svg" />
                      Bathrooms:
                      <span className="cf--title">{ImagesData.Propert_Bathroom}</span>
                    </div>
                    <div className="cf">
                      <Image src={locationSvg}
                        style={
                          {
                            position: "relative",
                            right: 2
                          }
                        } />
                      Location:{" "}
                      <span className="cf--title">
                        {" "}
                        <Link to="" title="Istanbul">
                          {ImagesData.property_Location}
                        </Link>
                        {" "} </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-3  border-left-greyline property_features--centercontent flex content-start">
                    <div className="cf">
                      <Image src="https://www.propertyturkey.com/front/image/images2019/Icons/pro-feature6.svg" />
                      Living space sqm:
                      <span className="cf--title">{ImagesData.Propert_Living_space}</span>
                    </div>
                    <div className="cf">
                      <Image src="https://www.propertyturkey.com/front/image/images2019/Icons/pro-feature5.svg" />
                      Pool:
                      <span className="cf--title">{ImagesData.property_pool}</span>
                    </div>
                  </div>
                </div>
                <div className="widget widget-why-buy col-dis-6 col-tab-12 col-mob-12 hide"
                  style={
                    {}
                  }>
                  <h3 className="title"
                    style={
                      {}
                    }>
                    Property
                    <span>Features</span>
                  </h3>
                  <div className="body">
                    <ul className="no-bullets">
                      <li className="cf">
                        <Image src="https://www.propertyturkey.com/front/image/property.png" />
                        Property Type:{" "}
                        <strong> {" "}
                          <Link to="" title="Apartment">
                            Apartment
                          </Link>
                        </strong>
                      </li>
                      <li className="cf">
                        <Image src="https://www.propertyturkey.com/front/image/bedrooms.png" />
                        Bedrooms:
                        <strong>3</strong>
                      </li>
                      <li className="cf">
                        <Image src="https://www.propertyturkey.com/front/image/bathrooms.png" />
                        Bathrooms:
                        <strong>2</strong>
                      </li>
                      <li className="cf">
                        <Image src="https://www.propertyturkey.com/front/image/location.png" />
                        Location:{" "}
                        <strong> {" "}
                          <Link to="" title="Istanbul">
                            Istanbul
                          </Link>
                          -{" "}
                          <Link to="/sisli">
                            Sisli
                          </Link>
                          {" "} </strong>
                      </li>
                      <li className="cf">
                        <Image src="https://www.propertyturkey.com/front/image/tag.png" />
                        Tags:
                        <strong>
                          <Link to="" title="Luxury">
                            Luxury
                          </Link>
                        </strong>
                      </li>
                      <li className="cf">
                        <Image src="" />
                        Living space sqm:
                        <strong>200</strong>
                      </li>
                      <li className="cf">
                        <Image src="https://www.propertyturkey.com/front/image/pool.png" />
                        Pool:
                        <strong>shared</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-features col-dis-6 col-tab-12 col-mob-12 hide"
                  style={
                    {}
                  }>
                  <h3 className="title"
                    style={
                      {}
                    }>
                    Why buy this
                    <span>Property</span>
                  </h3>
                  <div className="body">
                    <p>- Prestigious penthouse-style apartment for sale</p>
                    <p>- Floor 41 of iconic building with panoramic views</p>
                    <p>- Luxury interior design and features throughout</p>
                    <p>- 5-star on-site facilities and VIP services to use</p>
                    <p>- Surrounded by lifestyle amenities and transport</p>
                    <p>- Minutes from Taksim Square and Bosphorus Sea</p>
                  </div>
                </div>
              </div>
              <div className="roomcard-desc">
                <div className="row">
                  <div className="col-12 col-md-3 flex col content-center pt-about-title">
                    <span>
                      Why buy this
                      <span>Property</span>
                    </span>
                  </div>
                  <div className="col-12 col-md-9 border-left-greyline">
                    <div className="body-whybuy">
                      <p>- Prestigious penthouse-style apartment for sale</p>
                      <p>- Floor 41 of iconic building with panoramic views</p>
                      <p>- Luxury interior design and features throughout</p>
                      <p>- 5-star on-site facilities and VIP services to use</p>
                      <p>- Surrounded by lifestyle amenities and transport</p>
                      <p>- Minutes from Taksim Square and Bosphorus Sea</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="area property-area col-dis-9 col-tab-12 col-mob-12 d-desk" itemProp="description" clearfix="">
              <div className="roomcard-desc roomcard-desc-lastsection">
                <h2 className="pt-last-section abhaya">
                  FACILITIES &amp; LOCATION</h2>
                <p>
                 {ImagesData.property_facility}
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <strong>About the project</strong>
                </p>
                <p>
                  {ImagesData.AboutProjects}
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <strong>About the apartment</strong>
                </p>
                <p>
                  {ImagesData.AboutProjects}
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <strong>Facilities and features include</strong>
                </p>
                <p>{ImagesData.property_facility}</p>
                
                <p>
                  <br />
                </p>
                <p>
                  <strong>Location in Istanbul</strong>
                </p>
                <p>
                  {ImagesData.LocationPlan}
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="property_footer hide">
          <Link to="#" className="search highlight-search">
            {" "}
            START
            <strong>NEW SEARCH</strong>
          </Link>
          <span>OR</span>
          <Link a="" type="button" id="inline" to="#propertyAlerts" title="Get Property <b>ALERTS</b>" className="alert">
            Get Property
            <b>ALERTS</b>
          </Link>
        </div>
        {" "}
        <div className="bg-white related-pt d-desk padding-ver-1">
          <section id="new-properties" className="wrap-dis-9 wrap-tab-9 wrap-mob-9">
            <h2 className="title-lined title-similarproperties">
              <span>
                <b>Similar</b>
                Properties
              </span>
            </h2>
            <ElasticSlider ItemShop={4}>
              {
                RecommendedTurkishPropertyData.map((item) => {
                  return (
                    <Box
                      key={item.id}
                      style={{ width: 300 }}
                      className="property-box  cf hot-property gap-10"
                    // onCLick={() => navigate("/viewproperty")}

                    >
                      <Link
                        itemProp="additionalType"
                        to="/viewproperty"
                      />
                      <Box className={`position-relative `}>
                        <Box className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                          <span>Apartment</span>
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
                        </Link >
                        <meta
                          itemProp="name"
                          content="Bargain apartments for sale in Adabuku Bodrum complex"
                        />
                        <figure className="cardImgInListing skelton-loading">
                          <Link
                            rel="nofollow"

                            className="prevent-newtab-onmobile"
                            href=""
                          >
                            <LazyLoadImage alt="pic 08"
                              className=" lazyloaded"
                              src={item.img}
                            />
                          </Link >
                        </figure>
                        <Link
                          // to="/viewproperty"
                          // onClick={() => NavigateProperty(item)}

                          title="Bargain apartments for sale in Adabuku Bodrum complex"
                          itemProp="name"
                          className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                        >
                          {item.title}
                        </Link >
                        <Link
                          rel="nofollow"

                          className="prevent-newtab-onmobile"
                          to="/viewproperty"
                        >
                          <p itemProp="description" limit={600} className="skelton-loading">
                            {item.desc}
                          </p>
                        </Link >
                        <Box className="features skelton-loading">
                          <Box className="location">
                            <img alt="pic 08"
                              className="icon-location img-fluid"
                              src={locationSvg}
                            />
                            <span className="quantity">{item.location}</span>
                          </Box>
                          <Box className="bedrooms flex content-space-evenly">
                            <Box>
                              <Image
                                alt='pic 03'
                                className="icon-bedroom img-fluid"
                                src={BedroomsIcon}
                              />
                            </Box>
                            <Box>
                              <span className="quantity">{item.Bedroom}</span>
                            </Box>
                          </Box>
                          <Box className="bathrooms flex content-space-evenly padding-left-05">
                            <Box>
                              <Image
                                alt='pic 04'
                                className="icon-bathrooms img-fluid"
                                src={BathroomSvg}
                              />
                            </Box>
                            <Box>
                              <span className="quantity">{item.BathRoom}</span>
                            </Box>
                          </Box>
                          <Box className="quantity  padding-dir-05">{item.Area}</Box>
                        </Box>
                        <Box className="card-actions flex padding-1 content-space-between skelton-loading">
                          <Box
                            className="price flex-align-self-center"

                          >
                            <span className="unit-price flex">$154,300</span>
                          </Box>
                          <Box>
                            <Link
                              // onClick={() => showModal(item.id)}
                              className="quich-enquire-btn abhaya"
                              id="inline"
                              onClick={()=>setIsOpen(true)}
                              data-id={6199}
                              title="Quick Enquire"
                            >
                              <span>Quick Enquire</span>
                            </Link >
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )
                })
              }
            </ElasticSlider>
          </section>
        </div>
        <div className="area property-area col-dis-9 col-tab-12 col-mob-12 d-mobile" id="property-areas" itemProp="description" clearfix="">
          <div className="roomcard-desc">
            <h2 className="pt-last-section abhaya">
              FACILITIES &amp; LOCATION</h2>
            <p>
             {ImagesData.property_facility}
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>About the project</strong>
            </p>
            <p>
              {ImagesData.AboutProjects}
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>About the apartment</strong>
            </p>
            <p>
              {ImagesData.AboutProjects}
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>Facilities and features include</strong>
            </p>
            <p>- {ImagesData.property_facility}</p>
            
            <p>
              <br />
            </p>
            <p>
              <strong>Location in Istanbul</strong>
            </p>
            <p>
              {ImagesData.LocationPlan}
            </p>
          </div>
          <div className="bg-white related-pt d-mobile">
            <section id="new-properties" className="wrap-dis-9 wrap-tab-9 wrap-mob-9">
              <h2 className="title-lined title-similarproperties">
                <span>
                  <b>Similar</b>
                  Properties
                </span>
              </h2>
              <div className="cf related-pt-container owl-carousel carousel owl-images-initialized owl-loaded owl-drag"
                items={4}
                margin={10}
                touch={1}>
                <div className="owl-stage-outer">
                  <div className="owl-stage"
                    style={
                      {
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s"
                      }
                    }>
                    <div className="owl-item">
                      <div  type="" className="related-pt-card property-box  cf hot-property " hot="Hot Property">
                        <link itemProp="additionalType" to="https://www.productontology.org/id/Condominium" />
                        <div className="position-relative">
                          <div className="card-type btn --circle position-abs right card-label raleway border-none opacity-81">
                            <span>Apartment</span>
                          </div>
                          <meta itemProp="name" content="Bosphorus and Istanbul skyline view apartment in Sisli" />
                          <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                            <div className="owl-stage-outer">
                              <div className="owl-stage"
                                style={
                                  {
                                    transform: "translate3d(0px, 0px, 0px)",
                                    transition: "all 0s ease 0s"
                                  }
                                }>
                                <div className="owl-item">
                                  <Link rel="nofollow" to="">
                                    <Image className="owl-lazy" data-src="https://www.propertyturkey.com/uploads/realestate/5181/thumb/istanbul_apartment_5-300x200.jpeg" alt="Modern residence" src="https://www.propertyturkey.com/uploads/realestate/5181/thumb/istanbul_apartment_5-300x200.jpeg"
                                      style={
                                        { opacity: 1 }
                                      } />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="owl-nav disabled">
                              <button type="button" role="presentation" className="owl-prev">
                                <i className="fa fa-angle-left" />
                              </button>
                              <button type="button" role="presentation" className="owl-next">
                                <i className="fa fa-angle-right" />
                              </button>
                            </div>
                            <div className="owl-dots disabled" />
                          </figure>
                          <Link to="" title="Bosphorus and Istanbul skyline view apartment in Sisli" className="property-title abhaya">
                            Bosphorus and Istanbul skyline view apartment in Sisli
                          </Link>
                          <Link rel="nofollow" to=""></Link>
                          <div className="card-actions flex padding-1 content-space-between">
                            <div className="price" itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
                              <span className="unit-price flex">$1,508,600</span>
 
                            </div>
                            <div>
                              <Link className="btn --circle heart-label" id="inline" to="#logins2"
                                data-id={5181}>
                                <span className="flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.797" height="20.442" viewBox="0 0 22.797 20.442">
                                    <path style={
                                      {
                                        fill: "#fff",
                                        stroke: "#c5a153",
                                        fillRule: "evenodd"
                                      }
                                    }
                                      id="Heart"
                                      d="M20.08 1.767a5.857 5.857 0 0 0-8.336 0l-.82.82-.82-.82A5.895 5.895 0 1 0 1.767 10.1l9.156 9.156L20.08 10.1a5.857 5.857 0 0 0 0-8.336"
                                      className="cls-1"
                                      transform="translate(.475 .475)" />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="features">
                            <div className="location">
                              <Image className="icon-location Image-fluid" src="https://www.propertyturkey.com/front/image/location.svg" />
                              <span className="quantity" />
                            </div>
                            <div className="bedrooms flex content-space-evenly">
                              <div>
                                <Image className="icon-bedroom Image-fluid" src="https://www.propertyturkey.com/front/image/bedrooms.svg" />
                              </div>
                              <div>
                                <span className="quantity">4</span>
                              </div>
                            </div>
                            <div className="bathrooms flex content-space-evenly">
                              <div>
                                <Image className="icon-bathrooms Image-fluid" src="https://www.propertyturkey.com/front/image/bathrooms.svg" />
                              </div>
                              <div>
                                <span className="quantity">3</span>
                              </div>
                            </div>
                            <div className="quantity">280 sq.m</div>
                          </div>
                        </div>
                        <meta itemProp="url" content="https://www.propertyturkey.com/real_estate/5181-bosphorus-and-istanbul-skyline-view-apartment-in-sisli" />
                      </div>
                    </div>
                    <div className="owl-item">
                      <div itemScope="" itemType="http://schema.org/Product" type="" className="related-pt-card property-box  cf  " hot="Hot Property">
                        <link itemProp="additionalType" to="https://www.productontology.org/id/Condominium" />
                        <div className="position-relative">
                          <div className="card-type btn --circle position-abs right card-label raleway border-none opacity-81">
                            <span>Apartment</span>
                          </div>
                          <meta itemProp="name" content="Luxury hotel-style Crown of Bomonti Sisli apartments" />
                          <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                            <div className="owl-stage-outer">
                              <div className="owl-stage"
                                style={
                                  {
                                    transform: "translate3d(0px, 0px, 0px)",
                                    transition: "all 0s ease 0s"
                                  }
                                }>
                                <div className="owl-item">
                                  <Link rel="nofollow" to="">
                                    <Image className="owl-lazy" data-src="https://www.propertyturkey.com/uploads/realestate/2398/thumb/crown_bomonti_1-300x200.jpeg" alt="Crown of Bomonti property" src="https://www.propertyturkey.com/uploads/realestate/2398/thumb/crown_bomonti_1-300x200.jpeg"
                                      style={
                                        { opacity: 1 }
                                      } />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="owl-nav disabled">
                              <button type="button" role="presentation" className="owl-prev">
                                <i className="fa fa-angle-left" />
                              </button>
                              <button type="button" role="presentation" className="owl-next">
                                <i className="fa fa-angle-right" />
                              </button>
                            </div>
                            <div className="owl-dots disabled" />
                          </figure>
                          <Link to="" title="Luxury hotel-style Crown of Bomonti Sisli apartments" className="property-title abhaya">
                            Luxury hotel-style Crown of Bomonti Sisli apartments
                          </Link>
                          <Link rel="nofollow" to=""></Link>
                          <div className="card-actions flex padding-1 content-space-between">
                            <div className="price" itemProp="offers" itemScope="" itemType="http://schema.org/Offer">

                            </div>
                            <div>
                              <Link className="btn --circle heart-label" id="inline" to="#logins2"
                                data-id={2398}>
                                <span className="flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.797" height="20.442" viewBox="0 0 22.797 20.442">
                                    <path style={
                                      {
                                        fill: "#fff",
                                        stroke: "#c5a153",
                                        fillRule: "evenodd"
                                      }
                                    }
                                      id="Heart"
                                      d="M20.08 1.767a5.857 5.857 0 0 0-8.336 0l-.82.82-.82-.82A5.895 5.895 0 1 0 1.767 10.1l9.156 9.156L20.08 10.1a5.857 5.857 0 0 0 0-8.336"
                                      className="cls-1"
                                      transform="translate(.475 .475)" />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="features">
                            <div className="location">
                              <Image className="icon-location Image-fluid" src="https://www.propertyturkey.com/front/image/location.svg" />
                              <span className="quantity" />
                            </div>
                            <div className="bedrooms flex content-space-evenly">
                              <div>
                                <Image className="icon-bedroom Image-fluid" src="https://www.propertyturkey.com/front/image/bedrooms.svg" />
                              </div>
                              <div>
                                <span className="quantity">2</span>
                              </div>
                            </div>
                            <div className="bathrooms flex content-space-evenly">
                              <div>
                                <Image className="icon-bathrooms Image-fluid" src="https://www.propertyturkey.com/front/image/bathrooms.svg" />
                              </div>
                              <div>
                                <span className="quantity">2</span>
                              </div>
                            </div>
                            <div className="quantity">148 sq.m</div>
                          </div>
                        </div>
                        <meta itemProp="url" content="https://www.propertyturkey.com/real_estate/2398-luxury-hotel-style-crown-of-bomonti-sisli-apartments" />
                      </div>
                    </div>
                    <div className="owl-item">
                      <div itemScope="" itemType="http://schema.org/Product" type="" className="related-pt-card property-box  cf  " hot="Hot Property">
                        <link itemProp="additionalType" to="https://www.productontology.org/id/Condominium" />
                        <div className="position-relative">
                          <div className="card-type btn --circle position-abs right card-label raleway border-none opacity-81">
                            <span>Apartment</span>
                          </div>
                          <meta itemProp="name" content="Elite Nisantasi apartments for 5-star luxury living" />
                          <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                            <div className="owl-stage-outer">
                              <div className="owl-stage"
                                style={
                                  {
                                    transform: "translate3d(0px, 0px, 0px)",
                                    transition: "all 0s ease 0s"
                                  }
                                }>
                                <div className="owl-item">
                                  <Link rel="nofollow" to="">
                                    <Image className="owl-lazy" data-src="https://www.propertyturkey.com/uploads/realestate/larg/nisantasi_apartment_1_1.jpg" alt="Nisantasi luxury apartment for sale" src="https://www.propertyturkey.com/uploads/realestate/larg/nisantasi_apartment_1_1.jpg"
                                      style={
                                        { opacity: 1 }
                                      } />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="owl-nav disabled">
                              <button type="button" role="presentation" className="owl-prev">
                                <i className="fa fa-angle-left" />
                              </button>
                              <button type="button" role="presentation" className="owl-next">
                                <i className="fa fa-angle-right" />
                              </button>
                            </div>
                            <div className="owl-dots disabled" />
                          </figure>
                          <Link to="" title="Elite Nisantasi apartments for 5-star luxury living" className="property-title abhaya">
                            Elite Nisantasi apartments for 5-star luxury living
                          </Link>
                          <Link rel="nofollow" to=""></Link>
                          <div className="card-actions flex padding-1 content-space-between">
                            <div className="price" >
                              <span className="unit-price flex">$1,571,400</span>
                              <meta itemProp="priceCurrency" content="$1,571,400" />
                              <meta itemProp="price"
                                content={1434000.0} />
                            </div>
                            <div>
                              <Link className="btn --circle heart-label" id="inline" to="#logins2"
                                data-id={2679}>
                                <span className="flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.797" height="20.442" viewBox="0 0 22.797 20.442">
                                    <path style={
                                      {
                                        fill: "#fff",
                                        stroke: "#c5a153",
                                        fillRule: "evenodd"
                                      }
                                    }
                                      id="Heart"
                                      d="M20.08 1.767a5.857 5.857 0 0 0-8.336 0l-.82.82-.82-.82A5.895 5.895 0 1 0 1.767 10.1l9.156 9.156L20.08 10.1a5.857 5.857 0 0 0 0-8.336"
                                      className="cls-1"
                                      transform="translate(.475 .475)" />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="features">
                            <div className="location">
                              <Image className="icon-location Image-fluid" src="https://www.propertyturkey.com/front/image/location.svg" />
                              <span className="quantity" />
                            </div>
                            <div className="bedrooms flex content-space-evenly">
                              <div>
                                <Image className="icon-bedroom Image-fluid" src="https://www.propertyturkey.com/front/image/bedrooms.svg" />
                              </div>
                              <div>
                                <span className="quantity">2</span>
                              </div>
                            </div>
                            <div className="bathrooms flex content-space-evenly">
                              <div>
                                <Image className="icon-bathrooms Image-fluid" src="https://www.propertyturkey.com/front/image/bathrooms.svg" />
                              </div>
                              <div>
                                <span className="quantity">2</span>
                              </div>
                            </div>
                            <div className="quantity">137 sq.m</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button type="button" role="presentation" className="owl-prev">
                    <i className="fa fa-angle-left" />
                  </button>
                  <button type="button" role="presentation" className="owl-next">
                    <i className="fa fa-angle-right" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </section>
          </div>
        </div>
      </div>

      <ModalComponent style={{ position: 'relative', top: 300, height: '400px', marginTop: 100,  }} isOpen={isOpen} onClose={closeModal}>
        <Box
          className="form_popup newcolor fancybox-content "
          id="data"
          style={{ display: "inline-block" }}
        >
          <form
            onSubmit={HandleSubmitEnquiryForm}
            className="box white clearfix"
          >
            <h3 className="title col-dis-12 col-tab-12 col-mob-12">Property Enquiry</h3>
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
                  <PhoneComponent
                    containerClassName="intl-tel-input"
                    inputClassName="form-control"
                    defaultCountry={'us'}
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
                <label className="field col-dis-12 col-tab-12 col-mob-12">
                  <textarea
                    name="msg"
                    placeholder="Message"
                    onChange={(e) => setDescription(e.target.value)}

                  />
                </label>
              </Box>
            </Box>
            <Box className="actions  col-dis-12 col-tab-12 col-mob-12 flex content-center padding-bottom-05">
              <input
                type="submit"
                defaultValue="Send"
                className="btn btn-sm-change col-mob-6 bg-white"
              />
            </Box>
          </form>{" "}
          <button
            type="button"
            data-fancybox-close=""
            className="fancybox-button fancybox-close-small"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" version={1} viewBox="0 0 24 24">
              <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z" />
            </svg>
          </button>
        </Box>

      </ModalComponent>
    </>

  )
}