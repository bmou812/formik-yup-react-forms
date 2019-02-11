import deepFreeze from "deep-freeze-strict";

import {
  SET_STEPA_CONTENT,
  RESET_STEPA_CONTENT
} from "../constants/actionTypes";

const initialState = {
  title: "",
  firstname: "",
  lastname: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STEPA_CONTENT:
      return deepFreeze({ ...action.payload });
    case RESET_STEPA_CONTENT:
      return deepFreeze({ ...initialState });
    default:
      return state;
  }
}
