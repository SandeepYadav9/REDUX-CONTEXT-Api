import React, { useContext } from "react";
import { useSelector } from "react-redux";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import ProductContext from "../context/products-context";
import "./Products.css";

const Favorites = (props) => {
  const productCtx = useContext(ProductContext);
  const favProducts = productCtx.products.filter((p) => p.isFavorite);
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
