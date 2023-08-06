import { Box, Typography } from '@mui/material'
import React from 'react'
import PhoneComponent from '../../ReUseAbleComponent/PhoneComponent'

export default function ViewContactForm() {
    return (
        <div className="property_price viewForm" style={{}}>
            <form
                action="https://www.propertyturkey.com/new-property-enquiry"
                method="post"
                className="endpage-form"
                noValidate="novalidate"
            >
                <h3
                    className="title d-flex justify-content-center"
                    style={{ fontSize: "1.5rem" }}
                >
                    <span style={{ color: "#b93006", fontWeight: "bold" }}>
                        Contact Property Turkey for All Your Questions and Queries
                    </span>
                </h3>
                <div>
                    <div>
                        <label className="">
                            {" "}
                            Name <span>*</span>
                            <input
                                name="first_name"
                                type="text"
                                placeholder="First name"
                                defaultValue="Muhammad Farooq"
                                validation=""
                            />
                        </label>
                        <div className="custom-endpage-label">
                            {" "}
                            Phone <span className="custom-endpage-span">*</span>
                            <PhoneComponent
                                containerClassName="intl-tel-input "
                                inputClassName="form-control"
                                defaultCountry={'us'}
                            //   onPhoneNumberChange={handlePhoneInputChange}
                            />
                        </div>
                        <label className="">
                            E-mail <span>*</span>
                            <input
                                name="email"
                                type="text"
                                placeholder="E-mail"
                            />
                        </label>
                        <label className="">

                            Message <span>*</span>
                            <textarea
                                style={{ resize: "none" }}
                                name="msg"
                                placeholder="Message"
                                className="clr-pt-darkgrey valid"
                                defaultValue={"I'm interested in this property"}
                            />
                        </label>
                    </div>
                </div>
                <div className="actions">
                    <input
                        name="requestUrl"
                        type="hidden"
                        defaultValue="https://www.propertyturkey.com/"
                    />
                    <input
                        type="hidden"
                        id="prop6902"
                        defaultValue={6902}
                        name="propertyID[]"
                    />
                    <input
                        type="text"
                        style={{ display: "none" }}
                        name="enqID"
                        defaultValue=""
                    />
                </div>
                <button
                    type="submit"
                    className="add_enquire btn col-dis-12 col-tab-12 col-mob-12 pos-static-sm"
                    style={{ fontSize: 22, fontWeight: "bold" }}
                >
                    <img
                        src="https://www.propertyturkey.com/front/image/images2019/Icons/questionmark.svg"
                        alt="questionmark"
                    />
                    GET IN TOUCH WITH US
                </button>
            </form>

            <a
                
                rel="nofollow"
                className="print"
                style={{ visibility: "hidden" }}
            >
                <i className="fa fa-print" /> Print
            </a>
        </div>

    )
}
