import React, { useState, useEffect } from "react";
import axios from "axios";

const FakeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://63f43c77864fb1d600247a6d.mockapi.io/Products/products/`
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <div>
              <li key={item.id}>
                {item.id},{item.price},{item.name},{item.description}
              </li>
              <img src={item.image} alt="" />
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default FakeData;
