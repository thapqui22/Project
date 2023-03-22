import React from "react";
import style from "./iconads.module.scss";

const Iconadss = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navContainerMenu}>
        <div className={style.navContainerIconAds}>
          <img
            src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/privacy_1_icon.png?1672232161194"
            alt=""
          />

          <div className="">
            <div className={style.navBarTextTitle}>Giao hàng tận nơi</div>
            <div className={style.navBarText}>Liên kết với các đơn vị</div>
            <div className={style.navBarText}>vận chuyển uy tín, đảm bảo</div>
          </div>
        </div>

        <div className={style.navContainerIconAds}>
          <div>
            <img
              src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/privacy_2_icon.png?1672232161194"
              alt=""
            />
          </div>
          <div>
            <div className={style.navBarTextTitle}>Thanh toán tiện lợi</div>
            <div className={style.navBarText}>Hỗ trợ thanh toán tiền mặt</div>
            <div className={style.navBarText}>hoặc thẻ từ các ngân hàng</div>
          </div>
        </div>

        <div className={style.navContainerIconAds}>
          <div>
            <img
              src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/privacy_3_icon.png?1672232161194"
              alt=""
            />
          </div>
          <div>
            <div className={style.navBarTextTitle}>Chăm sóc 24/7</div>
            <div className={style.navBarText}>Chăm sóc khách hàng 24/7.</div>
            <div className={style.navBarText}>Giải đáp mọi thắc mắc</div>
          </div>
        </div>

        <div className={style.navContainerIconAds}>
          <div>
            <img
              src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/privacy_4_icon.png?1672232161194"
              alt=""
            />
          </div>
          <div>
            <div className={style.navBarTextTitle}>Sản phẩm chính hãng</div>
            <div className={style.navBarText}>Sản phẩm chính hãng đến</div>
            <div className={style.navBarText}>từ các thương hiệu uy tín</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iconadss;
