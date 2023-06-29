import React from "react";
import "./forgotpasswordpage.scss";
const ForgotPasswordPage = (props) => {
  return (
    <div className="flex justify-center">
      <div className="register_form padding_default shadow_sm w-[450px] px-[24px] py-[30px]">
        <h4 className="title_2 text-2xl font-semibold uppercase pb-2">
          RESET PASSWORD
        </h4>
        <p className="pb-3 text-sm">
          Please enter your email address below to receive a link.
        </p>

        <div className="row">
          <div className="col-12">
            <div className="single_billing_inp">
              <label>
                Email Address<span>*</span>
              </label>
              <input type="email" placeholder="example@mail.com" />
            </div>
          </div>
          <div className="col-12 mt-3">
            <button className="btnviewcart h-[40px] w-[50%] hover:w-[50%] uppercase">
              reset my password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
