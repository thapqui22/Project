import axios from "axios";
import React, { useState } from "react";
import style from "./updateproduct.module.scss";
import { toast, ToastContainer } from "react-toastify";
import ProductsList from "../listproduct/ProductsList";
const UpdateProduct = () => {
  const [itemId, setId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemTotal, setItemTotal] = useState("");

  const handleChildClick = (childValue) => {
    setId(childValue);
  };
  const handleAddProduct = async (itemId, data) => {
    try {
      const url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
      const response = await axios.post(url, data);
      console.log("Item has added:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  const handleAddButtonClick = async () => {
    if (
      itemName !== "" &&
      itemPrice !== "" &&
      itemImage !== "" &&
      itemDescription !== "" &&
      itemTotal !== ""
    ) {
      try {
        const addedData = {
          name: itemName,
          price: itemPrice,
          quantity: 1,
          description: itemDescription,
          image: itemImage,
          total: itemTotal,
        };
        await handleAddProduct(``, addedData);
        setItemName("");
        setItemPrice("");
        setItemImage("");
        setItemDescription("");
        setItemTotal("");
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
      console.log("Item updated:", response.data);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
  const handleUpdateButtonClick = async () => {
    if (
      itemName !== "" &&
      itemPrice !== "" &&
      itemImage !== "" &&
      itemDescription !== "" &&
      itemTotal !== ""
    ) {
      try {
        const updatedData = {
          name: itemName,
          description: itemDescription,
          price: itemPrice,
          image: itemImage,
          total: itemTotal,
        };
        await handleUpdateProduct(itemId, updatedData);
        setItemName("");
        setItemDescription("");
        setItemImage("");
        setItemPrice("");
        setItemTotal("");
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      toast.error("The field is empty!");
    }
  };
  return (
    <div className={style.containers}>
      <div className={style.containerList}>
        {itemId ? (
          <p>ID: {itemId}</p>
        ) : (
          <p>ID:Choose item you want update...</p>
        )}
        <div class="form-outline mb-2">
          <input
            placeholder="Name"
            class="form-control"
            value={itemName}
            type="text"
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div class="form-outline mb-2">
          <input
            placeholder="Price"
            class="form-control"
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <div class="form-outline mb-2">
          <input
            placeholder="Link URL Image"
            class="form-control"
            type="text"
            value={itemImage}
            onChange={(e) => setItemImage(e.target.value)}
          />
        </div>
        <div class="form-outline mb-2">
          <textarea
            value={itemDescription}
            class="form-control"
            type="text"
            rows="4"
            placeholder=" Description"
            onChange={(e) => setItemDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="form-outline mb-2">
          <input
            class="form-control"
            rows="4"
            placeholder=" Total"
            type="number"
            value={itemTotal}
            onChange={(e) => setItemTotal(e.target.value)}
          />
        </div>
        <button
          class="btn btn-primary btn-block mb-2"
          onClick={handleAddButtonClick}
        >
          Add
        </button>
        <button
          class="btn btn-primary btn-block mb-2"
          onClick={handleUpdateButtonClick}
        >
          Update
        </button>
      </div>
      <div className={style.containerTable}>
        <ProductsList onClick={handleChildClick} />
      </div>
    </div>
  );
};

export default UpdateProduct;
