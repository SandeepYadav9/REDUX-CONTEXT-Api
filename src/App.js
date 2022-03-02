import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>
    </React.Fragment>
  );
};

export default App;

