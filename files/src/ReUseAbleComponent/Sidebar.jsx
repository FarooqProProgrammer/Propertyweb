import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Sidebar({ Data }) {
    const [toggleInvesting, settoggleInvesting] = useState(false);
    const [togglePurchase, settogglePurchase] = useState(false);
    const [toggleResidency, settoggleResidency] = useState(false);
    const [togglepets, settogglepets] = useState(false);
    const [toggleproperty, settoggleproperty] = useState(false);
    const [toggleLiving, settoggleLiving] = useState(false);
    return (
        <div className="col-12 col-md-3 buyer-guide--side-bar-bg">
            <div className="container-fluid">
                <p className="buyer-guide--title"> Buyer Guide</p>
                {
                    Data.map((item) => {
                        return (
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Investing in Turkey">
                                        {item.title}
                                    </p>
                                    {toggleInvesting ? (
                                        <FiChevronDown
                                            onClick={() => settoggleInvesting(!toggleInvesting)}
                                            className="tabs-icon"
                                        />
                                    ) : (
                                        <FiChevronUp
                                            onClick={() => settoggleInvesting(!toggleInvesting)}
                                            className="tabs-icon"
                                        />
                                    )}
                                </div>
                                <ul
                                    className={`list-unstyled buyer-guide--ul ${toggleInvesting ? "" : "hide"
                                        }`}
                                >
                                    {
                                        item.links.map((item) => {
                                            return (
                                                <li className="">
                                                    <Link title="Why invest in property in Turkey">
                                                       {item.text}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        )
                    })
                }

                <div className="padding-top-2 side-item">
                    <div className="buyer-guide--supertitle">
                        <p
                            className="buyer-guide--title-tab"
                            title="Download Complete Buyer Guide"
                        >
                            <Link title="Download Complete Buyer Guide">
                                Download Complete Buyer Guide
                            </Link>
                        </p>
                        <i
                            className="fa fa-angle-up tabs-icon"
                            aria-hidden="true"
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
