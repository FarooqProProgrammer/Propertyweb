import { useSelector } from "react-redux";
import { DIV, Input, Label, TextArea } from "../../ReUseAbleComponent/FormComponent";
import Header from "../../ReUseAbleComponent/Header";
import { useEffect } from "react";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Config"

export default function ProfileEdit() {

    const Authuser = useSelector(state => state.AuthReducer.login);
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();

    useEffect(() => {
        console.log(Authuser)
    }, [])

    const HandleUpdate = (e) => {
        e.preventDefault()
        updateProfile(auth.currentUser, {
            displayName: Name, email: Email
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    return (
        <section id="main" className="cf enable-copy">
            <Header title={'Edit Profile'} />
            <DIV className="profile-bg">
                <DIV className="wrap-dis-12 wrap-tab-12 wrap-mob-12 clearfix profile-form flex content-center">
                    <DIV className="col-dis-10 col-tab-10 col-mob-10 padding-4 bg-white">
                        <h3 className="page-title">Edit your info</h3>
                        <form
                            onSubmit={HandleUpdate}
                            className="grid"
                        >
                            <DIV className="row">
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="first_name">First name</Label>
                                        </DIV>
                                        <Input
                                            name="first_name"
                                            type="text"
                                            onChange={(e) => setName(e.target.value)}
                                            defaultValue={Authuser.displayName}
                                            id="first_name"
                                        />
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="last_name">Last name</Label>
                                        </DIV>
                                        <Input
                                            name="last_name"
                                            type="text"
                                            defaultValue="Farooq"
                                            id="last_name"
                                        />
                                    </Label>
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field longword-sm">
                                        <DIV>
                                            <Label htmlFor="email">E-mail</Label>
                                        </DIV>
                                        <Input
                                            name="email"
                                            type="text"
                                            onChange={(e) => setEmail(e.target.value)}
                                            defaultValue={Authuser.email}
                                            id="email"
                                        />
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="company">Company</Label>
                                        </DIV>
                                        <Input name="company" type="text" id="company" />
                                    </Label>
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="lang">Default Language</Label>
                                        </DIV>
                                        <select id="lang" name="lang">
                                            <option value="en">English</option>
                                            <option value="ru">Russian</option>
                                            <option value="tr">Turkish</option>
                                        </select>
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="website">Website</Label>
                                        </DIV>
                                        <Input name="website" type="text" id="website" />
                                    </Label>
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="dob">Date of Birth</Label>
                                        </DIV>
                                        <Input type="date" name="dob" className="dob" defaultValue="" />
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="gender">Gender</Label>
                                        </DIV>
                                        <select id="gender" name="gender">
                                            <option value="" selected="selected">
                                                Select
                                            </option>
                                            <option value="m">Male</option>
                                            <option value="f">Female</option>
                                        </select>
                                    </Label>
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="website">Website</Label>
                                        </DIV>
                                        <Input name="website" type="text" id="website" />
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="phone">Phone</Label>
                                        </DIV>
                                        <DIV className="intl-tel-Input allow-dropdown">
                                            <DIV className="flag-container">
                                                <DIV
                                                    className="selected-flag"
                                                    role="combobox"
                                                    aria-owns="country-listbox"
                                                    tabIndex={0}
                                                    title="Pakistan (‫پاکستان‬‎): +92"
                                                >
                                                    <DIV className="iti-flag pk" />
                                                    <DIV className="iti-arrow" />
                                                </DIV>
                                            </DIV>
                                            <Input
                                                className="Input-tel"
                                                name="phone"
                                                type="text"
                                                id="phone"
                                                autoComplete="off"
                                                placeholder="+92 301 2345678"
                                            />
                                        </DIV>
                                    </Label>
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="mobile">Mobile</Label>
                                        </DIV>
                                        <DIV className="intl-tel-Input allow-dropdown">
                                            <DIV className="flag-container">
                                                <DIV
                                                    className="selected-flag"
                                                    role="combobox"
                                                    aria-owns="country-listbox"
                                                    tabIndex={0}
                                                    title="Pakistan (‫پاکستان‬‎): +92"
                                                >
                                                    <DIV className="iti-flag pk" />
                                                    <DIV className="iti-arrow" />
                                                </DIV>
                                            </DIV>
                                            <Input
                                                className="Input-tel"
                                                name="mobile"
                                                type="text"
                                                id="mobile"
                                                autoComplete="off"
                                                placeholder="+92 301 2345678"
                                            />
                                        </DIV>
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="address_line1">Address Line 1</Label>
                                        </DIV>
                                        <Input name="address_line1" type="text" id="address_line1" />
                                    </Label>
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="address_line2">Address Line 2</Label>
                                        </DIV>
                                        <Input name="address_line2" type="text" id="address_line2" />
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="address_line3">Address Line 3</Label>
                                        </DIV>
                                        <Input name="address_line3" type="text" id="address_line3" />
                                    </Label>
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="postcode">Postal Code</Label>
                                        </DIV>
                                        <Input name="postcode" type="text" id="postcode" />
                                    </Label>
                                </DIV>
                                <DIV className="col-1">
                                    <DIV className="borde-right-form" />
                                </DIV>
                                <DIV className="col-12 col-md-5">
                                    <Label className="field">
                                        <DIV>
                                            <Label htmlFor="bio">Bio</Label>
                                        </DIV>
                                        <TextArea
                                            name="bio"
                                            cols={50}
                                            rows={10}
                                            id="bio"
                                            spellCheck="false"
                                            defaultValue={""}
                                        />
                                    </Label>
                                </DIV>
                            </DIV>
                            <DIV className="field col-12 padding-top-3 text-center back-savebtn">
                                <a href="/setting" className="btn grey">
                                    Back To Profile
                                </a>
                                <Input type="submit" className="btn" defaultValue="Save" />
                            </DIV>
                        </form>
                    </DIV>
                </DIV>
            </DIV>

        </section>
    )
}