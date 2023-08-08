import React from "react";

export default function TeamHeader() {
  return (
    <div className="endpage-main-intro ">
      <div className="endpage-title-actions">
        <div className="endpage-title">
          <meta
            itemProp="url"
            content="https://www.propertyturkey.com/about-us/bodrum-team"
          />
          <h3 className="d-mobile">
            <label className="date">Updated : 24 April 2020</label>
            <label className="date ">Created : 22 January 2016</label>
          </h3>
          <div className="endpage-actions d-mobile share-btn-pos">
            <a href="#" className="social-shares">
              <img
                src="https://www.propertyturkey.com/front/image/icons/share-alt-solid.-gold.svg"
                width={21}
                alt=""
              />
            </a>
          </div>
          <h1 itemProp="name headline" className="page-title abhaya">
            Bodrum Team
          </h1>
          <h3 className="d-desk">
            <div className="flex">
              <div className="d-desk"></div>
              <label className="date no-margin">
                <span className="clr-pt">Updated</span> : 24 April 2020
              </label>
              <label className="date no-margin ml-1-important">
                <span className="clr-pt">Created</span> : 22 January 2016
              </label>
            </div>
          </h3>
          <div className="d-mobile"></div>
        </div>
        <div className="endpage-actions d-desk">
          <a href="#" className="social-shares">
            <img
              src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
