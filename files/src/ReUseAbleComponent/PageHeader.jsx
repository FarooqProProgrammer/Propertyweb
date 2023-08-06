import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Path from "../assets/AboutTurkeyTagImages/Path302.svg"
import { useState } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Typography } from 'antd'

export default function PageHeader({Name,UpdatedAt,createdAt}) {
    const [open, setOpen] = useState(false)

    return (
        <>
        {
                open &&
                <Box onClick={() => setOpen(false)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
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
            }
            <Box className="flex content-space-between items-center">
                <h1 itemProp="name headline" className="page-title abhaya buyer-guide--side-bar-bg-details--main-title">
                    {Name}
                </h1>
                <Link onClick={() => setOpen(true)} className="buyer-guide--side-bar-bg-details--social-shares social-shares">
                    <img src={Path} className="no-margin" alt="" />{" "}
                    <span>Share</span>
                </Link>
            </Box>
            <Box className="buyer-guide--side-bar-bg-details--dates">
                <span>Updated:
                </span>
                {UpdatedAt}
                <span className="margin-left-1">Created:
                </span>
                {createdAt}
            </Box>
        </>
    )
}
