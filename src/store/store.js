import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './redusers/menuReducer';
import globalReducer from './redusers/globalReducer';
import searchReducer from './redusers/searchReducer';
import imageListReducer from './redusers/imageList.reduser';

const reduser = combineReducers({
    menuState:menuReducer,
    globalState:globalReducer,
    searchState:searchReducer,
    imageListState:imageListReducer,
})


const store = createStore(reduser,applyMiddleware(thunk));
window.store = store;
export default store;