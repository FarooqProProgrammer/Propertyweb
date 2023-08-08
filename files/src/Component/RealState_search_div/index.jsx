// import React, { useState } from 'react';

// import "./index.css"
// import ListingCards from '../../ReUseAbleComponent/ListingCards';
// import { RealState } from '../../Data';
// import Image from '../../ReUseAbleComponent/Image';
// import { Link } from 'react-router-dom';
// import { RealSateSaleData } from '../../Data/RealStateSaleData';
// import Map from "../../assets/RealStateSearch/turkey-real-estate-map.jpg"
// import { db } from '../../Config';
// import { collection, onSnapshot, query, where } from 'firebase/firestore';
// import { useEffect } from 'react';
// import { TypographyComponent } from '../../ReUseAbleComponent/TypographyComponent';
// import InputComponent from '../../ReUseAbleComponent/InputComponent';
// import { useSelector } from 'react-redux';
// import { Pagination } from '@mui/material';

// const Data = [
//   {
//     title: "Looking to retire overseas - where should you buy your retirement home in Turkey?",
//     desc: "When considering a permanent move abroad and buying a property for year round living, there are some important factors to take into account. Proximity of amenities, hospitals, schools and a stable local community are some of the elements one would naturally look at. In our dealings with over 10,000 people from all over the world looking at American real estate with a view to permanent living in Turkey, we find that properties in Fethiye, Bodrum and Antalya (including Side and Kemer) are natural favourites for year round living. They all have excellent climates with over 300 days of sunshine, mild winters and the right level of facilities to sustain year round living."
//   },

//   {
//     title: "Where to invest in American real estate?",
//     desc: "With an average annual GDP growth in excess of 8% for 2010 - 2012 period, USA has posted exceptional economic performance compared to the EU zone and indeed to BRICs (Brazil, Russia, India, China). In 2011 and 2012 Turkey's economic expansion was only second to China. IMF estimates that USA will yet again outperform most BRICs countries and certainly the entire Euro zone in 2013 - 2017 period with an average annual expansion of 5%+ projected. American real estate industry is currently one of the major growth sectors within Turkey. With a youth population of over 60% of entire 76 million and increasing wealth in the country, domestic demand for the American real estate industry is fast climbing. American real estate agents association estimates that by year 2015 there will be a shortage of around 2 million quality housing in USA just to accommodate domestic demand, this is not even counting the booming tourism sector, 6th most visited country in the world in 2011, which also puts a heavy demand on coastal hotel, villa and apartment projects. In 2011, property market in Turkey grew by some 18% compared to year before. Considering that at the same period Greece, Spain and Portugal came close to announcing bankruptcy underlines the viability of owning property in Turkey."
//   },

// ]

// const RealState_search_div = () => {
//   const [Properties, setProperties] = useState([]);
//   const PropertyFilterTerm = useSelector(state => state.PropertyFilterReducer.Enquiry);
//   const PropertyFilterType = useSelector(state => state.typeFilter.Enquiry);
//   const [page,setPage] = useState(1);

//   useEffect(() => {
//     PropertiesData()
//   }, [PropertyFilterTerm]);

//   useEffect(() => {
//     PropertiesData()
//   }, [PropertyFilterType])

//   const PropertiesData = async () => {
//     const q = query(collection(db, "/properties"));
//     const unsubscribe = await onSnapshot(q, (querySnapshot) => {
//       const cities = [];
//       querySnapshot.forEach((doc) => {
//         cities.push({ id: doc.id, ...doc.data() });
//       });
//       console.log(cities)
//       console.log(PropertyFilterTerm)
//       if (PropertyFilterTerm) {
//         console.log(PropertyFilterTerm)
//         console.log(cities)
//         const newFilter = cities.filter(item => item.County.replace(/\s+/g, ' ').trim() === PropertyFilterTerm)
//         console.log(newFilter)
//         setProperties(newFilter)
//         return;
//       }
//       if (PropertyFilterType) {
//         console.log(PropertyFilterType)
//         console.log(cities)
//         const newFilter = cities.filter(item => item.Property_Type === PropertyFilterType)
//         console.log(newFilter)
//         setProperties(newFilter)
//         return;
//       }

