import React from "react";
import "./managemyaccount.scss";
const PayMentsMethods = (props) => {
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
    { id: 14, name: "EditPaymentMethod" },
  ];
  const handleOnClickChangePath = (pagenumber) => {
    // setPathManageMyAccount(param[pagenumber].name);
    props.onChangePath(pagenumber);
    console.log(param[pagenumber].name);
  };
  return (
    <div className="single_paymethod flex flex-nowrap rounded ml-[20px] mb-2 px-4 py-3 justify-between">
      <div className="paymeth_img flex items-center w-[10%]">
        <img
          loading="lazy"
          src="https://themes.rslahmed.dev/rafcart/assets/images/a-express.png"
          alt="visa"
        />
      </div>
      <div className="single_orderdet ">
        <h5>Method</h5>
        <p>American Express</p>
      </div>
      <div className="single_orderdet">
        <h5>Last Four </h5>
        <p>0022</p>
      </div>
      <div className="single_orderdet">
        <h5>Expires</h5>
        <p>01/22</p>
      </div>
      <div className="single_orderdet">
        <h5>Defalut</h5>
        <p>Yes</p>
      </div>
      <div className="orderdet_btn">
        <a
          onClick={() => handleOnClickChangePath(14)}
          className="prorder_btn flex justify-center items-center h-8 rounded-sm hover:border-defaut-color-pink hover:border text-defaut-color-pink font-medium hover:bg-white transition duration-300 ease-out hover:ease-in"
        >
          Edit
        </a>
        <a className="prorder_btn flex justify-center items-center h-8 rounded-sm hover:border-defaut-color-pink hover:border text-defaut-color-pink font-medium hover:bg-white transition duration-300 ease-out hover:ease-in">
          Delete
        </a>
      </div>
    </div>
  );
};

export default PayMentsMethods;
