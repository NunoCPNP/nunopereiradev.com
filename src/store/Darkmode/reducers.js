import { TOGGLE_DARKMODE } from './actions';

const initialState = {
  darkmode: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
}
