/**
 * This is the reducer funtion which takes current state and an action and gives us the newly updated state. This implementation is based on
 * React's context API.
 *
 * @property {string} position: handles global state for position
 * @property {boolean} snapper: handles global state for snapping the div back to position after drag
 * @property {boolean} link: checking if travalled back from page 2
 *
 */

// defining types for global state

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

// initialisation with the initial state

export const initialState = {
  position: 'center',
  snapper: false,
  link: false,
};

/**
 * Reducer function
 * @param {initial} state: type for the global state
 * @param {positionAction | snapAction | linkAction} action: type for action performed on previous state
 */

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
