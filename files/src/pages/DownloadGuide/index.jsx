import React, { useEffect } from 'react'
import Header from '../../ReUseAbleComponent/Header'
import DownloadGuideBody from './DownloadGuideBody'

export default function DownloadGuide() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  
  return (
    <div>
      <Header title="Download Buyer guide PDF"/>
      <DownloadGuideBody />
    </div>
  )
}
