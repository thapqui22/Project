import React, { useState, useEffect } from "react";
import "./managemyaccount.scss";

const ChangePassWord = () => {
  const [hideCurrentPassword, setHideCurrentPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideRetypePassword, setRetypePassword] = useState(true);
  const handleHidePassword = (type) => {
    if (type === "Current Password") {
      setHideCurrentPassword(!hideCurrentPassword);
    } else if (type === "New Password") {
      setHideNewPassword(!hideNewPassword);
    } else if (type === "Retype Password") {
      setRetypePassword(!hideRetypePassword);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideCurrentPassword(true);
      setHideNewPassword(true);
      setRetypePassword(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [hideCurrentPassword, hideNewPassword, hideRetypePassword]);
  return (
    <div class="acprof_info_wrap">
      <h4 class="text_xl mb-3 font-bold">Change Password</h4>
      <div class="row flex-column">
        <div class="col-md-6">
          <div class="single_billing_inp">
            <label>Current Password</label>
            <div class="position-relative">
              <input
                type={hideCurrentPassword === true ? "password" : ""}
                placeholder="Enter current password"
              />
              <span class="icon">
                <i
                  class="las la-eye-slash"
                  onClick={() => handleHidePassword("Current Password")}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single_billing_inp">
            <label>New Password</label>
            <div class="position-relative">
              <input
                type={hideNewPassword === true ? "password" : ""}
                placeholder="Enter new password"
              />
              <span class="icon">
                <i
                  class="las la-eye-slash"
                  onClick={() => handleHidePassword("New Password")}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single_billing_inp">
            <label>Retype Password</label>
            <div class="position-relative">
              <input
                type={hideRetypePassword === true ? "password" : ""}
                placeholder="Repeat your password"
              />
              <span class="icon">
                <i
                  class="las la-eye-slash"
                  onClick={() => handleHidePassword("Retype Password")}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 acprof_subbtn">
          <button className="savechangebtn rounded-sm hover:border-defaut-color-pink hover:border font-medium hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassWord;
