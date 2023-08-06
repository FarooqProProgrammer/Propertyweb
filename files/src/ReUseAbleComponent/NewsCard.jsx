import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsCard(props) {
  return (
    <Box className="card tvlist-card">
      <Box className="row no-gutters shadow-card">
        <Box className="col-md-4 position-relative">
          <Link 
            className="flex blogCardImg"
          >
            <img
              className="img-width-height-100 lazyloaded"
              alt="Turkish Airlines records net profit for sixth consecutive quarter"
              src={props.img}
            />
          </Link>
        </Box>
        <Box className="col-md-8">
          <Box className="card-body">
            <Typography variant='p' className="propertynews-date">
              <Typography varient='span'>
                <i className="fa fa-clock-o clr-pt-darkred" />{" "}
                &nbsp;&nbsp;{props.time}
              </Typography>
            </Typography>
            <Link 
              className="propertynews-title"
              to=""
              title="Turkish Airlines records net profit for sixth consecutive quarter"
            >
              {props.title}
            </Link>
            <Typography varient='span' className="propertynews-span" limit={300}>
              {props.Description}
            </Typography>
            <Box className="margin-top-1 propertynews-btn">
              <Link
                to=""
                className="btn tvlist-card--btn"
                target="_blank"
              >
                Read More
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
