import {DECREASE, FULLERASE, INCREASE} from "../../Actions/CartAction/cartActions";

const initialState = {};

const cartReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case INCREASE:
            if (!state[payload.key]) {
                return {...state, [payload.key]: {qty: 1, price: payload.price}}
            } else {
                return {
                    ...state,
                    [payload.key]: {
                        ...state[payload.key],
                        qty: state[payload.key].qty + 1,
                        price: state[payload.key].price + payload.price,
                    }
                };
            }
        case DECREASE:
            if (state[payload.key].qty < 2) {
                const newState = {...state};
                delete newState[payload.key];
                return newState;
            } else {
                return {
                    ...state,
                    [payload.key]: {
                        ...state[payload.key],
                        qty: state[payload.key].qty - 1,
                        price: state[payload.key].price - payload.price,
                    }
                };
            }
        case FULLERASE:
            return {};
        default:
            return state;
    }

};

export default cartReducer;