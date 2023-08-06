import React from 'react'
import Header from '../../ReUseAbleComponent/Header'
import BlogViewContainer from './BlogViewContainer'
import { collection, doc, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../Config';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function BlogView() {

    

  return (
    <div>
      <Header title={'Property USA Blog'}/>
      <BlogViewContainer  />
    </div>
  )
}
