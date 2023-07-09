import React from "react";
import "./managemyaccount.scss";
const OrderDetails = (props) => {
  const param = [
    { id: 0, name: "ManageMyAccount" },
    { id: 1, name: "ProfileInformation" },
    { id: 2, name: "ManageMyAddress" },
    { id: 3, name: "ChangePassword" },
    { id: 4, name: "MyOrderHistory" },
    { id: 5, name: "MyReturns" },
    { id: 6, name: "MyCancellations" },
    { id: 7, name: "MyReviews" },
    { id: 8, name: "PayMentsMethods" },
    { id: 9, name: "Voucher" },
    { id: 10, name: "MyWishList" },
    { id: 11, name: "WriteReview" },
    { id: 12, name: "OrderDetails" },
    { id: 13, name: "ReturnRequest" },
  ];
  const handleOnClickChangePath = (pagenumber) => {
    // setPathManageMyAccount(param[pagenumber].name);
    props.onChangePath(pagenumber);
    console.log(param[pagenumber].name);
  };
  return (
    <div className=" ml-[20px]">
      <div className="order_prodetails p-4 ">
        <h4 className="od_title font-bold pb-3">Order Details</h4>
        <div className="orderdet_info d-flex align-items-center justify-content-between flex-wrap">
          <div className="single_orderdet">
            <h5>Sold By</h5>
            <p className="text-defaut-color-pink">RAFCART</p>
          </div>
          <div className="single_orderdet">
            <h5>Order Number</h5>
            <p>789ER4S324</p>
          </div>
          <div className="single_orderdet">
            <h5>Shipped Date</h5>
            <p>01 March 2021</p>
          </div>
          <div
            onClick={() => handleOnClickChangePath(11)}
            className="prorder_btn h-[45px] border-defaut-color w-1/5 flex uppercase rounded-md hover:border-defaut-color-pink hover:border font-medium hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in"
          >
            <a> Write A Review</a>
          </div>
        </div>
        <div className="shipping_process pt-16  ">
          <div className="sprocess_cont relative flex justify-evenly">
            <div className="sprosbar absolute">
              <span className="sp_fill w-[100%]" />
            </div>
            <div className="single_sproc_cont flex flex-col items-center">
              <div className="sproc_cont_dot" />
              <p>Processing</p>
            </div>
            <div className="single_sproc_cont">
              <div className="sproc_cont_dot" />
              <p>Shipped</p>
            </div>
            <div className="single_sproc_cont">
              <div className="sproc_cont_dot" />
              <p>Delivered</p>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <div className="sprocess_tooltip w-[75%] text-sm flex border rounded items-center justify-between py-3 px-6">
              <p>23 Jul 2021.18.56</p>
              <p>
                Your package has been delivered. Thank you for shopping at
                RAFCART!
              </p>
            </div>
          </div>
        </div>

        <div className=" d-flex align-items-center pt-5 justify-between mb-3">
          <div className="orderprod_img w-16">
            <img
              loading="lazy"
              src="https://themes.rslahmed.dev/rafcart/assets/images/headphone-3.png"
              alt="product"
            />
          </div>
          <div className="single_orderdet_1 whitespace-nowrap">
            <h5>Sound Intone I65 Earphone</h5>
            <p>No Warranty Available</p>
          </div>
          <div className="single_orderdet text-center">
            <h5>$50</h5>
          </div>
          <div className="single_orderdet text-center">
            <h5>Qty:1</h5>
          </div>
          <div className="single_orderdet text-center  d-flex align-items-center d-md-block  ">
            <div className="flex flex-col">
              <h5 className="text-color text-uppercase me-3 me-md-0 mb-0 mb-md-1">
                <a href="#" className="text-defaut-color-pink">
                  Return
                </a>{" "}
              </h5>
              <p>Until 24Sep 2021</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile_info_wrap mt-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="single_prof_info ">
              <div className="prof_info_title">
                <h4>Shipping Address</h4>
              </div>
              <div className="prfo_info_cont">
                <p className="font-bold">Ralph Bohner</p>
                <p>3891 Ranchview Dr.</p>
                <p>Richardson, Califora</p>
                <p>(123) 456-789</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single_prof_info ">
              <div className="prof_info_title pb-2">
                <h4>Billing Address</h4>
              </div>
              <div className="prfo_info_cont">
                <p className="font-bold">Ralph Bohner</p>
                <p>3891 Ranchview Dr.</p>
                <p>Richardson, Califora</p>
                <p>(123) 456-789</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single_prof_info  mb-0">
              <div className="prof_info_title pb-2">
                <h4>Total Summary</h4>
              </div>
              <div className="prfo_info_cont">
                <div className="d-flex justify-content-between">
                  <p className="mb-0">Subtotal</p>
                  <p className="font-bold mb-0">$50</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className=" mb-0">Shipping Fee</p>
                  <p className="font-bold mb-0">$30</p>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between">
                  <p className="font-bold mb-0">Total</p>
                  <p className="font-bold mb-0">$80</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Paid by Cash on Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
