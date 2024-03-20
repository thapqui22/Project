import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import style from "./productitem.module.scss";
import { ProductList } from "../productlist/ProductList";
import PaginationKnowleg from "./PaginationKnowleg";

const ProductItem = () => {
  const [data] = useState(ProductList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleClickChangePage = (data) => {
    setCurrentPage(data);
  };
  return (
    <div className="flex justify-center">
      <div className={style.container}>
        <div className="flex justify-center flex-col w-[1200px]">
          {currentItems.map((item) => (
            <div key={item.id} className="">
              <div className="flex shadow-0 border rounded-3 mb-2 p-2">
                <div className="">
                  <img className={style.imgItem} src={item.url} />
                </div>
                <div className="pt-2 pl-2 w-[80%] h-[200px]">
                  <h5 className="text-xl font-medium">{item.name}</h5>
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
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <div className="buttonaccount pt-2 w-[30%]">
                    <button className="btnjoin h-[35px]">DETAILS</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PaginationKnowleg onClickChangePage={handleClickChangePage} />
      </div>{" "}
    </div>
  );
};

export default ProductItem;
