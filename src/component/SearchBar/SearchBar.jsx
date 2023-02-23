import React from "react";
import style from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SearchBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navContainer}>
        <div>
          <img
            src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/logo.png?1672232161194"
            alt="logo"
          />
        </div>
        <div className={style.searchBox}>
          <input type="text" placeholder="Search box..." />
          <button>Search</button>
        </div>
        <div className={style.phone}>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:0865313256">0865313256 - HN</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:0785111988">0785111988 - HCM</a>
          </div>
        </div>
        <div className={style.iconBuy}>
          <Link to="/shoppingcart">
            <FontAwesomeIcon icon={faHome} />
            <span>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
