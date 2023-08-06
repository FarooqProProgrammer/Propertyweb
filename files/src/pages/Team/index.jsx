import React from 'react'
import Header from '../../ReUseAbleComponent/Header'
import TeamHeader from './TeamHeader'
import TeamBody from './TeamBody'

export default function Team() {
  return (
    <div>
      <Header title={"Bodrum Team"}/>
      <TeamHeader />
      <TeamBody />
    </div>
  )
}
