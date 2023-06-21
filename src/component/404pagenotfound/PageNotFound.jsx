import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="page_nfwrap">
              <div className="page_nfimg flex justify-center">
                <img
                  loading="lazy"
                  src="https://themes.rslahmed.dev/rafcart/assets/images/svg/404.svg"
                  className="w-[100%]"
                  alt="page not found"
                />
              </div>
              <div className="page_nfcont text-center mt-5">
                <h4 className="mb-4 text-3xl font-extrabold">
                  THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE
                </h4>
                <div className="coupon_form_footer justify-center">
                  <a href="/">
                    <button className="proccesstocheckoutbtn rounded w-[25%] hover:border-defaut-color-pink hover:border font-medium text-base hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
                      BACK TO HOME
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

export default PageNotFound;
