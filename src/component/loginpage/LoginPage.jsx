import React, { useState, useEffect, useRef } from "react";
import { useStorage } from "../localstorage/LocalStorage";
import "./loginpage.scss";
import { toast } from "react-toastify";
const LoginPage = (props) => {
  const [hideCurrentPassword, setHideCurrentPassword] = useState(true);
  const [loginAccount, setLoginAccount] = useStorage("loginAccount", []);
  const paramAccount = {
    EmailAddress: String,
    Password: String,
    RememberMe: false,
  };
  const refEmailAddress = useRef(null);
  const refPassword = useRef(null);
  const refRememberMe = useRef(false);
  const handleOnClickLoginButton = (e) => {
    if (
      refEmailAddress.current.value !== "" &&
      refPassword.current.value !== ""
    ) {
      const email = refEmailAddress.current.value;
      const password = refPassword.current.value;
      const validationMessagePassword = validatePassword(password);
      const validationMessageEmail = validateEmail(email);
      if (validationMessageEmail === "valid") {
        paramAccount.EmailAddress = email;
        if (validationMessagePassword === "valid") {
          paramAccount.Password = refPassword.current.value;
          if (paramAccount.RememberMe) {
            // Save email and password to local storage
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
          }
          handleLogin(paramAccount);
        } else {
          toast.dismiss();
          toast.error(
            <div>
              <h4 className="font-bold">Invalid password:</h4>
              <p>{validationMessagePassword}</p>
            </div>,
            {
              autoClose: 1000, // Set the duration (in milliseconds) for the toast to be displayed
            }
          );
        }
      } else {
        toast.dismiss();
        toast.error(
          <div>
            <h4 className="font-bold">Invalid email:</h4>
            <p>{validationMessageEmail}</p>
          </div>,
          {
            autoClose: 1000, // Set the duration (in milliseconds) for the toast to be displayed
          }
        );
      }
      console.log(paramAccount);
    } else {
      toast.dismiss();
      toast.error("Email or password was empty", {
        autoClose: 1000, // Set the duration (in milliseconds) for the toast to be displayed
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      if (email !== "" && password !== "" && loginAccount === false) {
        refEmailAddress.current.value = email;
        refPassword.current.value = password;
      }
    };
    fetchData();
  }, []);

  const handleLogin = (account) => {
    props.onChangeDataLogin(account);
    refEmailAddress.current.value = "";
    refPassword.current.value = "";
    window.location.href = "/";
  };
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (email.trim() === "") {
      return "Email is required.";
    }

    if (!emailRegex.test(email)) {
      if (!email.includes("@")) {
        return "Email is missing the @ symbol.";
      }

      if (!email.endsWith(".com")) {
        return "Email should end with .com domain.";
      }

      // Add more specific checks as needed

      return "Invalid email format.";
    }

    return "valid";
  };
  const handleOnChangeCheckbox = () => {
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
      return "Password should contain at least one lowercase letter.";
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
      {loginAccount === false ? (
        <div className="register_form padding_default shadow_sm w-[450px] px-[24px] py-[30px]">
          <h4 className="title_2 text-2xl font-semibold uppercase pb-2">
            LOGIN
          </h4>
          <p className="pb-3 text-sm">Login if you are a returning customer</p>
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
                  id="email"
                />
                {/* <p className="text-xs pl-3 pt-2 text-[#6e676793]">Password</p> */}
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
                    id="password"
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
            <span className="txt uppercase bg-white px-2 relative z-10">
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
              Register Now
            </a>
          </p>
        </div>
      ) : (
        <div className="row py-10 w-[1200px]">
          <div className="row flex text-center justify-center">
            <div className="text-center py-3">
              <i className="fa-solid fa-circle-check text-7xl text-defaut-color"></i>
            </div>
            <div className="font-bold text-3xl ">You are logged in</div>
            <div className="text-xl p-2 w-1/2">
              You have successfully logged in to your account.
            </div>
            <div className="coupon_form_footer ">
              <a href="/shopping">
                <button className="proccesstocheckoutbtn uppercase rounded min-w-[200px] w-[10%] hover:border-defaut-color-pink hover:border font-medium text-base hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
                  continue shopping
                </button>
              </a>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
