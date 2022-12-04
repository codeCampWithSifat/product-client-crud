import React, { useEffect } from "react";
import useProducts from "../../hooks/useProducts";

const Delete = () => {
  const [products, setProducts] = useProducts();
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  const handleDeleteProduct = (id) => {
    console.log(id);
    if (window.confirm("Are You Sure You Want To Delete This One")) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount) {
            const restProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(restProducts);
            alert("Deleted Your Data Successfully");
          }
        });
    }
  };
  return (
    <div className="container mt-5">
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
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-info"
                  >
                    Deleted Product
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

export default Delete;
