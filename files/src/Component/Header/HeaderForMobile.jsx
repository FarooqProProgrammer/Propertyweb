import React from 'react'
import HeaderMobileNav from './HeaderMobileNav'
import { Link } from 'react-router-dom'

export default function HeaderForMobile() {
    return (
        <header>
            {/* Not Active yet */}
            <div className="header-top ">
                <div className="wrap-dis-85 flex  content-end items-center hideMb-showDt">
                    <div className="header-phone-items order-3">
                        <a
                            
                            className="active"
                            title="English"
                        >
                            EN
                        </a>
                        <a
                            
                            title="Russian"
                            className=""
                        >
                            RU
                        </a>
                        <a  title="Arabic">
                            AR
                        </a>
                        <a  title="German">
                            DE
                        </a>
                        <a  title="Chinese">
                            中文
                        </a>
                        <a  title="Farsi">
                            FA
                        </a>
                    </div>
                    <a  className="flex">
                        <img
                            src="https://www.propertyturkey.com/front/image/images2019/Images/partner-button-01.svg"
                            width={95}
                            className="img-fluid"
                            alt=""
                        />
                    </a>
                    <div className="currencyy order-2">
                        <a
                            rel="nofollow"
                            
                            className=""
                            title="Sterling Pound  "
                        >
                            <i className="fa fa-gbp" />
                        </a>
                        <a
                            rel="nofollow"
                            
                            className=""
                            title="Euro "
                        >
                            <i className="fa fa-eur" />
                        </a>
                        <Link
                      
                            className="active"
                            title="Dollar "
                        >
                            <i className="fa fa-usd" />
                        </Link>
                        <a
                            rel="nofollow"
                            
                            className=""
                            title="Turkish Lira "
                        >
                            <i className="fa fa-try" />
                        </a>
                    </div>
                    <div className="elastic-search d-desk">
                        <i className="fa fa-search" aria-hidden="true" />
                    </div>
                </div>
                <div className="main-header">
                    <div className="flex  items-center content-start position-relative mt-15 content-space-between">
                        <div className="logo">
                            <a
                                
                                title="Property Turkey"
                                className="logoImg flex items-center content-center flex-direction-column pos-logo-lg"
                                id="desktopLogo"
                            >
                                <img
                                    src="https://www.propertyturkey.com/front/image/home/pt_new_logo.svg"
                                    alt="Property Turkey"
                                />
                            </a>
                           
                            {/* <div class="info-slogan">
              <img src="https://www.propertyturkey.com/front/image/1.png" alt="for life and investment" />
          </div> */}
                            <a
                                className="navbutton  tab-inline-block mob-inline-block mobile burgermenu position-abs"
                                
                            >
                                <img src="https://www.propertyturkey.com/front/image/images2019/Icons/burger-menu.svg" />
                            </a>
                            <div className="elastic-search d-mobile" id="headerSearchIcon">
                                <img
                                    src="https://www.propertyturkey.com/front/image/icons/search.svg"
                                    title="search properties"
                                />
                            </div>
                        </div>
                        <HeaderMobileNav />
                        <div className="auth header-right order-1 login-register-desktop-xl d-desk">
                            <a
                                className="login fl-dis-right  fl-tab-right fl-mob-right"
                                title="Login"
                                rel="nofollow"
                                data-fancybox=""
                                data-src="#logins"
                                
                            >
                                Login
                            </a>
                            <a
                                className="login fl-dis-right  fl-tab-right fl-mob-right "
                                title="Register"
                                rel="nofollow"
                                data-fancybox=""
                                data-src="#registers"
                                
                            >
                                Register
                            </a>
                        </div>
                        {/* <a class="btn --gray --shadow">Sign in</a>
          <a class="btn --red">Join Now</a> */}
                    </div>
                </div>
            </div>
            <div className="elastic-search-form searchWrapper">
                <form action="https://www.propertyturkey.com/real_estate/search">
                    <input
                        type="text"
                        name="keyword"
                        autoComplete="off"
                        defaultValue=""
                        className="form-control"
                        placeholder="Example: Apartment Istanbul Sea view"
                    />
                    <button type="submit" className="d-desk">
                        <img src="https://www.propertyturkey.com/front/image/icons/search-white.svg" />
                        Search
                    </button>
                    <button type="submit" className="d-mobile">
                        <img src="https://www.propertyturkey.com/front/image/icons/search-white.svg" />
                    </button>
                    <span className="close">
                        <img src="https://www.propertyturkey.com/front/image/icons/icons/baseline-close-6.svg" />{" "}
                    </span>
                    <div className="search-results-wrapper">
                        <div className="loadingSpan hide">
                            <img src="https://www.propertyturkey.com/front/image/AjaxLoader.gif" />
                        </div>
                        <div className="search-results-list" />
                    </div>
                </form>
            </div>
        </header>

    )
}
