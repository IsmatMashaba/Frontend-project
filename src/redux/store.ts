import React from "react";

import {configureStore} from "@reduxjs/toolkit";
import countryReducer from './slice/country'

const store = configureStore({
    reducer: {
      country: countryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
// type: AppDispatch- redux toolkit
export type AppDispatch = typeof store.dispatch;
export default store;
