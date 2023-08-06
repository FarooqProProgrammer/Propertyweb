import React from 'react'
import TurkeyNewsHeader from './TurkeyNewsHeader'
import TurkeyNewsBreadCrumb from './TurkeyNewsBreadCrumb'
import TurkeyNewsBody from './TurkeyNewsBody'
import Header from '../../ReUseAbleComponent/Header'

export default function TurkeyNews() {
  return (
    <div>
      {/* <TurkeyNewsHeader /> */}
      <Header title={"Property and Invest"}/>
      <TurkeyNewsBreadCrumb />
      <TurkeyNewsBody />
    </div>
  )
}
