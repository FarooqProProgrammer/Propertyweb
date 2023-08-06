import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'

export default function ArticalComponent({ description, title, img, date }) {
    return (
        <article
            itemScope=""
            itemType="http://schema.org/Article"
            className="listing-card"
        >
            <Typography itemProp="name headline" className="page-title">
                <Link
            
                    title="Proud to become Turkish Citizens"
                >
                    {title}
                </Link>
            </Typography>
            <Box itemScope="" itemType="http://schema.org/BlogPosting">
                <Box itemProp="articleBody">
                    <figure className="col-dis-4 col-tab-4 col-mob-12">
                        <Link
                            title="Proud to become Turkish Citizens"
                        >
                            <Image
                                src={img}
                                alt="Proud to become Turkish Citizens"
                            />
                        </Link>
                    </figure>
                    <Typography>
                        {description}
                    </Typography>
                </Box>
                <footer className="meta cf">
                    <Box className=" col-dis-12 col-tab-12 col-mob-12">
                        <i className="fa fa-calendar" /> {date}
                    </Box>
                </footer>
            </Box>
        </article>
    )
}
