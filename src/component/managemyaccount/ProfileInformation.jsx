import React, { useState, useEffect, useRef } from "react";
import "./managemyaccount.scss";
const ProfileInformation = () => {
  return (
    <div class="acprof_info_wrap shadow_sm">
      <h4 class="text_xl mb-3 font-bold">Profile Information</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>First Name</label>
              <input type="text" value="John" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Last Name</label>
              <input type="text" value="Doe" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Birthday</label>
              <input type="date" value="1998-01-08" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Gender</label>
              {/* <input type="date" value="1998-01-08"></input> */}
              <select class="nice_select border rounded h-9 py-1 px-3 text-sm outline-none">
                {/* <option>select gender</option> */}
                <option>Male</option>
                <option>Female</option>
                <option selected>Other</option>
              </select>
              {/* <div class="nice-select nice_select" tabindex="0">
                <span class="current">Male</span>
                <ul class="list">
                  <li data-value="select gender" class="option">
                    select gender
                  </li>
                  <li data-value="Male" class="option selected">
                    Male
                  </li>
                  <li data-value="Female" class="option">
                    Female
                  </li>
                  <li data-value="Other" class="option">
                    Other
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Email Address</label>
              <input type="text" value="example@mail.com" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Phone Number</label>
              <input type="text" value="123 456-789" />
            </div>
          </div>
          <div class="col-12 acprof_subbtn">
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
