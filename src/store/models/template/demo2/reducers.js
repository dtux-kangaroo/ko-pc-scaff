// import * as types from './action-types';

export default {
  setViewState(state, payload) {
    for (let [key, value] of Object.entries(payload)) {
      state[key] = value;
    }
    return state;
  },


};
