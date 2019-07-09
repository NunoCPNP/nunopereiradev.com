import { GET_DATA } from './actions';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}
