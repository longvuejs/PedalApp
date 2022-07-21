import {legacy_createStore} from 'redux';
import reducers from './reducers';

export const store = legacy_createStore(reducers);


// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistStore, persistReducer} from 'redux-persist';
// import {legacy_createStore} from 'redux';
// import reducers from './reducers';
// import storage from 'redux-persist/lib/storage';
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);
// export const store = legacy_createStore(persistedReducer);

// export const persistor = persistStore(store);