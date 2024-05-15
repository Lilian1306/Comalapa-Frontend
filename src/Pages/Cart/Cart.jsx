import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const {cartItems, menu_list,removeFromCart, getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate();

  return (
    <div className=" mt-24 max-sm:mt-8">
      <div className=" mx-2 my-0 text-black max-sm:m-0">
        <div className="grid grid-cols-6 items-center text-center text-gray-500 text-sm max-sm:text-xs max-sm:text-center">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {menu_list.map((item,index) => {
           if(cartItems[item._id]>0) 
           {
             return (
              <div>  
                 <div className="">
                    <img src={item.image} alt=""/>
                       <p>{item.name}</p>
                       <p>${item.price}</p>
                       <p>{cartItems[item._id]}</p>
                       <p>${item.price*cartItems[item._id]}</p>
                       <p onClick={() =>removeFromCart(item._id)} className="">X</p>
                 </div>
                <hr/> 
              </div>
            );
          }
        })}
      </div>
      <div className="mt-16 flex justify-between gap-32 mb-10 max-sm:flex-col-reverse max-sm:mt-8 max-sm:gap-10">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Total</h2>
          <div>
            <div className="">
               <p>Subtotal</p>
               <p>Q{getTotalCartAmount()}</p>
             </div>
             <hr/>
            <div className=""> 
               <p>Delivery Fee</p>
               <p>Q{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className=""> 
               <p>Total</p>
               <b>Q{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Procee to checkout</button>
        </div>
        
        <div className="flex-1 max-sm:justify-start">
          <div>
            <p className="text-neutral-600">Si tienes un código promocional ingresalo aquí</p>
            <div className="mt-2.5 flex justify-between items-center bg-gray-300 rounded " >
              <input type="text" placeholder="Codigo Promocional" className=" bg-transparent border-none outline-none pl-2.5"/>
              <button className="w-24 py-2 bg-black border-none text-white rounded">Completar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