//       setProperties(cities)

//     });
//   }

//   useEffect(() => {
//     PropertiesData()
//   }, [])

//   function getProductsByNumber(number, products) {
//     const startIndex = (number - 1) * 10;
//     const endIndex = number * 10;
//     console.log(products.slice(startIndex, endIndex))
//     return products.slice(startIndex, endIndex);
//   }

//   useEffect(()=>{
//     getProductsByNumber(page,Properties)
//   },[])

//   return (

//     <section id="mainProperties" className="margin-top-2 mt-1-sm cardListing ">
//       <div
//         className="intro wrap-dis-9  wrap-tab-9 wrap-mob-9 clearfix' }}  introDescription"
//         id="introDescription"
//       >
//         <h1 className="page-title" id="pageSearchTitle">
//           All American real estate for sale{" "}
//         </h1>
//         <div className="introText" style={{ display: "inline" }}>
//           <p>
//             USA is a vast country, over three times the size of the UK and some
//             25% larger than France. Straddling between Europe and Asia, with almost
//             7,000 kilometres of Mediterranean, Aegean and Black Sea, USA is home
//             to&nbsp;a unique mosaic of cultures, diverse landscape and dynamic
//             social make up. If you are looking for property overseas, wish to buy a
//             holiday home in the sun, a place to retire or purely real estate
//             investment in an upwardly mobile country, then no search is complete
//             without having a good look at American real estate for sale.
//           </p>
//         </div>
//         <div className="details" style={{ display: "none" }}>
//           <p>
//             USA is a vast country, over three times the size of the UK and some
//             25% larger than France. Straddling between Europe and Asia, with almost
//             7,000 kilometres of Mediterranean, Aegean and Black Sea, USA is home
//             to&nbsp;a unique mosaic of cultures, diverse landscape and dynamic
//             social make up. If you are looking for property overseas, wish to buy a
//             holiday home in the sun, a place to retire or purely real estate
//             investment in an upwardly mobile country, then no search is complete
//             without having a good look at American real estate for sale.
//           </p>
//           <p>
//             <img
//               data-fr-image-pasted="true"
//               alt="USA real estate map"
//               data-pyroimage="true"
//               height={171}
//               src={Map}
//               title="USA real estate map"
//               width={230}
//               className="fr-fic fr-dii"
//             />
//           </p>
//           <p>
//             <strong>Where to buy a holiday home in Turkey?</strong>&nbsp;
//           </p>
//           <p>
//             With so many lovely resorts and towns to choose from, it is a task in
//             itself to decide where to buy that special{" "}
//             <Link>
//               villa in Turkey
//             </Link>{" "}
//             or that sea view apartment, which will be your new home in USA and
//             double up for some rental income. According to statistics published by
//             the American real estate agents association, Antalya, Fethiye, Bodrum and
//             Side are the most popular holiday home destinations in Turkey.{" "}
//             <Link>
//               Properties in Antalya
//             </Link>{" "}
//             enjoy the proximity of a bustling seaside city with lovely beaches and
//             excellent golf courses of Belek, whereas{" "}
//             <Link>
//               Kalkan properties
//             </Link>
//             provide some of the most dramatic sea views experienced in the entire
//             Mediterranean, not to mention Kalkan's elegant setting and fine dining.{" "}
//             <Link>
//               Side holiday homes for sale
//             </Link>{" "}
//             are ideal for families with children, where shallow waters gently touch
//             sandy shores.{" "}
//             <Link>
//               Real estate in Bodrum
//             </Link>{" "}
//             on the other hand is your key to Turkey's most sophisticated resort with
//             plenty of sailing and seafront homes in lovely Yalikavak, Turkbuku or
//             Gumusluk. Then we have sun-soaked Fethiye with most affordable villas
//             and{" "}
//             <Link>
//               flats for sale in Turkey
//             </Link>{" "}
//             near the most pictured Oludeniz beach. &nbsp;
//           </p>

