import React from 'react'
import SellPropertyBreadCrumb from './SellPropertyBreadCrumb'
import SellPropertyShar from './SellPropertyShar'
import SellPropertyPageContent from './SellPropertyPageContent'

export default function SellProperty() {
  return (
    <div id="main" className='cf  disable-copy '>
      <SellPropertyBreadCrumb />
      <SellPropertyShar />
      <SellPropertyPageContent />
    </div>
  )
}
