import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import style from "./productitem.module.scss";
import { ProductList } from "../productlist/ProductList";

const ProductItem = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(ProductList);

  return (
    <MDBContainer fluid>
      {products.map((item) => (
        <MDBRow className="justify-content-center mb-0" key={item.id}>
          <MDBCol md="10" xl="8">
            <MDBCard className="shadow-0 border rounded-3 mt-2 mb-1">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="10" lg="3" className="mb-4 mb-lg-0">
                    <img className={style.imgItem} src={item.url} />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </a>
                  </MDBCol>
                  <MDBCol md="8">
                    <h5>{item.name}</h5>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span className="text-primary"> • </span>
                      <span>For men</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                    <div>
                      <button className={style.detals}>Details</button>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      ))}
    </MDBContainer>
  );
};

export default ProductItem;
