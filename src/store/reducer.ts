export const initialState = {
  position: 'bottom',
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_POSITION':
      return {
        position: action.position,
      };
    default:
      return state;
  }
}
export default reducer;
