import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="  flex justify-center items-center ">
  {
    cart.length > 0  ? 
    (<div className="flex">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col  w-[100%]  px-10 justify-between mb-10 py-20">

        <div className=" flex flex-col align-center mt-20 h-50 gap-3 ">
          <div className="text-2xl  font-medium">Your Cart</div>
          <div className="text-4xl font-bold text-green-600">Summary</div>
          <p>
            <span className="text-medium">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="">Total Amount: <span className="font-bold">${totalAmount}</span></p>
          <button className="bg-green-600 w-[50%] rounded-lg py-1 text-lg">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1 className="text-center text-lg mt-10">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 w-80 rounded-lg py-1 text-lg mt-5">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
