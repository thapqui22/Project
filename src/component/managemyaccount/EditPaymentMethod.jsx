import React from "react";
import "./managemyaccount.scss";
const EditPaymentMethod = () => {
  return (
    <div class="acprof_info_wrap shadow_sm">
      <h4 class="text_xl mb-3">Edit Payment Method</h4>
      <form action="">
        <div class="row">
          <div class="col-lg-8">
            <div class="single_billing_inp">
              <label>
                Card Number <span>*</span>
              </label>
              <input type="text" placeholder="Cart Number" />
            </div>
          </div>
          <div class="col-lg-8">
            <div class="single_billing_inp">
              <label>
                Name On Cart <span>*</span>
              </label>
              <input type="text" placeholder="Enter name on card" />
            </div>
          </div>

          <div class="col-12">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="single_billing_inp">
                  <label>
                    Expiration Date <span>*</span>
                  </label>
                  <input type="text" placeholder="MM/YY" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="single_billing_inp">
                  <label>
                    CVV <span>*</span>
                  </label>
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-1 mb-3">
            <div class="custom_check check_2 d-flex align-items-center">
              <input
                type="checkbox"
                class="check_inp"
                hidden=""
                id="save-default"
              />
              <label for="save-default">Save as defalut</label>
            </div>
          </div>
          <div class="col-12 acprof_subbtn">
            <button
              className="prorder_btn flex justify-center items-center h-10 rounded-sm hover:border-defaut-color-pink hover:border text-defaut-color-pink font-medium transition duration-300 ease-out hover:ease-in"
              type="submit"
              class="default_btn rounded small"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPaymentMethod;
