export const initialState = {
  position: 'center',
  snapper: false,
};

export interface inital {
  position: string;
  snapper: boolean;
}

interface positionAction {
  type: 'SET_POSITION';
  position: string;
}

interface snapAction {
  type: 'SET_SNAP';
  snapper: boolean;
}

function reducer(state: inital, action: positionAction | snapAction) {
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
