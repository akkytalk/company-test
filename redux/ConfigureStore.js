import { createStore, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import RResult from "./reducers/RResult";
const config = {
  key: "company-test",
  storage,
  debug: true,
};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    // I require this only in dev environment
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return bindMiddleware(...middleware);
};

export const configureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      result: RResult,
    }),
    bindMiddleware([thunk, logger])
    // applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistCombineReducers } from "redux-persist";
// import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";
// // import storage from "../storage";
// import Result from "./reducers/RResult";
// import logger from "redux-logger";

// const config = {
//   key: "company",
//   storage,
//   debug: true,
// };
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const configureStore = () => {
//   const store = createStore(
//     persistCombineReducers(config, {
//       result: Result,
//     }),
//     composeEnhancer(applyMiddleware(thunk, logger))
//   );
//   const persistor = persistStore(store);
//   return { persistor, store };
// };
