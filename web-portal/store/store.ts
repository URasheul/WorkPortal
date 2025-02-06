import { configureStore } from "@reduxjs/toolkit";
import searchDataSlice from "./slices/SearchDataSlice/searchDataSlice";

export const store = configureStore({

    reducer: {
        searchData: searchDataSlice      
    }
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch