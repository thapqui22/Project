import React from "react";
import "./managemyaccount.scss";
const MyReturns = (props) => {
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
    <div className="order_prodetails ml-[20px] flex flex-nowrap rounded  mb-2 px-4 py-3">
      <div className="orderprod_img w-[10%]">
        <img
          className="h-[80%]"
          loading="lazy"
          src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
          alt="product"
        />
      </div>
      <div className="single_orderdet_1 whitespace-nowrap w-[25%]">
        <h5>Herschel Leather Duffle Bag</h5>
        <p className="text-semibold">$55</p>
      </div>
      <div className="single_orderdet">
        <h5>Order Number</h5>
        <p>798W4E574</p>
      </div>
      <div className="single_orderdet ">
        <h5>Return status</h5>
        <p className="text-green">Successful</p>
      </div>
      <div
        onClick={() => handleOnClickChangePath(13)}
        className="orderdet_btn "
      >
        <a className="prorder_btn flex justify-center items-center h-10 rounded-sm hover:border-defaut-color-pink hover:border text-defaut-color-pink font-medium hover:bg-white transition duration-300 ease-out hover:ease-in">
          View Order
        </a>
      </div>
    </div>
  );
};

export default MyReturns;
