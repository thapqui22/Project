import React, { useState, useEffect, useRef } from "react";
import "./loginpage.scss";
const LoginPage = (props) => {
  const [hideCurrentPassword, setHideCurrentPassword] = useState(true);
  const paramAccount = {
    EmailAddress: String,
    Password: String,
    RememberMe: false,
  };
  const refParamAccount = useRef(paramAccount);
  const refEmailAddress = useRef(null);
  const refPassword = useRef(null);
  const refRememberMe = useRef(false);
  const handleOnClickLoginButton = (e) => {
    if (
      refEmailAddress.current.value !== null &&
      refPassword.current.value !== null
    ) {
      const email = refEmailAddress.current.value;
      if (validateEmail(email)) {
        console.log("Valid email:", email);
        paramAccount.EmailAddress = email;
      } else {
        console.log("Invalid email:", email);
      }

      const password = refPassword.current.value;
      const validationMessage = validatePassword(password);
      if (validationMessage === "valid") {
        console.log("Valid password:", password);
        paramAccount.Password = refPassword.current.value;
      } else {
        console.log("Invalid password:", validationMessage);
      }
      console.log(paramAccount);
    } else {
      console.log("Invalid value");
    }
  };
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleOnChangeCheckbox = () => {
    // refRememberMe.current = !refRememberMe.current;
    paramAccount.RememberMe = !refRememberMe.current;
  };
  const validatePassword = (password) => {
    // Check password length
    if (password.length < 8) {
      return "Password should be at least 8 characters long.";
    }
    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password should contain at least one downcase letter.";
    }
    // Check for numeric digit
    if (!/\d/.test(password)) {
      return "Password should contain at least one numeric digit.";
    }
    // Check for special character
    if (!/[!@#$%^&*()]/.test(password)) {
      return "Password should contain at least one special character.";
    }

    return "valid";
  };
  const handleHidePassword = (type) => {
    if (type === "Current Password") {
      setHideCurrentPassword(!hideCurrentPassword);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="register_form padding_default shadow_sm w-[450px] px-[24px] py-[30px]">
        <h4 className="title_2 text-2xl font-semibold uppercase pb-2">LOGIN</h4>
        <p className="pb-3 text-sm">Login if you a a returing customer.</p>

        <div className="row">
          <div className="col-12">
            <div className="single_billing_inp">
              <label>
                Email Address<span>*</span>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                ref={refEmailAddress}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="single_billing_inp">
              <label>
                Password <span>*</span>
              </label>
              <div className="inputpassword">
                <input
                  type={hideCurrentPassword ? "password" : "text"}
                  placeholder="type password"
                  ref={refPassword}
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
          <div className="col-12 mt-2 d-flex align-items-center justify-between">
            <label className="custom_check whitespace-nowrap check_2 ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="save-default"
                onChange={handleOnChangeCheckbox}
              />
              <span className="pl-2">Remember Me</span>
            </label>
            <a
              href="/forgotpasswordpage"
              className="text-defaut-color-pink mb-2 pl-1 hover:no-underline hover:text-defaut-color-pink"
            >
              Forgot Password?
            </a>
          </div>
          <div className="col-12 mt-3">
            <button
              className="btnviewcart h-[35px] uppercase"
              onClick={() => handleOnClickLoginButton()}
            >
              login
            </button>
          </div>
        </div>

        <div className="dif_regway my-3 text-center">
          <span className="txt uppercase bg-white px-2 relative z-10 bg-white">
            OR LOGIN IN WITH
          </span>
          <div className="relative border-b-[1px] w-[100%] top-[-13px]"></div>
        </div>

        <div className="btnfg flex justify-between">
          <button className="btnf h-[35px] uppercase">
            <i className="fab fa-facebook-f me-2"></i> Facebook
          </button>
          <button className="btng h-[35px] uppercase">
            <i className="fab fa-google me-2"></i> Google
          </button>
        </div>

        <p className="text-center mt-3 mb-0">
          Don't have an account.?{" "}
          <a
            href="login.html"
            className="text-color text-defaut-color hover:no-underline hover:text-defaut-color"
          >
            Login Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
