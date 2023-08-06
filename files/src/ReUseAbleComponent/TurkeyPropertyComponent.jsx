import { Box } from '@mui/material'
import React from 'react'
import Image from './Image'

export default function TurkeyPropertyComponent({ Img, Description }) {
    return (
        <Box className="card card-border about-card-color ">
            <Box className="card-header card-header-bg ">
                <Image
                    className="testmonial-img lazyloaded ml-[38%]"
                    src={Img}
                />
            </Box>
            <Box className="card-body">
                <h5 className="card-title abhaya extra-bold">Since 2001</h5>
                <p className="card-text lg:text-lg md:text-md sm:text-sm">
                    {Description}
                </p>
            </Box>
        </Box>
    )
}
