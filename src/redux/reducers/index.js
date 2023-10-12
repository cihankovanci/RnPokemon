import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import contentReducer from './content/contentReducer';

const rootReducer = combineReducers({
  content: contentReducer
});

export default rootReducer;
