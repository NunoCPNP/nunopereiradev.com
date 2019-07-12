/* eslint func-names: 0 */
const API_URL = process.env.REACT_APP_API_URL;
const API_QUERY = `*[ _type == "projects" ]{
                    "id" : _id,
                    title,
                    description,
                    githubUrl,
                    projectUrl,
                    "imageUrl" : cover.asset->url
                    }`;

const TRSLT_QUERY = encodeURIComponent(API_QUERY);

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
