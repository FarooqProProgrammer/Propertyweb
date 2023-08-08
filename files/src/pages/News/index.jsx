import React from 'react'
import NewsHeader from './NewsHeader'
import NewsBreadCrumb from './NewsBreadCrumb'
import NewsBodyContainer from './NewsBodyContainer'
import Header from "../../ReUseAbleComponent/Header"
import { useEffect } from 'react'

export default function News() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header title="Property USA Blog" />
      <NewsBreadCrumb />
      <NewsBodyContainer />
    </div>
  )
}
