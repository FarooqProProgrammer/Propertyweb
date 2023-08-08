import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { AboutUseGuidePostData } from '../../Data/AboutUsGuideLatestNews'

export default function AboutUsGuideLatestPost() {
    return (
        <Box className="widget">
            <h3 className="title" style={{}}>
                Latest Posts
            </h3>
            <Box className="body">
                <ul className="no-bullet">
                    {
                        AboutUseGuidePostData.map((item)=>{
                            return (
                                <li>
                                <Link
                                    href=""
                                    title={item.Post}
                                >
                                    {item.Post}
                                </Link>
                            </li>
                            )
                        })
                    }
                   
                   
                </ul>
            </Box>
        </Box>
    )
}
