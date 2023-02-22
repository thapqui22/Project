import style from "./addproduct.module.scss";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const AddProduct = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemTotal, setItemTotal] = useState("");

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
        await handleAddProduct(1, addedData);
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

  return (
    <div className={style.container}>
      <div class="form-outline mb-2">
        <input
          placeholder="Name"
          class="form-control"
          type="text"
          value={itemName}
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
      <div class="form-outline mb-2">
        <button
          className="btn btn-primary btn-block mb-2"
          onClick={handleAddButtonClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
