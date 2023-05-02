import { useStorage } from "../localstorage/LocalStorage";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useStorage("cartItems", []);

  const increase = (product) => {
    if (product !== null) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.success(`Increasing successful`);
    } else {
      toast.error(`Error: Can't increasing product`);
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const decrease = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      if (updatedCartItem.quantity === 0) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success(`Delete successful`);
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id ? updatedCartItem : item
          )
        );
        toast.success(`Decreasing successful`);
      }
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  function total() {
    let x = 0;
    cartItems.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.success(`Removing successful`);
  };
  function totalitems() {
    let a = 0;
    a = cartItems.length;
    return a;
  }
  return (
    <div className="h-[1000px]">
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
            {cartItems.map((i, index) => (
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
                    onClick={() => removeFromCart(i.id)}
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
      <div className="row">
        <div className="col text-center">
          <h4>
            <button onClick={clearCart}>Clear All Cart</button>
          </h4>
          <h4>TOTAL: {total()}</h4>
          <h4>Total Item: {totalitems()}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
