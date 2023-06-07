import { useStorage } from "../localstorage/LocalStorage";
import { toast } from "react-toastify";
import "./shoppingcart.scss";

const ShoppingCart = (props) => {
  const [cartItems, setCartItems] = useStorage("cartItems", []);

  const handleOnClickClearAll = (data) => {
    props.onClickClearAll(0);
    // setData(0);
  };
  const handleOnClickRemove = (data) => {
    // setData(data - 1);
    props.onClickRemove(cartItems.length - 1);
    // console.log(data);
  };

  const increase = (product) => {
    if (product !== null) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.success(`Increasing successful`, {
        autoClose: 200,
      });
    } else {
      toast.error(`Error: Can't increasing product`, {
        autoClose: 200, // Set the duration to 1 second (1000 milliseconds)
      });
    }
  };
  const clearCart = () => {
    setCartItems([]);
    handleOnClickClearAll();
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
        toast.success(`Delete successful`, {
          autoClose: 200,
        });
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id ? updatedCartItem : item
          )
        );
        toast.success(`Decreasing successful`, {
          autoClose: 200, // Set the duration to 1 second (1000 milliseconds)
        });
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
    toast.success(`Removing successful`, {
      autoClose: 200, // Set the duration to 1 second (1000 milliseconds)
    });
    handleOnClickRemove();
  };
  function totalitems() {
    let a = 0;
    a = cartItems.length;
    return a;
  }
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">
        <h4 className="flex h-8 w-[900px] justify-center bg-[#E9E4E4] items-center [&>span]:text-center">
          <span className="basis-1/2">Product</span>
          <span className="basis-1/4">Quantity</span>
          <span className="basis-1/4">Total Price</span>
        </h4>
        <div className="w-[300px]">ORDER SUMMARY</div>
      </div>
      <div className="">
        <div className="text-center">
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
