import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductsList = (props) => {
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);
  const handleReload = () => {
    window.location.reload();
  };

  const handleRemoveButton = async (itemId) => {
    try {
      const url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
      const response = await axios.delete(url);
      console.log("Item deleted:", response.data);
      handleReload();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleClick = async (itemId) => {
    const url = `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/${itemId}`;
    const response = await axios.get(url);
    props.onClickFixButton(response.data);
  };

  return (
    <div>
      {data ? (
        <div className="row mt-1">
          <table className="table  text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Remove</th>
                <th scope="col">Fix</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img
                      src={i.image}
                      style={{ width: "3rem", height: "3rem" }}
                    />
                  </th>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>{i.total}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      value={i.id}
                      onClick={(e) => handleRemoveButton(e.target.value)}
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      value={i.id}
                      onClick={() => handleClick(i.id)}
                    >
                      Fix
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ProductsList;
