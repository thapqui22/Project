import React, { useState, useEffect, useRef } from "react";
import "./searchbar.scss";

const SearchBar = (props) => {
  const [data, setData] = useState(null);
  const [hoverIconCart, setHoverIconCart] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);

  const [hoverIconAccount, setHoverIconAccount] = useState(false);
  const currentUrl = window.location.pathname;

  const text = "Informationsssssssssss"; // Your text
  const maxLength = 18; // Maximum length before truncation
  const truncatedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  const dummyProducts = [
    {
      image: "https://via.placeholder.com/150", // Placeholder image URL 1
      name: "Product 1",
      size: "Large",
      price: "$10",
      quantity: 2,
    },
    {
      image: "https://via.placeholder.com/150", // Placeholder image URL 2
      name: "Product 2",
      size: "Medium",
      price: "$15",
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/150", // Placeholder image URL 3
      name: "Product 3",
      size: "Small",
      price: "$5",
      quantity: 3,
    },
  ];

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

  useEffect(() => {
    const fetchData = async () => {
      setData(props.onChangeDataRefresh);
      // console.log(props.onChangeLoginStatus);
      setLoginStatus(props.onChangeLoginStatus);
    };
    fetchData();
  }, [props]);
  const handleOnClickChangePath = (number) => {
    props.handleOnClickChangePath(param[number].name);
    // console.log(currentUrl);
  };
  const handleOnClickLogOut = (status) => {
    props.handleOnClickLogOut(status);
  };
  return (
    <div className="navbar py-0">
      <div className="navContainerMenu">
        <div className="containerNarbarCategories w-[200px] rounded bg-[#2b2d42] px-[10px] py-[10px] h-[45px]">
          <div className="bars text-white flex text-center justify-center ">
            <span className="icon pr-2">
              <i className="las la-bars"></i>
            </span>
            <span className="icon_text">All categories</span>
          </div>
        </div>
        <div className="search flex">
          <div className="h-[45px] flex ">
            <select className="nice_select rounded-l py-2 pl-3 text-sm pr-2">
              <option value="">All category</option>
              <option value="">Men</option>
            </select>
          </div>
          <input
            className="px-3 py-[10px] w-[350px]"
            type="text"
            placeholder="Search product..."
            id="show_suggest"
          ></input>
          <button className="py-2 px-5 bg-[#2b2d42] text-white rounded-r">
            <span className="">Search</span>
          </button>
        </div>
        <div className="containerNarbarIcon w-[150px] flex text-center [&>a]:text-white">
          <div className="w-1/3 whitespace-nowrap text-white ">
            <a
              href={
                currentUrl === "/managemyaccount" ? "#" : "/managemyaccount"
              }
              className="icon_wrp grid hover:text-white"
              onClick={() => handleOnClickChangePath(10)}
            >
              <span className="popsheart">77</span>
              <span className="icon text-[20px]">
                <i className="fa-solid fa-heart"></i>
              </span>
              <span className="icon_text text-[12px] hover:text-white">
                Wish List
              </span>
            </a>
          </div>

          <div className="parent relative w-1/3">
            <a
              href="/shoppingcart"
              className="icon_wrp grid text-white"
              onMouseEnter={() => setHoverIconCart(true)}
              onMouseLeave={() => setHoverIconCart(false)}
            >
              <span className="popscart ">{data}</span>
              <span className="icon text-[20px] ">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className="icon_text text-[12px]">Cart</span>
            </a>
            <nav
              className={
                hoverIconCart === true
                  ? "text-black hover:bg-black items-center relative"
                  : "hidden text-black hover:bg-black items-center relative"
              }
            >
              <div
                className="child flex transition p-3 duration-300 md:absolute top-full right-0  md:w-[auto] bg-white md:shadow-inner md:rounded-b"
                onMouseEnter={() => setHoverIconCart(true)}
                onMouseLeave={() => setHoverIconCart(false)}
              >
                <div className="divchild text-nowrap flex flex-col ">
                  <h4 className="text-base font-semibold flex justify-start border-b-2">
                    2 Items
                  </h4>
                  {dummyProducts.map((product, index) => (
                    <a
                      key={index}
                      href="product-view.html"
                      className="single_cartdrop flex mt-3"
                    >
                      <div className="flex flex-row w-[250px] pb-3 justify-between hover:text-defaut-color-black">
                        <div className="flex">
                          <div className="topimage self-center pr-1 pt-1">
                            <img
                              className="image object-fit w-[60px] h-[60px] rounded hover:cursor-pointer hover:opacity-80 "
                              src={product.image}
                              alt={product.name} // Add alt attribute for accessibility
                            />
                          </div>
                          <div className="flex flex-col items-start h-[60px] ">
                            <h4 className="title text-lg font-medium hover:text-defaut-color-pink transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
                              {product.name}
                            </h4>
                            <div className="text-xs">
                              <span className="">x{product.quantity}</span>{" "}
                              {/* Use product.quantity */}
                              <span className=" text-defaut-color">
                                {product.price}
                              </span>{" "}
                              {/* Use product.price */}
                            </div>
                            <span className=" text-sm">
                              Size: {product.size}
                            </span>{" "}
                            {/* Use product.size */}
                          </div>{" "}
                        </div>
                        <i className="fa-solid fa-xmark text-black pt-1" />
                      </div>
                    </a>
                  ))}

                  <div className="total_cartdrop flex justify-between border-t-2 py-2">
                    <h4 className="text_lg text-uppercase mb-0">Sub Total:</h4>
                    <h4 className="text_lg mb-0 ms-2">$980.00</h4>
                  </div>
                  <div className="buttonaccount flex justify-between ">
                    <button className="btnjoin h-[35px]">VIEW CART</button>
                    <button className="btnlogin h-[35px]">CHECKOUT</button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="parent relative w-1/3">
            <a
              href="#"
              className="icon_wrp grid text-white"
              onMouseEnter={() => setHoverIconAccount(true)}
              onMouseLeave={() => setHoverIconAccount(false)}
            >
              <span
                className={
                  loginStatus
                    ? "icon text-[20px] flex justify-center"
                    : "icon text-[20px]"
                }
              >
                {loginStatus ? (
                  <div className="acprof_img_searchbar rounded-full flex justify-center cursor-pointer hover:border-defaut-color-pink">
                    <img
                      src="https://themes.rslahmed.dev/rafcart/assets/images/avatar-2.png"
                      alt=""
                    />
                  </div>
                ) : (
                  <i className="fa-regular fa-user" />
                )}
              </span>
              <span className="icon_text text-[12px]">
                {loginStatus ? "Russell" : "Account"}
              </span>
            </a>
            <nav
              className="text-black hover:bg-black flex items-center relative"
              onMouseEnter={() => setHoverIconAccount(true)}
              onMouseLeave={() => setHoverIconAccount(false)}
            >
              <div
                hidden={hoverIconAccount === true ? false : true}
                className="child flex transition p-3 duration-300 md:absolute top-full right-0  md:w-[auto] bg-white md:shadow-inner md:rounded-b"
              >
                <div className="divchild text-nowrap flex flex-col ">
                  <h4 className="text-base font-semibold">
                    Welcome to RAFCART Shop
                  </h4>
                  {loginStatus ? (
                    ""
                  ) : (
                    <div className="buttonaccount flex justify-between  mt-2">
                      <a className="btnjoin" href="/registerpage">
                        JOIN
                      </a>
                      <a className="btnlogin" href="/loginpage">
                        LOGIN
                      </a>
                    </div>
                  )}
                  <div className="flex text-lg pt-1">
                    <div className="ac_links grid justify-items-stretch [&>div]:justify-self-start [&>a]:pl-2">
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="lar la-id-card"></i>
                        <div>
                          <a
                            href={
                              currentUrl === "/managemyaccount"
                                ? "#"
                                : "/managemyaccount"
                            }
                            onClick={() => handleOnClickChangePath(0)}
                          >
                            My Account
                          </a>
                        </div>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="las la-gift"></i>
                        <div>
                          <a
                            href={
                              currentUrl === "/managemyaccount"
                                ? "#"
                                : "/managemyaccount"
                            }
                            onClick={() => handleOnClickChangePath(4)}
                          >
                            My Order
                          </a>
                        </div>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="lar la-heart"></i>
                        <div onClick={() => handleOnClickChangePath(10)}>
                          <a
                            href={
                              currentUrl === "/managemyaccount"
                                ? "#"
                                : "/managemyaccount"
                            }
                          >
                            My Wishlist
                          </a>
                        </div>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="lar la-heart"></i>

                        <a href="/shoppingcart">My Cart</a>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="las la-power-off"></i>

                        <a
                          href="/loginpage"
                          onClick={() => handleOnClickLogOut(false)}
                        >
                          Log out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
