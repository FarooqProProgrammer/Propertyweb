import React from 'react'
import { Link } from "react-router-dom"

export default function FeaturedArticle(props) {
    return (
        <>
            <article itemScope="" itemType="http://schema.org/NewsArticle">
                <h2 itemProp="name headline" className="page-title">
                    <Link>
                        {props.title}
                    </Link>
                </h2>
                <div>
                    <div>
                        <figure className="col-dis-4 col-tab-4 col-mob-12">
                            <Link>
                                <img
                                    src={props.img}
                                    alt="What can 160,000 Euro buy you across Europe?"
                                />
                            </Link>
                        </figure>
                        <p className="col-dis-8 col-tab-8 col-mob-12" itemProp="articleBody">
                            {props.description}
                        </p>
                    </div>
                    <footer className="meta cf">
                        <div className=" col-dis-12 col-tab-12 col-mob-12">
                            <i className="fa fa-calendar" /> 15 November 2019
                        </div>
                    </footer>
                </div>
            </article>
            <hr />


        </>
    )
}
