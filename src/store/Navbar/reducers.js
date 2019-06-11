import { TOGGLE_DROPDOWN } from './actions';

const initialState = {
  dropdownVisibility: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdownVisibility: !state.dropdownVisibility,
      };
    default:
      return state;
  }
}
