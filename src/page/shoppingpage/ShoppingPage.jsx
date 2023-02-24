import React, { useState, useEffect } from "react";

const ShoppingPage = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, item]);
    setItem("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingPage;
