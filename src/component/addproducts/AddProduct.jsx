import style from "./addproduct.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Await } from "react-router-dom";
const AddProduct = () => {
  const handleDeleteProduct = async (itemId, data) => {
    let url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
    return await axios
      .put(url, data)
      .then((response) => {
        console.log("Item updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  const handleAddProduct = async (itemId, data) => {
    let url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
    return await axios
      .put(url, data)
      .then((response) => {
        console.log("Item updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  const handleUpdateProduct = async (itemId, data) => {
    let url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
    return await axios
      .put(url, data)
      .then((response) => {
        console.log("Item updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  return (
    <div className={style.container}>
      <form>
        <div class="form-outline mb-2">Add product</div>
        <div class="form-outline mb-2">
          <input
            placeholder="Name"
            type="text"
            id="form4Example1"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-2">
          <input
            placeholder="Link URL Image"
            type="email"
            id="form4Example2"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-2">
          <input
            placeholder="Price"
            type="email"
            id="form4Example2"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-2">
          <textarea
            class="form-control"
            id="form4Example3"
            rows="4"
            placeholder=" Description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-2">
          Add
        </button>
        <button
          class="btn btn-primary btn-block mb-2"
          onClick={handleUpdateProduct(1, {
            name: "Test update ",
            description: "123456789",
          })}
        >
          Update
        </button>
        <div class="form-outline mb-2">
          <input
            class="form-control"
            id="form4Example3"
            rows="4"
            placeholder=" ID"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-2">
          Delete
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
