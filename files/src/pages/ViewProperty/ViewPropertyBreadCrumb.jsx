import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import Twitter from "../../assets/twitter.png"
import { Image, Modal, Typography } from 'antd';
import { Box } from '@mui/material';
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin} from "react-icons/ai"
import { FbIcon,Linkdn, InstaIcon } from '../../Images';
import { useSelector } from 'react-redux';


export default function ViewPropertyBreadCrumb() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const ImagesData = useSelector(state => state.viewProperty.login)


    const handleOverlayClick = () => {
        setIsOverlayVisible(true);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            {isOverlayVisible && (
                <Box onClick={() => setIsOverlayVisible(false)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <Box className="flex justify-center items-center">
                        <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
                            <AiFillFacebook className='w-full h-full text-blue-900'/>
                            <Typography>facebook</Typography>
                        </Link>
                        <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
                            <AiOutlineTwitter className='w-full h-full text-cyan-500'/>
                            <Typography>Twitter</Typography>

                        </Link>
                        <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
                            <AiOutlineInstagram className='w-full h-full text-pink-700'/>
                            <Typography>Instagram</Typography>
                        </Link>

                        <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
                            <AiFillLinkedin className='w-full h-full text-blue-900'/>
                            <Typography>Linkedin</Typography>

                        </Link>

                    </Box>
                </Box>
            )}

            <Box className="room-desc-style" id="first-end-Box">
                <Box className="property-header  showMb-hideDt">
                    <Link
                        className="back"
                        to=""
                    >
                        <Image src="https://www.propertyturkey.com/front/image/icons/property-back.svg" />
                    </Link>
                    <span className="refNumber">Ref: PTFS6337</span>
                    <Link className="fav-pt-header" id="inline" to="#logins2" data-id={6337}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28.101"
                            height="25.446"
                            viewBox="0 0 28.101 25.446"
                        >
                            <path
                                style={{
                                    fill: "none",
                                    stroke: "#463d2b",
                                    strokeWidth: 2,
                                    fillRule: "evenodd"
                                }}
                                id="Heart"
                                d="M24.04 2.111a7.013 7.013 0 0 0-9.982 0l-.982.982-.982-.982a7.058 7.058 0 1 0-9.982 9.982l10.963 10.965L24.04 12.094a7.013 7.013 0 0 0 0-9.982"
                                className="cls-1"
                                transform="translate(.975 .975)"
                            />
                        </svg>
                    </Link>
                    <Link to="#" className="social-shares">
                        <img
                            src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                            alt=""
                            className="pb-1-sm"
                        />{" "}
                    </Link>
                </Box>
                <Box className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
                    <Box className="room-desc-style-flex room-desc">
                        <Box className="room-details main-heading-pt">
                            <h1 className="room-details--h1 hideMb-showDt">
                                <span itemProp="name" className="page-title">
                                    {ImagesData.Property_Name}
                                </span>
                            </h1>
                            <Box className="flex-sm-screen">
                                <span className="room-details--price">
                                    Price: <span>${ImagesData.Property_Price}</span>
                                </span>
                                <span className="room-details--ref padding-left-1">
                                    Ref: <span>PTFS6337</span>
                                </span>
                            </Box>
                        </Box>
                        <Box className="room-details--buttons">
                            <Link
                                to="/printPreview"
                                rel="nofollow"
                               
                                className="print bg-white"
                            >
                                <i className="fa fa-print font-2"  /> Print
                            </Link>

                            <Link onClick={showModal} className="video-button has-video"  title="Play Video">
                                <img
                                    src="https://www.propertyturkey.com/front/image/icons/Cameraicon.svg"
                                    alt=""
                                />
                                <span>Watch a Video</span>{" "}
                            </Link>

                            <Link className="" id="inline" to="#logins2" data-id={6337}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28.101"
                                    height="25.446"
                                    viewBox="0 0 28.101 25.446"
                                >
                                    <path
                                        style={{
                                            fill: "none",
                                            stroke: "#463d2b",
                                            strokeWidth: 2,
                                            fillRule: "evenodd"
                                        }}
                                        id="Heart"
                                        d="M24.04 2.111a7.013 7.013 0 0 0-9.982 0l-.982.982-.982-.982a7.058 7.058 0 1 0-9.982 9.982l10.963 10.965L24.04 12.094a7.013 7.013 0 0 0 0-9.982"
                                        className="cls-1"
                                        transform="translate(.975 .975)"
                                    />
                                </svg>
                                <span>Save</span>
                            </Link>
                            <Box style={{ display: "none" }} id="logins2">
                                <Box className="container text-center">
                                    <Box className="register-form">
                                        <Box>
                                            {" "}
                                            <img
                                                data-src="https://www.propertyturkey.com/front/image/logo.png"
                                                width={80}
                                                className="img-fluid lazyload"
                                                alt="Property Turkey"
                                            />{" "}
                                        </Box>
                                        <h3 className="margin-bottom-3 margin-top-1">
                                            Sign up to Save Properties
                                        </h3>
                                        <form
                                            method="POST"
                                            action="https://www.propertyturkey.com/register"
                                            acceptCharset="UTF-8"
                                            className="padding-top-15 randompassform"
                                            noValidate="novalidate"
                                        >
                                            <input
                                                name="_token"
                                                type="hidden"
                                                defaultValue="ihhrAO3DxYL58JpSv7hQAlPr3on06wStOZvY7o0d"
                                            />
                                            <Box className="form-field">
                                                <label>Name</label>
                                                <input
                                                    placeholder="Name"
                                                    validation=""
                                                    name="firstName"
                                                    type="text"
                                                />
                                            </Box>
                                            <Box className="form-field">
                                                <label>E-mail*</label>
                                                <input
                                                    placeholder="E-mail"
                                                    validation="email"
                                                    name="email"
                                                    type="email"
                                                />
                                            </Box>
                                            <Box className="form-field">
                                                <label> Contact Number*</label>
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
                                                        placeholder="Mobile"
                                                        className="input-tel"
                                                        name="mobile"
                                                        type="text"
                                                        autoComplete="off"
                                                    />
                                                </Box>
                                            </Box>
                                            <Box className="form-field hide">
                                                <label>Password*</label>
                                                <input
                                                    placeholder="Password"
                                                    validation=""
                                                    name="password"
                                                    type="password"
                                                    defaultValue=""
                                                />
                                            </Box>
                                            <Box className="form-field hide">
                                                <label>Confirm Password*</label>
                                                <input
                                                    placeholder="Confirm Password"
                                                    validation=""
                                                    name="confirm_password"
                                                    type="password"
                                                    defaultValue=""
                                                />
                                            </Box>
                                            <input type="hidden" name="RegisterUser" defaultValue="" />
                                            <input
                                                className="btn btn-block bg-pt crl-white margin-ver-1"
                                                type="submit"
                                                defaultValue="Register"
                                            />
                                        </form>
                                        <p className="text-left">
                                            {" "}
                                            Do you have an account?{" "}
                                            <Link
                                                className="clr-pt"
                                                to=""
                                            >
                                                {" "}
                                                Login
                                            </Link>
                                        </p>
                                    </Box>
                                </Box>
                            </Box>
                            <Link
                                onClick={handleOverlayClick}
                                className="social-shares">
                                <img
                                    src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                    alt=""
                                />{" "}
                                <span>Share</span>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div
                    id="video"
                    style={{ display: "inline-block" }}
                    className="fancybox-content"
                >
                    {" "}
                    <iframe
                        width={560}
                        height={315}
                        title='Youtube'
                        src="https://www.youtube.com/embed/fsKmhmvmA04"
                       
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
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
                </div>

            </Modal>
        </>


    )
}
