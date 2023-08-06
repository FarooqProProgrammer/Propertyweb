import React from 'react'
import Header from '../../ReUseAbleComponent/Header'
import ContactBody from './ContactBody'


export default function Contactus() {
  return (
    <section id="main" className='cf enable-copy'>
      <Header title="contact us" />
      <ContactBody /> 
    </section>
  )
}
