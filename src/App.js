import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

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
        <HomePage />
      </Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
