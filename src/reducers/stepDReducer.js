import deepFreeze from "deep-freeze-strict";

import {
  SET_STEPD_CONTENT,
  RESET_STEPD_CONTENT
} from "../constants/actionTypes";

const initialState = {
  password: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STEPD_CONTENT:
      return deepFreeze({ ...action.payload });
    case RESET_STEPD_CONTENT:
      return deepFreeze({ ...initialState });
    default:
      return state;
  }
}
