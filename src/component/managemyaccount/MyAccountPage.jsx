import React, { useState, useEffect, useRef } from "react";
import MyWishList from "../mywishlist/MyWishList";
import ProfileInformation from "./ProfileInformation";
import "./managemyaccount.scss";
import ChangePassWord from "./ChangePassWord";
import ManageMyAddress from "./ManageMyAddress";
import ManageMyAccount from "./ManageMyAccount";
import MyOrderHistory from "./MyOrderHistory";
import MyCancellations from "./MyCancellations";
import MyReturns from "./MyReturns";
import MyReviews from "./MyReviews";
import PayMentsMethods from "./PayMentsMethods";
import Voucher from "./Voucher";

const MyAccountPage = () => {
  const [actice, setActice] = useState(true);
  const [pageActive, setPageActive] = useState("ManageMyAccount");
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
  ];
  const handlePageChange = (pagenumber) => {
    setPageActive(param[pagenumber].name);
    // console.log(param[pagenumber].name);
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
                      actice === true
                        ? "acprof_link_title text-defaut-color-pink"
                        : "acprof_link_title "
                    }
                  >
                    <i className="lar la-id-card "></i>
                    Manage My Account
                  </h4>
                </div>
                <div onClick={() => handlePageChange(1)}>
                  Profile Information
                </div>
                <div onClick={() => handlePageChange(2)}>Manage Address</div>
                <div onClick={() => handlePageChange(3)}>Change Password</div>
              </div>
              <div className="acprof_links">
                <div onClick={() => handlePageChange(4)}>
                  <h4 className="acprof_link_title">
                    <i className="las la-gift"></i>
                    My Order History
                  </h4>
                </div>
                <div onClick={() => handlePageChange(5)}>My Returns</div>
                <div onClick={() => handlePageChange(6)}>My Cancellations</div>
                <div onClick={() => handlePageChange(7)}>My Reviews</div>
              </div>
              <div className="acprof_links">
                <div onClick={() => handlePageChange(8)}>
                  <h4 className="acprof_link_title">
                    <i className="las la-credit-card"></i>
                    Payments Methods
                  </h4>
                </div>
                <div onClick={() => handlePageChange(9)}>Voucher</div>
              </div>
              <div className="acprof_links">
                <div onClick={() => handlePageChange(10)}>
                  <h4 className="acprof_link_title">
                    <i className="lar la-heart"></i>
                    My Wishlist
                  </h4>
                </div>
              </div>
              <div className="acprof_links border-0">
                <a href="">
                  <h4 className="acprof_link_title">
                    <i className="las la-power-off"></i>
                    Log Out
                  </h4>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className=" w-3/4">
          {pageActive === "ManageMyAccount" ? <ManageMyAccount /> : null}
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
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
