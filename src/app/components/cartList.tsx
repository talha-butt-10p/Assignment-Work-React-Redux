"use client"

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteCart } from "../store/slices/cart";


const CartList = () => {
    const cart = useAppSelector((state)=>(state.cartArray));
    const dispatch = useAppDispatch()
    return <div>
        {
            cart.map((val, i)=>{
                return(
                    <div key={i} className="grid grid-cols-12 gap-2">
                        <div>Name: {val.name}</div>
                        <div>Colour: {val.colour}</div>
                        <div>Price: {val.price}</div>
                        <div>Qty: {val.qty}</div>
                        <div>
                            <button onClick={()=>dispatch(deleteCart(val.name))} className="bg-black/80 text-white p-3 mt-3 rounded-md">Remove
                                </button>
                        </div>
                    </div>
                )
            })
        }
    </div>;
};

export default CartList;