import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { ProductProvider } from './context/GlobalContext';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </ProductProvider>
  );
};

export default App;
