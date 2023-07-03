import { useStorage } from "../localstorage/LocalStorage";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "../shoppingcart/shoppingcart.scss";

const Payment = () => {
  const [cartItems, setCartItems] = useStorage("cartItems", []);
  const handleOnClickClearAll = (data) => {
    // props.onClickClearAll(0);
    // setData(0);
  };
  const handleOnClickRemove = (data) => {
    // props.onClickRemove(cartItems.length - 1);
  };
  const increase = (product) => {
    if (product !== null) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.success(`Increasing successful`, {
        autoClose: 200,
      });
    } else {
      toast.error(`Error: Can't increasing product`, {
        autoClose: 200, // Set the duration to 1 second (1000 milliseconds)
      });
    }
  };
  const clearCart = () => {
    setCartItems([]);
    handleOnClickClearAll();
  };
  const decrease = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      if (updatedCartItem.quantity === 0) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success(`Delete successful`, {
          autoClose: 200,
        });
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id ? updatedCartItem : item
          )
        );
        toast.success(`Decreasing successful`, {
          autoClose: 200, // Set the duration to 1 second (1000 milliseconds)
        });
      }
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  function total() {
    let x = 0;
    cartItems.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.success(`Removing successful`, {
      autoClose: 200, // Set the duration to 1 second (1000 milliseconds)
    });
    handleOnClickRemove();
  };
  function totalitems() {
    let a = 0;
    a = cartItems.length;
    return a;
  }
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-[1200px] h-[auto] min-h-1000px">
        <div className="w-2/3 px-3 pb-3">
          <h4 className="flex h-8  justify-start bg-[#E9E4E4] items-center [&>span]:text-center mb-4  p-[20px]">
            <span className="font-bold">Select Payment Method</span>
          </h4>
          <div className="row">
            <div className="payment_methods credit_card active">
              <div className="payment_method_title">
                <h4>Credit Card</h4>
                <div className="payment_method_img">
                  <div className="d-flex credit_crd">
                    <img
                      loading="lazy"
                      src="assets/images/payment-visa.png"
                      alt="Visa card"
                    />
                    <img
                      loading="lazy"
                      src="assets/images/payment-master.png"
                      alt="Master card"
                    />
                    <img
                      loading="lazy"
                      src="assets/images/payment-express.png"
                      alt="American express"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="single_billing_inp">
                    <label htmlFor="company_name">
                      Card Number <span>*</span>
                    </label>
                    <input type="text" id="company_name" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single_billing_inp">
                    <label htmlFor="county_region">
                      Name on Card <span>*</span>
                    </label>
                    <input type="text" id="county_region" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single_billing_inp">
                    <label htmlFor="first_name">
                      Expiration Date <span>*</span>
                    </label>
                    <input
                      type="text"
                      className=""
                      id="first_name"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single_billing_inp">
                    <label htmlFor="last_name">
                      CVV <span>*</span>
                    </label>
                    <input type="text" className="" id="last_name" />
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <button className="proccesstocheckoutbtn uppercase rounded w-[18%] bg-defaut-color-pink text-white hover:border-defaut-color-pink font-medium text-base hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in ">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="w-1/3">
          <h4 className="flex h-8  justify-start bg-[#E9E4E4] items-center [&>span]:text-center mb-4  p-[20px]">
            <span className="font-bold">Your Order</span>
          </h4>
          <div className=" border rounded-lg border-gray-300 [&>div]:justify-between [&>div]:flex p-3 [&>div]:pb-2">
            <h4 className="font-extrabold pb-3 text-lg">PRODUCT</h4>
            <div className="single_product">
              <span className="single_product_name">
                Beigh Knitted Shoes <span>Model:Super shark</span>
              </span>
              <span>x1</span>
              <span className="flex justify-end">${(45).toFixed(2)}</span>
            </div>
            <div className="single_product ">
              <span className="single_product_name">
                Beigh Knitted Shoes <span>Model:Super shark</span>
              </span>
              <span>x10</span>
              <span className="flex justify-end">${(45).toFixed(2)}</span>
            </div>
            <div className="single_product ">
              <span className="single_product_name">
                Beigh Knitted Shoes <span>Model:Super shark</span>
              </span>
              <span>x26</span>
              <span className="flex justify-end">${(45).toFixed(2)}</span>
            </div>
            <div className="font-semibold pb-3">
              <span>SUBTOTAL</span>
              <span>${(45).toFixed(2)}</span>
            </div>
            <div className="font-semibold border-t py-3">
              <span>SHIPPING</span>
              <span>${(45).toFixed(2)}</span>
            </div>
            <div className="border-t py-3 font-bold">
              <span>TOTAL</span>
              <span> ${(total() + total() * 0.1 + 5).toFixed(2)}</span>
            </div>

            <div className="col-12 border-t pt-3 d-flex items-center justify-start whitespace-nowrap">
              <label className="custom_check whitespace-nowrap check_2 d-flex items-center justify-start">
                <input
                  type="checkbox"
                  className="check_inp"
                  hidden=""
                  id="save-default"
                />
                <span className="pl-1">Agree to our</span>
                <a
                  href="/forgotpasswordpage"
                  className="text-defaut-color-pink  pl-1 hover:no-underline hover:text-defaut-color-pink"
                >
                  terms &amp; conditions
                </a>
              </label>
            </div>

            <div className="coupon_form_footer justify-center">
              <button
                onClick={clearCart}
                className="proccesstocheckoutbtn uppercase rounded w-full hover:border-defaut-color-pink font-medium text-base hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in "
              >
                place order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <div className="text-center">
          <h4>
            <button onClick={clearCart}>Clear All Cart</button>
          </h4>
          <h4>TOTAL: {total()}</h4>
          <h4>Total Item: {totalitems()}</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Payment;