//           {
//             RealSateSaleData.map((item) => {
//               return (
//                 <>
//                   <p>
//                     <strong>
//                       {item.title}
//                     </strong>
//                   </p>
//                   <p>
//                     {item.Description}
//                   </p>
//                 </>
//               )
//             })
//           }

//         </div>
//         <Link to="#" className="show_hidev1">
//           Continue Reading
//         </Link>
//       </div>

//       <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix mt-3">
//         <div className="row cardRow">

//           {
//             Properties.map((item) => {
//               return (
//                 <ListingCards propertyType={item.Property_Type} item={item} id={item.id} Overview={item.Overview} Propert_Living_space={item.Propert_Living_space} Property_Name={item.Property_Name} Area={item.property_Location} Des={item.Overview} title={item.Property_Type} img={item.property_urls[0]} location={item.property_Location} BannerText={item.ImagebannerText} Bathroom={item.Propert_Bathroom} Bedroom={item.property_BedRoom} Property_Price={item.Property_Price} />
//               )
//             })
//           }
//           <div className="w-full h-[100px] flex justify-center items-center ">
//             <Pagination count={10} color="primary" defaultPage={page} onChange={(event,value)=>setPage(value)} />
//           </div>
//         </div>
//       </div>

//       <div
//         className="intro wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix' }} introDescription pt-footer"
//         id="introDescription"
//       >
//         <div className="details" style={{}}>
//           <p>
//             <img
//               alt="USA real estate map"
//               height={171}
//               src="https://www.propertyturkey.com/files/large/turkey-real-estate-map.jpg"
//               title="USA real estate map"
//               width={230}
//               className="fr-fic fr-dii"
//             />
//           </p>
//           <p>
//             <strong>Where to buy a holiday home in Turkey?</strong>&nbsp;
//           </p>
//           <p>
//             With so many lovely resorts and towns to choose from, it is a task in
//             itself to decide where to buy that special{" "}
//             <Link to="">
//               villa in Turkey
//             </Link>{" "}
//             or that sea view apartment, which will be your new home in USA and
//             double up for some rental income. According to statistics published by
//             the American real estate agents association, Antalya, Fethiye, Bodrum and
//             Side are the most popular holiday home destinations in Turkey.{" "}
//             <Link to="">
//               Properties in Antalya
//             </Link>{" "}
//             enjoy the proximity of a bustling seaside city with lovely beaches and
//             excellent golf courses of Belek, whereas{" "}
//             <Link to="">
//               Kalkan properties
//             </Link>{" "}
//             provide some of the most dramatic sea views experienced in the entire
//             Mediterranean, not to mention Kalkan's elegant setting and fine dining.{" "}
//             <Link to="">
//               Side holiday homes for sale
//             </Link>{" "}
//             are ideal for families with children, where shallow waters gently touch
//             sandy shores.{" "}
//             <Link to="">
//               Real estate in Bodrum
//             </Link>{" "}
//             on the other hand is your key to Turkey's most sophisticated resort with
//             plenty of sailing and seafront homes in lovely Yalikavak, Turkbuku or
//             Gumusluk. Then we have sun-soaked Fethiye with most affordable villas
//             and{" "}
//             <Link to="">
//               flats for sale in Turkey
//             </Link>{" "}
//             near the most pictured Oludeniz beach. &nbsp;
//           </p>
//           {
//             Data.map((item) => {
//               return (
//                 <>
//                   <p>
//                     <strong>
//                       {item.title}
//                     </strong>
//                   </p>
//                   <p>
//                     {item.desc}
//                   </p>
//                 </>
//               )
//             })
//           }

