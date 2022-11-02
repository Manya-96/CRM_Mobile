import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sharedState, sharedSaga } from 'crm-ca-common';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // persisted reducers
};

const sagaMiddleware = createSagaMiddleware();

/* create a middleware with default middleware and saga middleware */
const middleware = [sagaMiddleware];

/* configuring store with reducer, middleware, devTools enable and enhancers */
const store = configureStore({
  reducer: persistReducer(persistConfig, sharedState.reducers),
  middleware,
});

const persistor = persistStore(store);

/* run the saga middleware with root saga */
sagaMiddleware.run(sharedSaga.default);

export { persistor, store };
