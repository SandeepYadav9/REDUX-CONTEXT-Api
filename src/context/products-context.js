import React, { useState } from "react";

const ProductContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export const ProductContextProvider = (props) => {
  const [productsLists, setProductsLists] = useState([
    {
      id: "p1",
      title: "Black Scarf",
      description: "A pretty black .",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Green T-Shirt",
      description: "A pretty green t-shirt white pant.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Blue frack",
      description: "A pair of lightly Blue trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggleContext = (productId) => {
    setProductsLists((currentProduct) => {
      const prodIndex = currentProduct.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProduct[prodIndex].isFavorite;
      const updatedProducts = [...currentProduct];
      updatedProducts[prodIndex] = {
        ...currentProduct[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  const contextValue = {
    products: productsLists,
    toggleFav: toggleContext,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
