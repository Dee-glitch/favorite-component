import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let availableProducts = [];
    fetch(
      'https://www.aceandtate.show/torii/catalog/v1/products/frames?country-code=nl&language-code=en',
    )
      .then((response) => response.json())
      .then((data) => {
        data.data.forEach((product) => {
          if (product.currentVariant.availability.isAvailableOnline) {
            availableProducts.push(product);
          }
        });
      })
      .then((availableData) => setProducts(availableProducts));
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

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductList
            products={products}
            handleFavoritesClick={addFavoriteProduct}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            products={favorites}
            handleFavoritesClick={removeFavoriteProduct}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
