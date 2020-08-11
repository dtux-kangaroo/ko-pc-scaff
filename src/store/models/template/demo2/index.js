/**
 * @author：姚嘉东
 * @description：
 * @date：2020/4/16
 */
import reducers from './reducers';
import effects from './effects';

const initialState = {};

export default {
    name: 'xxx',
    state: initialState,
    reducers: {
        ...reducers,
        resetState() {
            return initialState;
        },
    },
    effects,
};
