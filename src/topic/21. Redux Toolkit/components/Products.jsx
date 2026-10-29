import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

function Products() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-300">
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;