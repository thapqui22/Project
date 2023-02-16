import React from "react";
import "./productBox.css";

const Productbox = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>
            Trending <b>Products</b>
          </h2>
          <div
            id="myCarousel"
            class="carousel slide"
            data-ride="carousel"
            data-interval="0"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="data:image/png;base64,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"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Apple iPad</h4>
                        <p class="item-price">
                          <strike>$400.00</strike> <span>$369.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="data:image/png;base64,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"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Sony Headphone</h4>
                        <p class="item-price">
                          <strike>$25.00</strike> <span>$23.99</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="data:image/png;base64,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"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Macbook Air</h4>
                        <p class="item-price">
                          <strike>$899.00</strike> <span>$649.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-half-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="data:image/png;base64,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"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Nikon DSLR</h4>
                        <p class="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/play-station.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Sony Play Station</h4>
                        <p class="item-price">
                          <strike>$289.00</strike> <span>$269.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/macbook-pro.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Macbook Pro</h4>
                        <p class="item-price">
                          <strike>$1099.00</strike> <span>$869.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-half-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/speaker.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Bose Speaker</h4>
                        <p class="item-price">
                          <strike>$109.00</strike> <span>$99.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/galaxy.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Samsung Galaxy S8</h4>
                        <p class="item-price">
                          <strike>$599.00</strike> <span>$569.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/iphone.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Apple iPhone</h4>
                        <p class="item-price">
                          <strike>$369.00</strike> <span>$349.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/canon.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Canon DSLR</h4>
                        <p class="item-price">
                          <strike>$315.00</strike> <span>$250.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/pixel.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Google Pixel</h4>
                        <p class="item-price">
                          <strike>$450.00</strike> <span>$418.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img
                          src="/examples/images/products/watch.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="thumb-content">
                        <h4>Apple Watch</h4>
                        <p class="item-price">
                          <strike>$350.00</strike> <span>$330.00</span>
                        </p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <a href="#" class="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productbox;
