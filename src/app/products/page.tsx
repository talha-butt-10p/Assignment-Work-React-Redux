// @ts-nocheck
"use client"
import React from "react";
import { useGetAllProductsQuery } from "../store/slices/productApi";
import MenuGrid from "../components/menuGrid";
import Image from 'next/image';
import Link from 'next/link';

const ProductHome = () => {

    const productList = useGetAllProductsQuery();
   
  return (
    <div>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
                
                <li>
                    <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span className="ms-3">Home Page</span>
                    </a>
                </li>
                <li>
                <MenuGrid />
                </li> 
            </ul>
        </div>
        </aside>

        <div className="p-7 sm:ml-64">
            <h1 className="font-extrabold mb-2">Product Listing</h1>
            <h2 className="font-bold mb-2">Work done from the provided DB Links</h2>
            <ul>
                <li>
                    <Link className="bg-emerald-200 mb-2 p-3 text-sm inline-block hover:bg-emerald-300" href="https://my-json-server.typicode.com/benirvingplt/products/products">
                        https://my-json-server.typicode.com/benirvingplt/products/products
                    </Link>
                </li>
                <li>
                    <Link className="bg-emerald-200 p-3 text-sm inline-block hover:bg-emerald-300" href="https://my-json-server.typicode.com/benirvingplt/products/menu">
                        https://my-json-server.typicode.com/benirvingplt/products/menu
                        <span className="font-semibold">(Side Menu `NEW IN`)</span>
                    </Link>
                </li>
            </ul>
            <div className="p-7 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="grid grid-cols-2 gap-4">
                {
                    productList?.data?.map((item,i)=>{ 
                        return(

                            <div key={item.id} className="flex p-4 rounded bg-gray-50 dark:bg-gray-800">
                                
                                    <Image 
                                        className="text-gray-500 transition duration-75 mr-5 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" 
                                        src={item.img} 
                                        alt={item.name} 
                                        width={100} 
                                        height={100} 
                                    />
                                    <ul>
                                        <li><strong>Name: </strong> {item.name} </li>
                                        <li><strong>Colour: </strong> {item.colour} </li>
                                        <li><strong>Price: </strong> {item.price} </li>
                                        <li>
                                            <Link className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white p-2 mt-5 rounded-md" href={`/products/${item.id}`}>
                                                View Details
                                            </Link>
                                        </li>
                                    </ul> 
                                      
                            </div> 
                        )
                    })
                }
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductHome;