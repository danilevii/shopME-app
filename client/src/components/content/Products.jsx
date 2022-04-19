import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartPlus, FaList } from "react-icons/fa";
import "../styles/Products/Products.css";
import { getDownloadURL } from "firebase/storage";
import { storage, app } from "../../firebase";
import { Link } from "react-router-dom";
import { incrementCart } from '../../redux/reducers/cartSlice'
import { incrementWishlist } from "../../redux/reducers/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.value)
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const getProducts = await axios.get(
        "http://localhost:5000/api/v1/product"
      );

      const productsList = getProducts.data.products;

      setProducts(productsList);
    };
    fetchData();
  }, []);

  return (
    <div className="title">
      <h1 className="products__title">Products</h1>
      <div className="products">
        {products.map((item) => (
          <Link className="products__link" to={`/product/${item._id}`}>
            <div className="products__items" key={item._id}>
              <div className="products__item-info">
                <div className="products__item-name">{item.name}</div>
                <div className="products__item-price">${item.price}</div>
              </div>
              <img
                className="products__item-img"
                src={item.image}
                alt="item-img"
              />
              <div className="icon-container">
                <div className="cart-icon__container">
                  <FaCartPlus className="cart-icon" onClick={() => dispatch(incrementCart())} />
                </div>
                <div className="list-icon__container">
                  <FaList onClick={() => dispatch(incrementWishlist())} className="list-icon" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
