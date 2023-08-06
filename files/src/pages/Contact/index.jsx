import React from 'react'
import { ContactBreadCrumb, ContactusForm } from '../../Component'
import Header from '../../ReUseAbleComponent/Header'

export default function Contact() {
  return (
    <section id='main'>
      <Header title={"Contact"}/>
      <ContactusForm />
    </section>
  )
}
