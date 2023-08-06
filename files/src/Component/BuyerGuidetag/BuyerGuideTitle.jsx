import React from 'react'
import { Link } from 'react-router-dom'
import ArticleBuyerGuide from './ArticleBuyerGuide'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import PageHeader from '../../ReUseAbleComponent/PageHeader'

export default function BuyerGuideTitle() {
  const [open,setOpen] = useState(false)
  
  return (
    <>
    {open && (
        <Box onClick={() => setOpen(false)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Box className="flex justify-center items-center">
            <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
              <AiFillFacebook className='w-full h-full text-blue-900' />
              <Typography>facebook</Typography>
            </Link>
            <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
              <AiOutlineTwitter className='w-full h-full text-cyan-500' />
              <Typography>Twitter</Typography>

            </Link>
            <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
              <AiOutlineInstagram className='w-full h-full text-pink-700' />
              <Typography>Instagram</Typography>
            </Link>

            <Link to="#" className="mx-4 w-[100px] h-[100px] flex flex-col gap-1">
              <AiFillLinkedin className='w-full h-full text-blue-900' />
              <Typography>Linkedin</Typography>

            </Link>

          </Box>
        </Box>
      )}

    <div className="col-12  col-md-9  buyer-guide--side-bar-bg-details">
        <div className="container-fluid">
          <PageHeader
              Name="Buyer Guide"
              createdAt={'01 june 2023'}
              UpdatedAt={'01 july 2023'}
            />
          <ArticleBuyerGuide />
        </div>
      </div>

    </>
  )
}
