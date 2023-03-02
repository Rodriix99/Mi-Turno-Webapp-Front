import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSteps = createAction("SET_STEPS");

const initialState = {
  step: "initial",
};

const reducer = createReducer(initialState, {
  [setSteps.type]: (state, action) => action.payload,
});

export default reducer;
