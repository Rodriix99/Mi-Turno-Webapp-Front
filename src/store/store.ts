import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import bookingDataReducer from "./bookingData";
import stepsReducer from "./steps";

const store = configureStore({
  reducer: {
    user: userReducer,
    data: bookingDataReducer,
    steps: stepsReducer,
  },
});

export default store;
