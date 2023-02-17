import React from "react";
import { useState } from "react";
import { ProductList } from "../listproduct/ProductList";
const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(ProductList);

  function totalitems() {
    let a = 0;
    a = cart.length;
    return a;
  }
  function addtocart(item) {
    let cart2 = [...cart];
    cart2.push({ ...item });
    console.log(item);
    console.log(cart2);
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true;
      }
    });
    setCart(cart2);
  }
  function removetocart(item) {
    let cart2 = cart.filter((i) => i.id != item.id);
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false;
      }
    });
    setCart(cart2);
  }
  function increase(item) {
    let x = cart.map((i) => {
      if (item.id == i.id) {
        i.quantity += 1;
      }
      return i;
    });
    setCart(x);
  }
  function decrease(item) {
    let x = cart.map((i) => {
      if (item.id == i.id && i.quantity > 1) {
        i.quantity -= 1;
      }
      return i;
    });
    setCart(x);
  }
  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        {products.map((item) => (
          <div className="col-3" key={item.id}>
            <div className="card">
              <img src={item.url} />
              <div className="card-body">
                <h6 className="card-title">
                  {item.name} - $ {item.price}
                </h6>
                {item.cart == false && (
                  <button
                    className="btn btn-primary"
                    onClick={() => addtocart(item)}
                  >
                    Add to cart
                  </button>
                )}
                {item.cart == true && (
                  <button
                    disabled="true"
                    className="btn btn-success"
                    onClick={() => addtocart(item)}
                  >
                    Added
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-3">
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i, index) => (
              <tr key={i.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <img src={i.url} style={{ width: "3rem", height: "3rem" }} />
                </th>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>
                  <button
                    onClick={() => decrease(i)}
                    className="btn btn-primary btn-sm"
                  >
                    -
                  </button>
                  {i.quantity}
                  <button
                    onClick={() => increase(i)}
                    className="btn btn-primary btn-sm"
                    size="sm"
                  >
                    +
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => removetocart(i)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col text-center">
          <h4>TOTAL: {total()}</h4>
          <h4>Total Item: {totalitems()}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
