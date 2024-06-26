import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex items-center p-2 border-b border-gray-300">
      <div className="w-16 h-16">
        <img src={item.image} className="w-full h-full object-cover rounded-md" alt={item.title} />
      </div>
      <div className="ml-4 flex-1">
        <h1 className="text-sm font-semibold">{item.title}</h1>
        <p className="text-gray-600 text-xs">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div onClick={removeFromCart} className="cursor-pointer text-red-500">
            <MdDelete size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
