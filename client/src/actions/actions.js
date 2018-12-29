import actionTypes from '../actionTypes/actionTypes';

export const getDataAsync = () => async dispatch => {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    dispatch(asyncGetDataSuccess(data));

  } catch (e) {
    console.error(e.message);
  }
}

export const asyncGetDataSuccess = (data) => ({
  type: actionTypes.GET_DATA_SUCCESS,
  payload: { data }
})

export const writeTableMatrix = (matrix) => ({
  type: actionTypes.WRITE_TABLE_MATRIX,
  payload: { matrix }
})