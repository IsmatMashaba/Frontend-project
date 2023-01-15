import {configureStore} from "@reduxjs/toolkit";

import countryReducer from './slice/countrySlice'
import userReducer from "./slice/userSlice";
import {favouriteReducer} from "./slice/favouriteSlice";
import countryDetailsReducer from "./slice/countryDetailsSlice";

const store = configureStore({
    reducer: {
      countryItem: countryReducer,
        userItem: userReducer,
        favouriteItem:favouriteReducer,
        countryDetails:countryDetailsReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


