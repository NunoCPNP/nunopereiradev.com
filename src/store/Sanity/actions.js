/* eslint func-names: 0 */
const API_URL = 'https://6s8z0yay.api.sanity.io/';
const API_QUERY = '[0]';

export const GET_DATA = 'GET_DATA';

export function getData() {
  return async function (dispatch) {
    const res = await fetch(
      `${API_URL}v1/data/query/production?query=*${API_QUERY}`,
    );
    const data = await res.json();
    return dispatch({
      type: 'GET_DATA',
      data: data.result,
    });
  };
}
