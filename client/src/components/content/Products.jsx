import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Products/Products.css";
import { getDownloadURL } from "firebase/storage";
import { storage, app } from "../../firebase";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getProducts = await axios.get(
        "http://localhost:5000/api/v1/product"
      );

      const productsList = getProducts.data.products;

      setProducts(productsList);

      const storage = app.storage();

      storage
        .ref(`${productsList.image}`)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      {products.map((item) => (
        <div className="products__items" key={item.id}>
          <div className="products__item-name">{item.name}</div>
          <img src={item.img} alt="item-img" />
        </div>
      ))}
    </div>
  );
};

export default Products;
