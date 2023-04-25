import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth";
import {globalReducer} from "./slices/global";


export const store = configureStore({
   reducer: {
      auth: authReducer,
      global: globalReducer
   },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
