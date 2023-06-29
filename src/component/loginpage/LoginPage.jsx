import React from "react";
import "./loginpage.scss";
const LoginPage = () => {
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
              <input type="email" placeholder="example@mail.com" />
            </div>
          </div>

          <div className="col-12">
            <div className="single_billing_inp">
              <label>
                Password <span>*</span>
              </label>
              <input type="password" placeholder="type password" />
            </div>
          </div>

          <div className="col-12 mt-2 d-flex align-items-center justify-between">
            <label className="custom_check whitespace-nowrap check_2 ">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="save-default"
              />
              <span className="pl-2">Remember Me</span>
            </label>
            <a
              href="/forgotpasswordpage"
              className="text-defaut-color-pink pl-1 hover:no-underline hover:text-defaut-color-pink"
            >
              Forgot Password?
            </a>
          </div>
          <div className="col-12 mt-3">
            <button className="btnviewcart h-[35px] uppercase">login</button>
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
