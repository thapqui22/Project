import axios from "axios";
const UpdateProduct = (itemId, data) => {
  return axios
    .put(
      `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`,
      data
    )
    .then((response) => {
      console.log("Item updated:", response.data);
    })
    .catch((error) => {
      console.error("Error updating item:", error);
    });
};

const itemId = 1;
const newData = { name: "Test update" };
UpdateProduct(itemId, newData);

export default UpdateProduct;
