import { SET_CITY } from './../actions'

export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
        /**
         * Spread Operator
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */
            return { ...state, city: action.value }
        default:
            return state;
    }
}