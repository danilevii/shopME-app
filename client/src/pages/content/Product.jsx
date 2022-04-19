import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { incrementCart } from "../../redux/reducers/cartSlice";
import { incrementWishlist } from "../../redux/reducers/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import "../styles/Product/Product.css";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        console.log(id);
        const res = await axios.get(
          "http://localhost:5000/api/v1/product/" + id
        );
        setProduct(res.data.product[0]);
        console.log(res.data);
      } catch (error) {
          console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="product__container">
      <div className="product__wrapper">
        <h1 className="product__name">{product.name}</h1>
        <div className="product__description-container">
          <h2 className="product__description">{product.description}</h2>
        </div>

        <div className="product__image-container">
          <img className="product__image" src={product.image} alt="product" />
        </div>

        <div className="product__info-container"></div>
      </div>
    </div>
  );
};

export default Product;
