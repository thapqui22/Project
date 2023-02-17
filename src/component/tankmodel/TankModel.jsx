import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { ProductList } from "../listproduct/ProductList";
import style from "./tankModel.module.scss";
const TankModel = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(ProductList);
  return (
    <div className={style.containers}>
      <div className={style.container}>
        {products.map((item) => (
          <MDBCard className={style.box} key={item.id}>
            <MDBCardImage src={item.url} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <div className="d-flex flex-row align-items-center mb-1">
                <h4 className="mb-1 me-1">${item.price}</h4>
                <span className="text-danger">
                  <s>$25.99</s>
                </span>
              </div>
              <MDBCardText>{item.decristion}</MDBCardText>
              <button href="#">Button</button>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export default TankModel;
