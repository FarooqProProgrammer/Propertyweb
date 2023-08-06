import React from 'react'
import { Link } from 'react-router-dom'
import PhoneComponent from "./PhoneComponent"
import Image from './Image'
import { TypographyComponent } from './TypographyComponent'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Config'

export default function AutoForm() {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();
    const [Interest,setInterest] = useState();

    const handlePhoneInputChange = (telNumber, selectedCountry) => {
        setPhone(selectedCountry);
        console.log(Phone)
    };

    const HandleSubmit = async(e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "Area_of_Interest"), {
            Name:Name,
            Email:Email,
            Phone:Phone,
            Interest
          });
          console.log("Document written with ID: ", docRef.id);
    }


    return (
        <form
            className="box white clearfix h-[550px] overflow-y-auto "
            onSubmit={HandleSubmit}
        >
            <Link >

                <Image
                    className=" lazyloaded"
                    alt="Smartly priced seafront Homes Istanbul"
                    src="https://www.propertyturkey.com/images/exit-extent.jpg"
                />
            </Link>
            <TypographyComponent varient={'p'}>Smartly priced seafront Homes Istanbul</TypographyComponent>
            <TypographyComponent varient={'p'}>Do not miss this opportunity</TypographyComponent>
            <label className="field">
                <input
                    title="your name *"
                    validation=""
                    placeholder="Name"
                    name="name"
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                />
            </label>
            <label className="field">
                <input
                    title="your e-mail *"
                    type="email"
                    validation="email"
                    placeholder="E-mail"
                    name="email"
                    onClick={(e)=>setEmail(e.target.value)}
                />
            </label>
            <div className="field">
                <PhoneComponent
                    containerClassName="intl-tel-input "
                    inputClassName="form-control"
                    defaultCountry={'us'}
                    onPhoneNumberChange={handlePhoneInputChange}
                />
            </div>
            <label className="field">
                <textarea
                    title="Area of interest"
                    rows={3}
                    validation=""
                    placeholder="Area of interest"
                    name="message"
                    cols={50}
                    defaultValue={""}
                    onChange={(e)=>setInterest(e.target.value)}
                />
            </label>
            <br />
            <input type="text" style={{ display: "none" }} name="enqID" defaultValue="" />
            <input className="btn col-3" type="submit" defaultValue="Send Enquire" />
        </form>

    )
}
