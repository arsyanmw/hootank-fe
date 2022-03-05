import Axios from 'axios';
import {setDataHutangs} from './hutangAction';
import {setIsLoading, setModalVisible} from './globalAction';

export const setForm = (formType, formValue) => {
  return {type: 'SET_FORM_HUTANG', formType, formValue};
};

export const setEmptyForm = () => {
  return {type: 'SET_EMPTY_FORM_HUTANG'};
};

export const createHutang = form => dispatch => {
  dispatch(setIsLoading(true));
  const {name, product, price} = form;

  Axios.post(
    'https://utank-api.herokuapp.com/hutang/add-hutang',
    {name: name, product: product, price: price},
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then(() => {
      dispatch(setModalVisible(false));
      dispatch(setEmptyForm());
      dispatch(setDataHutangs());
    })
    .catch(err => {
      console.log(err);
    });
};
