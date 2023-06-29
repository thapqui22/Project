import React from "react";

const OrderCompeted = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="row justify-content-center  pt-20">
          <div className="col-xl-7 col-lg-9">
            <div className="page_nfwrap ">
              <div className="page_nfimg flex justify-center">
                <img
                  loading="lazy"
                  src="https://themes.rslahmed.dev/rafcart/assets/images/complete.png"
                  className="w-[10%]"
                  alt="page not found"
                />
              </div>
              <div className="page_nfcont text-center mt-3">
                <h4 className="mb-4 text-3xl font-extrabold">
                  YOUR ORDER IS COMPLETED!
                </h4>
                <p className="pb-4">
                  Thank you for your order! Your order is being processed and
                  will be completed within 3-6 hours. You will receive an email
                  confirmation when your order is completed.
                </p>
                <div className="coupon_form_footer justify-center">
                  <a href="/shopping">
                    <button className="proccesstocheckoutbtn uppercase rounded w-[35%] hover:border-defaut-color-pink hover:border font-medium text-base hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
                      continue shopping
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompeted;
