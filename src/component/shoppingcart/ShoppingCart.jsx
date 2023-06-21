import { useStorage } from "../localstorage/LocalStorage";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "./shoppingcart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCartShopping,
  faHeart,
  faStar,
  faMinus,
  faPlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
const ShoppingCart = (props) => {
  const [cartItems, setCartItems] = useStorage("cartItems", []);
  const handleOnClickClearAll = (data) => {
    props.onClickClearAll(0);
    // setData(0);
  };
  const handleOnClickRemove = (data) => {
    props.onClickRemove(cartItems.length - 1);
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
        <div className="w-[900px] px-3">
          <h4 className="flex h-8  justify-center bg-[#E9E4E4] items-center [&>span]:text-center mb-4  p-[20px]">
            <span className="basis-1/2">Product</span>
            <span className="basis-1/4">Quantity</span>
            <span className="basis-1/4">Total Price</span>
          </h4>
          {cartItems.map((i, index) => (
            <div className="pb-3">
              <div className="shopcartwrap block text-center border rounded-lg border-gray-300">
                <div className="flex p-[20px]">
                  <div className="flex basis-1/2">
                    {/* <img className="w-[150px] h-[100px]" src={i.image} /> */}
                    <img
                      className="w-[150px] h-[125px]"
                      src="https://vtv1.mediacdn.vn/zoom/640_400/2022/9/8/apple-iphone-14-pro-iphone-14-pro-max-hero-220907full-bleed-imagejpglarge-16625918306101560026184.jpg"
                    />
                    <div className="flex ">
                      <div className="flex items-center">
                        <div className="[&>h4]:pb-3 pl-2">
                          <h4 className="text-start font-semibold">{i.name}</h4>
                          <p className="text-start font-semibold text-defaut-color">
                            ${i.price}
                          </p>
                          <p className="text-start">Model: 128G</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/4 flex justify-center">
                    <div className="quanlityContainer flex align-items-center w-auto [&>*]:border rounded-lg [&>*]:border-gray-300">
                      <button className="minus flex align-items-center justify-center hover:bg-slate-200 ">
                        <FontAwesomeIcon
                          className="p-2"
                          icon={faMinus}
                          onClick={() => decrease(i)}
                        />
                      </button>
                      <div className="inputmp flex align-items-center justify-center p-1 px-0">
                        <input
                          className="text-center max-w-[50px] "
                          value={i.quantity}
                          readOnly
                        />
                      </div>
                      <button className="plus flex align-items-center justify-center hover:bg-slate-200 ">
                        <FontAwesomeIcon
                          className="p-2 "
                          icon={faPlus}
                          onClick={() => increase(i)}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="basis-1/4 flex justify-between ">
                    <div className="quanlityContainer basis-1/3  flex align-items-center w-auto"></div>
                    <div className="quanlityContainer basis-1/3  flex justify-center align-items-center  w-auto">
                      ${i.price * i.quantity}
                    </div>
                    <div className="icon flex basis-1/3 justify-end align-items-center">
                      <i
                        onClick={() => removeFromCart(i.id)}
                        class="fa-solid fa-trash mr-3 hover:text-defaut-color hover:cursor-pointer text-xl"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[300px] h-[310px] border rounded-lg border-gray-300 [&>div]:justify-between [&>div]:flex p-3 [&>div]:pb-2">
          <h4 className="font-extrabold pb-3">ORDER SUMMARY</h4>
          <div className="font-semibold">
            <span>Subtotal</span>
            <span>${(45).toFixed(2)}</span>
          </div>
          <div>
            <span>Delivery</span>
            <span>${5}</span>
          </div>
          <div>
            <span>Tax</span>
            <span>${(total() * 0.1).toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 font-bold">
            <span>TOTAL</span>
            <span> ${(total() + total() * 0.1 + 5).toFixed(2)}</span>
          </div>
          <div className="coupon_form_footer">
            <input
              type="text"
              placeholder="Enter coupon"
              className="border-2 border-[#6c757] border-r-0 rounded-l px-3 "
            />
            <button className="rounded-r w-full border-2 text-sm font-medium border-defaut-color-pink  bg-defaut-color-pink hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in ">
              APPLY
            </button>
          </div>
          <div className="coupon_form_footer justify-center">
            <button
              onClick={clearCart}
              className="proccesstocheckoutbtn rounded w-full hover:border-defaut-color-pink   font-medium text-base hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in "
            >
              PROCCEES TO CHECKOUT
            </button>
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

export default ShoppingCart;
