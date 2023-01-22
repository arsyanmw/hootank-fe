import Axios from 'axios';
import {API_URL} from '@env';

const apiUrl = API_URL;

export const setListProduks = () => dispatch => {
    Axios.get(`${apiUrl}/produk/list-produk`)
        .then(res => {
            const listProduk = () => {
                const arrProduk = [];

                res.data.data.map(item =>
                    arrProduk.push({
                        key: item.key,
                        nama_produk: item.nama_produk,
                    }),
                );

                return arrProduk;
            };

            //set data produk
            dispatch({
                type: 'SET_LIST_PRODUK',
                payload: listProduk(),
            });
        })
        .catch(err => {
            console.log(err);
        });
};
