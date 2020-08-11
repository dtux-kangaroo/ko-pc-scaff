import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import updatedPlugin from '@rematch/updated';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import {history} from 'utils/index'
import { API,URL} from "@/services";
import thunk from 'redux-thunk'
import view  from './models/view';
import global  from './models/global';

// 不可变数据结构
const immer = immerPlugin();
// 在一定的时间段内防止频繁的获取请求
const updated = updatedPlugin();

const middlewares = [thunk.withExtraArgument({API,URL}), routerMiddleware(history)];

const store = init({
    models: { view, global },
    plugins: [immer, updated],
    redux: {
      middlewares,
      reducers: {},
    },
});

export default store;


// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { routerReducer, routerMiddleware } from 'react-router-redux'
//
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import {history} from 'utils/index'
// import { API,URL} from "@/services";
// import appReducer from '@/pages/global';
//
// const middlewares:any = [thunk.withExtraArgument({API,URL}), routerMiddleware(history)];
//
// const store = createStore(
//   combineReducers({ routing: routerReducer, ...appReducer }),
//   process.env.NODE_ENV=='production' ? applyMiddleware(...middlewares): composeWithDevTools(applyMiddleware(...middlewares))
// )
// export default  store;
