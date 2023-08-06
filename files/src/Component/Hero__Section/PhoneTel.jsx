import React, { useState, useEffect } from 'react';
import { PhoneTelData } from '../../Data'
import USA from "../../assets/Flags/usa.png"
import UK from "../../assets/Flags/uk.png"
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';



export default function PhoneTel() {
    const [countries, setCountries] = useState([]);

    return (
        <div
            className="intl-tel-input iti-container"
            style={{ top: "1234.69px", left: 13 }}
        >
            <ul
                className="country-list"
                id="country-listbox"
                aria-expanded="true"
                role="listbox"
            >
                <li
                    className="country preferred highlight"
                    id="iti-item-us"

                    data-dial-code={1}
                    data-country-code="us"
                >
                    <div className="flag-box">
                        <img src={'https://www.countryflagicons.com/FLAT/64/US.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">United States</span>
                    <span className="dial-code">+1</span>
                </li>
                <li
                    className="country preferred"
                    id="iti-item-gb"

                    data-dial-code={44}
                    data-country-code="gb"
                >
                    <div className="flag-box">
                        <div className="iti-flag gb" />
                    </div>
                    <span className="country-name">United Kingdom</span>
                    <span className="dial-code">+44</span>
                </li>
                <li className="divider" role="separator" aria-disabled="true" />
                <li
                    className="country standard"
                    id="iti-item-af"

                    data-dial-code={93}
                    data-country-code="af"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Afghanistan (‫افغانستان‬‎)</span>
                    <span className="dial-code">+93</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-al"

                    data-dial-code={355}
                    data-country-code="al"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Albania (Shqipëri)</span>
                    <span className="dial-code">+355</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-dz"

                    data-dial-code={213}
                    data-country-code="dz"
                >
                    <div className="flag-box">
                    <img  src={'https://www.countryflagicons.com/FLAT/64/AN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Algeria (‫الجزائر‬‎)</span>
                    <span className="dial-code">+213</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-as"

                    data-dial-code={1684}
                    data-country-code="as"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">American Samoa</span>
                    <span className="dial-code">+1684</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ad"

                    data-dial-code={376}
                    data-country-code="ad"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AD.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Andorra</span>
                    <span className="dial-code">+376</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ao"

                    data-dial-code={244}
                    data-country-code="ao"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Angola</span>
                    <span className="dial-code">+244</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ai"

                    data-dial-code={1264}
                    data-country-code="ai"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Anguilla</span>
                    <span className="dial-code">+1264</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ag"

                    data-dial-code={1268}
                    data-country-code="ag"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Antigua and Barbuda</span>
                    <span className="dial-code">+1268</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ar"

                    data-dial-code={54}
                    data-country-code="ar"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Argentina</span>
                    <span className="dial-code">+54</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-am"

                    data-dial-code={374}
                    data-country-code="am"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Armenia (Հայաստան)</span>
                    <span className="dial-code">+374</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-aw"

                    data-dial-code={297}
                    data-country-code="aw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Aruba</span>
                    <span className="dial-code">+297</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-au"

                    data-dial-code={61}
                    data-country-code="au"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Australia</span>
                    <span className="dial-code">+61</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-at"

                    data-dial-code={43}
                    data-country-code="at"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Austria (Österreich)</span>
                    <span className="dial-code">+43</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-az"

                    data-dial-code={994}
                    data-country-code="az"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Azerbaijan (Azərbaycan)</span>
                    <span className="dial-code">+994</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bs"

                    data-dial-code={1242}
                    data-country-code="bs"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Bahamas</span>
                    <span className="dial-code">+1242</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bh"

                    data-dial-code={973}
                    data-country-code="bh"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Bahrain (‫البحرين‬‎)</span>
                    <span className="dial-code">+973</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bd"

                    data-dial-code={880}
                    data-country-code="bd"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BD.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Bangladesh (বাংলাদেশ)</span>
                    <span className="dial-code">+880</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bb"

                    data-dial-code={1246}
                    data-country-code="bb"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BB.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Barbados</span>
                    <span className="dial-code">+1246</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-by"

                    data-dial-code={375}
                    data-country-code="by"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Belarus (Беларусь)</span>
                    <span className="dial-code">+375</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-be"

                    data-dial-code={32}
                    data-country-code="be"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Belgium (België)</span>
                    <span className="dial-code">+32</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bz"

                    data-dial-code={501}
                    data-country-code="bz"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Belize</span>
                    <span className="dial-code">+501</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bj"

                    data-dial-code={229}
                    data-country-code="bj"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BJ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Benin (Bénin)</span>
                    <span className="dial-code">+229</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bm"

                    data-dial-code={1441}
                    data-country-code="bm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Bermuda</span>
                    <span className="dial-code">+1441</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bt"

                    data-dial-code={975}
                    data-country-code="bt"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Bhutan (འབྲུག)</span>
                    <span className="dial-code">+975</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bo"

                    data-dial-code={591}
                    data-country-code="bo"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Bolivia</span>
                    <span className="dial-code">+591</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ba"

                    data-dial-code={387}
                    data-country-code="ba"
                >
                    <div className="flag-box">
                                            <img   src={'https://www.countryflagicons.com/FLAT/64/BA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        Bosnia and Herzegovina (Босна и Херцеговина)
                    </span>
                    <span className="dial-code">+387</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bw"

                    data-dial-code={267}
                    data-country-code="bw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Botswana</span>
                    <span className="dial-code">+267</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-br"

                    data-dial-code={55}
                    data-country-code="br"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Brazil (Brasil)</span>
                    <span className="dial-code">+55</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-io"

                    data-dial-code={246}
                    data-country-code="io"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">British Indian Ocean Territory</span>
                    <span className="dial-code">+246</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-vg"

                    data-dial-code={1284}
                    data-country-code="vg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/VG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">British Virgin Islands</span>
                    <span className="dial-code">+1284</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bn"

                    data-dial-code={673}
                    data-country-code="bn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Brunei</span>
                    <span className="dial-code">+673</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bg"

                    data-dial-code={359}
                    data-country-code="bg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Bulgaria (България)</span>
                    <span className="dial-code">+359</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bf"

                    data-dial-code={226}
                    data-country-code="bf"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                        
                    </div>
                    <span className="country-name">Burkina Faso</span>
                    <span className="dial-code">+226</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bi"

                    data-dial-code={257}
                    data-country-code="bi"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Burundi (Uburundi)</span>
                    <span className="dial-code">+257</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-kh"

                    data-dial-code={855}
                    data-country-code="kh"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cambodia (កម្ពុជា)</span>
                    <span className="dial-code">+855</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cm"

                    data-dial-code={237}
                    data-country-code="cm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cameroon (Cameroun)</span>
                    <span className="dial-code">+237</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ca"

                    data-dial-code={1}
                    data-country-code="ca"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Canada</span>
                    <span className="dial-code">+1</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cv"

                    data-dial-code={238}
                    data-country-code="cv"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CV.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cape Verde (Kabu Verdi)</span>
                    <span className="dial-code">+238</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bq"

                    data-dial-code={599}
                    data-country-code="bq"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BQ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Caribbean Netherlands</span>
                    <span className="dial-code">+599</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ky"

                    data-dial-code={1345}
                    data-country-code="ky"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cayman Islands</span>
                    <span className="dial-code">+1345</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cf"

                    data-dial-code={236}
                    data-country-code="cf"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        Central African Republic (République centrafricaine)
                    </span>
                    <span className="dial-code">+236</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-td"

                    data-dial-code={235}
                    data-country-code="td"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TD.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Chad (Tchad)</span>
                    <span className="dial-code">+235</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cl"

                    data-dial-code={56}
                    data-country-code="cl"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Chile</span>
                    <span className="dial-code">+56</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cn"

                    data-dial-code={86}
                    data-country-code="cn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">China (中国)</span>
                    <span className="dial-code">+86</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cx"

                    data-dial-code={61}
                    data-country-code="cx"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CX.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Christmas Island</span>
                    <span className="dial-code">+61</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cc"

                    data-dial-code={61}
                    data-country-code="cc"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cocos (Keeling) Islands</span>
                    <span className="dial-code">+61</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-co"

                    data-dial-code={57}
                    data-country-code="co"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Colombia</span>
                    <span className="dial-code">+57</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-km"

                    data-dial-code={269}
                    data-country-code="km"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Comoros (‫جزر القمر‬‎)</span>
                    <span className="dial-code">+269</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cd"

                    data-dial-code={243}
                    data-country-code="cd"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CD.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                    </span>
                    <span className="dial-code">+243</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cg"

                    data-dial-code={242}
                    data-country-code="cg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Congo (Republic) (Congo-Brazzaville)</span>
                    <span className="dial-code">+242</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ck"

                    data-dial-code={682}
                    data-country-code="ck"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cook Islands</span>
                    <span className="dial-code">+682</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cr"

                    data-dial-code={506}
                    data-country-code="cr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Costa Rica</span>
                    <span className="dial-code">+506</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ci"

                    data-dial-code={225}
                    data-country-code="ci"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Côte d’Ivoire</span>
                    <span className="dial-code">+225</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-hr"

                    data-dial-code={385}
                    data-country-code="hr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/HR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Croatia (Hrvatska)</span>
                    <span className="dial-code">+385</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cu"

                    data-dial-code={53}
                    data-country-code="cu"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cuba</span>
                    <span className="dial-code">+53</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cw"

                    data-dial-code={599}
                    data-country-code="cw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Curaçao</span>
                    <span className="dial-code">+599</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cy"

                    data-dial-code={357}
                    data-country-code="cy"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Cyprus (Κύπρος)</span>
                    <span className="dial-code">+357</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-cz"

                    data-dial-code={420}
                    data-country-code="cz"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Czech Republic (Česká republika)</span>
                    <span className="dial-code">+420</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-dk"

                    data-dial-code={45}
                    data-country-code="dk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/DK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Denmark (Danmark)</span>
                    <span className="dial-code">+45</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-dj"

                    data-dial-code={253}
                    data-country-code="dj"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/DJ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>

                    <span className="country-name">Djibouti</span>
                    <span className="dial-code">+253</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-dm"

                    data-dial-code={1767}
                    data-country-code="dm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/DM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Dominica</span>
                    <span className="dial-code">+1767</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-do"

                    data-dial-code={1}
                    data-country-code="do"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/DO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        Dominican Republic (República Dominicana)
                    </span>
                    <span className="dial-code">+1</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ec"

                    data-dial-code={593}
                    data-country-code="ec"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/EC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Ecuador</span>
                    <span className="dial-code">+593</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-eg"

                    data-dial-code={20}
                    data-country-code="eg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/EH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Egypt (‫مصر‬‎)</span>
                    <span className="dial-code">+20</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sv"

                    data-dial-code={503}
                    data-country-code="sv"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SV.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">El Salvador</span>
                    <span className="dial-code">+503</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gq"

                    data-dial-code={240}
                    data-country-code="gq"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GQ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Equatorial Guinea (Guinea Ecuatorial)</span>
                    <span className="dial-code">+240</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-er"

                    data-dial-code={291}
                    data-country-code="er"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ER.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Eritrea</span>
                    <span className="dial-code">+291</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ee"

                    data-dial-code={372}
                    data-country-code="ee"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/EE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Estonia (Eesti)</span>
                    <span className="dial-code">+372</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-et"

                    data-dial-code={251}
                    data-country-code="et"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ET.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Ethiopia</span>
                    <span className="dial-code">+251</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-fk"

                    data-dial-code={500}
                    data-country-code="fk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/FK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Falkland Islands (Islas Malvinas)</span>
                    <span className="dial-code">+500</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-fo"

                    data-dial-code={298}
                    data-country-code="fo"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/FO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Faroe Islands (Føroyar)</span>
                    <span className="dial-code">+298</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-fj"

                    data-dial-code={679}
                    data-country-code="fj"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/FJ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Fiji</span>
                    <span className="dial-code">+679</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-fi"

                    data-dial-code={358}
                    data-country-code="fi"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/FI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Finland (Suomi)</span>
                    <span className="dial-code">+358</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-fr"

                    data-dial-code={33}
                    data-country-code="fr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/FR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">France</span>
                    <span className="dial-code">+33</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gf"

                    data-dial-code={594}
                    data-country-code="gf"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">French Guiana (Guyane française)</span>
                    <span className="dial-code">+594</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pf"

                    data-dial-code={689}
                    data-country-code="pf"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">French Polynesia (Polynésie française)</span>
                    <span className="dial-code">+689</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ga"

                    data-dial-code={241}
                    data-country-code="ga"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Gabon</span>
                    <span className="dial-code">+241</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gm"

                    data-dial-code={220}
                    data-country-code="gm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Gambia</span>
                    <span className="dial-code">+220</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ge"

                    data-dial-code={995}
                    data-country-code="ge"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Georgia (საქართველო)</span>
                    <span className="dial-code">+995</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-de"

                    data-dial-code={49}
                    data-country-code="de"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/DE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Germany (Deutschland)</span>
                    <span className="dial-code">+49</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gh"

                    data-dial-code={233}
                    data-country-code="gh"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Ghana (Gaana)</span>
                    <span className="dial-code">+233</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gi"

                    data-dial-code={350}
                    data-country-code="gi"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />


                    </div>
                    <span className="country-name">Gibraltar</span>
                    <span className="dial-code">+350</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gr"

                    data-dial-code={30}
                    data-country-code="gr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Greece (Ελλάδα)</span>
                    <span className="dial-code">+30</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gl"

                    data-dial-code={299}
                    data-country-code="gl"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Greenland (Kalaallit Nunaat)</span>
                    <span className="dial-code">+299</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gd"

                    data-dial-code={1473}
                    data-country-code="gd"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GD.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Grenada</span>
                    <span className="dial-code">+1473</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gp"

                    data-dial-code={590}
                    data-country-code="gp"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GP.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Guadeloupe</span>
                    <span className="dial-code">+590</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gu"

                    data-dial-code={1671}
                    data-country-code="gu"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Guam</span>
                    <span className="dial-code">+1671</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gt"

                    data-dial-code={502}
                    data-country-code="gt"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Guatemala</span>
                    <span className="dial-code">+502</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gg"

                    data-dial-code={44}
                    data-country-code="gg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Guernsey</span>
                    <span className="dial-code">+44</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gn"

                    data-dial-code={224}
                    data-country-code="gn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Guinea (Guinée)</span>
                    <span className="dial-code">+224</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gw"

                    data-dial-code={245}
                    data-country-code="gw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Guinea-Bissau (Guiné Bissau)</span>
                    <span className="dial-code">+245</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gy"

                    data-dial-code={592}
                    data-country-code="gy"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Guyana</span>
                    <span className="dial-code">+592</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ht"

                    data-dial-code={509}
                    data-country-code="ht"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/HT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Haiti</span>
                    <span className="dial-code">+509</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-hn"

                    data-dial-code={504}
                    data-country-code="hn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/HN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Honduras</span>
                    <span className="dial-code">+504</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-hk"

                    data-dial-code={852}
                    data-country-code="hk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/HK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Hong Kong (香港)</span>
                    <span className="dial-code">+852</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-hu"

                    data-dial-code={36}
                    data-country-code="hu"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/HU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Hungary (Magyarország)</span>
                    <span className="dial-code">+36</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-is"

                    data-dial-code={354}
                    data-country-code="is"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Iceland (Ísland)</span>
                    <span className="dial-code">+354</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-in"

                    data-dial-code={91}
                    data-country-code="in"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">India (भारत)</span>
                    <span className="dial-code">+91</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-id"

                    data-dial-code={62}
                    data-country-code="id"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ID.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Indonesia</span>
                    <span className="dial-code">+62</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ir"

                    data-dial-code={98}
                    data-country-code="ir"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Iran (‫ایران‬‎)</span>
                    <span className="dial-code">+98</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-iq"

                    data-dial-code={964}
                    data-country-code="iq"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IQ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Iraq (‫العراق‬‎)</span>
                    <span className="dial-code">+964</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ie"

                    data-dial-code={353}
                    data-country-code="ie"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Ireland</span>
                    <span className="dial-code">+353</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-im"

                    data-dial-code={44}
                    data-country-code="im"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Isle of Man</span>
                    <span className="dial-code">+44</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-il"

                    data-dial-code={972}
                    data-country-code="il"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Israel (‫ישראל‬‎)</span>
                    <span className="dial-code">+972</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-it"

                    data-dial-code={39}
                    data-country-code="it"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/IT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Italy (Italia)</span>
                    <span className="dial-code">+39</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-jm"

                    data-dial-code={1}
                    data-country-code="jm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/JM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Jamaica</span>
                    <span className="dial-code">+1</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-jp"

                    data-dial-code={81}
                    data-country-code="jp"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/JP.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Japan (日本)</span>
                    <span className="dial-code">+81</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-je"

                    data-dial-code={44}
                    data-country-code="je"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/JE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Jersey</span>
                    <span className="dial-code">+44</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-jo"

                    data-dial-code={962}
                    data-country-code="jo"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/JO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Jordan (‫الأردن‬‎)</span>
                    <span className="dial-code">+962</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-kz"

                    data-dial-code={7}
                    data-country-code="kz"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Kazakhstan (Казахстан)</span>
                    <span className="dial-code">+7</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ke"

                    data-dial-code={254}
                    data-country-code="ke"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Kenya</span>
                    <span className="dial-code">+254</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ki"

                    data-dial-code={686}
                    data-country-code="ki"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Kiribati</span>
                    <span className="dial-code">+686</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-xk"

                    data-dial-code={383}
                    data-country-code="xk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/XK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Kosovo</span>
                    <span className="dial-code">+383</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-kw"

                    data-dial-code={965}
                    data-country-code="kw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Kuwait (‫الكويت‬‎)</span>
                    <span className="dial-code">+965</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-kg"

                    data-dial-code={996}
                    data-country-code="kg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Kyrgyzstan (Кыргызстан)</span>
                    <span className="dial-code">+996</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-la"

                    data-dial-code={856}
                    data-country-code="la"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />
                    </div>
                    <span className="country-name">Laos (ລາວ)</span>
                    <span className="dial-code">+856</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-lv"

                    data-dial-code={371}
                    data-country-code="lv"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LV.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Latvia (Latvija)</span>
                    <span className="dial-code">+371</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-lb"

                    data-dial-code={961}
                    data-country-code="lb"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LB.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Lebanon (‫لبنان‬‎)</span>
                    <span className="dial-code">+961</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ls"

                    data-dial-code={266}
                    data-country-code="ls"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Lesotho</span>
                    <span className="dial-code">+266</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-lr"

                    data-dial-code={231}
                    data-country-code="lr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Liberia</span>
                    <span className="dial-code">+231</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ly"

                    data-dial-code={218}
                    data-country-code="ly"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Libya (‫ليبيا‬‎)</span>
                    <span className="dial-code">+218</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-li"

                    data-dial-code={423}
                    data-country-code="li"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Liechtenstein</span>
                    <span className="dial-code">+423</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-lt"

                    data-dial-code={370}
                    data-country-code="lt"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Lithuania (Lietuva)</span>
                    <span className="dial-code">+370</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-lu"

                    data-dial-code={352}
                    data-country-code="lu"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Luxembourg</span>
                    <span className="dial-code">+352</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mo"

                    data-dial-code={853}
                    data-country-code="mo"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Macau (澳門)</span>
                    <span className="dial-code">+853</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mk"

                    data-dial-code={389}
                    data-country-code="mk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Macedonia (FYROM) (Македонија)</span>
                    <span className="dial-code">+389</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mg"

                    data-dial-code={261}
                    data-country-code="mg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Madagascar (Madagasikara)</span>
                    <span className="dial-code">+261</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mw"

                    data-dial-code={265}
                    data-country-code="mw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Malawi</span>
                    <span className="dial-code">+265</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-my"

                    data-dial-code={60}
                    data-country-code="my"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Malaysia</span>
                    <span className="dial-code">+60</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mv"

                    data-dial-code={960}
                    data-country-code="mv"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MV.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Maldives</span>
                    <span className="dial-code">+960</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ml"

                    data-dial-code={223}
                    data-country-code="ml"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ML.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Mali</span>
                    <span className="dial-code">+223</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mt"

                    data-dial-code={356}
                    data-country-code="mt"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Malta</span>
                    <span className="dial-code">+356</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mh"

                    data-dial-code={692}
                    data-country-code="mh"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Marshall Islands</span>
                    <span className="dial-code">+692</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mq"

                    data-dial-code={596}
                    data-country-code="mq"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MQ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Martinique</span>
                    <span className="dial-code">+596</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mr"

                    data-dial-code={222}
                    data-country-code="mr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Mauritania (‫موريتانيا‬‎)</span>
                    <span className="dial-code">+222</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mu"

                    data-dial-code={230}
                    data-country-code="mu"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Mauritius (Moris)</span>
                    <span className="dial-code">+230</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-yt"

                    data-dial-code={262}
                    data-country-code="yt"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/YT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Mayotte</span>
                    <span className="dial-code">+262</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mx"

                    data-dial-code={52}
                    data-country-code="mx"
                >
                    <div className="flag-box">
                        <div className="iti-flag mx" />
                    </div>
                    <span className="country-name">Mexico (México)</span>
                    <span className="dial-code">+52</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-fm"

                    data-dial-code={691}
                    data-country-code="fm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/FM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Micronesia</span>
                    <span className="dial-code">+691</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-md"

                    data-dial-code={373}
                    data-country-code="md"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MD.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Moldova (Republica Moldova)</span>
                    <span className="dial-code">+373</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mc"

                    data-dial-code={377}
                    data-country-code="mc"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Monaco</span>
                    <span className="dial-code">+377</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mn"

                    data-dial-code={976}
                    data-country-code="mn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Mongolia (Монгол)</span>
                    <span className="dial-code">+976</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-me"

                    data-dial-code={382}
                    data-country-code="me"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ME.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Montenegro (Crna Gora)</span>
                    <span className="dial-code">+382</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ms"

                    data-dial-code={1664}
                    data-country-code="ms"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Montserrat</span>
                    <span className="dial-code">+1664</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ma"

                    data-dial-code={212}
                    data-country-code="ma"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Morocco (‫المغرب‬‎)</span>
                    <span className="dial-code">+212</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mz"

                    data-dial-code={258}
                    data-country-code="mz"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Mozambique (Moçambique)</span>
                    <span className="dial-code">+258</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mm"

                    data-dial-code={95}
                    data-country-code="mm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Myanmar (Burma) (မြန်မာ)</span>
                    <span className="dial-code">+95</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-na"

                    data-dial-code={264}
                    data-country-code="na"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Namibia (Namibië)</span>
                    <span className="dial-code">+264</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-nr"

                    data-dial-code={674}
                    data-country-code="nr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Nauru</span>
                    <span className="dial-code">+674</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-np"

                    data-dial-code={977}
                    data-country-code="np"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NP.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Nepal (नेपाल)</span>
                    <span className="dial-code">+977</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-nl"

                    data-dial-code={31}
                    data-country-code="nl"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Netherlands (Nederland)</span>
                    <span className="dial-code">+31</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-nc"

                    data-dial-code={687}
                    data-country-code="nc"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">New Caledonia (Nouvelle-Calédonie)</span>
                    <span className="dial-code">+687</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-nz"

                    data-dial-code={64}
                    data-country-code="nz"
                    aria-selected="false"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">New Zealand</span>
                    <span className="dial-code">+64</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ni"

                    data-dial-code={505}
                    data-country-code="ni"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Nicaragua</span>
                    <span className="dial-code">+505</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ne"

                    data-dial-code={227}
                    data-country-code="ne"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Niger (Nijar)</span>
                    <span className="dial-code">+227</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ng"

                    data-dial-code={234}
                    data-country-code="ng"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Nigeria</span>
                    <span className="dial-code">+234</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-nu"

                    data-dial-code={683}
                    data-country-code="nu"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Niue</span>
                    <span className="dial-code">+683</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-nf"

                    data-dial-code={672}
                    data-country-code="nf"
                    aria-selected="false"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Norfolk Island</span>
                    <span className="dial-code">+672</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-kp"

                    data-dial-code={850}
                    data-country-code="kp"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KP.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        North Korea (조선 민주주의 인민 공화국)
                    </span>
                    <span className="dial-code">+850</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mp"

                    data-dial-code={1670}
                    data-country-code="mp"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MP.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Northern Mariana Islands</span>
                    <span className="dial-code">+1670</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-no"

                    data-dial-code={47}
                    data-country-code="no"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/NO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Norway (Norge)</span>
                    <span className="dial-code">+47</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-om"

                    data-dial-code={968}
                    data-country-code="om"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/OM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Oman (‫عُمان‬‎)</span>
                    <span className="dial-code">+968</span>
                </li>
                <li
                    className="country standard active"
                    id="iti-item-pk"

                    data-dial-code={92}
                    data-country-code="pk"
                    aria-selected="true"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Pakistan (‫پاکستان‬‎)</span>
                    <span className="dial-code">+92</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pw"

                    data-dial-code={680}
                    data-country-code="pw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Palau</span>
                    <span className="dial-code">+680</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ps"

                    data-dial-code={970}
                    data-country-code="ps"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Palestine (‫فلسطين‬‎)</span>
                    <span className="dial-code">+970</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pa"

                    data-dial-code={507}
                    data-country-code="pa"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Panama (Panamá)</span>
                    <span className="dial-code">+507</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pg"

                    data-dial-code={675}
                    data-country-code="pg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Papua New Guinea</span>
                    <span className="dial-code">+675</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-py"

                    data-dial-code={595}
                    data-country-code="py"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Paraguay</span>
                    <span className="dial-code">+595</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pe"

                    data-dial-code={51}
                    data-country-code="pe"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Peru (Perú)</span>
                    <span className="dial-code">+51</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ph"

                    data-dial-code={63}
                    data-country-code="ph"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Philippines</span>
                    <span className="dial-code">+63</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pl"

                    data-dial-code={48}
                    data-country-code="pl"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Poland (Polska)</span>
                    <span className="dial-code">+48</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pt"

                    data-dial-code={351}
                    data-country-code="pt"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Portugal</span>
                    <span className="dial-code">+351</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pr"

                    data-dial-code={1}
                    data-country-code="pr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Puerto Rico</span>
                    <span className="dial-code">+1</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-qa"

                    data-dial-code={974}
                    data-country-code="qa"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/QA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Qatar (‫قطر‬‎)</span>
                    <span className="dial-code">+974</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-re"

                    data-dial-code={262}
                    data-country-code="re"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/RE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Réunion (La Réunion)</span>
                    <span className="dial-code">+262</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ro"

                    data-dial-code={40}
                    data-country-code="ro"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/RO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Romania (România)</span>
                    <span className="dial-code">+40</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ru"

                    data-dial-code={7}
                    data-country-code="ru"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/RU.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Russia (Россия)</span>
                    <span className="dial-code">+7</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-rw"

                    data-dial-code={250}
                    data-country-code="rw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/RW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Rwanda</span>
                    <span className="dial-code">+250</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-bl"

                    data-dial-code={590}
                    data-country-code="bl"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/BL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Saint Barthélemy</span>
                    <span className="dial-code">+590</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sh"

                    data-dial-code={290}
                    data-country-code="sh"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Saint Helena</span>
                    <span className="dial-code">+290</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-kn"

                    data-dial-code={1869}
                    data-country-code="kn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Saint Kitts and Nevis</span>
                    <span className="dial-code">+1869</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-lc"

                    data-dial-code={1758}
                    data-country-code="lc"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Saint Lucia</span>
                    <span className="dial-code">+1758</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-mf"

                    data-dial-code={590}
                    data-country-code="mf"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/MF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        Saint Martin (Saint-Martin (partie française))
                    </span>
                    <span className="dial-code">+590</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-pm"

                    data-dial-code={508}
                    data-country-code="pm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/PM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)
                    </span>
                    <span className="dial-code">+508</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-vc"

                    data-dial-code={1784}
                    data-country-code="vc"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/VC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Saint Vincent and the Grenadines</span>
                    <span className="dial-code">+1784</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ws"

                    data-dial-code={685}
                    data-country-code="ws"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/WS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Samoa</span>
                    <span className="dial-code">+685</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sm"

                    data-dial-code={378}
                    data-country-code="sm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">San Marino</span>
                    <span className="dial-code">+378</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-st"

                    data-dial-code={239}
                    data-country-code="st"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ST.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        São Tomé and Príncipe (São Tomé e Príncipe)
                    </span>
                    <span className="dial-code">+239</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sa"

                    data-dial-code={966}
                    data-country-code="sa"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        Saudi Arabia (‫المملكة العربية السعودية‬‎)
                    </span>
                    <span className="dial-code">+966</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sn"

                    data-dial-code={221}
                    data-country-code="sn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Senegal (Sénégal)</span>
                    <span className="dial-code">+221</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-rs"

                    data-dial-code={381}
                    data-country-code="rs"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/RS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Serbia (Србија)</span>
                    <span className="dial-code">+381</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sc"

                    data-dial-code={248}
                    data-country-code="sc"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Seychelles</span>
                    <span className="dial-code">+248</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sl"

                    data-dial-code={232}
                    data-country-code="sl"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Sierra Leone</span>
                    <span className="dial-code">+232</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sg"

                    data-dial-code={65}
                    data-country-code="sg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Singapore</span>
                    <span className="dial-code">+65</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sx"

                    data-dial-code={1721}
                    data-country-code="sx"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SX.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Sint Maarten</span>
                    <span className="dial-code">+1721</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sk"

                    data-dial-code={421}
                    data-country-code="sk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Slovakia (Slovensko)</span>
                    <span className="dial-code">+421</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-si"

                    data-dial-code={386}
                    data-country-code="si"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Slovenia (Slovenija)</span>
                    <span className="dial-code">+386</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sb"

                    data-dial-code={677}
                    data-country-code="sb"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SB.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Solomon Islands</span>
                    <span className="dial-code">+677</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-so"

                    data-dial-code={252}
                    data-country-code="so"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Somalia (Soomaaliya)</span>
                    <span className="dial-code">+252</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-za"

                    data-dial-code={27}
                    data-country-code="za"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ZA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">South Africa</span>
                    <span className="dial-code">+27</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-kr"

                    data-dial-code={82}
                    data-country-code="kr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/KR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">South Korea (대한민국)</span>
                    <span className="dial-code">+82</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ss"

                    data-dial-code={211}
                    data-country-code="ss"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SS.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">South Sudan (‫جنوب السودان‬‎)</span>
                    <span className="dial-code">+211</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-es"

                    data-dial-code={34}
                    data-country-code="es"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ES.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Spain (España)</span>
                    <span className="dial-code">+34</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-lk"

                    data-dial-code={94}
                    data-country-code="lk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/LK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Sri Lanka (ශ්‍රී ලංකාව)</span>
                    <span className="dial-code">+94</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sd"

                    data-dial-code={249}
                    data-country-code="sd"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SD.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Sudan (‫السودان‬‎)</span>
                    <span className="dial-code">+249</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sr"

                    data-dial-code={597}
                    data-country-code="sr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>

                    <span className="country-name">Suriname</span>
                    <span className="dial-code">+597</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sj"

                    data-dial-code={47}
                    data-country-code="sj"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SJ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Svalbard and Jan Mayen</span>
                    <span className="dial-code">+47</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sz"

                    data-dial-code={268}
                    data-country-code="sz"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Swaziland</span>
                    <span className="dial-code">+268</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-se"

                    data-dial-code={46}
                    data-country-code="se"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Sweden (Sverige)</span>
                    <span className="dial-code">+46</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ch"

                    data-dial-code={41}
                    data-country-code="ch"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/CH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Switzerland (Schweiz)</span>
                    <span className="dial-code">+41</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-sy"

                    data-dial-code={963}
                    data-country-code="sy"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/SY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Syria (‫سوريا‬‎)</span>
                    <span className="dial-code">+963</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tw"

                    data-dial-code={886}
                    data-country-code="tw"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Taiwan (台灣)</span>
                    <span className="dial-code">+886</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tj"

                    data-dial-code={992}
                    data-country-code="tj"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TJ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Tajikistan</span>
                    <span className="dial-code">+992</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tz"

                    data-dial-code={255}
                    data-country-code="tz"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Tanzania</span>
                    <span className="dial-code">+255</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-th"

                    data-dial-code={66}
                    data-country-code="th"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Thailand (ไทย)</span>
                    <span className="dial-code">+66</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tl"

                    data-dial-code={670}
                    data-country-code="tl"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TL.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Timor-Leste</span>
                    <span className="dial-code">+670</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tg"

                    data-dial-code={228}
                    data-country-code="tg"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Togo</span>
                    <span className="dial-code">+228</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tk"

                    data-dial-code={690}
                    data-country-code="tk"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TK.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Tokelau</span>
                    <span className="dial-code">+690</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-to"

                    data-dial-code={676}
                    data-country-code="to"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TO.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Tonga</span>
                    <span className="dial-code">+676</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tt"

                    data-dial-code={1868}
                    data-country-code="tt"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TT.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Trinidad and Tobago</span>
                    <span className="dial-code">+1868</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tn"

                    data-dial-code={216}
                    data-country-code="tn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Tunisia (‫تونس‬‎)</span>
                    <span className="dial-code">+216</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tr"

                    data-dial-code={90}
                    data-country-code="tr"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TR.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Turkey (Türkiye)</span>
                    <span className="dial-code">+90</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tm"

                    data-dial-code={993}
                    data-country-code="tm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Turkmenistan</span>
                    <span className="dial-code">+993</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tc"

                    data-dial-code={1649}
                    data-country-code="tc"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TC.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Turks and Caicos Islands</span>
                    <span className="dial-code">+1649</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-tv"

                    data-dial-code={688}
                    data-country-code="tv"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/TV.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Tuvalu</span>
                    <span className="dial-code">+688</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-vi"

                    data-dial-code={1340}
                    data-country-code="vi"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/VI.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">U.S. Virgin Islands</span>
                    <span className="dial-code">+1340</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ug"

                    data-dial-code={256}
                    data-country-code="ug"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/UG.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Uganda</span>
                    <span className="dial-code">+256</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ua"

                    data-dial-code={380}
                    data-country-code="ua"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/UA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Ukraine (Україна)</span>
                    <span className="dial-code">+380</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ae"

                    data-dial-code={971}
                    data-country-code="ae"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/AE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">
                        United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                    </span>
                    <span className="dial-code">+971</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-gb"

                    data-dial-code={44}
                    data-country-code="gb"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/GB.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">United Kingdom</span>
                    <span className="dial-code">+44</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-us"

                    data-dial-code={1}
                    data-country-code="us"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/US.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">United States</span>
                    <span className="dial-code">+1</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-uy"

                    data-dial-code={598}
                    data-country-code="uy"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/UY.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Uruguay</span>
                    <span className="dial-code">+598</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-uz"

                    data-dial-code={998}
                    data-country-code="uz"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/UZ.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Uzbekistan (Oʻzbekiston)</span>
                    <span className="dial-code">+998</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-vu"

                    data-dial-code={678}
                    data-country-code="vu"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/Vu.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Vanuatu</span>
                    <span className="dial-code">+678</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-va"

                    data-dial-code={39}
                    data-country-code="va"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/VA.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Vatican City (Città del Vaticano)</span>
                    <span className="dial-code">+39</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ve"

                    data-dial-code={58}
                    data-country-code="ve"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/VE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Venezuela</span>
                    <span className="dial-code">+58</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-vn"

                    data-dial-code={84}
                    data-country-code="vn"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/VN.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Vietnam (Việt Nam)</span>
                    <span className="dial-code">+84</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-wf"

                    data-dial-code={681}
                    data-country-code="wf"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/WF.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Wallis and Futuna (Wallis-et-Futuna)</span>
                    <span className="dial-code">+681</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-eh"

                    data-dial-code={212}
                    data-country-code="eh"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/EH.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Western Sahara (‫الصحراء الغربية‬‎)</span>
                    <span className="dial-code">+212</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ye"

                    data-dial-code={967}
                    data-country-code="ye"
                >
                    <div className="flag-box">
                        <img   src={'https://www.countryflagicons.com/FLAT/64/YE.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Yemen (‫اليمن‬‎)</span>
                    <span className="dial-code">+967</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-zm"

                    data-dial-code={260}
                    data-country-code="zm"
                >
                    <div className="flag-box">
                    <img   src={'https://www.countryflagicons.com/FLAT/64/ZM.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Zambia</span>
                    <span className="dial-code">+260</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-zw"

                    data-dial-code={263}
                    data-country-code="zw"
                >
                    <div className="flag-box">
                    <img  src={'https://www.countryflagicons.com/FLAT/64/ZW.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Zimbabwe</span>
                    <span className="dial-code">+263</span>
                </li>
                <li
                    className="country standard"
                    id="iti-item-ax"

                    data-dial-code={358}
                    data-country-code="ax"
                >
                    <div className="flag-box">
                    <img    src={'https://www.countryflagicons.com/FLAT/64/AX.png'} alt=""  className="w-[20px] h-[20px] imgclass" />

                    </div>
                    <span className="country-name">Åland Islands</span>
                    <span className="dial-code">+358</span>
                </li>
            </ul>

        </div>
    )
}
