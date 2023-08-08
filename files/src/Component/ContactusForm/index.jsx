import React, { useEffect, useState } from "react";
import "./ContactusForm.css";
import { db } from "../../Config";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsMap } from "react-icons/bs";
import PhoneComponent from "../../ReUseAbleComponent/PhoneComponent";
import { ContactPageData } from "../../Data/ContactPageData";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

export default function ContactusForm() {
  const user = useSelector((state) => state.AuthReducer.login);
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [error, seterror] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(user);
  }, []);

  const HandleSubmit = async (e) => {
    // Add a new document with a generated id.
    if (user.uid === null) {
      return toast("Please Login First");
    }

    if (Name === "" || Phone === "" || Email === "" || selectedValue === "") {
      return toast("Filled All the fields to proceed further");
    }
    e.preventDefault();
    console.log(Name);
    console.log(Phone);
    console.log(Email);
    console.log(selectedValue);
    const docRef = await addDoc(collection(db, "Contact__Form"), {
      id: user.uid,
      name: Name,
      phone: Phone,
      Email,
      Subject: selectedValue,
      Message,
    });
    console.log("Document written with ID: ", docRef.id);

    toast("Form Submitted Successfully");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
  const HandleEmailCheck = (value) => {
    if (isValidEmail) {
      setEmail(value);
      seterror("");
      return;
    } else {
      seterror("Your Email is Not Valid");
    }
  };

  const handlePhoneInputChange = (telNumber, selectedCountry) => {
    setPhone(selectedCountry);
    console.log(Phone);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
      <section className="col-dis-8 col-tab-8 col-mob-12 fl-dis-right fl-tab-right">
        <form
          onSubmit={HandleSubmit}
          className="box white contactus-form"
          style={{
            borderRadius: "10px",
            margin: "20px 0",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <h1 className="title text-center clr-pt-darkgrey abhaya">
            Connect With Us
          </h1>
          <label className="field">
            <b>Name:</b>
            <input
              name="full_name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div className="field margin-ver-05">
            <b className="margin-ver-05">Phone:</b>
            <PhoneComponent
              containerClassName="intl-tel-input "
              inputClassName="form-control"
              defaultCountry={"us"}
              onPhoneNumberChange={handlePhoneInputChange}
            />
          </div>
          <label className="field">
            <b className="padding-top-05">E-mail:</b>
            <input
              name="email"
              onChange={(e) => HandleEmailCheck(e.target.value)}
              type="email"
              validation="email"
            />
          </label>
          <label className="field">
            <b>Subject:</b>
            <select
              name="subject"
              className="subject hidden-field"
              onChange={(event) => setSelectedValue(event.target.value)}
            >
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className="field">
            <b>Message:</b>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="msg"
              rows={4}
              style={{ height: "170px" }}
            />
          </label>
          <input
            type="text"
            name="conTactUS"
            defaultValue=""
            style={{ display: "none" }}
          />
          {error && <p>{error}</p>}
          <div className="cf text-center">
            <StyledButton title={"Send"} type="submit" />
            {/* <input
              type="submit"
              defaultValue="Send"
              className="btn contactus-hover bg-pt crl-white"
            /> */}
          </div>
        </form>
      </section>
      <aside className="col-dis-4 col-tab-4 col-mob-12" id="contactus-style">
        {/* Contact Us */}
        <h1 className="page-title">Contact Us</h1>
        <h3 className="title">Office Locations</h3>
        {ContactPageData.map((item) => {
          return (
            <>
              <div className="officelocation">
                <b>
                  <Link
                    to=""
                    title="Property USA UK Head Office"
                    className="flex gap-2"
                    style={{ alignItems: "center" }}
                  >
                    <BsMap />

                    {item.Office}
                  </Link>
                </b>
                <label>{item.Address1}</label>
                <label>{item.Address1}</label>
                <label>
                  Telephone:{" "}
                  <b className="" dir="ltr">
                    {item.TelePhone}
                  </b>
                </label>
                <label>
                  E-mail:{" "}
                  <b className="">
                    <Link className="text-[#5081ff]" to="">
                      {item.Email}
                    </Link>
                  </b>
                </label>
              </div>
              <hr />
            </>
          );
        })}
      </aside>
    </div>
  );
}
