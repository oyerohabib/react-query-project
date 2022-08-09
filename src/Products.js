import React, { useState } from "react";
import "./App.css";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "black shoe", quantity: 1 },
    { id: 2, title: "green shoe", quantity: 1 },
    { id: 3, title: "red shoe", quantity: 1 },
  ]);

  // const [selectedProduct, setSelectedProduct] = useState({})
  const [selectedID, setSelectedID] = useState(null);
  const selectedProduct = products.find((product) => product.id === selectedID);

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else return product;
      });
    });
  };

  const handleChoose = (id) => {
    // const product = products.find((product) => product.id === id);
    // setSelectedProduct(product)
    setSelectedID(id);
  };

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)}>choose</button>
          </span>
          <div className="quantity">
            <button>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increment(product.id)}>+</button>
          </div>
        </div>
      ))}
      <h1>selected product</h1>
      <span>{selectedProduct?.title}</span> &nbsp;
      <span>{selectedProduct?.quantity}</span>
    </div>
  );
};

export default Products;
