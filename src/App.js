import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import history from './services/history';
import { store, persistor } from './store';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <BackToTop />
          <Footer />
          <GlobalStyle />
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
