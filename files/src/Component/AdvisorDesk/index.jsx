import React, { useState } from "react";
import BusinessImage from "../../assets/AdvisorDesk/business-ptjpg__large__720.jpg";
import UserGold from "../../assets/user-gold.svg";
import PhoneComponent from "../../ReUseAbleComponent/PhoneComponent";
import { db } from "../../Config";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

export default function AdvisorDesk() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [stepVisible, setVisible] = useState(false);
  const [Phone, setPhone] = useState();

  const onSubmit = async (data) => {
    console.log(Phone);
    const docRef = await addDoc(collection(db, "AdvisorDesk"), {
      ...data,
      Phone,
    });
    console.log("Document written with ID: ", docRef.id);
    toast("Data Added Successfully!");

    console.log(data);
  };

  const handlePhoneInputChange = (telNumber, selectedCountry) => {
    console.log(telNumber);
    console.log(selectedCountry);
    setPhone(telNumber);
    console.log(Phone);
  };

  return (
    <section className="adviser-video d-desk">
      <div className="wrap-dis-85 wrap wrap-tab-11 wrap-mob-11">
        <div className="row flex content-center">
          <div className="col-12 col-md-4">
            <section className="adviser-form h100">
              <div className="adviser-form-container h100">
                <h2 className="abhaya">
                  Talk to a local Property
                  <br /> USA Adviser
                </h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="body w-88"
                  id="adviser-form"
                >
                  <div className={`step1 step ${stepVisible ? "hide" : ""}`}>
                    <div className="form-field">
                      <label>Where are you searching for homes *</label>
                      <i className="fa fa-search" aria-hidden="true" />
                      <input
                        type="text"
                        className="typeahead validatehomeform"
                        placeholder="Enter city, address, zip"
                        {...register("address")}
                      />
                    </div>
                    <div className="form-field field margin-top-2">
                      <label className="padding-top-xl-05">your e-mail *</label>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <input
                        title="your e-mail *"
                        type="email"
                        id="valemail"
                        className="isValidEmail"
                        validation="email"
                        placeholder="E-mail"
                        name="email"
                        {...register("Email")}
                      />
                      <span className="validationError">
                        Please enter valid email
                      </span>
                    </div>
                    <div
                      className="text-center"
                      onClick={() => setVisible(true)}
                    >
                      <StyledButton title={"Next"} width={"50%"} />
                      {/* <button
                        className="adviser-form--btn"
                        id="adviser-form-step-1"
                      >
                        Next
                      </button> */}
                    </div>
                  </div>
                  <div className={`step2 step ${stepVisible ? "" : "hide"}`}>
                    <div className="form-field field" id="form-nextstep">
                      <label>your name *</label>
                      <i style={{ top: "calc(93% - 1.8rem)" }}>
                        <img
                          data-src={UserGold}
                          width={14}
                          height={15}
                          className="lazyload"
                          alt=""
                        />
                      </i>
                      <input
                        title="your name *"
                        validation=""
                        placeholder="Name"
                        name="name"
                        type="text"
                        {...register("Name")}
                      />
                    </div>
                    <div className="form-field field">
                      <label>Please, write your phone *</label>
                      <div className="intl-tel-input allow-dropdown">
                        <div className="flag-container">
                          <PhoneComponent
                            containerClassName="intl-tel-input"
                            inputClassName="form-control"
                            defaultCountry={"us"}
                            onPhoneNumberChange={handlePhoneInputChange}
                          />
                        </div>
                        <input
                          title="Please, write your phone *"
                          validation=""
                          placeholder="Phone"
                          className="input-tel"
                          name="phone"
                          type="text"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="form-field field">
                      <label>Please, write your message *</label>
                      <textarea
                        title="Please, write your message *"
                        rows={3}
                        validation=""
                        placeholder="Message"
                        name="message"
                        cols={50}
                        defaultValue={""}
                        {...register("Message")}
                      />
                    </div>
                    <input
                      type="text"
                      style={{ display: "none" }}
                      name="enqID"
                      defaultValue=""
                    />
                    <div className="text-center">
                      <input
                        className="adviser-form-submit"
                        type="submit"
                        defaultValue="Send Enquire"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
          <div className="col-12 col-md-1" />
          <div className="col-12 col-md-4">
            <div className="card position-relative custom-youtube-video">
              <img
                data-src="https://www.propertyturkey.com/front/image/images2019/Images/business-ptjpg__large__720.jpg"
                className="custom-youtube-video--bigimg lazyloaded"
                alt=""
                src={BusinessImage}
              />
              <img
                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-brands.svg"
                className="play_video_youtube lazyloaded"
                alt=""
                src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-brands.svg"
              />
              <iframe
                width="100%"
                height={315}
                title="app"
                className="w-sm-100 hide lazyload"
                data-src="https://www.youtube.com/embed/preRes-n9Ew"
                frameBorder={0}
              ></iframe>
              <div className="card-body text-center" id="insertbefore-youtube">
                <h2 className="title-lined abhaya bold clr-pt-darkgrey">
                  Property USA Culture
                </h2>
                <p className="card-text featuredin-title">
                  Tap into our unique Style and Culture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
