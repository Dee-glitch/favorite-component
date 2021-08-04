import { createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(
      'https://www.aceandtate.show/torii/catalog/v1/products/frames?country-code=nl&language-code=en',
    )
      .then((response) => response.json())
      .then((data) => {
        let availableProducts = data.data.filter((product) => {
          return product.currentVariant.availability.isAvailableOnline;
        });
        setProducts(availableProducts);
      });
  }, []);

  useEffect(() => {
    const favoriteProducts = JSON.parse(
      localStorage.getItem('favorite-products'),
    );
    if (favoriteProducts) {
      setFavorites(favoriteProducts);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorite-products', JSON.stringify(items));
  };

  const addFavoriteProduct = (product) => {
    const filteredFavs = favorites.filter((fav) => fav.id !== product.id);
    const newFavoriteList = [...filteredFavs, product];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteProduct = (product) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== product.id,
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const isFavorite = (product) => {
    const isFaved = favorites.some((fav) => fav.id === product.id);
    return isFaved;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        favorites,
        addFavoriteProduct,
        removeFavoriteProduct,
        isFavorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
