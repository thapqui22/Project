import React from "react";
import "./managemyaccount.scss";
const ManageMyAccount = () => {
  return (
    <div className="account_cont_wrap">
      <div className="profile_info_wrap px-4">
        <div className="flex [&>*]:p-2">
          <div className="container_address_manage_my_account w-1/3">
            <div className="single_prof_info shadow_sm">
              <div className="prof_info_title">
                <h4>Personal Profile</h4>
                <a href="account-profile-info.html">Edit</a>
              </div>
              <div className="prfo_info_cont">
                <p className="name_mma">Russell Ahmed</p>
                <p>example@mail.com</p>
                <p>(123) 456-789</p>
              </div>
            </div>
          </div>
          <div className="container_address_manage_my_account w-1/3">
            <div className="single_prof_info shadow_sm">
              <div className="prof_info_title">
                <h4>Shipping Address</h4>
                <a href="account-manage-address.html">Edit</a>
              </div>
              <div className="prfo_info_cont">
                <p className="name_mma">Ralph Bohner</p>
                <p>3891 Ranchview Dr.</p>
                <p>Richardson, Califora</p>
                <p>(123) 456-789</p>
              </div>
            </div>
          </div>
          <div className="container_address_manage_my_account w-1/3">
            <div className="single_prof_info shadow_sm mb-0">
              <div className="prof_info_title">
                <h4>Billing Address</h4>
                <a href="account-manage-address.html">Edit</a>
              </div>
              <div className="prfo_info_cont">
                <p className="name_mma">Ralph Bohner</p>
                <p>3891 Ranchview Dr.</p>
                <p>Richardson, Califora</p>
                <p>(123) 456-789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prof_recent_order shadow_sm px-8 py-6 mt-[40px]">
        <h4 className="pb-3 font-bold">Recent Orders</h4>
        <div className="single_prof_recorder border p-4 mb-4">
          <div className="flex justify-between ">
            <div className="prorder_img">
              <img
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
                alt="product"
              />
              <img
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
                alt="product"
              />
              <img
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
                alt="product"
              />
            </div>
            <div className="prorder_btn w-1/5 flex uppercase rounded-sm hover:border-defaut-color-pink hover:border font-medium hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
              <a>view order</a>
            </div>
          </div>
          <div className="flex [&>*]:w-1/2 pt-3">
            <div className="prorder_txt prorder_odnumber">
              <h5>Order Number</h5>
              <p>23E34RT3</p>
            </div>
            <div className="prorder_txt prorder_purchased">
              <h5>Purchased</h5>
              <p>01 March 2021</p>
            </div>
            <div className="prorder_txt prorder_qnty d-none d-sm-block">
              <h5>Quantity</h5>
              <p>x3</p>
            </div>
            <div className="prorder_txt prorder_total">
              <h5>Total</h5>
              <p>$120</p>
            </div>
            <div className="prorder_txt prorder_status">
              <h5 className="d-none d-md-block">Status</h5>
              <h5 className="d-block d-md-none">
                <span className="me-2 d-inline-block d-sm-none font-normal text_xs">
                  x3
                </span>{" "}
                $120
              </h5>
              <p className="text-[#08B54C]">Delivered</p>
            </div>
          </div>
        </div>
        <div className="single_prof_recorder border p-4 mb-4">
          <div className="flex justify-between ">
            <div className="prorder_img">
              <img
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
                alt="product"
              />
              <img
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
                alt="product"
              />
              <img
                loading="lazy"
                src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
                alt="product"
              />
            </div>
            <div className="prorder_btn border-defaut-color w-1/5 flex uppercase rounded-sm hover:border-defaut-color-pink hover:border font-medium hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in">
              <a>view order</a>
            </div>
          </div>
          <div className="flex [&>*]:w-1/2 pt-3">
            <div className="prorder_txt prorder_odnumber">
              <h5>Order Number</h5>
              <p>23E34RT3</p>
            </div>
            <div className="prorder_txt prorder_purchased">
              <h5>Purchased</h5>
              <p>01 March 2021</p>
            </div>
            <div className="prorder_txt prorder_qnty d-none d-sm-block">
              <h5>Quantity</h5>
              <p>x3</p>
            </div>
            <div className="prorder_txt prorder_total">
              <h5>Total</h5>
              <p>$120</p>
            </div>
            <div className="prorder_txt prorder_status">
              <h5 className="d-none d-md-block">Status</h5>
              <h5 className="d-block d-md-none">
                <span className="me-2 d-inline-block d-sm-none font-normal text_xs">
                  x3
                </span>{" "}
                $120
              </h5>
              <p className="text-[#08B54C]">Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMyAccount;
