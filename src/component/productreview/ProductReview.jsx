import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCartShopping,
  faHeart,
  faStar,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import "./ProductReview.scss";
import Card from "../carousel/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopRankingCard from "../toprankingcard/TopRankingCard";
const ProductReview = (props) => {
  //   const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const refQuantity = useRef(1);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [showDetail, setShowDetail] = useState("Product Info");
  const [selectedColor, setSelectedColor] = useState("RGB");
  const [data, setData] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const param = {
    id: Number,
    name: String,
    quantity: Number,
    color: String,
    size: String,
  };
  const images = [
    {
      original:
        "https://thuysinhxanh.vn/wp-content/uploads/2021/07/ca-neon-1.jpg",
      thumbnail:
        "https://thuysinhxanh.vn/wp-content/uploads/2021/07/ca-neon-1.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
      loading: "lazy",
    },
    {
      original: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      thumbnail: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://product.hstatic.net/200000416355/product/ca-neon-4_10a242b82b9046e693343108cf645e4c_master.jpg",
      thumbnail:
        "https://product.hstatic.net/200000416355/product/ca-neon-4_10a242b82b9046e693343108cf645e4c_master.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      thumbnail: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/344/954/products/ca-neon-vua.jpg?v=1632300654103",
      thumbnail:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/344/954/products/ca-neon-vua.jpg?v=1632300654103",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      thumbnail: "https://cacanhnho.com/wp-content/uploads/cakhacvn2.jpg",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://bizweb.dktcdn.net/100/424/759/products/b883b447-b381-495d-b11c-05c663380601-jpeg.jpg?v=1624550921120",
      thumbnail:
        "https://bizweb.dktcdn.net/100/424/759/products/b883b447-b381-495d-b11c-05c663380601-jpeg.jpg?v=1624550921120",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
    {
      original:
        "https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg",
      thumbnail:
        "https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg",
      description: "Cas neon vua",
      originalClass: "custom-original-class",
      thumbnailClass: "custom-thumbnail-class",
    },
  ];
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";

  useEffect(() => {
    setSelectedColor("RGB");
    setSelectedSize("XS");
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, [props]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //   };
  //   fetchData();
  // }, []);
  const onClickShowDetail = (name) => {
    setShowDetail(name);
  };

  const handlePlusButton = () => {
    setQuantity(quantity + 1);
    refQuantity.current += 1;
  };
  const handleMinusButton = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      refQuantity.current -= 1;
    }
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleWishListButton = () => {
    // console.log(selectedSize + "..." + selectedColor);
  };
  const handleAddToCartButton = () => {
    param.color = selectedColor;
    param.size = selectedSize;
    param.name = dataRecieveInModal.dataReceive.name;
    param.id = dataRecieveInModal.dataReceive.id;
    param.quantity = quantity;
  };
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex justify-center w-[1200px] h-[auto] min-h-[700px]">
          {props.onChangeData !== null ? (
            <div className="containerpreview flex">
              <div className="childcontainerpreview pr-2">
                <ImageGallery
                  items={images}
                  showIndex
                  additionalclassName="ImageGalleryContainer"
                />
              </div>
              <div className="childcontainerpreview pl-2">
                <h1 className="display-6 flex font-normal font-font-robo">
                  {props.onChangeData.name}
                  {/* NAME */}
                </h1>
                <div className="star py-2">
                  <span>
                    <FontAwesomeIcon className="pr-1" icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon className="pr-1" icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} className="pr-1" />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} className="pr-1" />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} className="pr-1" />
                  </span>
                  <span>(150 Review)</span>
                </div>
                <div className="product_other_info">
                  <p>
                    <span className="text-semibold">Availability:</span>
                    <span className="text-[green]">In Stock</span>
                  </p>
                  <p>
                    <span className="text-semibold">Brand:</span>Amazon
                  </p>
                  <p>
                    <span className="text-semibold ">Category:</span>
                    Fish
                  </p>
                  <p>
                    <span className="text-semibold">SKU:</span>BE45VGRT
                  </p>
                </div>
                <div className="fs-5 pb-2">
                  <span className="text-decoration-line-through text-sm">
                    {new Intl.NumberFormat("ja-JP", {
                      style: "currency",
                      currency: "USD",
                    }).format(props.onChangeData.price * 1.2)}
                  </span>
                  <span className="pl-2 font-font-robo text-defaut-color-pink">
                    {new Intl.NumberFormat("ja-JP", {
                      style: "currency",
                      currency: "USD",
                    }).format(props.onChangeData.price)}
                  </span>
                </div>
                <p className="lead pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium at dolorem quidem modi. Nam sequi vero? eius
                  blanditiis delectus minima ea iste laborum...
                  <a
                    href="#"
                    className="detail hover:text-defaut-color-pink hover:no-underline "
                  >
                    See more
                  </a>
                </p>
                <div className="shop_filter border-bottom-0 pb-0">
                  <div className="radio-toolbar">
                    <h5>Size:</h5>
                    <div className="flex w-52 justify-between items-center">
                      <input
                        type="radio"
                        name="size"
                        value="XS"
                        className="size_inp"
                        id="size-xs"
                        onChange={handleSizeChange}
                        checked={selectedSize === "XS"}
                      />
                      <label htmlFor="size-xs">XS</label>

                      <input
                        type="radio"
                        name="size"
                        value="S"
                        className="size_inp"
                        id="size-s"
                        onChange={handleSizeChange}
                        checked={selectedSize === "S"}
                      />
                      <label htmlFor="size-s">S</label>

                      <input
                        type="radio"
                        name="size"
                        value="M"
                        className="size_inp"
                        id="size-m"
                        onChange={handleSizeChange}
                        checked={selectedSize === "M"}
                      />
                      <label htmlFor="size-m">M</label>

                      <input
                        type="radio"
                        name="size"
                        value="L"
                        className="size_inp"
                        id="size-l"
                        onChange={handleSizeChange}
                        checked={selectedSize === "L"}
                      />
                      <label htmlFor="size-l">L</label>

                      <input
                        type="radio"
                        name="size"
                        value="XL"
                        className="size_inp"
                        id="size-xl"
                        onChange={handleSizeChange}
                        checked={selectedSize === "XL"}
                      />
                      <label htmlFor="size-xl">XL</label>
                    </div>
                  </div>
                  <div className="shop_filter border-bottom-0 pb-0">
                    <div className="radio-toolbar-color">
                      <h5>Color:</h5>
                      <div className="flex w-auto  items-center">
                        <input
                          type="radio"
                          hidden=""
                          name="color"
                          value="RGB"
                          className="size_inp-1"
                          id="color-RGB"
                          onChange={handleColorChange}
                          checked={selectedColor === "RGB"}
                        />
                        <label htmlFor="color-RGB">RGB</label>

                        <input
                          type="radio"
                          hidden=""
                          name="color"
                          value="WRGB"
                          className="size_inp-1"
                          id="color-WRGB"
                          onChange={handleColorChange}
                          checked={selectedColor === "WRGB"}
                        />
                        <label htmlFor="color-WRGB">WRGB</label>

                        <input
                          type="radio"
                          hidden=""
                          name="color"
                          value="WRGB-UV"
                          className="size_inp-1"
                          id="color-WRGB-UV"
                          onChange={handleColorChange}
                          checked={selectedColor === "WRGB-UV"}
                        />
                        <label htmlFor="color-WRGB-UV">WRGB-UV</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="pb-1 font-font-robo text-xl">Quantity</p>
                  <div className="quanlityContainer flex align-items-center w-auto">
                    <button className="minus flex align-items-center justify-center hover:bg-slate-200">
                      <FontAwesomeIcon
                        className="p-2"
                        icon={faMinus}
                        onClick={handleMinusButton}
                      />
                    </button>
                    <div className="inputmp flex align-items-center justify-center p-1">
                      <input
                        className="text-center max-w-[50px] "
                        value={quantity}
                        readOnly
                      />
                    </div>
                    <button className="plus flex align-items-center justify-cente hover:bg-slate-200">
                      <FontAwesomeIcon
                        className="p-2 "
                        icon={faPlus}
                        onClick={handlePlusButton}
                      />
                    </button>
                  </div>
                </div>
                <div className="d-flex pt-4 pb-3 border-b-[1px]">
                  <button
                    className="btnadd"
                    type="button"
                    onClick={handleAddToCartButton}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="pr-2 hover:text-white"
                    />
                    ADD TO CART
                  </button>
                  <button
                    className="btnwishlist "
                    type="button"
                    onClick={handleWishListButton}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="pr-2 hover:text-defaut-color-pink"
                    />
                    WISHLIST
                  </button>
                </div>
                <div className="iconfooter w-44 flex justify-around text-sm pt-2">
                  <a
                    href="#"
                    className="py-2 px-[11px] rounded-full transition ease-in-out  hover:bg-[#e9e4e4] hover:text-black"
                  >
                    <i className="lab la-facebook-f text-sm"></i>
                  </a>
                  <a
                    href="#"
                    className="py-2 px-[12px] rounded-full hover:bg-[#e9e4e4] hover:text-black"
                  >
                    <i className="fa-brands fa-instagram text-sm"></i>
                  </a>
                  <a
                    href="#"
                    className="py-2 px-[11px] rounded-full hover:bg-[#e9e4e4] hover:text-black"
                  >
                    <i className="fa-brands fa-twitter text-sm"></i>
                    {/* <FontAwesomeIcon icon={faInstagram} /> */}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>No data to display</div>
          )}
        </div>
        <div>
          <div className="flex border-b-[1px] [&>div]:hover:cursor-pointer [&>div]:font-semibold [&>div]:h-[40px] [&>div]:border-b-0 [&>div]:flex [&>div]:items-center  [&>div]:px-4 [&>div]:mr-2 [&>div]:border-solid [&>div]:border-2 [&>div]:border-defaut-color-pink [&>div]:rounded-t-lg ">
            <div
              className={
                showDetail === "Product Info" ? "text-defaut-color-pink" : false
              }
              onClick={() => onClickShowDetail("Product Info")}
            >
              Product Info
            </div>
            <div
              className={
                showDetail === "Question" ? "text-defaut-color-pink" : false
              }
              onClick={() => onClickShowDetail("Question")}
            >
              Question &amp; Answer
            </div>
            <div
              className={
                showDetail === "Review" ? "text-defaut-color-pink" : false
              }
              onClick={() => onClickShowDetail("Review")}
            >
              Review (10)
            </div>
          </div>
          <div hidden={showDetail !== "Product Info"}>
            <div className="pbt_info_text w-[900px] mt-10 text-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec
                condimentum lorem lacus. Lectus libero in vulputate quis massa
                nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis
                sed. Amet sed fames fermentum, augue dignissim. Montes, velit
                velit eu gravida nibh in feugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec
                condimentum lorem lacus. Lectus libero in vulputate quis massa
                nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis
                sed. Amet sed fames fermentum, augue dignissim. Montes, velit
                velit eu gravida nibh in feugiat.
              </p>
            </div>
            <div className="pbt_info_table flex">
              <div className="pbtit_single">
                <p className="specs">Color</p>
                <p className="specs">Material</p>{" "}
                <p className="specs">Weight</p>
              </div>
              <div className="pbtit_single">
                <p className="spec_text">Artificial Leather</p>{" "}
                <p className="spec_text">Black, Brown, Red</p>{" "}
                <p className="spec_text">0.55kg</p>
              </div>
            </div>
          </div>
          <div hidden={showDetail !== "Question"}>
            <h4 className="font-semibold text-lg mb-[20px] mt-[35px]">
              Question about this product (3)
            </h4>
            <div className="pbqna_wrp  border-b-[1px]">
              <div className="single_pbqna">
                <div className="pbqna_icon">
                  <i className="las la-user text-4xl"></i>
                </div>
                <div className="pbqna_content">
                  <h5 className="font-semibold text-lg">Any discount?</h5>
                  <p className="">Dr.SaifuzZ. - 27 Oct 2021</p>
                </div>
              </div>
              <div className="single_pbqna">
                <div className="pbqna_icon">
                  <i className="las la-headset text-4xl"></i>
                </div>
                <div className="pbqna_content">
                  <h5 className="font-semibold text-lg">
                    There is no discount sir
                  </h5>
                  <p>Store Admin - 27 Oct 2021</p>
                </div>
              </div>
            </div>
            <div className="pbqna_wrp  border-b-[1px]">
              <div className="single_pbqna">
                <div className="pbqna_icon">
                  <i className="las la-user text-4xl"></i>
                </div>
                <div className="pbqna_content">
                  <h5 className="font-semibold text-lg">Any discount?</h5>
                  <p>Dr.SaifuzZ. - 27 Oct 2021</p>
                </div>
              </div>
              <div className="single_pbqna">
                <div className="pbqna_icon">
                  <i className="las la-headset text-4xl"></i>
                </div>
                <div className="pbqna_content">
                  <h5 className="font-semibold text-lg">
                    There is no discount sir
                  </h5>
                  <p>Store Admin - 27 Oct 2021</p>
                </div>
              </div>
            </div>
            <div className="pbqna_wrp  border-b-[1px]">
              <div className="single_pbqna">
                <div className="pbqna_icon">
                  <i className="las la-user text-4xl"></i>
                </div>
                <div className="pbqna_content">
                  <h5 className="font-semibold text-lg">Any discount?</h5>
                  <p>Dr.SaifuzZ. - 27 Oct 2021</p>
                </div>
              </div>
              <div className="single_pbqna">
                <div className="pbqna_icon">
                  <i className="las la-headset text-4xl"></i>
                </div>
                <div className="pbqna_content">
                  <h5 className="font-semibold text-lg">
                    There is no discount sir
                  </h5>
                  <p>Store Admin - 27 Oct 2021</p>
                </div>
              </div>
            </div>
            <div className="grid mb-5 w-auto">
              <textarea
                name="textarea"
                id=""
                placeholder="Type your question here"
                className="textarea border-2 mb-3 outline-none p-3 min-h-[100px] max-h-[400px] w-auto"
              />
              <div className="w-auto">
                <button
                  className="btnwishlist "
                  type="button"
                  onClick={handleWishListButton}
                >
                  ASK QUESTION
                </button>
              </div>
            </div>
          </div>
          <div hidden={showDetail !== "Review"}>
            <div className="review_rating pt-[35px]">
              <div className="total_rating mr-3">
                <div className="trating_number">
                  <span className="avrage text-4xl font-bold">4.9</span>
                  <span className="from text-4xl">/5</span>
                </div>
                <div className="rating_star text-xl">
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
                <div className="trating_count font-extralight">20 Ratings</div>
              </div>
              <div className="overall_rating pl-3">
                <div className="single_ovrating d-flex align-items-center">
                  <div className="rating_star ">
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
                  <div className="rating_pbox w-[150px] bg-[#EFF0F5] h-[8px] mx-3 ">
                    <span className="block w-[100px] bg-[#FACA51] h-[8px]"></span>
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
                  <div className="rating_pbox w-[150px] bg-[#EFF0F5] h-[8px] mx-3 ">
                    <span className="block w-[100px] bg-[#FACA51] h-[8px]"></span>
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
                  <div className="rating_pbox w-[150px] bg-[#EFF0F5] h-[8px] mx-3 ">
                    <span className="block w-[145px] bg-[#FACA51] h-[8px]"></span>
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
                  <div className="rating_pbox w-[150px] bg-[#EFF0F5] h-[8px] mx-3 ">
                    <span className="block w-[100px] bg-[#FACA51] h-[8px]"></span>
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
                  <div className="rating_pbox w-[150px] bg-[#EFF0F5] h-[8px] mx-3 ">
                    <span className="block w-[100px] bg-[#FACA51] h-[8px]"></span>
                  </div>
                  <p className="rating_count">0</p>
                </div>
              </div>
            </div>
            <div className="review_header d-flex align-items-center justify-content-between py-4">
              <p className="m-0 text-semibold font-bold">Product Reviews</p>
              <div className="review_filters">
                <select className="nice_select">
                  <option value="">Sort by</option>
                  <option value="">Price low-high</option>
                  <option value="">Price high-low</option>
                </select>
              </div>
            </div>
            <div className="review_cont_wrap">
              <div className="single_review_wrp flex border-b-[1px] pb-10 mb-10 ">
                <div className="review_avatar">
                  <img
                    className="h-[50px] pr-2"
                    loading="lazy"
                    src=" https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                    alt="user"
                  />
                </div>
                <div className="review_content">
                  <h5 className="font-bold">by Sadat A.</h5>
                  <div className="rating_star py-1">
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
                  <div className="review_date text-xs pb-1">30 Jul 2021</div>
                  <div className="review_body">
                    <p>
                      Lorem Ipsumin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate
                    </p>
                    <div className="review_imgs">
                      <img
                        loading="lazy"
                        src="data:image/jpeg;base64,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"
                        alt="review"
                      />
                      <img
                        loading="lazy"
                        src="data:image/jpeg;base64,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"
                        alt="review"
                      />
                      <img
                        loading="lazy"
                        src="data:image/jpeg;base64,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"
                        alt="review"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Carousel
          arrows={false}
          additionalTransfrom={0}
          centerMode={false}
          className=""
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName="item "
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderclassName=""
          slidesToSlide={4}
          swipeable
        > */}
        {/* {data.slice(4, 8).map((i) => (
          <Card
            onChangePathData={(e) => handleOnClickChangePath(e)}
            onChangData={i}
            key={i.id}
            onClickFaMagnifyingGlass={handleChildClick}
          />
        ))} */}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default ProductReview;
