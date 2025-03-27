import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === Number(id));
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: Number(id), name, price: Number(price) }));
    navigate("/");
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 w-full"
          value={price}
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button type="submit" className="bg-green-700 p-2 rounded text-white cursor-pointer" >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
