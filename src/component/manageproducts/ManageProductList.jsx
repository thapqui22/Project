import React, { useState, useEffect } from "react";
import axios from "axios";
import "./manageproductlist.scss";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faWrench } from "@fortawesome/free-solid-svg-icons";

const ManageProductList = (props) => {
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleClickChangePage = (data) => {
    setCurrentPage(data);
  };

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
    <>
      <div class="table-users">
        <div class="header">Manage Product List Item</div>
        <table cellspacing="0">
          <tbody>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col">Description</th>
              <th scope="col">Fix</th>
              <th scope="col">Remove</th>
            </tr>
            {currentItems.map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={i.image} alt="" />
                </td>
                <td>{i.name}</td>
                <td>{i.price} $</td>
                <td>{i.total}</td>
                <td>{i.description}</td>
                <td>
                  <FontAwesomeIcon
                    className="FontAwesomeIcon"
                    icon={faWrench}
                    onClick={() => handleClick(i.id)}
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    className="FontAwesomeIcon"
                    icon={faTrashCan}
                    onClick={() => handleRemoveButton(i.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination onClickChangePage={handleClickChangePage} />
    </>
  );
};

export default ManageProductList;
