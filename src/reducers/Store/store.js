import {createStore, combineReducers} from 'redux';
import * as reducer from '../Reducer/Index';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

var store = createStore(
    combineReducers(reducer),
);

export default store;