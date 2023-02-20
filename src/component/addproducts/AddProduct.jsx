import React from "react";
import style from "./addproduct.module.scss";
const AddProduct = () => {
  return (
    <div className={style.container}>
      <form>
        <div class="form-outline mb-4">Add product</div>
        <div class="form-outline mb-4">
          <input
            placeholder="Name"
            type="text"
            id="form4Example1"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-4">
          <input
            placeholder="Link URL Image"
            type="email"
            id="form4Example2"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-4">
          <textarea
            class="form-control"
            id="form4Example3"
            rows="4"
            placeholder=" Description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
