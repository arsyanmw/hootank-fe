const initialStateGlobal = {
    isLoading: true,
    modalVisible: false,
    isRefreshing: false,
    loadingType: '',
};

const globalReducer = (state = initialStateGlobal, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        case 'SET_MODAL_VISIBLE':
            return {
                ...state,
                modalVisible: action.payload,
            };
        case 'SET_IS_REFRESHING':
            return {
                ...state,
                isRefreshing: action.payload,
            };
        case 'SET_TYPE_LOADING':
            return {
                ...state,
                loadingType: action.payload,
            };
        default:
            return state;
    }
};

export default globalReducer;
