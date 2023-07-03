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
    <div className="acprof_info_wrap">
      <h4 className="text_xl mb-3 font-bold">Change Password</h4>
      <div className="acprof_info_wrap_password row flex-column">
        <div className="col-md-6">
          <div className="single_billing_inp">
            <label>Current Password</label>
            <div className="position-relative">
              <input
                type={hideCurrentPassword ? "password" : "text"}
                placeholder="Enter current password"
              />
              <span className="icon">
                <i
                  className="las la-eye-slash hover:text-defaut-color-pink"
                  onClick={() => handleHidePassword("Current Password")}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single_billing_inp">
            <label>New Password</label>
            <div className="position-relative">
              <input
                type={hideNewPassword ? "password" : "text"}
                placeholder="Enter new password"
              />
              <span className="icon">
                <i
                  className="las la-eye-slash hover:text-defaut-color-pink"
                  onClick={() => handleHidePassword("New Password")}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single_billing_inp">
            <label>Retype Password</label>
            <div className="position-relative">
              <input
                // type="password"
                type={hideRetypePassword ? "password" : "text"}
                placeholder="Repeat your password"
              />
              <span className="icon">
                <i
                  className="las la-eye-slash hover:text-defaut-color-pink"
                  onClick={() => handleHidePassword("Retype Password")}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 acprof_subbtn">
          <button className="savechangebtn rounded-sm hover:border-defaut-color-pink hover:border font-medium hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassWord;
