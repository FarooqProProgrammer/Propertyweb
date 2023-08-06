import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image from './Image';
import { BsTypeH1 } from 'react-icons/bs';


export default function ShareIcon({ Updated, Created, title }) {
  const [isOpen ,setIsOpen] = useState(false);

  return (
    <>

    {
      isOpen && <Box  onClick={()=> setIsOpen(false)} className="fixed top-0 left-0 w-full h-full flex justify-center gap-10 items-center bg-gray-900 bg-opacity-50">
      <Box  className=" p-8 rounded-lg max-w-md">
        <Box  className="flex justify-center">
          <Link
            
            
            className="mx-2"
          >
            <FaFacebookF size={90} className="text-blue-600 text-3xl hover:text-blue-800 transition duration-300" />
          </Link>
          <Link
           
            
            className="mx-2"
          >
            <FaTwitter  size={90} className="text-blue-400 text-3xl hover:text-blue-600 transition duration-300" />
          </Link>
          <Link
            
            
            className="mx-2"
          >
            <FaInstagram size={90} className="text-pink-600 text-3xl hover:text-pink-800 transition duration-300" />
          </Link>
          <Link
            to="https://www.linkedin.com"
 
            
            className="mx-2"
          >
            <FaLinkedin size={90} className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300" />
          </Link>
        </Box >
      </Box >
    </Box >
    }
      


      <Box  className="endpage-main-intro ">
        <Box  className="endpage-title-actions">
          <Box  className="endpage-title">
            <meta
              itemProp="url"
              content="https://www.propertyturkey.com/about-us"
            />
            <Typography varient="h3" className="d-mobile">
              <label className="date">{Updated}</label>
              <label className="date ">{Created}</label>
            </Typography>
            <Box  className="endpage-actions d-mobile share-btn-pos">
              <Link   className="social-shares">
                <Image
                  src="https://www.propertyturkey.com/front/image/icons/share-alt-solid.-gold.svg"
                  width={21}
                  alt=""
                />
              </Link>
            </Box >
            <h1 itemProp="name headline" className="page-title abhaya">
              {title}
            </h1>
            <Typography varient="h3" className="d-desk">
              <Box  className="flex">
                <Box  className="d-desk"></Box >
                <label className="date no-margin">
                  <Typography varient="span"  className="clr-pt">{Updated}</Typography>
                </label>
                <label className="date no-margin ml-1-important">
                  <Typography varient="span"  className="clr-pt">{Created}</Typography>
                </label>
              </Box >
            </Typography>
            <Box  className="d-mobile"></Box >
          </Box >
          <Box  className="endpage-actions d-desk">
            <Link onClick={()=> setIsOpen(!isOpen)}  className="social-shares">
              <img
                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                alt=""
              />
            </Link>
          </Box >
        </Box >
      </Box >
    </>

  )
}
