import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'mt2021',
      storage,
      whitelist: ['cart'],
    },
    reducers
  );

  return persistedReducer;
};
