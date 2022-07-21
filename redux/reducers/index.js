import { combineReducers } from 'redux';
import product from './productReducer'
const reducers = combineReducers({
    dataProduct: product
});
export default (state, action) => reducers(state, action);