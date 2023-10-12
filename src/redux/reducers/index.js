import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import contentReducer from './content/contentReducer';
import favoritesReducer from './favorites/favoritesReducer';

const rootReducer = combineReducers({
  content: contentReducer,
  favorites: persistReducer(
    {
      key: 'favoriteItems',
      storage: AsyncStorage
    },
    favoritesReducer
  )
});

export default rootReducer;
