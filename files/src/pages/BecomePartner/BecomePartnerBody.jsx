import React from 'react'
import PhoneComponent from "../../ReUseAbleComponent/PhoneComponent"
import { Link } from 'react-router-dom'
import {BsFillMapFill} from "react-icons/bs"

export default function BecomePartnerBody() {
  return (
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
      <section className="col-dis-8 col-tab-8 col-mob-12 fl-dis-right fl-tab-right">
        <form
          method="POST"
          
          acceptCharset="UTF-8"
          className="box white becomepartner-form"
        >
          <input
            name="_token"
            type="hidden"
          />
          <h1 className="title text-center clr-pt-darkgrey abhaya">
            FILL THE FOLLOWING FORM
          </h1>
          <div className="container" id="msform">
            {/* progressbar */}
            <ul id="progressbar">
              <li className="active" id="step1">
                Step 1
              </li>
              <li id="step2">Step 2</li>
              <li id="step3">Step 3</li>
              <li id="step4">Step 4</li>
              <li id="step5">Step 5</li>
            </ul>
            <div className="tabs-new">
              <div className="row tab">
                <div className="col-12 col-md-6">
                  <label className="field">
                    <b>First name</b>
                    <input
                      name="first_name"
                      type="text"
                      defaultValue=""
                      validation=""
                    />
                  </label>
                </div>
                <div className="col-12 col-md-6">
                  <label className="field">
                    <b>Last name</b>
                    <input
                      name="last_name"
                      type="text"
                      defaultValue=""
                      validation=""
                    />
                  </label>
                </div>
                <div className="col-12 col-md-6">
                  <label className="field">
                    <b>Current work sector</b>
                    <input
                      name="current_work_sector"
                      type="text"
                      defaultValue=""
                      validation=""
                    />
                  </label>
                </div>
                <div className="col-12 col-md-6">
                  <label className="field">
                    <b>Phone Number</b>
                    <PhoneComponent
                                containerClassName="intl-tel-input"
                                inputClassName="form-control"
                                defaultCountry={'pk'}
                            />
                  </label>
                </div>
                <div className="col-12 col-md-6">
                  <label className="field">
                    <b>E-mail</b>
                    <input
                      name="email"
                      type="text"
                      defaultValue=""
                      validation="email"
                    />
                  </label>
                </div>
                <div className="col-12 col-md-6">
                  <label className="field">
                    <b>Partner Entity</b>
                    <select name="partner_entity">
                      <option value=""> Select partner entity</option>
                      <option value="individual"> Individual</option>
                      <option value="company"> Company</option>
                    </select>
                  </label>
                </div>
                <input
                  type="button"
                  className="next action-button"
                  defaultValue="Next"
                />
              </div>
              <div className="row tab">
                <div className="col-12">
                  <label className="field">
                    <b>Address</b>
                    <textarea
                      name="address"
                      cols={75}
                      rows={20}
                      defaultValue={""}
                    />
                  </label>
                </div>
                <input
                  type="button"
                  className="previous action-button-previous"
                  defaultValue="Previous"
                />
                <input
                  type="button"
                  className="next action-button"
                  defaultValue="Next"
                />
              </div>
              <div className="row tab">
                <div className="col-12">
                  <label className="flex items-base flex-col-sm">
                    Do you have an experience with sales ?
                    <label className="container-checkbox margin-hrz-3">
                      Yes
                      <input
                        name="has_experience_with_sale"
                        data-section="#div-1"
                        type="radio"
                        defaultValue="true"
                        className="experience-sales-yes"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="container-checkbox">
                      No
                      <input
                        name="has_experience_with_sale"
                        data-section="#div-2"
                        type="radio"
                        defaultValue="false"
                        className="experience-sales-no"
                      />
                      <span className="checkmark" />
                    </label>
                  </label>
                </div>
                <div className="col-12">
                  <div id="div-1" className="showhide-1-2">
                    <label
                      className="flex items-base flex-col-sm"
                      id="experience-was"
                    >
                      Was your experience is sales in...
                      <label className="container-checkbox margin-hrz-3">
                        Real estate
                        <input
                          type="radio"
                          className="realState-yes"
                          data-section="#div-3"
                          name="has_realestate_experince"
                          defaultValue="true"
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="container-checkbox">
                        Other
                        <input
                          type="radio"
                          className="was-your-exp-checkbox-other"
                          data-section="#div-4"
                          name="has_realestate_experince"
                          defaultValue="false"
                        />
                        <span className="checkmark" />
                      </label>
                    </label>
                  </div>
                  <div className="col-12">
                    <div id="div-3" className="showhide-3-4">
                      <label className="field">
                        <b>
                          How many years have you been in the real estate bussiness
                          ?
                        </b>
                        <input
                          name="years_of_exp_in_realestate"
                          type="number"
                          defaultValue=""
                        />
                      </label>
                      <label className="flex items-base flex-col-sm">
                        Was these sales on a ...
                        <label className="container-checkbox margin-hrz-3">
                          Domestic scale
                          <input
                            name="realestate_sales_scale"
                            defaultValue="domestic"
                            type="checkbox"
                          />
                          <span className="checkmark" />
                        </label>
                        <label className="container-checkbox">
                          internationsal scale
                          <input
                            name="realestate_sales_scale"
                            defaultValue="internationsal"
                            type="checkbox"
                          />
                          <span className="checkmark" />
                        </label>
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div id="div-4" className="showhide-3-4">
                      <label className="field">
                        <b>what type of bussiness have you been in ?</b>
                        <input
                          name="type_of_other_business_experience"
                          type="text"
                          defaultValue=""
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div id="div-2" />
                <input
                  type="button"
                  className="previous action-button-previous"
                  defaultValue="Previous"
                />
                <input
                  type="button"
                  className="next action-button"
                  defaultValue="Next"
                />
              </div>
              <div className="row tab">
                <div className="col-12">
                  <label className="flex items-base flex-col-sm">
                    Have you ever worked as an agent ?
                    <label className="container-checkbox margin-hrz-3">
                      Yes
                      <input
                        defaultValue="true"
                        name="has_worked_as_agent_before"
                        data-section="#div-5"
                        type="radio"
                        className="workedAsAgent-yes"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="container-checkbox">
                      No
                      <input
                        defaultValue="false"
                        name="has_worked_as_agent_before"
                        data-section="#div-6"
                        type="radio"
                      />
                      <span className="checkmark" />
                    </label>
                  </label>
                </div>
                <div className="col-12">
                  <div id="div-5" className="showhide-5-6">
                    <label className="field">
                      <b>What was the work sector ?</b>
                      <input name="work_sector" type="text" defaultValue="" />
                    </label>
                  </div>
                </div>
                <div id="div-6" className="showhide-5-6" />
                <div className="col-12">
                  <label className="flex items-base flex-col-sm">
                    Do you currently have any partnership with any Turkish company ?
                    <label className="container-checkbox margin-hrz-3">
                      Yes
                      <input
                        defaultValue="true"
                        name="has_partnership_with_any_turkish_company"
                        data-section="#div-7"
                        type="radio"
                        className="currently-partnership-yes"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="container-checkbox">
                      No
                      <input
                        defaultValue="false"
                        name="has_partnership_with_any_turkish_company"
                        data-section="#div-8"
                        type="radio"
                      />
                      <span className="checkmark" />
                    </label>
                  </label>
                </div>
                <div className="col-12">
                  <div id="div-7" className="showhide-7-8">
                    <label className="field">
                      <b>What bussiness sector are your partners in?</b>
                      <input
                        name="partnership_business_sector"
                        type="text"
                        defaultValue=""
                      />
                    </label>
                  </div>
                </div>
                <div id="div-8" className="showhide-7-8" />
                <input
                  type="button"
                  className="previous action-button-previous"
                  defaultValue="Previous"
                />
                <input
                  type="button"
                  className="next action-button"
                  defaultValue="Next"
                />
              </div>
              <div className="row tab">
                <div className="col-12">
                  <label className="field">
                    <b>What is the source of your lead / clients ?</b>
                    <select name="source_of_leads_id">
                      <option value=""> Select your lead</option>
                      <option value={1}> Google Adwords</option>
                      <option value={2}> Organic</option>
                      <option value={12}> Referral</option>
                      <option value={19}> Facebook</option>
                      <option value={21}> Twitter</option>
                      <option value={39}> WhatsApp lead</option>
                      <option value={40}> Live CHAT</option>
                      <option value={44}> WE CHAT</option>
                      <option value={45}> Instagram</option>
                    </select>
                  </label>
                </div>
                <div className="col-12">
                  <label className="field">
                    <b>What are your leads? </b>
                    <select name="leads_type">
                      <option> Select your lead /most interested in</option>
                      <option value="Citizenship By Investment (CBI)">
                        Citizenship By Investment (CBI)
                      </option>
                      <option value="Pure investments">Pure investments</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Only for Obtaining Residency">
                        Only for Obtaining Residency
                      </option>
                    </select>
                  </label>
                </div>
                <input
                  type="button"
                  className="previous action-button-previous"
                  defaultValue="Previous"
                />
                <input
                  type="submit"
                  className="action-button action-button-submit"
                  defaultValue="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
      <aside className="col-dis-4 col-tab-4 col-mob-12" id="contactus-style">
        {/* Contact Us */}
        <h1 className="page-title">Be our Partner</h1>
        <h3 className="title crl-black">Contact us and be a partner</h3>
        <div className="officelocation">
          <label>
            <Link>
              <em className="fab fa-whatsapp" />{" "}
              <b className="black" dir="ltr">
                +90 552 044 67 03
              </b>
            </Link>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b className='flex gap-1'>
            Property USA UK Head Office
            <Link
              href=""
              title="Property USA UK Head Office"
            >
              <BsFillMapFill color={'#5018ff'}/>
            </Link>
          </b>
          <label>Highstone House,</label>
          <label>165 High Street,</label>
          <label>Barnet London,</label>
          <label>EN5 5SU</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              + 44 20 8371 0059
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>info@propertyturkey.com</a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b className='flex gap-1'>
            Property USA Istanbul Head Office
            <a>
              <BsFillMapFill color={'#5018ff'}/>
            </a>
          </b>
          <label>Halide Edip Adivar Mahallesi,</label>
          <label>Cifte Cevizler Cad. ,</label>
          <label>No 3 Akin Plaza,</label>
          <label>34382 Sisli, Istanbul</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +90 212 215 0022
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>info@propertyturkey.com</a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b className='flex gap-1'> 
            Property USA Bodrum Office
            <a>
              <BsFillMapFill color={'#5018ff'}/>
            </a>
          </b>
          <label>156A Neyzen Tevfik Caddesi,</label>
          <label>Bodrum Marina, Bodrum Mugla</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +90 252 313 1121
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>
                bodrum@propertyturkey.com
              </a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b className='flex gap-1'>
            Property USA Fethiye - Kalkan Office
            <a>
              <BsFillMapFill color={'#5018ff'}/>
            </a>
          </b>
          <label>Tuzla Mahallesi Cahit Gündüz Caddesi</label>
          <label>No. 24 Fethiye Mugla</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +90 252 612 38 38
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>
                fethiye@propertyturkey.com
              </a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b className='flex gap-1'>
            Property USA Antalya Office
            <a>
             <BsFillMapFill color={'#5018ff'}/>
            </a>
          </b>
          <label>Gürsu Mahallesi 318. Sok, No:10 / 4 Konyaalti, ANTALYA</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +90 242 230 23 88
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>
                antalya@propertyturkey.com
              </a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b className='flex gap-1'>
            Property USA Bursa Office
            <a>
               <BsFillMapFill color={'#5018ff'}/>
            </a>
          </b>
          <label>
            Odunluk Mah. Liman Caddesi Kızılay Plaza No :17 Ofis No: 50 Nilüfer /
            BURSA
          </label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +90 533 254 58 00
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>bursa@propertyturkey.com</a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b>Property USA Pakistan</b>
          <label>136/1 KH-E-TARIQ, Phase 6, DHA, Karachi</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +92 323 20 30 440
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>
                pakistan@propertyturkey.com
              </a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b>Property USA South Africa</b>
          <label>28 Osborn Road, Houghton, 2192, Johannesburg, South Africa.</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +27 65 653 0885
            </b>
          </label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +27 60 674 0427
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>sa@propertyturkey.com</a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b>Property USA India</b>
          <label>The Morning Star, No 18/1, 1st Floor Rathan Singh Road</label>
          <label>Frazer Town, Bangalore - 560005, India</label>
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +91 98804 72555
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>india@propertyturkey.com</a>
            </b>
          </label>
        </div>
        <hr />
        <div className="officelocation">
          <b>Property USA Iran</b>
          {/* <label>Telephone: <b class="red" dir="ltr">+98 212 2924004</b></label>
          <label>Telephone: <b class="red" dir="ltr">+98 212 2924005</b></label>
          <label>Cell: <b class="red" dir="ltr">+98 912 9596695</b></label>
          <label>E-mail: <b class="red"><a>iran@propertyturkey.com</a></b></label> */}
          <label>
            Telephone:{" "}
            <b className="red" dir="ltr">
              +90 552 044 67 16
            </b>
          </label>
          <label>
            E-mail:{" "}
            <b className="red">
              <a>
                Persian@propertyturkey.com
              </a>
            </b>
          </label>
        </div>
        <hr />
      </aside>
    </div>

  )
}
