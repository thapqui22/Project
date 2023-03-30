import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faCartShopping,
  faPencil,
  faFish,
  faServer,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
const MenuBar = () => {
  return (
    <div>
      <div>
        <button>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/">Home</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faBook} />
          <Link to="/knowledge">Knowledge</Link>
        </button>

        <button>
          <FontAwesomeIcon icon={faCartShopping} />
          <Link to="/shopping">Shopping</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faFish} />
          <Link to="/tankmodel">Tank model</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faPenToSquare} />
          <Link to="/manage">Manage Item</Link>
        </button>
        <button>
          <FontAwesomeIcon icon={faPencil} />
          <Link to="/createandeditblog">Edit Blog</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
