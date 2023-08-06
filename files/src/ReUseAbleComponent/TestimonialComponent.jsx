import { Box } from '@mui/material'
import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

export default function TestimonialComponent({Title,Description}) {
    return (
        <Box
            className="owl-item active"
            style={{ width: "405.688px", marginRight: 30 }}
        >
            <Box className="item">
                <Image
                    className="testimonal-img lazyloaded"
                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                    src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                />
                <Link>
                    <b>{Title}</b>
                </Link>
                <p limit={300}>
                    {Description}
                </p>
                <Box className="testimonial-date">
                    <Image
                        className=" lazyloaded"
                        data-src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                        src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                    />
                    <h4>
                        {" "}
                        /<span>13 Dec 2022</span>
                    </h4>
                </Box>
            </Box>
        </Box>
    )
}
