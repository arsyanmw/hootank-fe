import Axios from 'axios';
import {setIsLoading} from './globalAction';

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
    })
    .catch(err => {
      console.log(err);
    });
};
