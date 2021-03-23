import { createStore} from 'redux';
import rootReducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancers = composeEnhancers(
);
const store = createStore(
  rootReducer,
  enhancers,
);
export default store;
