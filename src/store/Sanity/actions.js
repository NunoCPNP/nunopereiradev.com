/* eslint func-names: 0 */
const API_URL = 'https://6s8z0yay.apicdn.sanity.io/';
const API_QUERY = `*[ _type == "projects" ]{
                    title,
                    description,
                    "imageUrl" : cover.asset->url
                    }`;

const TRSLT_QUERY = encodeURIComponent(API_QUERY);

console.log(TRSLT_QUERY);

export const GET_DATA = 'GET_DATA';

export function getData() {
  return async function (dispatch) {
    const res = await fetch(
      `${API_URL}v1/data/query/production?query=${TRSLT_QUERY}`,
    );
    const data = await res.json();
    return dispatch({
      type: 'GET_DATA',
      data: data.result,
    });
  };
}
