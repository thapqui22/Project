import React from "react";
import style from "./menubar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const MenuBar = () => {
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
          <Link to="/shopping">Shopping</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/tankmodel">Tank model</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/manage">Manage Item</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/createandeditblog">Edit Blog</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
