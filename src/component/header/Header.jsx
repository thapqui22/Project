import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer flex items-center">
        <div>
          <img
            className=" w-[180px]"
            src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/logo.png?1672232161194"
            alt="logo"
          />
        </div>
        <ul className="headright ">
          <div className="flex ml-3">
            <li className="homesubnav p-2 ">
              <a>
                <Link to="/"> Home</Link>
                <span>
                  <i className="las la-angle-down p-1"></i>
                </span>
              </a>
              <ul class="subnav">
                <li>
                  <a href="index-1.html">Home page 1</a>
                </li>
                <li>
                  <a href="index-2.html">Home page 2</a>
                </li>
                <li>
                  <a href="index-3.html">Home page 3</a>
                </li>
              </ul>
            </li>
            <li className="p-2">
              <a>
                <Link to="/shopping">Shop</Link>
                <span>
                  <i className="las la-angle-down p-1"></i>
                </span>
              </a>
            </li>
            <li className="p-2">
              <a>
                Pages
                <span>
                  <i className="las la-angle-down p-1"></i>
                </span>
              </a>
            </li>
            <li className="p-2">
              <a>
                Contact
                <span>
                  <i className="las la-angle-down p-1"></i>
                </span>
              </a>
            </li>
          </div>
          <li className="flex">
            <div className="p-2">
              <a className="text-semibold " href="login.html">
                Login
              </a>
              <span className="text_xs">/</span>
              <a className="text-semibold" href="register.html">
                Register
              </a>
            </div>
            <div className="p-2 ">
              <select className="nice_select hover:text-defaut-color-pink hover:cursor-pointer">
                <option>Language</option>
                <option>English</option>
                <option>Franch</option>
              </select>
            </div>
            <div className="p-2">
              <select className="nice_select">
                <option>Currency</option>
                <option>Dollar</option>
                <option>Euro</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
