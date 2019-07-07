import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
import rootReducer from './allreducers';

export default function configureStore(onComplete){
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
