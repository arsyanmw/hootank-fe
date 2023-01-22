import Axios from 'axios';
import {setIsLoading} from './globalAction';
import {setDataHutangs} from './hutangAction';
import {API_URL} from '@env';

const apiUrl = API_URL;

export const setSudahBayar = id => dispatch => {
    dispatch(setIsLoading(true));

    Axios.put(`${apiUrl}/sudah-bayar/${id}`)
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

export const setSudahBayarMultiple = ids => dispatch => {
    dispatch(setIsLoading(true));
    let setBayar = [];

    if (ids.length) {
        ids.forEach(id => {
            setBayar.push(
                Axios.put(`${apiUrl}/sudah-bayar/${id}`)
                    .then(res => {
                        dispatch({
                            type: 'SET_SUDAH_BAYAR',
                            payload: res.data,
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    }),
            );
        });
    }

    Promise.all(setBayar).then(() => {
        dispatch(setDataHutangs());
    });
};
