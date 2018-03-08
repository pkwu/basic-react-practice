export const setReduxState = data => {
  return {
    type: 'SET_REDUX_STATE_SELECTOR',
    payload: data
  }
};