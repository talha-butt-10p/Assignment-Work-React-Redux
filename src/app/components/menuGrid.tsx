// @ts-nocheck
import axios from 'axios';
import { useEffect, useState } from "react";
import Image from 'next/image';

const MenuGrid = () => {
    
    const [menuItems, setMenuItems] = useState([]);

    const [myRecords, setMyRecords] = useState(null);
    const [subMenuRecords, setsubMenuRecords] = useState(null);

    const togglemyRecords = (index: any) => {
        if (myRecords === index) {
            setMyRecords(null);
        } else {
            setMyRecords(index);
            setsubMenuRecords(null);
        }
    };

    const togglesubMenuRecords = (index: any) => {
        if (subMenuRecords === index) {
            setsubMenuRecords(null);
        } else {
            setsubMenuRecords(index);
        }
    };

    useEffect(() => {
        const fetchMenu = async () => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/benirvingplt/products/menu');
            setMenuItems(response.data);
        } catch (error) {
            console.error('Error fetching menu:', error);
        }
        };

        fetchMenu();
    }, []);
    
    return (
        <div>       
            <ul className="space-y-1">
            {menuItems.map((item:any, index) => (
                <li key={index}>
                    
                    <button
                        className="flex w-full text-left py-2 px-4 bg-emerald-200 hover:bg-emerald-300 focus:outline-none"
                        onClick={() => togglemyRecords(index)}
                    >
                    <Image className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" 
                    src={item.img} alt={item.name} width={500} height={300} />
                    <span className="flex-1 ms-3 whitespace-nowrap">{item.name}</span>
                    
                </button>
                
                {myRecords === index && (
                    <ul className="pl-4 space-y-1">
                    {item.children?.map((subItem:any, subIndex:any) => (
                        <li key={subIndex}>
                        
                        <button
                            className="w-full text-left py-2 px-4 bg-emerald-100 hover:bg-emerald-200 focus:outline-none"
                            onClick={() => togglesubMenuRecords(subIndex)}
                        >
                            {subItem.name}
                        </button>
                        
                        {subMenuRecords === subIndex && (
                            <ul className="pl-4 space-y-1">
                            {subItem.categories?.map((subSubItem, subSubIndex) => (
                                <li key={subSubIndex} className="bg-gray-50">
                                <button className="w-full text-left py-2 px-4 focus:outline-none hover:bg-emerald-100">
                                    {subSubItem}
                                </button>
                                </li>
                            ))}
                            </ul>
                        )}
                        </li>
                    ))}
                    </ul>
                )}
                </li>
            ))}
            </ul> 
        </div>
        );
    };
  

export default MenuGrid;