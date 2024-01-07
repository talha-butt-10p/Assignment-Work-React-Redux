"use client"

import React from "react";
import MenuGrid from 'Yes@<rj>/app/components/menuGrid';
import { useGetProductByIdQuery, useAddToCartMutation, useGetAllProductsQuery } from '../../store/slices/productApi';
import Image from 'next/image';
import Link from 'next/link'
import { useParams } from 'next/navigation'

const ProductDetailPage = () => {
    const {id} = useParams()

    const singleProduct = useGetProductByIdQuery(
        id,
        {
            skip: id===null     
        }
    );

    const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();

    const pId = singleProduct.data?.id;
    console.log("Single product Data: ", pId);
    
    
    const handleAddToCart = async (pId:any) => {
        try {
          await addToCart({ pId });
          // Optionally, you can handle success/failure or update UI
        } catch (error) {
          console.error('Error adding to cart:', error);
        }
      };

      
    //console.log("Api Data", singleProduct);

  return (
    <div>
        
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        
                        <li>    
                            <Link href={`/products/`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span className="ms-3">Back</span>
                            </Link>
                        </li>
                        <li>
                        <MenuGrid />
                        </li>
                        {/* <li>
                        <ul>
                            {singleProduct.data.map((product:any) => (
                            <li key={product.id}>
                                <div>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <button onClick={() => handleAddToCart(product.id)} disabled={isAddingToCart}>
                                    {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
                                </button>
                                </div>
                            </li>
                            ))}
                        </ul>
                        </li> */}
                    </ul>
                </div>
        </aside>

                <div className="p-7 sm:ml-64">
                    <div className="p-7 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                        <div className="grid grid-cols-1 gap-4">
                        <strong>Product Detail Page</strong>
                                    <div className="flex p-4 rounded bg-gray-50 dark:bg-gray-800">
                                    <Image 
                                        className="text-gray-500 transition duration-75 mr-5 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" 
                                        src={singleProduct.data?.img} 
                                        alt={singleProduct.data?.name} 
                                        width={100} 
                                        height={100} 
                                    />
                                            <ul>
                                                <li><strong>Name: </strong> {singleProduct.data?.name} </li>
                                                <li><strong>Colour: </strong> {singleProduct.data?.colour} </li>
                                                <li><strong>Price: </strong> {singleProduct.data?.price} </li>
                                                <li>
                                                <Link className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white p-2 mt-5 rounded-md" href={`/products/`}>
                                                    Add to Cart
                                                </Link>
                                                </li>
                                            </ul> 
                                    </div> 
                        </div>
                    </div>
                </div>
          
    </div>
  )
};

export default ProductDetailPage;