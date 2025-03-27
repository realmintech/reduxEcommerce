import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../actions/productActions";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link to="/add-product" className="bg-green-700 text-white p-2 rounded cursor-pointer">
        Add Product
      </Link>
      <ul className="mt-4">
        {products.map((product) => (
          <li key={product.id} className="border rounded p-2 my-2 flex justify-between">
            <span>
              {product.name} - ${product.price}
            </span>
            <div>
              <Link
                to={`/edit-product/${product.id}`}
                className="bg-green-700 text-white p-2 mx-2 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => dispatch(deleteProduct(product.id))}
                className="bg-red-700 text-white p-2 rounded cursor-pointer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
