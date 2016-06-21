import {
  applyMiddleware,
  createStore,
  compose }        from 'redux';
import thunk       from 'redux-thunk';
import devTools    from 'remote-redux-devtools';
import rootReducer from '../reducers';

export default configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools()
  )

  return createStore(rootReducer, initialState, enhancer);
}
