import CartList from "./components/cartList" 
import ProductList from "./components/productList"

export default function Home() {
  return (
    <main className="p-5">
     <h1 className="text-center font-extrabold text-xl">Assignment Project</h1>

     <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
                
                <li className="bg-emerald-700">
                    <a href="/products/" className="flex items-center p-2 text-white rounded-lg group">
                    <svg className="w-5 h-5 text-white transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span className="ms-3">DB Products</span>
                    </a>
                </li> 
                <li>
                  <strong>Cart Items List</strong>
                  <CartList />
                </li>
            </ul>
        </div>
        </aside>

        <div className="p-7 sm:ml-64">
            <div className="p-7 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <ProductList /> 
            </div>
        </div>
 
     
    </main>
  )
}
