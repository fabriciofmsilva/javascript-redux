import { actionTypes } from '../constants/actionTypes.js';

export const changeStatus = text => 
  dispatch =>
    setTimeout(() => 
      dispatch({
        type: actionTypes.CHANGE_STATUS,
        payload: text
      })
    , 1000);
