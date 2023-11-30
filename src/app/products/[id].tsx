import { useRouter } from 'next/router';
import { useGetProductByIdQuery, useAddToCartMutation } from "../store/slices/productApi";
import { useState } from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  const [quantity, setQuantity] = useState(1);

  const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: id, quantity });
      } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching product</p>;
  }

  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.colour}</p>
        <p>Price: {product.price}</p>
        <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        />
        <button onClick={handleAddToCart} disabled={isAddingToCart}>
        {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
        </button>
        
    </div>
  );
};

export default ProductDetailPage;