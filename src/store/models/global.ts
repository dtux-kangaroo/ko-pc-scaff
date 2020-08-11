import { API } from '@/services';
const initialState = {
  userData: {},
  navData:[]
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
  effects: (dispatch) => {
    return {
      /**
       * 获取项目基本信息
       * @param payload
       * @param rootState
       * @returns {Promise<void>}
       */
      async getUserData(payload, rootState) {
        console.log("getUserData", payload)
         const res = await API.getUserData(payload)
          if (res.success) {
            dispatch.global.setViewState({userData: res.data});
          } else {
            //返回失败
          }
      },
      /**
       * 获取导航栏数据列表
       * @param payload
       * @param rootState
       * @returns {Promise<void>}
       */
      async getNavData (payload, rootState) {
        // const {view: {pageNo, pageSize}} = rootState;
        const res = await API.getNavData(payload)
          if (res.success) {
            dispatch.global.setViewState({navData: res.data});
          } else {
            //返回失败
          }
        //return Promise.reject(false);
      },
    };
  },
}

