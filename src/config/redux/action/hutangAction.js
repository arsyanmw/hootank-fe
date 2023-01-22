import Axios from 'axios';
import {
    setIsLoading,
    setIsRefreshing,
    setLoadingType,
    setModalVisible,
} from './globalAction';
import {API_URL} from '@env';

const apiUrl = API_URL;

export const setDataHutangs = () => dispatch => {
    Axios.get(`${apiUrl}/hutang/list-hutang`)
        .then(res => {
            //set data hutang
            dispatch({
                type: 'SET_DATA_HUTANG',
                payload: res.data.data,
            });

            dispatch(setIsLoading(false));
            dispatch(setLoadingType(''));
            dispatch(setIsRefreshing(false));
        })
        .catch(err => {
            console.log(err);
        });
};

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM_HUTANG', formType, formValue};
};

export const setEmptyForm = () => {
    return {type: 'SET_EMPTY_FORM_HUTANG'};
};

export const createHutang = form => dispatch => {
    dispatch(setLoadingType('send'));
    dispatch(setIsLoading(true));
    dispatch(setModalVisible(false));
    const {name, product, price} = form;

    Axios.post(
        `${apiUrl}/hutang/add-hutang`,
        {name: name, product: product.toLowerCase(), price: price},
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    )
        .then(() => {
            dispatch(setEmptyForm());
            dispatch(setDataHutangs());
        })
        .catch(err => {
            console.log(err);
        });
};
