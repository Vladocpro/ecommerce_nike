import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Product, User} from "../../types";


interface globalState {
   products: Product[] | null,
   authPopup: boolean,
}

const initialState : globalState = {
   products: null,
   authPopup: false,
};


const globalSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      setAuthPopup: (state, action: PayloadAction<boolean>) => {
         state.authPopup = action.payload;
      },
   },
})

export const globalReducer = globalSlice.reducer

export const {setAuthPopup} = globalSlice.actions;
