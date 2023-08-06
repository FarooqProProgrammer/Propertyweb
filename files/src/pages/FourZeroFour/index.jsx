import React from 'react'
import { Link } from 'react-router-dom'

export default function FourZeroFour() {
    return (
        <section id="main" className="cf  disable-copy ">
            <section id="page_404" className="align-center page_404-bg padding-ver-5">
                <div className="content">
                   
                    <h3 className="page-title aling-center">Are you lost ?</h3>
                    <h1 className="title aling-center margin-top-1 noraml margin-bottom-3 line-h-15">
                        404 Error, Sorry the Page you have Requested was not found.
                    </h1>
                    <Link to="/" className="btn font-15">
                        Go Homepage
                    </Link>
                </div>
            </section>
        </section>

    )
}
