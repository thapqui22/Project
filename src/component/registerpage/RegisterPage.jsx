import React from "react";
import "./registerpage.scss";
const RegisterPage = () => {
  return (
    <div className="flex justify-center">
      <div className="register_form padding_default shadow_sm w-[450px] px-[24px] py-[30px]">
        <h4 className="title_2 text-2xl font-semibold uppercase pb-2">
          Create an account
        </h4>
        <p className="text-sm pb-3">Register here if you are a new customer.</p>

        <div className="row">
          <div className="col-12">
            <div className="single_billing_inp">
              <label>
                Full Name <span>*</span>
              </label>
              <input type="text" placeholder="Jone Doe" />
            </div>
          </div>
          <div className="col-12">
            <div className="single_billing_inp">
              <label>
                Email Address <span>*</span>
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
          <div className="col-12">
            <div className="single_billing_inp">
              <label>
                Confirm Password <span>*</span>
              </label>
              <input type="password" placeholder="confirm your password" />
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="custom_check check_2 d-flex align-items-center">
              <input
                type="checkbox"
                className="check_inp"
                hidden=""
                id="save-default"
              />
              <label className="whitespace-nowrap">
                I have read and agree to the
                <a
                  href="/termandconditionspage"
                  className="text-defaut-color-pink pl-1 hover:no-underline hover:text-defaut-color-pink"
                >
                  terms &amp; conditions
                </a>
              </label>
            </div>
          </div>
          <div className="col-12 mt-3">
            <button className="btnviewcart h-[35px] uppercase">
              create account
            </button>
          </div>
        </div>

        <div className="dif_regway my-3 text-center">
          <span className="txt uppercase bg-white px-2 relative z-10">
            Or singup in with
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
          Already have an account.?{" "}
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

export default RegisterPage;
