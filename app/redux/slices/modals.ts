import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Product, User} from "../../types";


interface toastPopup {
      visible:  boolean,
      message: string,
      duration?: number,
      position: ToastPositions,
      type: ToastType,

}

export enum ToastPositions  {
   AUTH = "left-1/2 top-5 -translate-x-1/2",
   RIGHT=  ""
}
export enum ToastType  {
   SUCCESS = "bg-green-500",
   ERROR =  "bg-red-500"
}

interface modalState {
   authPopup: boolean,
   toastPopup: toastPopup
}

const initialState : modalState = {
   authPopup: false,
   toastPopup: {
      visible:  false ,
      message: "",
      duration: 3000,
      position: ToastPositions.RIGHT,
      type: ToastType.SUCCESS,
   },
};


const modalsSlice = createSlice({
   name: 'modals',
   initialState,
   reducers: {
      setAuthPopup: (state, action: PayloadAction<boolean>) => {
         state.authPopup = action.payload;
      },
      setToastPopup: (state, action: PayloadAction<toastPopup>) => {
         state.toastPopup.visible = action.payload.visible;
         state.toastPopup.message = action.payload.message;
         state.toastPopup.position = action.payload.position;
         state.toastPopup.type = action.payload.type;
         if(action.payload.duration) state.toastPopup.duration = action.payload.duration;

      },
      closeToastPopup: (state) => {
         state.toastPopup.visible = false;
         // state.toastPopup.message = "";
         state.toastPopup.duration = 3000;
      },
   },
})

export const modalsReducer = modalsSlice.reducer

export const {setAuthPopup, setToastPopup, closeToastPopup} = modalsSlice.actions;
