import actionTypes from '../actionTypes/actionTypes';

export const initState = {
  slideName: ''
};

export function rootReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_NEWSLINE_ITEM_NAME:
      return {
        ...state,
        slideName: action.payload.name
      };
    default:
      return state;
  }
}