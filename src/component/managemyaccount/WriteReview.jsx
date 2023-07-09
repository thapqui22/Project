import React, { useState, useEffect, useRef } from "react";
import "./managemyaccount.scss";
const WriteReview = () => {
  const [starShinesProduct, setStarShinesProduct] = useState(0);
  const [starShinesSeller, setStarShinesSeller] = useState(0);
  const [starShinesRider, setStarShinesRider] = useState(0);
  const [hideNote, setHideNote] = useState(false);
  const param = [
    { star: 1, status: "Very bad" },
    { star: 2, status: "Bad" },
    { star: 3, status: "Neutral" },
    { star: 4, status: "Good" },
    { star: 5, status: "Excellent" },
  ];
  const handleOnHoverStarProduct = (number) => {
    if (Number.isInteger(number)) {
      setStarShinesProduct(number);
    }
  };
  function activateInput() {
    document.getElementById("upload_img").click();
  }
  const handleOnHoverStarSeller = (number) => {
    if (Number.isInteger(number)) {
      setStarShinesSeller(number);
    }
  };
  const handleOnHoverStarRider = (number) => {
    if (Number.isInteger(number)) {
      setStarShinesRider(number);
    }
  };
  return (
    <div class="write_review_wrap shadow_sm padding_default">
      <h4 class="text-lg mb-3">Write Review</h4>
      <div class="row align-items-center whitespace-nowrap">
        <div class="col-md-6">
          <div class="d-flex align-items-center">
            <div class="orderprod_img w-16 ">
              <img
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/headphone-3.png"
                alt="product"
              />
            </div>
            <div class="single_orderdet pdname">
              <h5>Sound Intone I65 Earphone</h5>
              <p>No Warranty Available</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-3 mt-md-0">
          <div class="single_orderdet">
            <h5>Purchased</h5>
            <p>16 Dec 2020</p>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6 mb-3 mb-md-0">
          <h4 class="text-base">Rate and review your product</h4>
          <div class="d-flex mt-3">
            <div class="intaractive_rating">
              <div class="rating-group">
                <label class="rating__label">
                  <i
                    class={
                      starShinesProduct >= 1
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    // onClick={() => handleOnHoverStarProduct(1)}
                    onMouseEnter={() => handleOnHoverStarProduct(1)}
                    onMouseLeave={() => handleOnHoverStarProduct(0)}
                  ></i>
                </label>
                <label class="rating__label">
                  <i
                    class={
                      starShinesProduct >= 2
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    // onClick={() => handleOnHoverStarProduct(2)}
                    onMouseEnter={() => handleOnHoverStarProduct(2)}
                    onMouseLeave={() => handleOnHoverStarProduct(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesProduct >= 3
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarProduct(3)}
                    onMouseLeave={() => handleOnHoverStarProduct(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesProduct >= 4
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarProduct(4)}
                    onMouseLeave={() => handleOnHoverStarProduct(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesProduct >= 5
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarProduct(5)}
                    onMouseLeave={() => handleOnHoverStarProduct(0)}
                  ></i>
                </label>
              </div>
            </div>
            <p class="font-semibold text-sm pl-2">Good</p>
          </div>
        </div>
        <div class="col-md-6 mb-3 mb-md-0">
          <h4 class="font-bold">Rate and review your seller</h4>
          <div class="d-flex mt-3">
            <div class="intaractive_rating">
              <div class="rating-group">
                <label class="rating__label">
                  <i
                    class={
                      starShinesSeller >= 1
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    // onClick={() => handleOnHoverStarProduct(1)}
                    onMouseEnter={() => handleOnHoverStarSeller(1)}
                    onMouseLeave={() => handleOnHoverStarSeller(0)}
                  ></i>
                </label>
                <label class="rating__label">
                  <i
                    class={
                      starShinesSeller >= 2
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    // onClick={() => handleOnHoverStarProduct(2)}
                    onMouseEnter={() => handleOnHoverStarSeller(2)}
                    onMouseLeave={() => handleOnHoverStarSeller(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesSeller >= 3
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarSeller(3)}
                    onMouseLeave={() => handleOnHoverStarSeller(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesSeller >= 4
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarSeller(4)}
                    onMouseLeave={() => handleOnHoverStarSeller(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesSeller >= 5
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarSeller(5)}
                    onMouseLeave={() => handleOnHoverStarSeller(0)}
                  ></i>
                </label>
              </div>
            </div>
            <p class=" font-semibold text-sm mb-2 pl-2">Good</p>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <h4 class="font-bold pb-3">Review details</h4>
          <textarea
            name="textarea"
            id=""
            class="textarea border text-sm mb-3 outline-none p-2 min-h-[80px] max-h-[400px] w-[100%]"
            placeholder="Please share your feedback about the product: Was the product as described? What is the quality like?"
          ></textarea>
        </div>
        <div class="col-md-6">
          <h4 class="font-bold mt-3 mt-md-0">Rate your Rider</h4>
          <div class="d-flex mt-3">
            <div class="intaractive_rating">
              <div class="rating-group">
                <label class="rating__label">
                  <i
                    class={
                      starShinesRider >= 1
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    // onClick={() => handleOnHoverStarProduct(1)}
                    onMouseEnter={() => handleOnHoverStarRider(1)}
                    onMouseLeave={() => handleOnHoverStarRider(0)}
                  ></i>
                </label>
                <label class="rating__label">
                  <i
                    class={
                      starShinesRider >= 2
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    // onClick={() => handleOnHoverStarProduct(2)}
                    onMouseEnter={() => handleOnHoverStarRider(2)}
                    onMouseLeave={() => handleOnHoverStarRider(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesRider >= 3
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarRider(3)}
                    onMouseLeave={() => handleOnHoverStarRider(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesRider >= 4
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarRider(4)}
                    onMouseLeave={() => handleOnHoverStarRider(0)}
                  ></i>
                </label>

                <label class="rating__label">
                  <i
                    class={
                      starShinesRider >= 5
                        ? "rating__icon rating__icon--star las la-star text-[#F6BC3E]"
                        : "rating__icon rating__icon--star las la-star text-[#dddddd]"
                    }
                    onMouseEnter={() => handleOnHoverStarRider(5)}
                    onMouseLeave={() => handleOnHoverStarRider(0)}
                  ></i>
                </label>
              </div>
            </div>
            <p class=" font-semibold text-sm mb-2 pl-2">Good</p>
          </div>
        </div>
      </div>
      <div class="d-flex mt-1 align-items-start">
        <div
          onClick={activateInput}
          class="img_uploading border-dashed border-2 border-defaut-color-pink rounded-md cursor-pointer"
        >
          <input type="file" id="upload_img" hidden />
          <label class="upload_img p-3 pb-2 cursor-pointer">
            <div class="upload_icn pb-2 flex justify-center cursor-pointer">
              <img
                className="w-[35px]"
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/upload-img.png"
              />
            </div>
            <p className="text-xs cursor-pointer">Upload Photo</p>
          </label>
        </div>
        <div class="img_uproles pl-2 relative">
          <div class="uproles_icn">
            <i
              class="las la-exclamation-circle hover"
              onMouseEnter={() => setHideNote(false)}
              onMouseLeave={() => setHideNote(true)}
            ></i>
          </div>
          {!hideNote ? (
            <div class="uproles_content border absolute rounded w-[300px] p-2 text-xs">
              <h4 className="font-semibold pb-1">Important:</h4>
              <ul className="list-disc pl-3">
                <li>Maximum 6 images can be uploaded</li>
                <li>Image size can be maximum 5mb</li>
                <li>It takes upto 24 hours for the image to be reviewed</li>
                <li>
                  Please ensure you meet the Community Guidelines before
                  uploading your review
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="acprof_subbtn">
        <button className="submitbtn rounded-sm uppercase hover:border hover:border-defaut-color-pink hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
          submit
        </button>
      </div>
    </div>
  );
};

export default WriteReview;
