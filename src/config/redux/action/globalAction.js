export const setIsLoading = payload => {
  return {
    type: 'SET_IS_LOADING',
    payload: payload,
  };
};

export const setModalVisible = payload => {
  return {
    type: 'SET_MODAL_VISIBLE',
    payload: payload,
  };
};

export const setIsRefreshing = payload => {
  return {
    type: 'SET_IS_REFRESHING',
    payload: payload,
  };
};
