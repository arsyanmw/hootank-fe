import Axios from 'axios';
import {setIsLoading, setIsRefreshing, setModalVisible} from './globalAction';

export const setDataHutangs = () => dispatch => {
  const urlDev = 'http://10.0.2.2:3030/hutang/list-hutang';
  const urlProd = 'https://utank-api.herokuapp.com/hutang/list-hutang';

  Axios.get(urlProd)
    .then(res => {
      //set data hutang
      dispatch({
        type: 'SET_DATA_HUTANG',
        payload: res.data.data,
      });

      dispatch(setIsLoading(false));
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
  dispatch(setIsLoading(true));
  dispatch(setModalVisible(false));
  const {name, product, price} = form;

  Axios.post(
    'https://utank-api.herokuapp.com/hutang/add-hutang',
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
