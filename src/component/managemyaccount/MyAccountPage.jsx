import React, { useState, useEffect, useRef } from "react";
import "./managemyaccount.scss";
import MyWishList from "../mywishlist/MyWishList";
import ProfileInformation from "./ProfileInformation";
import ChangePassWord from "./ChangePassWord";
import ManageMyAddress from "./ManageMyAddress";
import ManageMyAccount from "./ManageMyAccount";
import MyOrderHistory from "./MyOrderHistory";
import MyCancellations from "./MyCancellations";
import MyReturns from "./MyReturns";
import MyReviews from "./MyReviews";
import PayMentsMethods from "./PayMentsMethods";
import Voucher from "./Voucher";
import WriteReview from "./WriteReview";
import OrderDetails from "./OrderDetails";
import ReturnRequest from "./ReturnRequest";
const MyAccountPage = (props) => {
  const [active, setActive] = useState(true);
  const [pageActive, setPageActive] = useState(null);
  // const [pathManageMyAccount, setPathManageMyAccount] = useStorage(
  //   "pathManageMyAccount",
  //   []
  // );
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
  useEffect(() => {
    setPageActive(props.onChangeData);
    // console.log(pathManageMyAccount);
  }, [props.onChangeData]);
  const handlePageChange = (pagenumber) => {
    if (
      Number.isInteger(pagenumber) &&
      pagenumber < param.length &&
      pagenumber >= 0
    ) {
      setPageActive(param[pagenumber].name);
    } else {
      // Handle the case when pagenumber is not an integer
      console.log("Invalid page number:", pagenumber);
      // You can show an error message, display a default page, or take any other appropriate action
    }
  };
  return (
    <div className="containercenter ">
      <div className="childcontainercenter flex">
        <div className="w-1/4">
          <div className="account_sidebar">
            <div className="flex px-3 py-2">
              <div className="acprof_img rounded-full flex justify-center cursor-pointer hover:border-defaut-color-pink">
                <img
                  src="https://themes.rslahmed.dev/rafcart/assets/images/avatar-2.png"
                  alt=""
                />
              </div>
              <div className="acprof_cont pl-3">
                <p className="text-sm">Hello,</p>
                <h4 className="font-bold">Russell Ahmed</h4>
              </div>
              <div className="profile_hambarg d-lg-none d-block">
                <i className="las la-bars"></i>
              </div>
            </div>
            <div className="acprof_wrap shadow_sm py-4 px-3">
              <div className="acprof_links">
                <div onClick={() => handlePageChange(0)}>
                  <h4
                    className={
                      pageActive === "ManageMyAccount"
                        ? "acprof_link_title text-defaut-color-pink"
                        : "acprof_link_title "
                    }
                  >
                    <i className="lar la-id-card "></i>
                    Manage My Account
                  </h4>
                </div>
                <div onClick={() => handlePageChange(1)}>
                  <p
                    className={
                      pageActive === "ProfileInformation"
                        ? "text-defaut-color-pink"
                        : " "
                    }
                  >
                    Profile Information
                  </p>
                </div>
                <div onClick={() => handlePageChange(2)}>
                  <p
                    className={
                      pageActive === "ManageMyAddress"
                        ? "text-defaut-color-pink"
                        : " "
                    }
                  >
                    Manage Address
                  </p>
                </div>
                <div onClick={() => handlePageChange(3)}>
                  <p
                    className={
                      pageActive === "ChangePassword"
                        ? "text-defaut-color-pink"
                        : " "
                    }
                  >
                    Change Password
                  </p>
                </div>
              </div>
              <div className="acprof_links">
                <div onClick={() => handlePageChange(4)}>
                  <h4
                    className={
                      pageActive === "MyOrderHistory"
                        ? "acprof_link_title text-defaut-color-pink"
                        : "acprof_link_title "
                    }
                  >
                    <i className="las la-gift"></i>
                    My Order History
                  </h4>
                </div>
                <div onClick={() => handlePageChange(5)}>
                  <p
                    className={
                      pageActive === "MyReturns"
                        ? "text-defaut-color-pink"
                        : " "
                    }
                  >
                    My Returns
                  </p>
                </div>
                <div onClick={() => handlePageChange(6)}>
                  <p
                    className={
                      pageActive === "MyCancellations"
                        ? "text-defaut-color-pink"
                        : " "
                    }
                  >
                    My Cancellations
                  </p>
                </div>
                <div onClick={() => handlePageChange(7)}>
                  <p
                    className={
                      pageActive === "MyReviews"
                        ? "text-defaut-color-pink"
                        : " "
                    }
                  >
                    My Reviews
                  </p>
                </div>
              </div>
              <div className="acprof_links">
                <div onClick={() => handlePageChange(8)}>
                  <h4
                    className={
                      pageActive === "PayMentsMethods"
                        ? "acprof_link_title text-defaut-color-pink"
                        : "acprof_link_title "
                    }
                  >
                    <i className="las la-credit-card"></i>
                    Payments Methods
                  </h4>
                </div>
                <div onClick={() => handlePageChange(9)}>
                  <p
                    className={
                      pageActive === "Voucher" ? "text-defaut-color-pink" : " "
                    }
                  >
                    Voucher
                  </p>
                </div>
              </div>
              <div className="acprof_links">
                <div onClick={() => handlePageChange(10)}>
                  <h4
                    className={
                      pageActive === "MyWishList"
                        ? "acprof_link_title text-defaut-color-pink"
                        : "acprof_link_title "
                    }
                  >
                    <i className="lar la-heart"></i>
                    My Wishlist
                  </h4>
                </div>
              </div>
              <div className="acprof_links border-0 ">
                <div>
                  <h4 className="acprof_link_title">
                    <a
                      href="/loginpage"
                      className="hover:text-defaut-color-pink hover:no-underline"
                    >
                      <i className="las la-power-off"></i>Log Out
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-3/4">
          {pageActive === "ManageMyAccount" ? (
            <ManageMyAccount onChangePath={handlePageChange} />
          ) : null}
          {pageActive === "ProfileInformation" ? <ProfileInformation /> : null}
          {pageActive === "ManageMyAddress" ? <ManageMyAddress /> : null}
          {pageActive === "ChangePassword" ? <ChangePassWord /> : null}
          {pageActive === "MyOrderHistory" ? <MyOrderHistory /> : null}
          {pageActive === "MyReturns" ? <MyReturns /> : null}
          {pageActive === "MyCancellations" ? <MyCancellations /> : null}
          {pageActive === "Voucher" ? <Voucher /> : null}
          {pageActive === "MyReviews" ? <MyReviews /> : null}
          {pageActive === "PayMentsMethods" ? <PayMentsMethods /> : null}
          {pageActive === "MyWishList" ? <MyWishList /> : null}
          {pageActive === "WriteReview" ? <WriteReview /> : null}
          {pageActive === "OrderDetails" ? (
            <OrderDetails onChangePath={handlePageChange} />
          ) : null}
          {pageActive === "ReturnRequest" ? <ReturnRequest /> : null}
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
