import React from 'react'
import Header from '../../ReUseAbleComponent/Header'

export default function ChangePwd() {
  return (
    <div>
        <Header title="User Profile" />
        <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
  <div className=" col-dis-9 col-tab-9 col-mob-12 padding-bottom-2">
    <div className="box mob-noPadding">
      <h2 className="page-title">Change Your Password</h2>
      <form
        method="POST"
        action="https://www.propertyturkey.com/profile/updatePwd"
        acceptCharset="UTF-8"
      >
        <input
          name="_token"
          type="hidden"
          defaultValue="ClGVMd6EguRYfHwXhAsAatxlU34gsagbDBwb0YpI"
        />{" "}
        <div className="field">
          <b>
            <label htmlFor="old_pwd">Old Password</label>
          </b>
          <input
            validation=""
            name="old_pwd"
            type="password"
            defaultValue=""
            id="old_pwd"
          />{" "}
        </div>
        <div className="field">
          <b>
            <label htmlFor="new_pwd">New Password</label>
          </b>
          <input
            validation=""
            name="new_pwd"
            type="password"
            defaultValue=""
            id="new_pwd"
          />{" "}
        </div>
        <div className="field">
          <b>
            <label htmlFor="confirm_new_pwd">Confirm New Password</label>
          </b>
          <input
            validation=""
            name="confirm_new_pwd"
            type="password"
            defaultValue=""
            id="confirm_new_pwd"
          />{" "}
        </div>
        <input
          className="btn margin-top-3"
          type="submit"
          defaultValue="Change it !"
        />{" "}
      </form>{" "}
    </div>
  </div>
  <section id="profile" className="widgets col-dis-3 col-tab-3 col-mob-12">
    <div className="widget padding-1">
      <div className="body">
        <div className="cf">
          <h3>
            <b>Muhammad Farooq</b>
            <small>Product Designer</small>
            <a
              href="https://www.propertyturkey.com/profile/edit"
              className="cog fa fa-cog"
              title="Edit Profile"
            />
          </h3>
        </div>
        <label>
          <b>E-mail:</b>
          <span>mf8498521@gmail.com</span>
        </label>
        <label>
          <b>Phone:</b>
          <span />
        </label>
        <label>
          <b>Address:</b>
          <span />
        </label>
        <label>
          <b>Default Language:</b>
          <span>en</span>
        </label>
        <label>
          <span>
            {" "}
            <a
              href="/"
              className="cog fa fa-cog"
            >
              {" "}
              Change Password
            </a>{" "}
          </span>
        </label>
      </div>
    </div>
    <div className="widget changepassword padding-1">
      <h3 className="title">Useful Links</h3>
      <div className="body">
        <ul className="no-bullets cf">
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Income Tax On Turkish Property
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Capital Gains Tax On Sale Of
              Turkish Property
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Selling Your Property Tips
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Who Can Buy Property in USA
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> How to buy property in USA
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> How to design and build your
              own
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Property USA Inspection
              Trips
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Costs of Purchasing a Property
              in USA
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Property maintenance and
              management
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Finance for property in USA
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Should I use a solicitor to
              buy property in USA
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Power of Attorney in USA
            </a>
          </li>
          <li>
            <a href="#" className="no-wrap">
              <i className="fa fa-angle-right" /> Buying property in USA
              through a company
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}
