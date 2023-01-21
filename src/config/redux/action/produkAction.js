import Axios from 'axios';

export const setListProduks = () => dispatch => {
    const urlProd = 'https://utank-api.herokuapp.com/produk/list-produk';

    Axios.get(urlProd)
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
