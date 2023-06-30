import React, { useState, useEffect, useRef } from "react";
import "./managemyaccount.scss";
const ProfileInformation = () => {
  return (
    <div className="acprof_info_wrap shadow_sm">
      <h4 className="text_xl mb-3 font-bold">Profile Information</h4>
      <form action="">
        <div className="row">
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>First Name</label>
              <input type="text" value="John" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Last Name</label>
              <input type="text" value="Doe" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Birthday</label>
              <input type="date" value="1998-01-08" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Gender</label>
              {/* <input type="date" value="1998-01-08"></input> */}
              <select className="nice_select border rounded h-9 py-1 px-3 text-sm outline-none">
                {/* <option>select gender</option> */}
                <option>Male</option>
                <option>Female</option>
                <option selected>Other</option>
              </select>
              {/* <div className="nice-select nice_select" tabindex="0">
                <span className="current">Male</span>
                <ul className="list">
                  <li data-value="select gender" className="option">
                    select gender
                  </li>
                  <li data-value="Male" className="option selected">
                    Male
                  </li>
                  <li data-value="Female" className="option">
                    Female
                  </li>
                  <li data-value="Other" className="option">
                    Other
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Email Address</label>
              <input type="text" value="example@mail.com" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Phone Number</label>
              <input type="text" value="123 456-789" />
            </div>
          </div>
          <div className="col-12 acprof_subbtn">
            <button className="savechangebtn rounded-sm hover:border-defaut-color-pink hover:border font-medium hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileInformation;
