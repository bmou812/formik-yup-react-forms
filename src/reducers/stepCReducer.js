import deepFreeze from "deep-freeze-strict";

import {
  SET_STEPC_CONTENT,
  RESET_STEPC_CONTENT
} from "../constants/actionTypes";

const initialState = {
  email: "",
  subscribe: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STEPC_CONTENT:
      return deepFreeze({ ...action.payload });
    case RESET_STEPC_CONTENT:
      return deepFreeze({ ...initialState });
    default:
      return state;
  }
}
