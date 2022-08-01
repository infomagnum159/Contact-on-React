import axiosApi from "../../../axiosApi";

export const FETCH_MENU_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_TODO_FAILURE';

export const fetchMenuRequest = () => ({type: FETCH_MENU_REQUEST});
export const fetchMenuSuccess = data => ({type: FETCH_MENU_SUCCESS, payload: data});
export const fetchMenuFailure = () => ({type: FETCH_MENU_FAILURE});

export const fetchMenu = () => {
    return async (dispatch, getState) => {
        dispatch(fetchMenuRequest());
        try {
            const response = await axiosApi('/cafe/menu.json');
            console.log(response);
            const data = Object.keys(response.data).map(type => {
                console.log(response.data[type].price);
                return {name: type, price: response.data[type].price, id: type, url: response.data[type].url}
            });
            dispatch(fetchMenuSuccess(data));
        } catch (e) {
            dispatch(fetchMenuFailure());
        }
    };
};

export const fetchData = (data) => {
    return async (dispatch, getState) => {
        try {
            await axiosApi.post('/cafe/order.json', data);
        } catch (e) {
        }
    };
}
