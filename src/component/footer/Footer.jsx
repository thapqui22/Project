import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer bg-[#f3f3f3]">
        <div className="w-[1200px]">
          <div className="flex h-[250px] w-[100%]  [&>div]:flex-1 py-10 ">
            <div className="">
              <div className="">
                <div className="">
                  <div className="footer_logo pb-3">
                    <img
                      loading="lazy"
                      src="https://themes.rslahmed.dev/rafcart/assets/images/svg/logo.svg"
                      alt="easy shop"
                    />
                  </div>
                  <div className="pb-3 text-left text-sm w-[300px]">
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs the
                      passage.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="footer_newslet text-left">
                    <h4 className="pb-3 text-xl font-medium">Newsletter</h4>
                    <form className="subscribe_form_footer">
                      <input
                        type="text"
                        placeholder="Your Email Address"
                        className="border-2 border-[#6c757] border-r-0 rounded-l px-3"
                      />
                      <button className="rounded-r border-2 text-sm font-medium border-defaut-color-pink text-base  bg-defaut-color-pink hover:text-defaut-color-pink hover:bg-white transition duration-300 ease-out hover:ease-in ">
                        SUBSCRIBE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex [&>div]:flex-1 [&>div]:text-left">
                <div className="">
                  <div className="footer_menu flex flex-col [&>a]:py-2 [&>a]:text-sm ">
                    <h4 className="footer_title text-lg font-medium pb-2">
                      My Account
                    </h4>
                    <a href="account-order-history.html">Orders</a>
                    <a>Wishlist</a>
                    <a href="track-order.html">Track Order</a>
                    <a href="#">Manage Account</a>
                    <a href="return-order.html">Return Order</a>
                  </div>
                </div>
                <div className="">
                  <div className="footer_menu flex flex-col [&>a]:py-2 [&>a]:text-sm ">
                    <h4 className="footer_title text-lg font-medium pb-2">
                      Information
                    </h4>
                    <a href="about-us.html">About Us</a>
                    <a href="return-policy.html">Return Policy</a>
                    <a href="terms-condition.html">Terms &amp; condition</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="faq.html">FAQ</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="footer_download">
                <div className=" text-left">
                  <div className="">
                    <h4 className="footer_title text-lg font-medium pb-2">
                      Contact
                    </h4>
                    <div className="footer_contact [&>p]:py-2">
                      <p>
                        <span className="icn">
                          <i className="las la-map-marker-alt pr-2"></i>
                        </span>
                        7895 Dr New Albuquerue, NM 19800, <br /> United States
                        Of America
                      </p>
                      <p className="phn ">
                        <span className="icn">
                          <i className="las la-phone pr-2"></i>
                        </span>
                        +566 477 256, +566 254 575
                      </p>
                      <p className="eml">
                        <span className="icn">
                          <i className="lar la-envelope pr-2"></i>
                        </span>
                        info@domain.com
                      </p>
                    </div>
                  </div>
                  <div className="footer_social">
                    <div className="footer_icon py-2 h-[36px] w-[75px] [&>a]:rounded-full text-center">
                      <a href="#" className="facebook bg-[#3b5998] mr-2">
                        <i className="lab la-facebook-f w-[17px] hover:text-white"></i>
                      </a>
                      <a href="#" className="twitter bg-[#00acee] mr-2">
                        <i className="lab la-twitter w-[17px] hover:text-white"></i>
                      </a>
                      <a href="#" className="instagram bg-[#d53982] ">
                        <i className="lab la-instagram w-[18px] hover:text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
