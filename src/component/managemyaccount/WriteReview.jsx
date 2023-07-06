import React from "react";
import "./managemyaccount.scss";
const WriteReview = () => {
  return (
    <div class="write_review_wrap shadow_sm padding_default">
      <h4 class="text_xl mb-3">Write Review</h4>
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
          <h4 class="font-bold">Rate and review your product</h4>
          <div class="d-flex align-items-center mt-3">
            <div class="intaractive_rating">
              <div class="rating-group">
                <input
                  disabled=""
                  checked=""
                  class="rating__input rating__input--none"
                  name="rating1"
                  id="rating1-none"
                  value="0"
                  type="radio"
                />
                <label class="rating__label" for="rating1-1">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating1"
                  id="rating1-1"
                  value="1"
                  type="radio"
                />
                <label class="rating__label" for="rating1-2">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating1"
                  id="rating1-2"
                  value="2"
                  type="radio"
                />
                <label class="rating__label" for="rating1-3">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating1"
                  id="rating1-3"
                  value="3"
                  type="radio"
                />
                <label class="rating__label" for="rating1-4">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating1"
                  id="rating1-4"
                  value="4"
                  type="radio"
                />
                <label class="rating__label" for="rating1-5">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating1"
                  id="rating1-5"
                  value="5"
                  type="radio"
                />
              </div>
            </div>
            <p class="text_md text-semibold mb-0 ms-2 text_xs">Good</p>
          </div>
        </div>
        <div class="col-md-6">
          <h4 class="font-bold">Rate and review your seller</h4>
          <div class="d-flex align-items-center mt-3">
            <div class="intaractive_rating">
              <div class="rating-group">
                <input
                  disabled=""
                  checked=""
                  class="rating__input rating__input--none"
                  name="rating2"
                  id="rating2-none"
                  value="0"
                  type="radio"
                />
                <label class="rating__label" for="rating2-1">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating2"
                  id="rating2-1"
                  value="1"
                  type="radio"
                />
                <label class="rating__label" for="rating2-2">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating2"
                  id="rating2-2"
                  value="2"
                  type="radio"
                />
                <label class="rating__label" for="rating2-3">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating2"
                  id="rating2-3"
                  value="3"
                  type="radio"
                />
                <label class="rating__label" for="rating2-4">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating2"
                  id="rating2-4"
                  value="4"
                  type="radio"
                />
                <label class="rating__label" for="rating2-5">
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating2"
                  id="rating2-5"
                  value="5"
                  type="radio"
                />
              </div>
            </div>
            <p class="text_md text-semibold mb-0 ms-2 text_xs">Good</p>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <h4 class="font-bold">Review details</h4>
          <textarea
            class="reviewdet_textbox"
            placeholder="Please share your feedback about the product: Was the product as described? What is the quality like?"
          ></textarea>
        </div>
        <div class="col-md-6">
          <h4 class="font-bold mt-3 mt-md-0">Rate your Rider</h4>
          <div class="d-flex align-items-center mt-3">
            <div class="intaractive_rating">
              <div class="rating-group">
                <input
                  disabled=""
                  checked=""
                  class="rating__input rating__input--none"
                  name="rating3"
                  id="rating3-none"
                  value="0"
                  type="radio"
                />
                <label
                  aria-label="1 star"
                  class="rating__label"
                  for="rating3-1"
                >
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating3"
                  id="rating3-1"
                  value="1"
                  type="radio"
                />
                <label
                  aria-label="2 stars"
                  class="rating__label"
                  for="rating3-2"
                >
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating3"
                  id="rating3-2"
                  value="2"
                  type="radio"
                />
                <label
                  aria-label="3 stars"
                  class="rating__label"
                  for="rating3-3"
                >
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating3"
                  id="rating3-3"
                  value="3"
                  type="radio"
                />
                <label
                  aria-label="4 stars"
                  class="rating__label"
                  for="rating3-4"
                >
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating3"
                  id="rating3-4"
                  value="4"
                  type="radio"
                />
                <label
                  aria-label="5 stars"
                  class="rating__label"
                  for="rating3-5"
                >
                  <i class="rating__icon rating__icon--star las la-star" />
                </label>
                <input
                  class="rating__input"
                  name="rating3"
                  id="rating3-5"
                  value="5"
                  type="radio"
                />
              </div>
            </div>
            <p class="text_md text-semibold mb-0 ms-2 text_xs">Good</p>
          </div>
        </div>
      </div>

      <div class="d-flex mt-4 align-items-start">
        <div class="img_uploading">
          <input type="file" id="upload_img" hidden="" />
          <label for="upload_img" class="upload_img">
            <div class="upload_icn">
              <img loading="lazy" src="assets/images/upload-img.png" />
            </div>
            <p>Upload Photo</p>
          </label>
        </div>
        <div class="img_uproles ms-3">
          <div class="uproles_icn">
            <i class="las la-exclamation-circle"></i>
          </div>
          <div class="uproles_content">
            <h4>Important:</h4>
            <ul>
              <li>Maximum 6 images can be uploaded</li>
              <li>Image size can be maximum 5mb</li>
              <li>It takes upto 24 hours for the image to be reviewed</li>
              <li>
                Please ensure you meet the Community Guidelines before uploading
                your review
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="acprof_subbtn mt-4">
        <button type="submit" class="default_btn rounded small">
          Submit
        </button>
      </div>
    </div>
  );
};

export default WriteReview;
