import React, { useEffect } from 'react'
import FeaturedBreadCrumb from './FeaturedBreadCrumb'
import FeaturedBody from './FeaturedBody'

export default function Featured() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
        <section id="main" className='cf  disable-copy '>
            <FeaturedBreadCrumb />
            {/* <FeaturedHeader /> */}
            <FeaturedBody />
        </section>
  )
}
