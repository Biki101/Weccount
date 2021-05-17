import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  //setting logger only for development. hover NODE_ENV
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
