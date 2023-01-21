const initialStateProduks = {
    listProduks: [],
};

const produksReducer = (state = initialStateProduks, action) => {
    switch (action.type) {
        case 'SET_LIST_PRODUK':
            return {
                ...state,
                listProduks: action.payload,
            };
        default:
            return state;
    }
};

export default produksReducer;
