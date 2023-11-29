import CartList from "./components/cartList"
import ProductList from "./components/productList"

export default function Home() {
  return (
    <main className="p-5">
     <h1 className="text-center">Project Assignment</h1>
     <ProductList />

     <h2 className="mt-5">Cart List</h2>
     <CartList />
    </main>
  )
}
