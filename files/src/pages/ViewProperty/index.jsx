import React, { useEffect } from 'react'
import ViewPropertyBreadCrumb from './ViewPropertyBreadCrumb'
import ViewPropertyBody from './ViewPropertyBody'
import Header from "../../ReUseAbleComponent/Header"
import "./index.css"

export default function ViewProperty() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <div id="main" className='cf  disable-copy '>
      <Header to="View Property"/>
      <ViewPropertyBreadCrumb />
      <ViewPropertyBody />
    </div>
  )
}