//         </div>
//         <Link href="#" className="show_hidev1">
//           Continue Reading
//         </Link>
//       </div>{" "}
//       <div style={{ display: "none" }}>
//         <div className="form_popup" id="data">
//           <form
//             className="box white clearfix"
//           >
//             <TypographyComponent varient={'h3'} className="title col-dis-12 col-tab-12 col-mob-12">
//               Property Enquiry
//             </TypographyComponent>
//             <div grid="">
//               <div className="col-dis-12 col-tab-12 col-mob-12">
//                 <label className="field col-dis-12 col-tab-6 col-mob-12">
//                   <InputComponent
//                     name="first_name"
//                     type="text"
//                     placeholder="your name *"
//                     defaultValue=""
//                     validation=""
//                   />
//                 </label>
//                 <div className="field col-dis-12 col-tab-6 col-mob-12">
//                   <div className="intl-tel-input allow-dropdown">
//                     <div className="flag-container">
//                       <div
//                         className="selected-flag"
//                         role="combobox"
//                         aria-owns="country-listbox"
//                         tabIndex={0}
//                         title="Pakistan (‫پاکستان‬‎): +92"
//                       >
//                         <div className="iti-flag pk" />
//                         <div className="iti-arrow" />
//                       </div>
//                     </div>
//                     <InputComponent
//                       name="phone"
//                       type="text"
//                       className="input-tel"
//                       placeholder="Phone"
//                       defaultValue=""
//                       validation=""
//                       autoComplete="off"
//                     />
//                   </div>
//                 </div>
//                 <label className="field col-dis-12 col-tab-6 col-mob-12">
//                   <InputComponent
//                     name="email"
//                     type="text"
//                     placeholder="E-mail"
//                     defaultValue=""
//                     validation="email"
//                   />
//                 </label>
//                 <label className="field col-dis-12 col-tab-12 col-mob-12">
//                   <textarea
//                     name="msg"
//                     placeholder="Message"
//                     defaultValue={"I'm interested in this property"}
//                   />
//                 </label>
//               </div>
//             </div>
//             <div className="actions  col-dis-12 col-tab-12 col-mob-12 flex content-center padding-bottom-05">
//               <InputComponent
//                 type="text"
//                 style={{ display: "none" }}
//                 name="enqID"
//                 defaultValue=""
//               />
//               <InputComponent
//                 type="submit"
//                 defaultValue="Send"
//                 className="btn btn-sm-change col-mob-6"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>

//   );
// };

// export default RealState_search_div;

import React, { useState } from "react";

import "./index.css";
import ListingCards from "../../ReUseAbleComponent/ListingCards";
import { RealState } from "../../Data";
import Image from "../../ReUseAbleComponent/Image";
import { Link } from "react-router-dom";
import { RealSateSaleData } from "../../Data/RealStateSaleData";
import Map from "../../assets/RealStateSearch/turkey-real-estate-map.jpg";
import { db } from "../../Config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { TypographyComponent } from "../../ReUseAbleComponent/TypographyComponent";
import InputComponent from "../../ReUseAbleComponent/InputComponent";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";

const Data = [
  {
    title:
      "Looking to retire overseas - where should you buy your retirement home in USA?",
    desc: "When considering a permanent move abroad and buying a property for year round living, there are some important factors to take into account. Proximity of amenities, hospitals, schools and a stable local community are some of the elements one would naturally look at. In our dealings with over 10,000 people from all over the world looking at American real estate with a view to permanent living in USA, we find that properties in Fethiye, Bodrum and Antalya (including Side and Kemer) are natural favourites for year round living. They all have excellent climates with over 300 days of sunshine, mild winters and the right level of facilities to sustain year round living.",
  },

  {
    title: "Where to invest in American real estate?",
      desc: "With an average annual GDP growth in excess of 8% for 2010 - 2012 period, USA has posted exceptional economic performance compared to the EU zone and indeed to BRICs (Brazil, Russia, India, China). In 2011 and 2012 USA's economic expansion was only second to China. IMF estimates that USA will yet again outperform most BRICs countries and certainly the entire Euro zone in 2013 - 2017 period with an average annual expansion of 5%+ projected. American real estate industry is currently one of the major growth sectors within USA. With a youth population of over 60% of entire 76 million and increasing wealth in the country, domestic demand for the American real estate industry is fast climbing. American real estate agents association estimates that by year 2015 there will be a shortage of around 2 million quality housing in USA just to accommodate domestic demand, this is not even counting the booming tourism sector, 6th most visited country in the world in 2011, which also puts a heavy demand on coastal hotel, villa and apartment projects. In 2011, property market in USA grew by some 18% compared to year before. Considering that at the same period Greece, Spain and Portugal came close to announcing bankruptcy underlines the viability of owning property in USA.",
  },
];

