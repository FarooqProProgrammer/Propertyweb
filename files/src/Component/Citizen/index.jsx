import React from 'react'
import { Link } from 'react-router-dom'
// import "./index.css"
import CitizenShipIcon from "../../assets/CitizenshipAppFee_Icon.svg"
import { TypographyComponent } from '../../ReUseAbleComponent/TypographyComponent'

export default function Citizen() {
    return (
        <div className="hot-properties-bg--video" id="new-turkish-citi" style={{ background: '#e5e4d5' }}>
            <div className="new-citizen container-fluid">
                <div className="about-pt flex flex-direction-column margin-bottom-4">
                    <Link>
                        <img alt="<b>Turkish Citizenship</b>"
                         className="margin-right-3 citizenship-Icon-ar pulse-animation lazyload" 
                         src={CitizenShipIcon} 
                         width={90} />
                         </Link>
                    <TypographyComponent varient={'p'} className="aboutpt-header title-lined abhaya line-h-1" style={{ marginBottom: '.5rem' }}>
                        <TypographyComponent varient={'b'}>Turkish Citizenship</TypographyComponent>
                    </TypographyComponent>
                    <TypographyComponent varient="p" className="aboutpt-header title-lined abhaya line-h-1 font-24" style={{ fontStyle: 'italic', marginTop: 0 }}>
                        by Investment Programme
                    </TypographyComponent>
                    <TypographyComponent varient="p" className="hot-properties-subtitle col-md-10 text-center padding-top-1">
                        You can apply for Turkish citizenship by investment once you have invested a minimum of $400,000 in
                        residential or commercial property in Turkey. Your spouse &amp; your children under the age of 18
                        will also be eligible for Turkish nationality. Please contact us for further details, legal advice
                        and a list of properties in Turkey that are pre-approved for the citizenship by investment program.
                    </TypographyComponent>
                    <Link to={"/turkishCitizen"} className="about-pt--btn btn rednew-border bg-transparent" >Discover
                        More
                    </Link>
                </div>
            </div>
        </div>

    )
}
