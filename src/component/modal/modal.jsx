import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./modal.scss";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const dataRecieveInModal = props.onClickFaMagnifyingGlass;

  useEffect(() => {
    if (dataRecieveInModal !== undefined) {
      console.log(dataRecieveInModal.dataReceive);
      setShowModal(true);
    }
  }, [dataRecieveInModal]);

  useEffect(() => {
    props.onClickCancel(!showModal);
  }, [showModal]);
  const handleCancelButton = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-[1200px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold ">
                    PRODUCT DESCRIPTION
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-70 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                {/*body*/}
                <div className="p-3 flex flex-row">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6 ">
                      <img
                        className="card-img-top mb-5 mb-md-0 h-[552px]"
                        src="https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua-1_600x397.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="small mb-1">SKU: BST-498</div>
                      <h1 className="display-5 fw-bolder flex">
                        {dataRecieveInModal.dataReceive.name}
                      </h1>
                      <div className="fs-5 mb-5">
                        <span className="pr-2">
                          {new Intl.NumberFormat("ja-JP", {
                            style: "currency",
                            currency: "USD",
                          }).format(dataRecieveInModal.dataReceive.price)}
                        </span>
                        <span className="text-decoration-line-through">
                          $45.00
                        </span>
                      </div>
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium at dolorem quidem modi. Nam sequi
                        consequatur obcaecati excepturi alias magni, accusamus
                        eius blanditiis delectus ipsam minima ea iste laborum
                        vero?
                      </p>
                      <div className="d-flex pt-2">
                        <input
                          className="form-control text-center me-3 max-w-[50px]"
                          id="inputQuantity"
                          type="num"
                          value="1"
                        />
                        <button
                          className="btn btn-outline-dark flex-shrink-0 me-3"
                          type="button"
                        >
                          <i className="bi-cart-fill me-1"></i>
                          Add to cart
                        </button>
                        <button className="btnadd" type="button">
                          <i className="bi-cart-fill me-1 "></i>
                          Add to favorite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCancelButton}
                  >
                    Close
                  </button>
                  <button
                    className="bg-defaut-color-red text-white hover:opacity-80 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
