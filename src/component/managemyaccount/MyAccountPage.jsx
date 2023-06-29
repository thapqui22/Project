import React, { useState, useEffect, useRef } from "react";
import MyWishList from "../mywishlist/MyWishList";
import ProfileInformation from "./ProfileInformation";
import "./managemyaccount.scss";
import ChangePassWord from "./ChangePassWord";
import ManageMyAddress from "./ManageMyAddress";
import ManageMyAccount from "./ManageMyAccount";
import MyOrderHistory from "./MyOrderHistory";
import MyCancellations from "./MyCancellations";
const MyAccountPage = () => {
  const [actice, setActice] = useState(true);
  return (
    <div className="containercenter ">
      <div className="childcontainercenter flex">
        <div className="w-1/4">
          <div className="account_sidebar">
            <div className="flex px-3 py-2">
              <div className="acprof_img rounded-full flex justify-center">
                <a href="account.html">
                  <img
                    src="https://themes.rslahmed.dev/rafcart/assets/images/avatar-2.png"
                    alt=""
                  />
                </a>
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
                <a href="account.html" className="">
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
                </a>
                <a href="account-profile-info.html">Profile Information</a>
                <a href="account-manage-address.html">Manage Address</a>
                <a href="account-change-password.html">Change Password</a>
              </div>
              <div className="acprof_links">
                <a href="account-order-history.html">
                  <h4 className="acprof_link_title">
                    <i className="las la-gift"></i>
                    My Order History
                  </h4>
                </a>
                <a href="account-return-order.html">My Returns</a>
                <a href="account-order-cancel.html">My Cancellations</a>
                <a href="account-my-reviews.html">My Reviews</a>
              </div>
              <div className="acprof_links">
                <a href="account-payment-methods.html">
                  <h4 className="acprof_link_title">
                    <i className="las la-credit-card"></i>
                    Payments Methods
                  </h4>
                </a>
                <a href="account-voucher.html">Voucher</a>
              </div>
              <div className="acprof_links">
                <a href="wish-list.html">
                  <h4 className="acprof_link_title">
                    <i className="lar la-heart"></i>
                    My Wishlist
                  </h4>
                </a>
              </div>
              <div className="acprof_links border-0">
                <a href="login.html">
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
          {/* <ManageMyAccount /> */}
          {/* <MyOrderHistory /> */}
          {/* <MyCancellations /> */}
          {/* <ManageMyAddress />
          <ProfileInformation />
          <MyWishList />
          <ChangePassWord /> */}
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
