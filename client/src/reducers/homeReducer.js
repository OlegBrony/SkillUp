import actionTypes from '../actionTypes/actionTypes';

const initState = {
  matrix: []
};

export function homeReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      };

    case actionTypes.WRITE_TABLE_MATRIX:
      return {
        ...state,
        matrix: action.payload.matrix
      }
    default:
      return state;
  }
}