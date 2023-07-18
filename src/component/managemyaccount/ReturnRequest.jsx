import React from "react";

const ReturnRequest = () => {
  return (
    <div className="padding_default p-[20px] ml-4">
      <h4 className="text-lg mb-3 font-medium">Return Request</h4>
      <div className="orderdet_info d-flex align-items-center">
        <div className="single_orderdet me-5">
          <h5 className="text-base font-medium pb-1">Sold By</h5>
          <p className="text-sm">RAFCART</p>
        </div>
        <div className="single_orderdet">
          <h5 className="text-base font-medium pb-1 ">Order Number</h5>
          <p className="text-sm">789ER4S324</p>
        </div>
      </div>
      <div className="order_prodetails d-flex align-items-center justify-between p-4 flex-wrap">
        <div className="flex w-1/3 align-items-center">
          <div className="orderprod_img w-[20%] mr-3">
            <img
              loading="lazy"
              src="https://themes.rslahmed.dev/rafcart/assets/images/headphone-3.png"
              alt="product"
            />
          </div>
          <div className="single_orderdet pdname">
            <h5 className="text-base font-medium">Sound Intone I65 Earphone</h5>
            <p className="text-sm">No Warranty Available</p>
          </div>
        </div>
        <div className="single_orderdet">
          <h5 className="text-base font-medium">$50</h5>
        </div>
        <div className="single_orderdet">
          <h5 className="text-base font-medium">Qty:1</h5>
        </div>
        <div class="single_billing_inp">
          <p className="text-sm">
            Select A Reason <span className="text-color">*</span>
          </p>
          <select class="nice_select border rounded cursor-pointer h-9 py-1 px-3 text-sm outline-none">
            <option>Select A Reason</option>
            <option>Deactive</option>
            <option>Not as advertised</option>
            <option>Wrong/Fake item</option>
            <option>Missing accessories</option>
            <option>Wrong size</option>
            <option>Damaged</option>
          </select>
        </div>
        {/* <div className="single_orderdet w-xs-33 ms-auto mt-3 mt-md-0">
          <p className="text-sm">
            Select A Reason <span className="text-color">*</span>
          </p>
          <select className="nice_select retorder">
            <option>Select A Reason</option>
            <option>Deactive</option>
            <option>Not as advertised</option>
            <option>Wrong/Fake item</option>
            <option>Missing accessories</option>
            <option>Wrong size</option>
            <option>Damaged</option>
          </select>
        </div> */}
      </div>

      <div className="return_requirement">
        <div className="single_retreq mb-4">
          <h5 className="text-sm font-medium pb-2">Payment Method</h5>
          <div className="custom_check radio d-flex align-items-center">
            <input
              type="radio"
              className="check_inp"
              hidden=""
              id="return-by"
            />
            <label for="return-by" className="text-[15px] pl-3">
              Refund By Credit Card
            </label>
          </div>
          <div></div>
          <p className="text_p text-[14px] mb-0 pl-[2%]">
            Money will be return your Credit Card That you used for purchased{" "}
          </p>
        </div>

        <div className="single_retreq">
          <h5 className="text-sm font-medium pb-2">Select Shipment Option</h5>
          <div className="custom_check radio d-flex align-items-center">
            <input
              type="radio"
              className="check_inp"
              name="shiping-option"
              hidden=""
              id="shiping-courier"
            />
            <label className="text-[15px] pl-3" for="shiping-courier">
              Courier Pick Up
            </label>
          </div>
          <div className="custom_check radio d-flex align-items-center">
            <input
              type="radio"
              className="check_inp"
              name="shiping-option"
              hidden=""
              id="shiping-drop"
            />
            <label className="text-[15px] pl-3" for="shiping-drop">
              Drop Off
            </label>
          </div>
        </div>
      </div>

      <div className="ret_additional mt-4">
        <div className="single_billing_inp">
          <label className="text_md">Additional Information (optional)</label>
          <textarea
            name="textarea"
            id=""
            placeholder="Example: wrong size"
            className="textarea border mb-3 outline-none p-3 min-h-[100px] max-h-[400px] w-auto"
          />
        </div>
      </div>

      <div className="retagreement">
        <div className="custom_check">
          <input
            type="checkbox"
            className="check_inp"
            hidden=""
            id="agreement-by"
          />
          <label for="agreement-by" className="text-[15px]">
            I have Read and accepted the{" "}
            <a href="#" className="text-[#fc3d57] px-1">
              Return Policy
            </a>{" "}
            of RAFCART
          </label>
        </div>
      </div>
      <div className="">
        <button className="savechangebtn rounded-sm hover:border-defaut-color-pink hover:border font-medium hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReturnRequest;