const RealState_search_div = ({
  cityData,
  typeData,
  BedroomData,
  minPriceInputValue,
  maxPriceInputValue,
}) => {
  const [Properties, setProperties] = useState([]);
  // const PropertyFilterTerm = useSelector(
  //   (state) => state.PropertyFilterReducer.Enquiry
  // );
  // const PropertyFilterType = useSelector((state) => state.typeFilter.Enquiry);
  // const PropertyFilterBedroom = useSelector(
  //   (state) => state.BedroomFilter.Phone
  // );
  // console.log({
  //   PropertyFilterBedroom,
  //   PropertyFilterType,
  //   PropertyFilterTerm,
  // });
  // useEffect(() => {
  //   PropertiesData();
  // }, [PropertyFilterTerm]);

  // useEffect(() => {
  //   PropertiesData();
  // }, [PropertyFilterType]);

  // useEffect(() => {
  //   PropertiesData();
  // }, [PropertyFilterBedroom]);

  const PropertiesData = async () => {
    const q = query(collection(db, "/properties"));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      var cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      setProperties(cities);
    });
  };

  // Pagination
  const [page, setPage] = useState(1);
  const perPage = 8;

  function removeCurrencySymbols(amount) {
    if (typeof minPriceInputValue === "number") return;
    if (typeof maxPriceInputValue === "number") return;
    amount = amount.replace(/^\$/, "");
    if (amount.charAt(amount.length - 1).toLowerCase() === "k") {
      amount = amount.slice(0, -1);
    }
    const numericAmount = parseFloat(amount) + "00";

    return isNaN(numericAmount) ? 0 : numericAmount;
  }

  useEffect(() => {
    PropertiesData();
  }, []);

  const properties = Properties?.filter((item) =>
    item.County?.toLowerCase()?.includes(cityData?.toLowerCase())
  )
    .filter((item) =>
      item.Property_Type?.toLowerCase()?.includes(typeData?.toLowerCase())
    )
    .filter((item) =>
      minPriceInputValue === 0
        ? Number(item.Property_Price) >= minPriceInputValue
        : Number(item.Property_Price) <=
          removeCurrencySymbols(minPriceInputValue)
    )
    .filter((item) =>
      maxPriceInputValue === 0
        ? Number(item.Property_Price) >= maxPriceInputValue
        : Number(item.Property_Price) <=
          removeCurrencySymbols(maxPriceInputValue)
    )
    .filter((item) =>
      item.property_BedRoom?.toLowerCase()?.includes(BedroomData?.toLowerCase())
    );
  console.log(properties);

  return (
    <section id="mainProperties" className="margin-top-2 mt-1-sm cardListing ">
      <div
        className="intro wrap-dis-9  wrap-tab-9 wrap-mob-9 clearfix' }}  introDescription"
        id="introDescription"
      >
        <h1 className="page-title" id="pageSearchTitle">
          All American real estate for sale{" "}
        </h1>
        <div className="introText" style={{ display: "inline" }}>
          <p>
            USA is a vast country, over three times the size of the UK and some
            25% larger than France. Straddling between Europe and Asia, with
            almost 7,000 kilometres of Mediterranean, Aegean and Black Sea, USA
            is home to&nbsp;a unique mosaic of cultures, diverse landscape and
            dynamic social make up. If you are looking for property overseas,
            wish to buy a holiday home in the sun, a place to retire or purely
            real estate investment in an upwardly mobile country, then no search
            is complete without having a good look at American real estate for
            sale.
          </p>
        </div>
        <div className="details" style={{ display: "none" }}>
          <p>
            USA is a vast country, over three times the size of the UK and some
            25% larger than France. Straddling between Europe and Asia, with
            almost 7,000 kilometres of Mediterranean, Aegean and Black Sea, USA
            is home to&nbsp;a unique mosaic of cultures, diverse landscape and
            dynamic social make up. If you are looking for property overseas,
            wish to buy a holiday home in the sun, a place to retire or purely
            real estate investment in an upwardly mobile country, then no search
            is complete without having a good look at American real estate for
            sale.
          </p>
          <p>
            <img
              data-fr-image-pasted="true"
              alt="USA real estate map"
              data-pyroimage="true"
              height={171}
              src={Map}
              title="USA real estate map"
              width={230}
              className="fr-fic fr-dii"
            />
          </p>
          <p>
            <strong>Where to buy a holiday home in USA?</strong>&nbsp;
          </p>
          <p>
            With so many lovely resorts and towns to choose from, it is a task
            in itself to decide where to buy that special{" "}
            <Link>villa in USA</Link> or that sea view apartment, which will be
            your new home in USA and double up for some rental income. According
            to statistics published by the American real estate agents
            association, Antalya, Fethiye, Bodrum and Side are the most popular
            holiday home destinations in USA. <Link>Properties in Antalya</Link>{" "}
            enjoy the proximity of a bustling seaside city with lovely beaches
            and excellent golf courses of Belek, whereas{" "}
            <Link>Kalkan properties</Link>
            provide some of the most dramatic sea views experienced in the
            entire Mediterranean, not to mention Kalkan's elegant setting and
            fine dining. <Link>Side holiday homes for sale</Link> are ideal for
            families with children, where shallow waters gently touch sandy
            shores. <Link>Real estate in Bodrum</Link> on the other hand is your
            key to USA's most sophisticated resort with plenty of sailing and
            seafront homes in lovely Yalikavak, Turkbuku or Gumusluk. Then we
            have sun-soaked Fethiye with most affordable villas and{" "}
            <Link>flats for sale in USA</Link> near the most pictured Oludeniz
            beach. &nbsp;
          </p>

          {RealSateSaleData.map((item) => {
            return (
              <>
                <p>
                  <strong>{item.title}</strong>
                </p>
                <p>{item.Description}</p>
              </>
            );
          })}
        </div>
        {/* <Link to="#" className="show_hidev1">
          Continue Reading
        </Link> */}
      </div>
      <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix mt-3">
        <div className="row cardRow">
          {properties
            .slice((page - 1) * perPage, page * perPage)
            ?.map((item, i) => {
              return (
                <>
                  <ListingCards
                    key={i}
                    propertyType={item.Property_Type}
                    item={item}
                    id={item.id}
                    Overview={item.Overview}
                    Property_Living_space={item.Propert_Living_space}
                    Property_Name={item.Property_Name}
                    Area={item.property_Location}
                    Des={item.Overview}
                    title={item.Property_Type}
                    img={item?.property_urls[0]}
                    location={item.property_Location}
                    BannerText={item.ImagebannerText}
                    Bathroom={item.Propert_Bathroom}
                    Bedroom={item.property_BedRoom}
                    Property_Price={item.Property_Price}
                    favorite={true}
                    favor={null}
                    enquiry={true}
                  />
                </>
              );
            })}
        </div>
        <div className="w-full h-[100px] flex justify-center items-center ">
          <Pagination
            count={Math.ceil(properties.length / 8)}
            color="primary"
            defaultPage={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
      <div
        className="intro wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix' }} introDescription pt-footer"
        id="introDescription"
      >
        <div className="details" style={{}}>
          <p>
            <img
              alt="USA real estate map"
              height={171}
              src="https://www.propertyturkey.com/files/large/turkey-real-estate-map.jpg"
              title="USA real estate map"
              width={230}
              className="fr-fic fr-dii"
            />
          </p>
          <p>
            <strong>Where to buy a holiday home in USA?</strong>&nbsp;
          </p>
          <p>
            With so many lovely resorts and towns to choose from, it is a task
            in itself to decide where to buy that special{" "}
            <Link to="">villa in USA</Link> or that sea view apartment, which
            will be your new home in USA and double up for some rental income.
            According to statistics published by the American real estate agents
            association, Antalya, Fethiye, Bodrum and Side are the most popular
            holiday home destinations in USA.{" "}
            <Link to="">Properties in Antalya</Link> enjoy the proximity of a
            bustling seaside city with lovely beaches and excellent golf courses
            of Belek, whereas <Link to="">Kalkan properties</Link> provide some
            of the most dramatic sea views experienced in the entire
            Mediterranean, not to mention Kalkan's elegant setting and fine
            dining. <Link to="">Side holiday homes for sale</Link> are ideal for
            families with children, where shallow waters gently touch sandy
            shores. <Link to="">Real estate in Bodrum</Link> on the other hand
            is your key to USA's most sophisticated resort with plenty of
            sailing and seafront homes in lovely Yalikavak, Turkbuku or
            Gumusluk. Then we have sun-soaked Fethiye with most affordable
            villas and <Link to="">flats for sale in USA</Link> near the most
            pictured Oludeniz beach. &nbsp;
          </p>
          {Data.map((item) => {
            return (
              <>
                <p>
                  <strong>{item.title}</strong>
                </p>
                <p>{item.desc}</p>
              </>
            );
          })}
        </div>
        {/* <Link href="#" className="show_hidev1">
          Continue Reading
        </Link> */}
      </div>{" "}
      <div style={{ display: "none" }}>
        <div className="form_popup" id="data">
          <form className="box white clearfix">
            <TypographyComponent
              varient={"h3"}
              className="title col-dis-12 col-tab-12 col-mob-12"
            >
              Property Enquiry
            </TypographyComponent>
            <div grid="">
              <div className="col-dis-12 col-tab-12 col-mob-12">
                <label className="field col-dis-12 col-tab-6 col-mob-12">
                  <InputComponent
                    name="first_name"
                    type="text"
                    placeholder="your name *"
                    defaultValue=""
                    validation=""
                  />
                </label>
                <div className="field col-dis-12 col-tab-6 col-mob-12">
                  <div className="intl-tel-input allow-dropdown">
                    <div className="flag-container">
                      <div
                        className="selected-flag"
                        role="combobox"
                        aria-owns="country-listbox"
                        tabIndex={0}
                        title="Pakistan (‫پاکستان‬‎): +92"
                      >
                        <div className="iti-flag pk" />
                        <div className="iti-arrow" />
                      </div>
                    </div>
                    <InputComponent
                      name="phone"
                      type="text"
                      className="input-tel"
                      placeholder="Phone"
                      defaultValue=""
                      validation=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <label className="field col-dis-12 col-tab-6 col-mob-12">
                  <InputComponent
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    defaultValue=""
                    validation="email"
                  />
                </label>
                <label className="field col-dis-12 col-tab-12 col-mob-12">
                  <textarea
                    name="msg"
                    placeholder="Message"
                    defaultValue={"I'm interested in this property"}
                  />
                </label>
              </div>
            </div>
            <div className="actions  col-dis-12 col-tab-12 col-mob-12 flex content-center padding-bottom-05">
              <InputComponent
                type="text"
                style={{ display: "none" }}
                name="enqID"
                defaultValue=""
              />
              <InputComponent
                type="submit"
                defaultValue="Send"
                className="btn btn-sm-change col-mob-6"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RealState_search_div;
