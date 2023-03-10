import { useState, useEffect } from "react";
import { ProductList } from "../productlist/ProductList";
import { useStorage } from "../localstorage/LocalStorage";

const Cart = () => {
  const [products] = useState(ProductList);
  const [cartItems, setCartItems] = useStorage("cartItems", []);

  useEffect(() => {
    if (!Array.isArray(cartItems)) {
      setCartItems([]);
    }
  }, [cartItems, setCartItems]);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <div>
      <ul>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}{" "}
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </li>
          ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}{" "}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>
      <p>
        Total: ${getTotalPrice()} && Total Item {cartItems.length}
      </p>
      <button onClick={clearCart}>Clear cart</button>
    </div>
  );
};

export default Cart;
