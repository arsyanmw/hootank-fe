const initialStateHutangs = {
    dataHutangs: [],
    form: {
        name: '',
        product: '',
        price: '',
    },
};

const hutangsReducer = (state = initialStateHutangs, action) => {
    switch (action.type) {
        case 'SET_DATA_HUTANG':
            return {
                ...state,
                dataHutangs: action.payload,
            };
        case 'SET_FORM_HUTANG':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.formType]: action.formValue,
                },
            };
        case 'SET_EMPTY_FORM_HUTANG':
            return {
                ...state,
                form: {
                    name: '',
                    product: '',
                    price: '',
                },
            };
        default:
            return state;
    }
};

export default hutangsReducer;
