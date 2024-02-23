
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import AllProductsPage from './pages/AllProductspages';
import CreatePage from './components/CreatePage';
import ProductsList from './components/ProductsList';
import { clearNotification, clearError } from './store/productsSlice';
import * as S from './styles';

const App = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.products.notification);
  const error = useSelector((state) => state.products.error);

  const handleClearNotification = () => {
    dispatch(clearNotification());
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <Router>
      <S.AppContainer>
        <Navbar />
        {notification && (
          <S.NotificationContainer>
            <p>{notification}</p>
            <button onClick={handleClearNotification}>Dismiss</button>
          </S.NotificationContainer>
        )}
        {error && (
          <S.ErrorContainer>
            <p>{error}</p>
            <button onClick={handleClearError}>Dismiss</button>
          </S.ErrorContainer>
        )}
        <Switch>
          <Route path="/" exact component={AllProductsPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </S.AppContainer>
    </Router>
  );
};

export default App;
