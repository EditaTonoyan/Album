import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import menuReducer from './redusers/menuReducer';
import globalReducer from './redusers/globalReducer';


const reduser = combineReducers({
    menuState: menuReducer,
    globalState: globalReducer,
})


const store = createStore(reduser, applyMiddleware(thunk));
window.store = store;
export default store;