import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import style from "./manageproduct.module.scss";
import { toast } from "react-toastify";
import ManageProductList from "./ManageProductList";

const ManageProducts = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemTotal, setItemTotal] = useState("");
  const itemNameRef = useRef("");
  const itemDescriptionRef = useRef("");
  const itemImageRef = useRef("");
  const itemPriceRef = useRef("");
  const itemTotalRef = useRef("");
  const [item, setItem] = useState({
    id: Number,
    name: String,
    description: String,
    image: String,
    price: Number,
    total: Number,
    quantity: 1,
  });
  const param = {
    id: item.id || Number,
    name: itemName || String,
    description: itemDescription || String,
    image: itemImage || String,
    price: itemPrice || Number,
    total: itemTotal || Number,
    quantity: 1,
  };
  const handleChildClick = (data) => {
    setItemName(data.name);
    setItemDescription(data.description);
    setItemImage(data.image);
    setItemPrice(data.price);
    setItemTotal(data.total);

    setItem({
      id: parseInt(data.id),
      name: data.name,
      description: data.description,
      image: data.image,
      price: parseInt(data.price),
      total: parseInt(data.total),
    });
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
        await handleUpdateProduct(item.id, updatedData);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      toast.error("The field is empty!");
    }
  };
  const handleButtonClear = () => {
    // const isEqual = JSON.stringify(param) === JSON.stringify(item);

    // if (isEqual === true) {
    //   console.log("Nothing change");
    // } else {
    //   console.log("Something changed,do you wanna save?");
    // }

    console.log(param, item);
    setItemName("");
    setItemDescription("");
    setItemImage("");
    setItemPrice("");
    setItemTotal("");
  };
  const renderData = () => {
    return (
      <div className={style.containerList}>
        <div className="form-outline mb-2">
          <input
            placeholder="ID"
            className="form-control"
            value={param.id}
            type="text"
            disabled
          />
        </div>
        <div className="form-outline mb-2">
          <input
            placeholder="Name"
            className="form-control"
            value={param.name}
            // value={itemName}
            ref={itemNameRef}
            type="text"
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-2">
          <input
            placeholder="Price"
            className="form-control"
            type="number"
            value={param.price}
            // value={itemPrice}
            ref={itemPriceRef}
            onChange={(e) => {
              setItemPrice(e.target.value);
            }}
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
            value={param.image}
            // value={itemImage}
            ref={itemImageRef}
            onChange={(e) => {
              setItemImage(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-2">
          <textarea
            className="form-control"
            type="text"
            rows="4"
            placeholder=" Description"
            value={param.description}
            // value={itemDescription}
            ref={itemDescriptionRef}
            onChange={(e) => {
              setItemDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="form-outline mb-2">
          <input
            className="form-control"
            rows="4"
            placeholder=" Total"
            type="number"
            value={param.total}
            // value={itemTotal}
            ref={itemTotalRef}
            onChange={(e) => {
              setItemTotal(e.target.value);
            }}
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
