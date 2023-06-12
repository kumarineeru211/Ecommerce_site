
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col  justify-center items-center " >

      <div className="flex  align-center items-center
     gap-3 p-4 mt-10 ml-60 w-[50%] ">
     

        <div>
          <img src={item.image} className="h-full w-full" />
        </div>
        <div>
          <h1  className="text-gray-700 font-semibold text-lg text-left  mt-1">{item.title}</h1>
          <h1 className=" font-normal text-[px] text-left py-2">{item.description .substr(0,100) + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div className="bg-red-600 "
            onClick={removeFromCart}>
              <FcDeleteDatabase fontSize={20}/>
            </div>
          </div>

        </div>


      </div>
      <div className=" h-[60%] mt-10 border-b-2  w-[70%] ml-60 border-gray-500"></div>

    </div>
  );
};

export default CartItem;
