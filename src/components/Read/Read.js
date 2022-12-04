import React, { useEffect, useState } from "react";

const Read = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="container">
      <h2 className="mt-5">Number Of Product : {products.length}</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div className="col" key={product._id}>
            <div className="card">
              <img src={product.picture} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                 Price :  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
