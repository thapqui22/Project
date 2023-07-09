import React from "react";

const ReturnRequest = () => {
  return (
    <div class="padding_default pl-[20px]">
      <h4 class="od_title">Return Request</h4>

      <div class="orderdet_info d-flex align-items-center">
        <div class="single_orderdet me-5">
          <h5>Sold By</h5>
          <p class="text-color">RAFCART</p>
        </div>
        <div class="single_orderdet">
          <h5>Order Number</h5>
          <p>789ER4S324</p>
        </div>
      </div>

      <div class="order_prodetails d-flex align-items-center mt-4 flex-wrap">
        <div class="orderprod_img">
          <img
            loading="lazy"
            src="assets/images/headphone-3.png"
            alt="product"
          />
        </div>
        <div class="single_orderdet pdname">
          <h5>Sound Intone I65 Earphone</h5>
          <p>No Warranty Available</p>
        </div>
        <div class="single_orderdet w-xs-33 ms-md-auto ms-0 mt-3 mt-md-0">
          <h5>$50</h5>
        </div>
        <div class="single_orderdet w-xs-33 ms-auto mt-3 mt-md-0">
          <h5>Qty:1</h5>
        </div>
        <div class="single_orderdet w-xs-33 ms-auto mt-3 mt-md-0">
          <p>
            Select A Reason <span class="text-color">*</span>
          </p>
          <select class="nice_select retorder">
            <option>Select A Reason</option>
            <option>Deactive</option>
            <option>Not as advertised</option>
            <option>Wrong/Fake item</option>
            <option>Missing accessories</option>
            <option>Wrong size</option>
            <option>Damaged</option>
          </select>
        </div>
      </div>

      <div class="return_requirement">
        <div class="single_retreq mb-4">
          <h5 class="text_md">Payment Method</h5>
          <div class="custom_check radio d-flex align-items-center">
            <input type="radio" class="check_inp" hidden="" id="return-by" />
            <label for="return-by" class="text_md">
              Refund By Credit Card
            </label>
          </div>
          <p class="text_p text_xs mb-0">
            Money will be return your Credit Card That you used for purchased{" "}
          </p>
        </div>

        <div class="single_retreq">
          <h5 class="text_md">Select Shipment Option</h5>
          <div class="custom_check radio d-flex align-items-center">
            <input
              type="radio"
              class="check_inp"
              name="shiping-option"
              hidden=""
              id="shiping-courier"
            />
            <label class="text_md" for="shiping-courier">
              Courier Pick Up
            </label>
          </div>
          <div class="custom_check radio d-flex align-items-center">
            <input
              type="radio"
              class="check_inp"
              name="shiping-option"
              hidden=""
              id="shiping-drop"
            />
            <label class="text_md" for="shiping-drop">
              Drop Off
            </label>
          </div>
        </div>
      </div>

      <div class="ret_additional mt-4">
        <div class="single_billing_inp">
          <label class="text_md">Additional Information (optional)</label>
          <textarea type="text" placeholder="Example: wrong size"></textarea>
        </div>
      </div>

      <div class="retagreement mt-4 mb-4">
        <div class="custom_check check_2 d-flex align-items-center">
          <input
            type="checkbox"
            class="check_inp"
            hidden=""
            id="agreement-by"
          />
          <label for="agreement-by" class="text_md">
            I have Read and accepted the{" "}
            <a href="#" class="text-color">
              Return Policy
            </a>{" "}
            of RAFCART
          </label>
        </div>
      </div>

      <div class="col-12 acprof_subbtn">
        <button type="submit" class="default_btn rounded small">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReturnRequest;
