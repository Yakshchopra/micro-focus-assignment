export const initialState = {
  position: 'center',
  snapper: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_POSITION':
      return {
        ...state,
        position: action.position,
      };

    case 'SET_SNAP':
      return {
        ...state,
        snapper: action.snapper,
      };
    default:
      return state;
  }
}
export default reducer;
