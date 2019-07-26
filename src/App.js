import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Helmet } from 'react-helmet';

import GlobalStyle from './styles/Global';
import HomePage from './pages/HomePage';

import rootReducer from './store/rootReducer';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);


function App() {
  return (
    <>
      <Provider store={store}>
        <Helmet>
          <title>Nuno Pereira - Front End Developer</title>
          <meta name="description" content="Nuno Pereira Front End Developer Portfolio" />
        </Helmet>
        <HomePage />
      </Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
