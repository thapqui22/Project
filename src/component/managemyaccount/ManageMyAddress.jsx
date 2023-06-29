import React from "react";
import "./managemyaccount.scss";

const ManageMyAddress = () => {
  return (
    <div class="acprof_info_wrap shadow_sm">
      <h4 class="text_xl mb-3 font-bold">Manage Address</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Full Name</label>
              <input type="text" value="John Doe" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Phone Number</label>
              <input type="text" value="123 456-789" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Country</label>
              <select class="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select country</option>
                <option selected>Bangladesh</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Region</label>
              <select class="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select region</option>
                <option selected>Dhaka</option>
                <option>Comilla</option>
                <option>Chittagong</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>City</label>
              <select class="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select city</option>
                <option selected>Dhaka-North</option>
                <option>Dhaka-South</option>
                <option>Badda</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single_billing_inp">
              <label>Area</label>
              <select class="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select area</option>
                <option selected>Notun Bazar</option>
                <option>Gulshan</option>
                <option>Mirpur</option>
              </select>
            </div>
          </div>
          <div class="col-md-12">
            <div class="single_billing_inp">
              <label>Address</label>
              <input
                type="text"
                className="addressinput"
                value="Solmaid Eidgha Mosque"
              />
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

export default ManageMyAddress;
