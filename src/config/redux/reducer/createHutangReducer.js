const initialState = {
  form: {
    name: '',
    product: '',
    price: '',
  },
};

const createHutangReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default createHutangReducer;
