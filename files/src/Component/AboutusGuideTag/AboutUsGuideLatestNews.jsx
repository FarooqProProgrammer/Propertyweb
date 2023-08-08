import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { AboutUseGuideData } from '../../Data/AboutUsGuideLatestNews'


export default function AboutUsGuideLatestNews() {
    return (
        <Box className="widget">
            <h3 className="title" style={{}}>
                Latest News
            </h3>
            <Box className="body">
                <ul className="no-bullet">
                    {
                        AboutUseGuideData.map((item)=>{
                            return (
                                <li>
                                <Link
                                    to=""
                                    title={item.Text}
                                >
                                    {item.Text}
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
