import { createAction, createReducer } from "@reduxjs/toolkit";

export const setBookingData = createAction<boolean, string>("SET_BOOKING_DATA");

const initialState = {
  branch: null,
  schedule: null,
  fullName: null,
  phone: null,
  email: null,
  available: null,
};

interface IdataBooking {
  field: string;
  data: any;
}

const reducer = createReducer(initialState, {
  [setBookingData.type]: (state, action) => {
    return {
      ...initialState,
      [action.payload.field]: action.payload.data,
    };
  },
});

export default reducer;
