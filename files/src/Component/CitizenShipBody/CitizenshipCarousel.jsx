import React,{useState} from 'react'
import Image from '../../ReUseAbleComponent/Image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecommendedTurkishPropertyData from '../../Data/RecommendedTurkishProperty';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch,useSelector } from 'react-redux';
import ViewPropertyAction from '../../Redux/Action/ViewPropertyAction';
import {addDoc,collection} from "firebase/firestore"
import { db } from '../../Config';
import { Modal } from 'antd'; 


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function CitizenshipCarousel() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [CarouselID, setCarouselID] = useState();
    const [Name, setName] = useState();
    const [Phone, setPhone] = useState();
    const [Email, setEmail] = useState();
    const [Description, setDescription] = useState('');
    const [navigateProperty, setnavigateProperty] = useState(false);
    const user = useSelector(state => state.AuthReducer)

    const showModal = (id) => {
        setCarouselID(id)
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
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


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const NavigateProperty = (item) => {
        dispatch(ViewPropertyAction(item))
        setnavigateProperty(true)
    }

    if (navigateProperty) {
        navigate("/viewproperty")
    }


    return (
        <>
        <div className="hot-properties-bg">
            <section
                id="hot-properties"
                className="wrap-dis-85 wrap-tab-11 wrap-mob-11 hot-properties-carousel"
                touch={1}
            >
                <h2 className="title-lined abhaya">
                    Suitable Properties For <b>Turkish Citizenship</b> By Investment Programme{" "}
                </h2>


                <Carousel responsive={responsive} >



                        {
                            RecommendedTurkishPropertyData.map((item) => {
                                return (
                                    <Box
                                        key={item.id}
                                        style={{ width: 300 }}
                                        className="property-box  cf hot-property"
                                        onCLick={() => navigate("/viewproperty")}

                                    >
                                        <Link
                                            itemProp="additionalType"
                                            href="/viewproperty"
                                        />
                                        <Box className="position-relative">
                                            <Box className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                                                <span>Apartment</span>
                                            </Box>
                                            <Link
                                                className="btn --circle position-abs heart-label border-none"
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
                                                onClick={() => NavigateProperty(item)}

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
                                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                                    />
                                                    <span className="quantity">{item.location}</span>
                                                </Box>
                                                <Box className="bedrooms flex content-space-evenly">
                                                    <Box>
                                                        <Image
                                                            alt='pic 03'
                                                            className="icon-bedroom img-fluid"
                                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
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
                                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
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
                                                    <meta itemProp="priceCurrency" content="$154,300" />
                                                    <meta itemProp="price" content={140800.0} />
                                                </Box>
                                                <Box>
                                                    <Link
                                                        onClick={() => showModal(item.id)}
                                                        className="quich-enquire-btn abhaya"
                                                        id="inline"
                                                        to="#data"
                                                        data-id={6199}
                                                        title="Quick Enquire"
                                                    >
                                                        <span>Quick Enquire</span>
                                                    </Link >
                                                </Box>
                                            </Box>
                                        </Box>
                                        <meta
                                            itemProp="url"
                                            content="https://www.propertyturkey.com/
                  /real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                                        />
                                    </Box>
                                )
                            })
                        }








                    </Carousel>


            </section>
        </div>


        <Modal title="Basic Modal" style={{ position: 'relative', top: 10 }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Box
                    className="form_popup newcolor fancybox-content"
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
                                    <Box className="intl-tel-input allow-dropdown">
                                        <Box className="flag-container">
                                            <Box
                                                className="selected-flag"
                                                role="combobox"
                                                aria-owns="country-listbox"
                                                tabIndex={0}
                                                title="Pakistan (‫پاکستان‬‎): +92"
                                            >
                                                <Box className="iti-flag pk" />
                                                <Box className="iti-arrow" />
                                            </Box>
                                        </Box>
                                        <input
                                            name="phone"
                                            type="text"
                                            className="input-tel"
                                            placeholder="Phone"
                                            defaultValue=""
                                            validation=""
                                            autoComplete="off"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Box>
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
                                        defaultValue={"I'm interested in this property"}
                                        onChange={(e) => setDescription(e.target.value)}

                                    />
                                </label>
                            </Box>
                        </Box>
                        <Box className="actions  col-dis-12 col-tab-12 col-mob-12 flex content-center padding-bottom-05">
                            <input
                                name="requestUrl"
                                type="hidden"
                                defaultValue="https://www.propertyturkey.com/about-turkey"
                            />
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
                                className="btn btn-sm-change col-mob-6"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; ga('create', 'UA-42286063-1', 'auto'); ga('send', 'event', 'QuickEnquiry', 'CLICK', 'SUBMIT');"
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

            </Modal>
        </>

    )
}
