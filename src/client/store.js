import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
