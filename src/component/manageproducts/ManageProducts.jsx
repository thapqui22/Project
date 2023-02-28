import axios from "axios";
import React, { useState, useRef } from "react";
import style from "./manageproduct.module.scss";
import { toast } from "react-toastify";
import ProductsList from "../listproduct/ProductsList";
const ManageProducts = () => {
  const [item, setItem] = useState({
    id: Number,
    name: String,
    description: String,
    image: String,
    price: Number,
    total: Number,
    quantity: 1,
  });
  const itemNameRef = useRef("");
  const itemDescriptionRef = useRef("");
  const itemImageRef = useRef("");
  const itemPriceRef = useRef("");
  const itemTotalRef = useRef("");

  const handleChildClick = (data) => {
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
        await handleUpdateProduct(item.id, updatedData);
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
        {item.id ? (
          <p>ID: {item.id}</p>
        ) : (
          <p>ID:Choose item you want update...</p>
        )}

        <div class="form-outline mb-2">
          <input
            placeholder="Name"
            class="form-control"
            defaultValue={item.name}
            ref={itemNameRef}
            type="text"
          />
        </div>

        <div class="form-outline mb-2">
          <input
            placeholder="Price"
            class="form-control"
            type="number"
            defaultValue={item.price}
            ref={itemPriceRef}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "." ||
                e.key === "-" ||
                e.key === "+"
              ) {
                e.preventDefault();
              }
            }}
          />
        </div>

        <div class="form-outline mb-2">
          <input
            placeholder="Link URL Image"
            class="form-control"
            type="text"
            defaultValue={item.image}
            ref={itemImageRef}
          />
        </div>
        <div class="form-outline mb-2">
          <textarea
            class="form-control"
            type="text"
            rows="4"
            placeholder=" Description"
            defaultValue={item.description}
            ref={itemDescriptionRef}
          ></textarea>
        </div>
        <div class="form-outline mb-2">
          <input
            class="form-control"
            rows="4"
            placeholder=" Total"
            type="number"
            defaultValue={item.total}
            ref={itemTotalRef}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "." ||
                e.key === "-" ||
                e.key === "+"
              ) {
                e.preventDefault();
              }
            }}
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

export default ManageProducts;
