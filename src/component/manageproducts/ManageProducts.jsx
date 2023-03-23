import axios from "axios";
import React, { useState, useRef } from "react";
import style from "./manageproduct.module.scss";
import { toast } from "react-toastify";
import ManageProductList from "./ManageProductList";

const ManageProducts = () => {
  const itemIdRef = useRef("");
  const itemNameRef = useRef("");
  const itemDescriptionRef = useRef("");
  const itemImageRef = useRef("");
  const itemPriceRef = useRef("");
  const itemTotalRef = useRef("");
  const [showImg, setShowImg] = useState();

  const handleChildClick = ({ id, name, description, image, price, total }) => {
    itemIdRef.current.value = id;
    itemNameRef.current.value = name;
    itemDescriptionRef.current.value = description;
    itemImageRef.current.value = image;
    itemPriceRef.current.value = price;
    itemTotalRef.current.value = total;
    setShowImg(image);
  };
  const handleAddProduct = async (item, data) => {
    try {
      const url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${item}`;
      const response = await axios.post(url, data);
      toast.success("Item has added!");
      console.log("Item has added:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  const handleAddButtonClick = async () => {
    if (
      itemNameRef.current.value !== "" &&
      itemDescriptionRef.current.value !== "" &&
      itemImageRef.current.value !== "" &&
      itemPriceRef.current.value !== "" &&
      itemTotalRef.current.value !== ""
    ) {
      try {
        const addedData = {
          name: itemNameRef.current.value,
          description: itemDescriptionRef.current.value,
          image: itemImageRef.current.value,
          price: itemPriceRef.current.value,
          total: itemTotalRef.current.value,
          quantity: 1,
        };
        await handleAddProduct(``, addedData);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      toast.error("The field is empty!");
    }
  };
  const handleUpdateProduct = async (itemId, data) => {
    try {
      const url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
      const response = await axios.put(url, data);
      toast.success("Item has updated!");
      console.log("Item updated:", response.data);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
  const handleUpdateButtonClick = async () => {
    if (
      itemNameRef.current.value !== "" &&
      itemDescriptionRef.current.value !== "" &&
      itemImageRef.current.value !== "" &&
      itemPriceRef.current.value !== "" &&
      itemTotalRef.current.value !== ""
    ) {
      try {
        const updatedData = {
          name: itemNameRef.current.value,
          description: itemDescriptionRef.current.value,
          image: itemImageRef.current.value,
          price: itemPriceRef.current.value,
          total: itemTotalRef.current.value,
        };
        await handleUpdateProduct(itemIdRef.current.value, updatedData);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      toast.error("The field is empty!");
    }
  };
  const handleButtonClear = () => {
    //you did't handle compare data button
    // const isEqual = JSON.stringify(param) === JSON.stringify(item);

    // if (isEqual === true) {
    //   console.log("Nothing change");
    // } else {
    //   console.log("Something changed,do you wanna save?");
    // }
    itemIdRef.current.value = "";
    itemNameRef.current.value = "";
    itemDescriptionRef.current.value = "";
    itemImageRef.current.value = "";
    itemPriceRef.current.value = "";
    itemTotalRef.current.value = "";
  };

  const renderData = () => {
    return (
      <div className={style.containerList}>
        <div className="form-outline mb-2">
          <input
            placeholder="ID"
            className="form-control"
            ref={itemIdRef}
            type="text"
            disabled
          />
        </div>
        <div className="form-outline mb-2">
          <input
            placeholder="Name"
            className="form-control"
            ref={itemNameRef}
            type="text"
          />
        </div>
        <div className="form-outline mb-2">
          <input
            placeholder="Price"
            className="form-control"
            type="number"
            ref={itemPriceRef}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="form-outline mb-2">
          <input
            placeholder="Link URL Image"
            className="form-control"
            type="text"
            ref={itemImageRef}
            onChange={(e) => {
              setShowImg(e.target.value);
            }}
          />
        </div>{" "}
        <div className="form-outline mb-2">
          <img src={showImg} />
        </div>
        <div className="form-outline mb-2">
          <textarea
            className="form-control"
            type="text"
            rows="4"
            placeholder=" Description"
            ref={itemDescriptionRef}
          ></textarea>
        </div>
        <div className="form-outline mb-2">
          <input
            className="form-control"
            rows="4"
            placeholder=" Total"
            type="number"
            ref={itemTotalRef}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "-" || e.key === "+") {
                e.preventDefault();
              }
            }}
          />
        </div>
        <button
          className="btn btn-primary btn-block mb-2"
          onClick={handleAddButtonClick}
        >
          Add
        </button>
        <button
          className="btn btn-primary btn-block mb-2"
          onClick={handleUpdateButtonClick}
        >
          Update
        </button>
        <button
          className="btn btn-primary btn-block mb-2"
          onClick={handleButtonClear}
        >
          Clear
        </button>
      </div>
    );
  };
  return (
    <div className={style.containers}>
      {renderData()}
      <div className={style.containerTable}>
        <ManageProductList onClickFixButton={handleChildClick} />
      </div>
    </div>
  );
};

export default ManageProducts;
