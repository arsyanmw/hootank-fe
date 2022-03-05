const initialStateHutangs = {
  dataHutangs: [],
};

const hutangsReducer = (state = initialStateHutangs, action) => {
  switch (action.type) {
    case 'SET_DATA_HUTANG':
      return {
        ...state,
        dataHutangs: action.payload,
      };
    default:
      return state;
  }
};

export default hutangsReducer;
