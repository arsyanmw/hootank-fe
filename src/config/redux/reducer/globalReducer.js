const initialStateGlobal = {
  isLoading: true,
  modalVisible: false,
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
    default:
      return state;
  }
};

export default globalReducer;
