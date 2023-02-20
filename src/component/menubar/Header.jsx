import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navContainerMenu}>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/">Home</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/knowledge">Knowledge</Link>
        </button>

        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/shoppingcart">Shopping</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/tankmodel">Tank model</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/manage">Add/Delect Item</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="https://www.youtube.com/">Youtube</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
