import React from 'react'
import Header from './Component/Header'
import CityGuide from './Component/CityGuide'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Config';
import { useEffect } from 'react';

export default function AboutTurkeyCityInfo() {
  const {id} = useParams();
  const [data,setData] = useState();


  const dataFetch = () =>{
      const unsub = onSnapshot(doc(db, "Contents", id), (doc) => {
          console.log({id:doc.id,...doc.data()});
          setData({id:doc.id,...doc.data()})
      });
  }
  useEffect(()=>{
      dataFetch()
  },[])


  return (
    <div>
      <Header data={data}/>
      <CityGuide data={data}/>
    </div>
)
}
