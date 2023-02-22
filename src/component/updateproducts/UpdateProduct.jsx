import axios from "axios";
import React, { useState } from "react";
import style from "./updateproduct.module.scss";

const UpdateProduct = () => {
  const [itemId, setId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState("");

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
    try {
      const updatedData = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        image: itemImage,
      };
      await handleUpdateProduct(itemId, updatedData);
      setId("");
      setItemName("");
      setItemDescription("");
      setItemImage("");
      setItemPrice("");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };
  return (
    <div className={style.container}>
      <div class="form-outline mb-2">
        <input
          class="form-control"
          placeholder="Id"
          type="number"
          value={itemId}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
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
      <button class="btn btn-primary btn-block mb-2">Add</button>
      <button
        class="btn btn-primary btn-block mb-2"
        onClick={handleUpdateButtonClick}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
