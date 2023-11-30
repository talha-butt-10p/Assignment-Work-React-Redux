"use client"
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addCart } from "../store/slices/cart";


const ProductList = () => {

    const[name, setName] = useState("");
    const[colours, setCoulours] = useState("");
    const[price, setPrice] = useState(0);
    const[image, setImage] = useState("");
    
    const products = useAppSelector((state)=>(state.productArray));
    const cart = useAppSelector((state)=>(state.cartArray));
    const dispatch = useAppDispatch();

    return(
        <div>
            
            <h1>Product List</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map((item,i)=>{
                        return(
                            <div className="w-350 border rounded-md bg-slate-300 p-4" key={i}>
                                
                                <h3>Name : {item.name}</h3>
                                <p>Colour: {item.colour}</p>
                                <p>Price: {item.price}</p>
                                <p>Qty: {item.qty} </p> 
                                <button onClick={() => dispatch(addCart({ name: item.name, colour: item.colour, price: item.price, qty: item.qty}))} className="bg-black/80 text-white p-3 mt-3 rounded-md">
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductList;

