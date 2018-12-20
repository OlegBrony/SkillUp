import actionTypes from '../actionTypes/actionTypes';

const initState = {
  defaultStoreValue: ''
};

export function newsLine(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_NEWSLINE_ITEM_NAME:
      return {
        ...state,
        defaultStoreValue: action.payload.defaultStoreValue
      };
    default:
      return state;
  }
}