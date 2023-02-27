import axios from "axios";
import React, { useState, useRef } from "react";
import style from "./manageproduct.module.scss";
import { toast } from "react-toastify";
import ProductsList from "../listproduct/ProductsList";
const ManageProductClone = () => {
  const [itemId, setId] = useState("");
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

  const handleChildClick = (data) => {
    setId(data.id);
    setItemName(data.name);
    setItemDescription(data.description);
    setItemImage(data.image);
    setItemPrice(data.price);
    setItemTotal(data.total);
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
        await handleUpdateProduct(itemId, updatedData);
        window.location.reload();
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
            defaultValue={itemName}
            ref={itemNameRef}
            type="text"
          />
        </div>

        <div class="form-outline mb-2">
          <input
            placeholder="Price"
            class="form-control"
            type="number"
            defaultValue={itemPrice}
            ref={itemPriceRef}
          />
        </div>

        <div class="form-outline mb-2">
          <input
            placeholder="Link URL Image"
            class="form-control"
            type="text"
            defaultValue={itemImage}
            ref={itemImageRef}
          />
        </div>
        <div class="form-outline mb-2">
          <textarea
            class="form-control"
            type="text"
            rows="4"
            placeholder=" Description"
            defaultValue={itemDescription}
            ref={itemDescriptionRef}
          ></textarea>
        </div>
        <div class="form-outline mb-2">
          <input
            class="form-control"
            rows="4"
            placeholder=" Total"
            type="number"
            defaultValue={itemTotal}
            ref={itemTotalRef}
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

export default ManageProductClone;
