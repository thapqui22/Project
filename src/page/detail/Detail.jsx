import React from "react";

const Detail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="product_view_slider slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div className="slick-track" style="opacity: 1; width: 3456px;">
                <div
                  className="single_viewslider slick-slide"
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
                  className="single_viewslider slick-slide"
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
                  className="single_viewslider slick-slide slick-current slick-active"
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
                  className="single_viewslider slick-slide"
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
                  className="single_viewslider slick-slide"
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
                  className="single_viewslider slick-slide"
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
          <div className="product_viewslid_nav slick-initialized slick-slider">
            <button
              type="button"
              className="slick-prev slick-arrow"
              aria-disabled="false"
              style=""
            >
              <i className="las la-angle-left"></i>
            </button>
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style="opacity: 1; width: 708px; transform: translate3d(-118px, 0px, 0px);"
              >
                <div
                  className="single_viewslid_nav slick-slide"
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
                  className="single_viewslid_nav slick-slide"
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
                  className="single_viewslid_nav slick-slide slick-current slick-active"
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
                  className="single_viewslid_nav slick-slide slick-active"
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
                  className="single_viewslid_nav slick-slide slick-active"
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
                  className="single_viewslid_nav slick-slide slick-active"
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
              className="slick-next slick-arrow slick-disabled"
              style=""
              aria-disabled="true"
            >
              <i className="las la-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product_info_wrapper">
            <div className="product_base_info">
              <h1>MEN'S ADIDAS COURTSMASH</h1>
              <div className="rating">
                <div className="d-flex align-items-center">
                  <div className="rating_star">
                    <span>
                      <i className="las la-star"></i>
                    </span>
                    <span>
                      <i className="las la-star"></i>
                    </span>
                    <span>
                      <i className="las la-star"></i>
                    </span>
                    <span>
                      <i className="las la-star"></i>
                    </span>
                    <span>
                      <i className="las la-star"></i>
                    </span>
                  </div>
                  <p className="rating_count">50 Reviews</p>
                </div>
              </div>
              <div className="product_other_info">
                <p>
                  <span>Availability:</span>
                  <span className="text-green">In Stock</span>
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
              <div className="price mt-3 mb-3 d-flex align-items-center">
                <span className="prev_price ms-0">$5000.00</span>
                <span className="org_price ms-2">$4500.00</span>
                <div className="disc_tag ms-3">-30%</div>
              </div>
              <div className="pd_dtails">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  exercitationem quaerat excepturi labore blanditiis
                </p>
              </div>
              <div className="shop_filter border-bottom-0 pb-0">
                <div className="size_selector mb-3">
                  <h5>Size</h5>
                  <div className="d-flex align-items-center">
                    <div className="single_size_opt">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        className="size_inp"
                        id="size-xs"
                      />
                      <label className="size-xs">XS</label>
                    </div>
                    <div className="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        className="size_inp"
                        id="size-s"
                      />
                      <label className="size-s">S</label>
                    </div>
                    <div className="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        className="size_inp"
                        id="size-m"
                        checked=""
                      />
                      <label className="size-m">M</label>
                    </div>
                    <div className="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        className="size_inp"
                        id="size-l"
                      />
                      <label className="size-l">L</label>
                    </div>
                    <div className="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="size"
                        className="size_inp"
                        id="size-xl"
                      />
                      <label className="size-xl">XL</label>
                    </div>
                  </div>
                </div>
                <div className="size_selector color_selector">
                  <h5>Color:</h5>
                  <div className="d-flex align-items-center">
                    <div className="single_size_opt">
                      <input
                        type="radio"
                        hidden=""
                        name="color"
                        className="size_inp"
                        id="color-purple"
                      />
                      <label
                        for="color-purple"
                        className="bg-color"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Rose Red"
                        aria-label="Rose Red"
                      ></label>
                    </div>
                    <div className="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="color"
                        className="size_inp"
                        id="color-red"
                      />
                      <label
                        for="color-red"
                        className="bg-white"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="White"
                        aria-label="White"
                      ></label>
                    </div>
                    <div className="single_size_opt ms-2">
                      <input
                        type="radio"
                        hidden=""
                        name="color"
                        className="size_inp"
                        id="color-green"
                        checked=""
                      />
                      <label
                        for="color-green"
                        className="bg-dark"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Black"
                        aria-label="Black"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_qnty ms-md-auto">
                <p>Quantity</p>
                <div className="d-flex align-items-center">
                  <div className="cart_qnty_btn">
                    <i className="las la-minus"></i>
                  </div>
                  <div className="cart_count">4</div>
                  <div className="cart_qnty_btn">
                    <i className="las la-plus"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_buttons">
              <a
                href="#"
                className="default_btn small rounded me-sm-3 me-2 px-4"
              >
                <i className="icon-cart me-2"></i> Add to Cart
              </a>
              <a
                href="#"
                className="default_btn small rounded second border-none"
              >
                <i className="icon-heart me-2"></i> Wishlist
              </a>
            </div>
            <div className="share_icons footer_icon d-flex">
              <a href="#">
                <i className="lab la-facebook-f"></i>
              </a>
              <a href="#">
                <i className="lab la-twitter"></i>
              </a>
              <a href="#">
                <i className="lab la-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="product_view_tabs mt-4">
        <div className="pv_tab_buttons">
          <div className="pbt_single_btn active" data-target=".info">
            Product Info
          </div>
          <div className="pbt_single_btn" data-target=".qna">
            Question &amp; Answer
          </div>
          <div className="pbt_single_btn" data-target=".review">
            Review (10)
          </div>
        </div>
        <div className="pb_tab_content info active">
          <div className="row">
            <div className="col-lg-8">
              <div className="pbt_info_text">
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
              <div className="pbt_info_table">
                <div className="pbtit_single">
                  <p className="specs">Color</p>
                  <p className="spec_text">Black, Brown, Red</p>
                </div>
                <div className="pbtit_single">
                  <p className="specs">Material</p>
                  <p className="spec_text">Artificial Leather</p>
                </div>
                <div className="pbtit_single">
                  <p className="specs">Weight</p>
                  <p className="spec_text">0.5kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb_tab_content qna">
          <h4>Question about this product (3)</h4>
          <div className="pbqna_wrp">
            <div className="single_pbqna">
              <div className="pbqna_icon">
                <i className="icon-user-line"></i>
              </div>
              <div className="pbqna_content">
                <h5>Any discount?</h5>
                <p>Dr.SaifuzZ. - 27 Oct 2021</p>
              </div>
            </div>
            <div className="single_pbqna">
              <div className="pbqna_icon">
                <i className="las la-headset"></i>
              </div>
              <div className="pbqna_content">
                <h5>There is no discount sir</h5>
                <p>Store Admin - 27 Oct 2021</p>
              </div>
            </div>
          </div>
          <div className="pbqna_wrp">
            <div className="single_pbqna">
              <div className="pbqna_icon">
                <i className="icon-user-line"></i>
              </div>
              <div className="pbqna_content">
                <h5>Any discount?</h5>
                <p>Dr.SaifuzZ. - 27 Oct 2021</p>
              </div>
            </div>
            <div className="single_pbqna">
              <div className="pbqna_icon">
                <i className="las la-headset"></i>
              </div>
              <div className="pbqna_content">
                <h5>There is no discount sir</h5>
                <p>Store Admin - 27 Oct 2021</p>
              </div>
            </div>
          </div>

          <div className="pbqna_form">
            <form action="#">
              <textarea placeholder="Type your question"></textarea>
              <button className="default_btn rounded">Ask Question</button>
            </form>
          </div>
        </div>
        <div className="pb_tab_content review">
          <div className="review_rating">
            <div className="total_rating">
              <div className="trating_number">
                <span className="avrage">4.9</span>
                <span className="from">/5</span>
              </div>
              <div className="rating_star">
                <span>
                  <i className="las la-star"></i>
                </span>
                <span>
                  <i className="las la-star"></i>
                </span>
                <span>
                  <i className="las la-star"></i>
                </span>
                <span>
                  <i className="las la-star"></i>
                </span>
                <span>
                  <i className="las la-star"></i>
                </span>
              </div>
              <div className="trating_count">20 Ratings</div>
            </div>
            <div className="overall_rating">
              <div className="single_ovrating d-flex align-items-center">
                <div className="rating_star">
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                </div>
                <div className="rating_pbox">
                  <span style="width: 70%;"></span>
                </div>
                <p className="rating_count">18</p>
              </div>
              <div className="single_ovrating d-flex align-items-center">
                <div className="rating_star">
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                </div>
                <div className="rating_pbox">
                  <span style="width: 20%;"></span>
                </div>
                <p className="rating_count">2</p>
              </div>
              <div className="single_ovrating d-flex align-items-center">
                <div className="rating_star">
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                </div>
                <div className="rating_pbox">
                  <span style="width: 0%;"></span>
                </div>
                <p className="rating_count">0</p>
              </div>
              <div className="single_ovrating d-flex align-items-center">
                <div className="rating_star">
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                </div>
                <div className="rating_pbox">
                  <span style="width: 0%;"></span>
                </div>
                <p className="rating_count">0</p>
              </div>
              <div className="single_ovrating d-flex align-items-center">
                <div className="rating_star">
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                </div>
                <div className="rating_pbox">
                  <span style="width: 0%;"></span>
                </div>
                <p className="rating_count">0</p>
              </div>
            </div>
          </div>
          <div className="review_header d-flex align-items-center justify-content-between">
            <p className="m-0 text-semibold">Product Reviews</p>
            <div className="review_filters">
              <select className="nice_select" style="display: none;">
                <option value="">Sort by</option>
                <option value="">Price low-high</option>
                <option value="">Price high-low</option>
              </select>
              <div className="nice-select nice_select" tabindex="0">
                <span className="current">Sort by</span>
                <ul className="list">
                  <li data-value="" className="option selected">
                    Sort by
                  </li>
                  <li data-value="" className="option">
                    Price low-high
                  </li>
                  <li data-value="" className="option">
                    Price high-low
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="review_cont_wrap">
            <div className="single_review_wrp">
              <div className="review_avatar">
                <img loading="lazy" src="assets/images/avatar.png" alt="user" />
              </div>
              <div className="review_content">
                <h5>by Sadat A.</h5>
                <div className="rating_star">
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                </div>
                <div className="review_date">30 Jul 2021</div>
                <div className="review_body">
                  <p>
                    Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                    odio sit amet nibh vulputate
                  </p>
                  <div className="review_imgs">
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
            <div className="single_review_wrp border-bottom-0 mb-0 pb-0">
              <div className="review_avatar">
                <img loading="lazy" src="assets/images/avatar.png" alt="user" />
              </div>
              <div className="review_content">
                <h5>by Sadat A.</h5>
                <div className="rating_star">
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="las la-star"></i>
                  </span>
                  <span>
                    <i className="lar la-star"></i>
                  </span>
                </div>
                <div className="review_date">30 Jul 2021</div>
                <div className="review_body">
                  <p>
                    Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                    odio sit amet nibh vulputate
                  </p>
                  <div className="review_imgs">
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
