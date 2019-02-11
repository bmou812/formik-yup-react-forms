import deepFreeze from "deep-freeze-strict";

import {
  SET_STEPB_CONTENT,
  RESET_STEPB_CONTENT
} from "../constants/actionTypes";

const initialState = {
  country: "",
  address: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STEPB_CONTENT:
      return deepFreeze({ ...action.payload });
    case RESET_STEPB_CONTENT:
      return deepFreeze({ ...initialState });
    default:
      return state;
  }
}
