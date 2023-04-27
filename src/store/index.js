//config a redux store
import { configureStore } from "@reduxjs/toolkit";
//redux saga middleware
import createSagaMiddleware from "@redux-saga/core";
//logger for logs
import logger from "redux-logger";
//reducers as a rootReducer object
import rootReducer from "./rootReducer";
// rootsaga as saga watchers object
import rootSaga from "./sagas";

const saga = createSagaMiddleware(); // saga middleware instance
//store configuration

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, //we are not using default thunk
    })
      .concat(saga) // for saga middleware
      .concat(logger), // for redux logger, debugging purposes
});

saga.run(rootSaga); // to observe saga
export default store;
