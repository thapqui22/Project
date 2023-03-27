import React from "react";

const Detail = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="product_view_slider slick-initialized slick-slider">
            <div class="slick-list draggable">
              <div class="slick-track" style="opacity: 1; width: 3456px;">
                <div
                  class="single_viewslider slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 576px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-1.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslider slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 576px; position: relative; left: -576px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-2.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslider slick-slide slick-current slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  tabindex="0"
                  style="width: 576px; position: relative; left: -1152px; top: 0px; z-index: 999; opacity: 1;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-3.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslider slick-slide"
                  data-slick-index="3"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 576px; position: relative; left: -1728px; top: 0px; z-index: 998; opacity: 0;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-4.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslider slick-slide"
                  data-slick-index="4"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 576px; position: relative; left: -2304px; top: 0px; z-index: 998; opacity: 0;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-5.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslider slick-slide"
                  data-slick-index="5"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 576px; position: relative; left: -2880px; top: 0px; z-index: 998; opacity: 0;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-1.png"
                    alt="product"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="product_viewslid_nav slick-initialized slick-slider">
            <button
              type="button"
              class="slick-prev slick-arrow"
              aria-disabled="false"
              style=""
            >
              <i class="las la-angle-left"></i>
            </button>
            <div class="slick-list draggable">
              <div
                class="slick-track"
                style="opacity: 1; width: 708px; transform: translate3d(-118px, 0px, 0px);"
              >
                <div
                  class="single_viewslid_nav slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 118px;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-1.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslid_nav slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 118px;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-2.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslid_nav slick-slide slick-current slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  tabindex="0"
                  style="width: 118px;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-3.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslid_nav slick-slide slick-active"
                  data-slick-index="3"
                  aria-hidden="false"
                  tabindex="0"
                  style="width: 118px;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-4.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslid_nav slick-slide slick-active"
                  data-slick-index="4"
                  aria-hidden="false"
                  tabindex="0"
                  style="width: 118px;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-5.png"
                    alt="product"
                  />
                </div>
                <div
                  class="single_viewslid_nav slick-slide slick-active"
                  data-slick-index="5"
                  aria-hidden="false"
                  tabindex="0"
                  style="width: 118px;"
                >
                  <img
                    loading="lazy"
                    src="assets/images/slider-1.png"
                    alt="product"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              class="slick-next slick-arrow slick-disabled"
              style=""
              aria-disabled="true"
            >
              <i class="las la-angle-right"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product_info_wrapper">
            <div class="product_base_info">
              <h1>MEN'S ADIDAS COURTSMASH</h1>
              <div class="rating">
                <div class="d-flex align-items-center">
                  <div class="rating_star">
                    <span>
                      <i class="las la-star"></i>
                    </span>
                    <span>
                      <i class="las la-star"></i>
                    </span>
                    <span>
                      <i class="las la-star"></i>
                    </span>
                    <span>
                      <i class="las la-star"></i>
                    </span>
                    <span>
                      <i class="las la-star"></i>
                    </span>
                  </div>
                  <p class="rating_count">50 Reviews</p>
                </div>
              </div>
              <div class="product_other_info">
                <p>
                  <span>Availability:</span>
                  <span class="text-green">In Stock</span>
                </p>
                <p>
                  <span>Brand:</span>Bata
                </p>
                <p>
                  <span>Category:</span>Clothing
                </p>
                <p>
                  <span>SKU:</span>BE45VGRT
                </p>
              </div>
              <div class="price mt-3 mb-3 d-flex align-items-center">
                <span class="prev_price ms-0">$5000.00</span>
                <span class="org_price ms-2">$4500.00</span>
                <div class="disc_tag ms-3">-30%</div>
              </div>
              <div class="pd_dtails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  exercitationem quaerat excepturi labore blanditiis
                </p>
              </div>
              <div class="shop_filter border-bottom-0 pb-0">
                <div class="size_selector mb-3">
                  <h5>Size</h5>
                  <div class="d-flex align-items-center">
                    <div class="single_size_opt">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        class="size_inp"
                        id="size-xs"
                      />
                      <label for="size-xs">XS</label>
                    </div>
                    <div class="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        class="size_inp"
                        id="size-s"
                      />
                      <label for="size-s">S</label>
                    </div>
                    <div class="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        class="size_inp"
                        id="size-m"
                        checked=""
                      />
                      <label for="size-m">M</label>
                    </div>
                    <div class="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        class="size_inp"
                        id="size-l"
                      />
                      <label for="size-l">L</label>
                    </div>
                    <div class="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        class="size_inp"
                        id="size-xl"
                      />
                      <label for="size-xl">XL</label>
                    </div>
                  </div>
                </div>
                <div class="size_selector color_selector">
                  <h5>Color:</h5>
                  <div class="d-flex align-items-center">
                    <div class="single_size_opt">
                      <input
                        type="radio"
                        hidden=""
                        name="color"
                        class="size_inp"
                        id="color-purple"
                      />
                      <label
                        for="color-purple"
                        class="bg-color"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Rose Red"
                        aria-label="Rose Red"
                      ></label>
                    </div>
                    <div class="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="color"
                        class="size_inp"
                        id="color-red"
                      />
                      <label
                        for="color-red"
                        class="bg-white"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="White"
                        aria-label="White"
                      ></label>
                    </div>
                    <div class="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="color"
                        class="size_inp"
                        id="color-green"
                        checked=""
                      />
                      <label
                        for="color-green"
                        class="bg-dark"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Black"
                        aria-label="Black"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart_qnty ms-md-auto">
                <p>Quantity</p>
                <div class="d-flex align-items-center">
                  <div class="cart_qnty_btn">
                    <i class="las la-minus"></i>
                  </div>
                  <div class="cart_count">4</div>
                  <div class="cart_qnty_btn">
                    <i class="las la-plus"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_buttons">
              <a href="#" class="default_btn small rounded me-sm-3 me-2 px-4">
                <i class="icon-cart me-2"></i> Add to Cart
              </a>
              <a href="#" class="default_btn small rounded second border-none">
                <i class="icon-heart me-2"></i> Wishlist
              </a>
            </div>
            <div class="share_icons footer_icon d-flex">
              <a href="#">
                <i class="lab la-facebook-f"></i>
              </a>
              <a href="#">
                <i class="lab la-twitter"></i>
              </a>
              <a href="#">
                <i class="lab la-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="product_view_tabs mt-4">
        <div class="pv_tab_buttons">
          <div class="pbt_single_btn active" data-target=".info">
            Product Info
          </div>
          <div class="pbt_single_btn" data-target=".qna">
            Question &amp; Answer
          </div>
          <div class="pbt_single_btn" data-target=".review">
            Review (10)
          </div>
        </div>
        <div class="pb_tab_content info active">
          <div class="row">
            <div class="col-lg-8">
              <div class="pbt_info_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                  nec condimentum lorem lacus. Lectus libero in vulputate quis
                  massa nisl risus, libero ut. Morbi praesent ipsum sed morbi
                  turpis sed. Amet sed fames fermentum, augue dignissim. Montes,
                  velit velit eu gravida nibh in feugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                  nec condimentum lorem lacus. Lectus libero in vulputate quis
                  massa nisl risus, libero ut. Morbi praesent ipsum sed morbi
                  turpis sed. Amet sed fames fermentum, augue dignissim. Montes,
                  velit velit eu gravida nibh in feugiat.
                </p>
              </div>
              <div class="pbt_info_table">
                <div class="pbtit_single">
                  <p class="specs">Color</p>
                  <p class="spec_text">Black, Brown, Red</p>
                </div>
                <div class="pbtit_single">
                  <p class="specs">Material</p>
                  <p class="spec_text">Artificial Leather</p>
                </div>
                <div class="pbtit_single">
                  <p class="specs">Weight</p>
                  <p class="spec_text">0.5kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb_tab_content qna">
          <h4>Question about this product (3)</h4>
          <div class="pbqna_wrp">
            <div class="single_pbqna">
              <div class="pbqna_icon">
                <i class="icon-user-line"></i>
              </div>
              <div class="pbqna_content">
                <h5>Any discount?</h5>
                <p>Dr.SaifuzZ. - 27 Oct 2021</p>
              </div>
            </div>
            <div class="single_pbqna">
              <div class="pbqna_icon">
                <i class="las la-headset"></i>
              </div>
              <div class="pbqna_content">
                <h5>There is no discount sir</h5>
                <p>Store Admin - 27 Oct 2021</p>
              </div>
            </div>
          </div>
          <div class="pbqna_wrp">
            <div class="single_pbqna">
              <div class="pbqna_icon">
                <i class="icon-user-line"></i>
              </div>
              <div class="pbqna_content">
                <h5>Any discount?</h5>
                <p>Dr.SaifuzZ. - 27 Oct 2021</p>
              </div>
            </div>
            <div class="single_pbqna">
              <div class="pbqna_icon">
                <i class="las la-headset"></i>
              </div>
              <div class="pbqna_content">
                <h5>There is no discount sir</h5>
                <p>Store Admin - 27 Oct 2021</p>
              </div>
            </div>
          </div>

          <div class="pbqna_form">
            <form action="#">
              <textarea placeholder="Type your question"></textarea>
              <button class="default_btn rounded">Ask Question</button>
            </form>
          </div>
        </div>
        <div class="pb_tab_content review">
          <div class="review_rating">
            <div class="total_rating">
              <div class="trating_number">
                <span class="avrage">4.9</span>
                <span class="from">/5</span>
              </div>
              <div class="rating_star">
                <span>
                  <i class="las la-star"></i>
                </span>
                <span>
                  <i class="las la-star"></i>
                </span>
                <span>
                  <i class="las la-star"></i>
                </span>
                <span>
                  <i class="las la-star"></i>
                </span>
                <span>
                  <i class="las la-star"></i>
                </span>
              </div>
              <div class="trating_count">20 Ratings</div>
            </div>
            <div class="overall_rating">
              <div class="single_ovrating d-flex align-items-center">
                <div class="rating_star">
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                </div>
                <div class="rating_pbox">
                  <span style="width: 70%;"></span>
                </div>
                <p class="rating_count">18</p>
              </div>
              <div class="single_ovrating d-flex align-items-center">
                <div class="rating_star">
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                </div>
                <div class="rating_pbox">
                  <span style="width: 20%;"></span>
                </div>
                <p class="rating_count">2</p>
              </div>
              <div class="single_ovrating d-flex align-items-center">
                <div class="rating_star">
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                </div>
                <div class="rating_pbox">
                  <span style="width: 0%;"></span>
                </div>
                <p class="rating_count">0</p>
              </div>
              <div class="single_ovrating d-flex align-items-center">
                <div class="rating_star">
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                </div>
                <div class="rating_pbox">
                  <span style="width: 0%;"></span>
                </div>
                <p class="rating_count">0</p>
              </div>
              <div class="single_ovrating d-flex align-items-center">
                <div class="rating_star">
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                </div>
                <div class="rating_pbox">
                  <span style="width: 0%;"></span>
                </div>
                <p class="rating_count">0</p>
              </div>
            </div>
          </div>
          <div class="review_header d-flex align-items-center justify-content-between">
            <p class="m-0 text-semibold">Product Reviews</p>
            <div class="review_filters">
              <select class="nice_select" style="display: none;">
                <option value="">Sort by</option>
                <option value="">Price low-high</option>
                <option value="">Price high-low</option>
              </select>
              <div class="nice-select nice_select" tabindex="0">
                <span class="current">Sort by</span>
                <ul class="list">
                  <li data-value="" class="option selected">
                    Sort by
                  </li>
                  <li data-value="" class="option">
                    Price low-high
                  </li>
                  <li data-value="" class="option">
                    Price high-low
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="review_cont_wrap">
            <div class="single_review_wrp">
              <div class="review_avatar">
                <img loading="lazy" src="assets/images/avatar.png" alt="user" />
              </div>
              <div class="review_content">
                <h5>by Sadat A.</h5>
                <div class="rating_star">
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                </div>
                <div class="review_date">30 Jul 2021</div>
                <div class="review_body">
                  <p>
                    Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                    odio sit amet nibh vulputate
                  </p>
                  <div class="review_imgs">
                    <img
                      loading="lazy"
                      src="assets/images/product.png"
                      alt="review"
                    />
                    <img
                      loading="lazy"
                      src="assets/images/product.png"
                      alt="review"
                    />
                    <img
                      loading="lazy"
                      src="assets/images/product.png"
                      alt="review"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="single_review_wrp border-bottom-0 mb-0 pb-0">
              <div class="review_avatar">
                <img loading="lazy" src="assets/images/avatar.png" alt="user" />
              </div>
              <div class="review_content">
                <h5>by Sadat A.</h5>
                <div class="rating_star">
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="las la-star"></i>
                  </span>
                  <span>
                    <i class="lar la-star"></i>
                  </span>
                </div>
                <div class="review_date">30 Jul 2021</div>
                <div class="review_body">
                  <p>
                    Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                    odio sit amet nibh vulputate
                  </p>
                  <div class="review_imgs">
                    <img
                      loading="lazy"
                      src="assets/images/product.png"
                      alt="review"
                    />
                    <img
                      loading="lazy"
                      src="assets/images/product.png"
                      alt="review"
                    />
                    <img
                      loading="lazy"
                      src="assets/images/product.png"
                      alt="review"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
