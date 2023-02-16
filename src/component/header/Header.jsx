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
          <Link to="/fishAndShrimp">Fish/Shrimp</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/shoppingcart">Shopping</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/light">Tank model</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/foodForFish">Food for fish</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/medicineForFish">Contact</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/youtube">Youtube</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
