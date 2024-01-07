"use client"

import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteCart, productDec, productInc } from "../store/slices/cart";

const CartList = () => {
    const cart = useAppSelector((state)=>(state.cartArray));
    const dispatch = useAppDispatch()
    return <div>
        {
            cart.map((val, i)=>{
                return(
                    <div key={i} className="grid grid-cols-1 gap-1 relative bg-slate-100 p-3 mt-3">
                        <div>Name: {val.name}</div>
                        <div>Colour: {val.colour}</div>
                        <div>Price: {val.price}</div>
                        
                        <div>Qty: 
                            <button onClick={() => dispatch(productDec())} className="bg-black/80 text-white p-3 mt-3 rounded-md">
                                        -
                            </button>

                            {val.qty}
                            <button onClick={() => dispatch(productInc())} className="bg-black/80 text-white p-3 mt-3 rounded-md">
                                        +
                            </button>
                        </div>
                        <div>
                            <button 
                                onClick={()=>dispatch(deleteCart(val.name))} 
                                className="bg-black/80 text-white p-2 mt-2 mr-2 w-10 rounded-full absolute top-0 right-0">
                                X
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>;
};

export default CartList;