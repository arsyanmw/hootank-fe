const initialStateSudahBayar = {
    hutangs_ids: '',
};

const sudahBayarReducer = (state = initialStateSudahBayar, action) => {
    switch (action.type) {
        case 'SET_SUDAH_BAYAR':
            return {
                ...state,
                hutangs_ids: action.payload,
            };
        default:
            return state;
    }
};

export default sudahBayarReducer;
