import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import counterSlice from './counter/counterSlice'
import userSlice from './user/userSlice'
import cartSlice from './cart/cartSlice'
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
//persistReducer 리듀서가 실행될 때 persist를 같이 사용하게 묶어서 사용
import storage from 'reduxjs-toolkit-persist/lib/storage'; //localStorage
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'; //sessionStorage

const persistConfig = {
  key: 'root', //localStorage에 저장될 때의 key 값. 
  storage,
}

const rootReducer = combineReducers({
  cart :cartSlice,
  user: userSlice,

})

const persistedReducer = persistReducer(persistConfig, rootReducer);
//rootReducer와 persist를 묶어서 사용
//redux-persist를 사용해서 로컬스토리지 state 값을 저장하고 페이지가 새로고침이 되면
//initalState 값이 로컬스토리지에 저장된 state값으로 대체되기 때문에 초기화 되지 않는다. 

const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: false,
  })

})
const persistor = persistStore(store);

export {store, persistor};