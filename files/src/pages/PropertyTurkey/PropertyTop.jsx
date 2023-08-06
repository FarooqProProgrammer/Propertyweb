import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function PropertyTop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (

        <>

            <div className="py-3 flex flex-col gap-2 sm:flex-row items-center lg:justify-around sm:justify-between">
                {/* Dropdown */}
                <div className="w-[300px]">
                    <div className="dropdown-new-tv toggle-sorte">
                        <span className="flex align-center">
                            <img src="https://www.propertyturkey.com/front/image/images2019/Icons/burger-menu.svg"
                                width={20}
                                alt="" />
                            <span className="sort-by-span">Sort by</span>
                            Latest Added
                        </span>
                        <div className="dropdown-content-new-tv">
                            <p>
                                <a>
                                    Latest Added
                                </a>
                            </p>
                            <p>
                                <a>
                                    Recommended
                                </a>
                            </p>
                            <p>
                                <a>
                                    Most Popular
                                </a>
                            </p>
                        </div>
                    </div>
                </div>


                {/* Input tag with search icon */}
                <div className="flex lg:w-[500px] md:w-[90%] sm:w-[200px]">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
                    <button className="btn btn-outline-secondary" type="button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>


                {/* Button */}
                <div className="" >
                    <Link onClick={showModal} className="view-all-btn btn rednew-border" data-fancybox="" data-src="#subscribe-media-modal" >
                        <span>Subscribe to get the latest videos</span>
                    </Link>

                </div>
            </div>







            <Modal style={{ position: 'relative', top: 1 }}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div
                    id="subscribe-media-modal"
                    style={{ display: "inline-block", padding: 0 }}
                    className="fancybox-content"
                >
                    <div className="container subscribe-media">
                        <div className="box white clearfix" style={{ marginTop: "1rem" }}>
                            <section id="search">
                                <h3 className="title text-center clr-pt-darkgrey abhaya font-2">
                                    Subscribe To Our Media
                                </h3>
                            </section>
                            <form
                                action="https://www.propertyturkey.com/subscribe-to-media"
                                method="post"
                            >
                                <label htmlFor="email">
                                    Full Name :
                                    <input type="text" name="full_name" id="email" />
                                </label>
                                <label htmlFor="email">
                                    Email :
                                    <input type="email" name="email" id="email" />
                                </label>
                                <label htmlFor="email">
                                    Telephone :
                                    <div className="intl-tel-input allow-dropdown">
                                        <div className="flag-container">
                                            <div
                                                className="selected-flag"
                                                role="combobox"
                                                aria-owns="country-listbox"
                                                tabIndex={0}
                                                title="Pakistan (‫پاکستان‬‎): +92"
                                            >
                                                <div className="iti-flag pk" />
                                                <div className="iti-arrow" />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="input-tel"
                                            name="phone"
                                            id="phone"
                                            autoComplete="off"
                                            placeholder="+92 301 2345678"
                                        />
                                    </div>
                                </label>
                                <label htmlFor="email">
                                    Notes :
                                    <input type="text" name="notes" id="notes" />
                                </label>
                                <input
                                    name="requestUrl"
                                    type="hidden"
                                    defaultValue="https://www.propertyturkey.com/"
                                />
                                <label htmlFor="to_news">
                                    Subscribe To our News
                                    <input type="checkbox" name="to_news" defaultChecked="" id="" />
                                </label>
                                <label htmlFor="to_news">
                                    Subscribe To our Blog
                                    <input type="checkbox" name="to_blog" defaultChecked="" id="" />
                                </label>
                                <label htmlFor="to_news">
                                    Subscribe To our videos
                                    <input type="checkbox" name="to_videos" defaultChecked="" id="" />
                                </label>
                                <div
                                    className="g-recaptcha"
                                    data-sitekey="6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC"
                                >
                                    <div style={{ width: 304, height: 78 }}>
                                        <div>
                                            <iframe
                                                title="reCAPTCHA"
                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC&co=aHR0cHM6Ly93d3cucHJvcGVydHl0dXJrZXkuY29tOjQ0Mw..&hl=en&v=6MY32oPwFCn9SUKWt8czDsDw&size=normal&cb=oh3za2rbl5j7"
                                                width={304}
                                                height={78}
                                                role="presentation"
                                                name="a-lke67yjqb3r1"
                                                frameBorder={0}
                                                scrolling="no"
                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                            />
                                        </div>
                                        <textarea
                                            id="g-recaptcha-response"
                                            name="g-recaptcha-response"
                                            className="g-recaptcha-response"
                                            style={{
                                                width: 250,
                                                height: 40,
                                                border: "1px solid rgb(193, 193, 193)",
                                                margin: "10px 25px",
                                                padding: 0,
                                                resize: "none",
                                                display: "none"
                                            }}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <iframe style={{ display: "none" }} />
                                </div>
                                <input
                                    type="text"
                                    style={{ display: "none" }}
                                    name="enqID"
                                    defaultValue=""
                                />
                                <input
                                    type="submit"
                                    defaultValue="Join Us"
                                    className="btn contactus-hover bg-pt crl-white"
                                />
                            </form>
                        </div>
                    </div>
                    <button
                        type="button"
                        data-fancybox-close=""
                        className="fancybox-button fancybox-close-small"
                        title="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" version={1} viewBox="0 0 24 24">
                            <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z" />
                        </svg>
                    </button>
                </div>

            </Modal>

        </>


    )
}
