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
  const refQuantity = useRef(1);
  const [quantity, setQuantity] = useState(1);
  const handleOnClickClearAll = (data) => {
    props.onClickClearAll(0);
    // setData(0);
  };
  const handleOnClickRemove = (data) => {
    // setData(data - 1);
    props.onClickRemove(cartItems.length - 1);
    // console.log(data);
  };
  const handlePlusButton = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusButton = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
                  <div className="flex basis-1/2 ">
                    <img
                      className="w-[200px] h-[150px]"
                      src="https://themes.rslahmed.dev/rafcart/assets/images/headphone-4.png"
                    />
                    <div className="[&>h4]:pb-3 pt-4">
                      <h4 className="text-start font-semibold">{i.name}</h4>
                      <p className="text-start font-medium">${i.price}</p>
                      <p className="text-start">Size: M</p>
                    </div>
                  </div>
                  <div className="basis-1/4 flex justify-center">
                    <div className="quanlityContainer flex align-items-center w-auto [&>*]:border rounded-lg [&>*]:border-gray-300">
                      <button className="minus flex align-items-center justify-center hover:bg-slate-200 ">
                        <FontAwesomeIcon
                          className="p-2"
                          icon={faMinus}
                          onClick={handleMinusButton}
                        />
                      </button>
                      <div className="inputmp flex align-items-center justify-center p-1 px-0">
                        <input
                          className="text-center max-w-[50px] "
                          value={quantity}
                          readOnly
                        />
                      </div>
                      <button className="plus flex align-items-center justify-center hover:bg-slate-200 ">
                        <FontAwesomeIcon
                          className="p-2 "
                          icon={faPlus}
                          onClick={handlePlusButton}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="basis-1/4 flex justify-between ">
                    <div className="quanlityContainer basis-1/3  flex align-items-center w-auto"></div>
                    <div className="quanlityContainer basis-1/3  flex justify-center align-items-center  w-auto">
                      ${i.price * quantity}
                    </div>
                    <div className="icon flex basis-1/3 justify-end align-items-center">
                      <i class="fa-solid fa-trash mr-3 hover:text-defaut-color hover:cursor-pointer text-xl"></i>
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
            <span>$45.00</span>
          </div>
          <div>
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div>
            <span>Tax</span>
            <span>Free</span>
          </div>
          <div className="border-t pt-2 font-bold">
            <span>TOTAL</span>
            <span>$45.00</span>
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
            <button className="proccesstocheckoutbtn rounded w-full hover:border-defaut-color-pink   font-medium text-base hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in ">
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
