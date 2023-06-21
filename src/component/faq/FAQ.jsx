import React from "react";

const FAQ = () => {
  return (
    <div className="flex justify-center pb-4">
      <div className="w-[1200px]">
        <h2 className="section_title_2 mb-2">F.A.Q</h2>
        <p className="mb-4 pb-2">
          Can’t find the answer you’re looking for? We’ve shared some{" "}
          <br className="d-none d-md-block" /> of your most frequently asked
          questions to help you out!
        </p>
        <div className="row">
          <div className="col-lg-10">
            <div className="accord_wrap ">
              <div className="title_3 mb-3 text-capitalize">
                <h4>Shipping Information</h4>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      How will my parcel be deliverd?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
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
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do I pay for delivery?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
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
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How will my parcel be deliverd?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How will my parcel be deliverd?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
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
                <h4>Orders and Returns</h4>{" "}
              </div>
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne1"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Tracking my order
                    </button>
                  </h2>
                  <div
                    id="collapseOne1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne1"
                    data-bs-parent="#accordionExample1"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo1"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      I haven’t recived my order
                    </button>
                  </h2>
                  <div
                    id="collapseTwo1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo1"
                    data-bs-parent="#accordionExample1"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree1"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How can I return on item?
                    </button>
                  </h2>
                  <div
                    id="collapseThree1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree1"
                    data-bs-parent="#accordionExample1"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour1"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How will my parcel be deliverd?
                    </button>
                  </h2>
                  <div
                    id="collapseFour1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour1"
                    data-bs-parent="#accordionExample1"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne2"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      What payment types can i use?
                    </button>
                  </h2>
                  <div
                    id="collapseOne2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne2"
                    data-bs-parent="#accordionExample2"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo2"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Can I pay by gift Card?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo2"
                    data-bs-parent="#accordionExample2"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree2"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      I can’t make a payment
                    </button>
                  </h2>
                  <div
                    id="collapseThree2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree2"
                    data-bs-parent="#accordionExample2"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour2"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Has my payment gone though?
                    </button>
                  </h2>
                  <div
                    id="collapseFour2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour2"
                    data-bs-parent="#accordionExample2"
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
