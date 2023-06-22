import React, { useState } from "react";
import "./faq.scss";
const FAQ = () => {
  const [shippingInformation, setShippingInformation] = useState(null);
  const [ordersAndReturns, setOrdersAndReturns] = useState(null);
  const [payments, setPayments] = useState(null);
  const onClickButtonShippingInformation = (nametitle) => {
    if (nametitle === shippingInformation) {
      setShippingInformation(null);
    } else {
      setShippingInformation(nametitle);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <h2 className="section_title_2 mb-2 text-4xl font-bold pb-3">F.A.Q</h2>
        <p className="mb-4 pb-2">
          Can’t find the answer you’re looking for? We’ve shared some{" "}
          <br className="d-none d-md-block" /> of your most frequently asked
          questions to help you out!
        </p>
        <div className="row w-[1200px]">
          <div className="">
            <div className="accord_wrap">
              <div className="title_3 mb-3 text-capitalize">
                <h4>Shipping Information</h4>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      onClick={() =>
                        onClickButtonShippingInformation(
                          "How will my parcel be deliverd?"
                        )
                      }
                      className={
                        shippingInformation ===
                        "How will my parcel be deliverd?"
                          ? "title text-defaut-color-pink"
                          : "title"
                      }
                    >
                      How will my parcel be deliverd?
                      {shippingInformation ===
                      "How will my parcel be deliverd?" ? (
                        <i class="fa-solid fa-minus "></i>
                      ) : (
                        <i class="fa-solid fa-plus"></i>
                      )}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={
                      shippingInformation === "How will my parcel be deliverd?"
                        ? undefined
                        : "accordion-collapse collapse"
                    }
                  >
                    <div className="accordion-body text_md border-t-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={
                        shippingInformation === "Do I pay for delivery?"
                          ? "title text-defaut-color-pink"
                          : "title"
                      }
                      onClick={() =>
                        onClickButtonShippingInformation(
                          "Do I pay for delivery?"
                        )
                      }
                    >
                      Do I pay for delivery?
                      {shippingInformation === "Do I pay for delivery?" ? (
                        <i class="fa-solid fa-minus "></i>
                      ) : (
                        <i class="fa-solid fa-plus"></i>
                      )}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={
                      shippingInformation === "Do I pay for delivery?"
                        ? undefined
                        : "accordion-collapse collapse"
                    }
                  >
                    <div className="accordion-body text_md border-t-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="title">
                      How will my parcel be deliverd?
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="title">
                      How will my parcel be deliverd?
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accord_wrap ">
              <div className="title_3 mb-3 text-capitalize">
                <h4>Orders and Returns</h4>
              </div>
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne1">
                    <button className="title">
                      Tracking my order <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseOne1"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo1">
                    <button className="title">
                      I haven’t recived my order
                      <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo1"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree1">
                    <button className="title">
                      How can I return on item?
                      <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseThree1"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour1">
                    <button className="title">
                      How will my parcel be deliverd?
                      <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseFour1"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accord_wrap ">
              <div className="title_3 mb-3 text-capitalize">
                <h4>Payments</h4>
              </div>
              <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne2">
                    <button className="title">
                      What payment types can i use?
                      <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseOne2"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo2">
                    <button className="title">
                      Can I pay by gift Card?
                      <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo2"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree2">
                    <button className="title">
                      I can’t make a payment
                      <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseThree2"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour2">
                    <button className="title">
                      Has my payment gone though?
                      <i class="fa-solid fa-plus "></i>
                    </button>
                  </h2>
                  <div
                    id="collapseFour2"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body text_md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
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

export default FAQ;
