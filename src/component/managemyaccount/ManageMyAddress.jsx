import React from "react";
import "./managemyaccount.scss";

const ManageMyAddress = () => {
  return (
    <div className="acprof_info_wrap shadow_sm">
      <h4 className="text_xl mb-3 font-bold">Manage Address</h4>
      <form action="">
        <div className="row">
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Full Name</label>
              <input type="text" value="John Doe" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Phone Number</label>
              <input type="text" value="123 456-789" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Country</label>
              <select className="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select country</option>
                <option selected>Bangladesh</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Region</label>
              <select className="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select region</option>
                <option selected>Dhaka</option>
                <option>Comilla</option>
                <option>Chittagong</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>City</label>
              <select className="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select city</option>
                <option selected>Dhaka-North</option>
                <option>Dhaka-South</option>
                <option>Badda</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_billing_inp">
              <label>Area</label>
              <select className="nice_select border  rounded h-9 py-1 px-3 text-sm outline-none">
                <option>select area</option>
                <option selected>Notun Bazar</option>
                <option>Gulshan</option>
                <option>Mirpur</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="single_billing_inp">
              <label>Address</label>
              <input
                type="text"
                className="addressinput"
                value="Solmaid Eidgha Mosque"
              />
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

export default ManageMyAddress;
