import React from 'react'
import PropertyTurkeyHeader from './PropertyTurkeyHeader'
import "react-multi-carousel/lib/styles.css";
import "./utils.css"
import PropertyTop from './PropertyTop';
import VideoData from "./Data"
import Header from '../../ReUseAbleComponent/Header';
import PropertyTurkeyList from './PropertyTurkeyList';
import {  Modal } from 'antd';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom';
import SliderComponent from '../../ReUseAbleComponent/SliderComponent';

const responsive = {
    superLargeDesktop: { // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 1
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 1
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 1
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
};
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


export default function PropertyTurkey() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoID, setvideoID] = useState();

    const showModal = (ID) => {
        setvideoID(ID)
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

            <div className="">
                <Header title={"Property Turkey TV"} />
                <PropertyTurkeyHeader />
                <PropertyTop />
                <PropertyTurkeyList />
                <div class=" w-full lg:h-auto md:h-auto sm:h-auto py-3 flex px-10">
                    <div class="w-[75%]  flex flex-wrap justify-center items-center p-1 gap-5">
                        {
                            VideoData.map((item) => {
                                return (
                                    <div class="VideoData h-[580px]  px-10 py-2 shadow-xl bg-white">
                                        <div className="Image w-full h-[300px] " onClick={() => showModal(item.Video)}>
                                            <img className='w-full h-full'
                                                src={
                                                    item.img
                                                }
                                                alt="" />
                                        </div>
                                        <p className='py-2 text-red-400 font-bold'>
                                            {
                                                item.subtitle
                                            }</p>
                                        <p className='py-2 text-2xl text-gray-400 font-bold'>
                                            {
                                                item.title
                                            }</p>

                                        <p className='py-2 text-md text-gray-900 font-black'>
                                            {
                                                item.Description
                                            }</p>
                                        <div className="w-full h-auto py-1 mt-2  flex justify-between items-center">
                                            <div className="w-[150px] h-[55px]  relative">
                                                <div className="absolute top-1 left-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6 text-red-700">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>

                                                </div>
                                                <div className="absolute top-1 left-10">
                                                    <p>23/02/2023</p>
                                                </div>

                                                <div className="absolute left-2  bottom-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6 text-red-700">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>


                                                {/* --------------- DATE ----------------- */}
                                                <div className="absolute left-10  -bottom-3">
                                                    <p>695</p>
                                                </div>
                                            </div>


                                            {/* --------------- Share Icon -------------- */}
                                            <div className="flex gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-[30px] h-[30px] mt-2 text-gray-800">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                                </svg>
                                                <div className="p-3 bg-red-700">
                                                    <Link to="/viewproperty" className='text-white font-bold'>View Property</Link>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                    <div class="Last  ">

                        <p className='text-2xl font-black'>Top Videos</p>
                        <SliderComponent />

                    </div>
                </div>

            </div>



            <Modal style={{ width:'640px',position: 'relative', top: 5 }} title="Video Player" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="w-full h-full">
                    <ReactPlayer width={"450px"} height={"450px"} url={videoID} />
                </div>
            </Modal>
        </>

    )
}
