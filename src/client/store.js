import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    logger 
  )
);

export default store;
