import style from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faPlane,
  faTaxi,
  faGun,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.navContainer}>
          <div className={style.nav}>
            <div>
              <a>
                <FontAwesomeIcon icon={faPlane} />
                <span>Giao hàng toàn quốc</span>
              </a>
            </div>
            <div>
              <a>
                <FontAwesomeIcon icon={faTaxi} />
                <span>Nhận hàng thanh toán sau(COD)</span>
              </a>
            </div>
            <div>
              <a>
                <FontAwesomeIcon icon={faListCheck} />
                <span>Kiểm tra đơn hàng</span>
              </a>
            </div>
          </div>
          <div className={style.navItems}>
            <button className={style.navButton}>Register</button>
            <button className={style.navButton}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
