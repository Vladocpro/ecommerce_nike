import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {User} from "../../types";


interface authState {
   data: User | null
}

const initialState : authState = {
   data: null
};


const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.data = null;
      },
      setAuthData: (state, action: PayloadAction<User>) => {
         state.data = action.payload;
      },
   },
})

export const authReducer = authSlice.reducer

export const {logout, setAuthData} = authSlice.actions;
