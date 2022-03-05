import Axios from 'axios';
import {setIsLoading} from './globalAction';
import {setDataHutangs} from './hutangAction';

export const setSudahBayar = id => dispatch => {
  dispatch(setIsLoading(true));

  Axios.put('https://utank-api.herokuapp.com/sudah-bayar/' + id)
    .then(res => {
      dispatch({
        type: 'SET_SUDAH_BAYAR',
        payload: res.data,
      });

      dispatch(setDataHutangs());
    })
    .catch(err => {
      console.log(err);
    });
};
