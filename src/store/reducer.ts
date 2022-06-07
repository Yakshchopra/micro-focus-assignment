export const initialState = {
  position: 'center',
  snapper: false,
  link: false,
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

interface linkAction {
  type: 'SET_LINK';
  link: boolean;
}

function reducer(
  state: inital,
  action: positionAction | snapAction | linkAction
) {
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

    case 'SET_LINK':
      return {
        ...state,
        link: action.link,
      };

    default:
      return state;
  }
}
export default reducer;
