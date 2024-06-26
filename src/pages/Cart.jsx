import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate total amount whenever cart changes
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
              <CartItem item={item} />
            </div>
          ))}
          <div className="p-4 bg-gray-800 text-white rounded-lg">
            <div className="text-xl font-bold mb-4">Your Cart Summary</div>
            <p className="text-lg">
              <span>Total Items: {cart.length}</span>
            </p>
            <p className="text-lg">
              <span>Total Amount: ${totalAmount.toFixed(2)}</span>
            </p>
            <Link to="/checkout">
              <button className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Checkout Now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-2xl font-bold mb-4">Cart is empty</h1>
          <Link to="/">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
