//import React from 'react ';
//import {api} from "@/services/api";
//import routerTree from '@/common/router-tree';

const initialState = {
    pageIndex: 0,
    pageNo: 1,
    pageSize: 20,
};

export default {
    state: initialState,
    reducers: {
        setPageIndex(state, payload) {
            state.pageIndex = payload;
            return state;
        },
        setViewState(state, payload) {
            for (let [key, value] of Object.entries(payload)) {
                state[key] = value;
            }
            return state;
        },
    },
    effects: (dispatch,...args) => {
        return {
            async setPage(payload, rootState) {
              console.log("store2", payload, rootState, args)
              dispatch.view.setPageIndex(payload)
            },
        };
    },
};
