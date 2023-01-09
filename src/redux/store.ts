import React from "react";

import {configureStore} from "@reduxjs/toolkit";
import countryReducer from './slice/countrySlice'
import userReducer from "./slice/userSlice";

const store = configureStore({
    reducer: {
      countryItem: countryReducer,
        userItem: userReducer,
       /* search: searchReducer,*/
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


