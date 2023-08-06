import { Box, Typography } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom"
import InputComponent from '../../ReUseAbleComponent/InputComponent'

export default function TurkeyAdvisor() {
    return (
        <section className="adviser-form d-mobile">
            <Box className="adviser-form-container">
                <Typography varient="h2" className="abhaya">
                    Talk to a local Property
                    <br /> USA Adviser
                </Typography>
                <form
                    acceptCharset="UTF-8"
                    className="body"
                    id="adviser-form"
                >
                    <Box className="step1 step">
                        <Box className="form-field">
                            <label>Where are you searching for homes *</label>
                            <i className="fa fa-search" aria-hidden="true" />
                            <InputComponent
                                type="text"
                                className="typeahead"
                                placeholder="Enter city, address, zip"
                            />
                        </Box>
                        <Box className="form-field field">
                            <label>your e-mail *</label>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <InputComponent
                                title="your e-mail *"
                                type="email"
                                validation="email"
                                placeholder="E-mail"
                                name="email"
                            />
                            <span className="validationError">Please enter valid email</span>
                        </Box>
                        <Box className="text-center">
                            <Link to="" className="adviser-form--btn" id="adviser-form-step-1">
                                Next
                            </Link>
                        </Box>
                    </Box>
                    <Box className="step2 step hide">
                        <Box className="form-field field">
                            <label>your name *</label>
                            <i className="fa fa-search" aria-hidden="true" />
                            <InputComponent
                                title="your name *"
                                validation=""
                                placeholder="Name"
                                name="name"
                                type="text"
                            />
                        </Box>
                        <Box className="form-field field">
                            <label>Please, write your phone *</label>
                            <Box className="intl-tel-input allow-dropdown">
                                <Box className="flag-container">
                                    <Box
                                        className="selected-flag"
                                        role="combobox"
                                        aria-owns="country-listbox"
                                        tabIndex={0}
                                        title="Pakistan (‫پاکستان‬‎): +92"
                                    >
                                        <Box className="iti-flag pk" />
                                        <Box className="iti-arrow" />
                                    </Box>
                                </Box>
                                <InputComponent
                                    title="Please, write your phone *"
                                    validation=""
                                    placeholder="Phone"
                                    className="input-tel"
                                    name="phone"
                                    type="text"
                                    autoComplete="off"
                                />
                            </Box>
                        </Box>
                        <Box className="form-field field">
                            <label>Please, write your message *</label>
                            <textarea
                                title="Please, write your message *"
                                rows={3}
                                validation=""
                                placeholder="Message"
                                name="message"
                                cols={50}
                                defaultValue={""}
                            />
                        </Box>
                        <InputComponent
                            type="text"
                            style={{ display: "none" }}
                            name="enqID"
                            defaultValue=""
                        />
                        <Box className="text-center">
                            <InputComponent
                                className="adviser-form-submit"
                                type="submit"
                                defaultValue="Send Enquire"
                            />
                        </Box>
                    </Box>
                </form>
            </Box>
        </section>





    )
}
