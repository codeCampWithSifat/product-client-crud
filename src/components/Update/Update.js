import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const Update = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://product-server-crud-production.up.railway.app/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  const handleUpdateInfo = (id) => {
    navigate(`/updateinfo/${id}`);
  };
  return (
    <div className="container mt-5">
      <h2>this is update </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <div className="col" key={product._id}>
              <div className="card">
                <img src={product.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price : {product.price}</p>
                  <button
                    onClick={() => handleUpdateInfo(product._id)}
                    className="btn btn-info"
                  >
                    Update Product Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Update;
