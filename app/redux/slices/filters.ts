import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Product, User} from "../../types";


interface filtersState {
   sortBy: string | null,
   sale: boolean | null,
   price: string[],
   category: string[],
   gender: string[],
   sizes: string[],

}

const initialState : filtersState = {
   sortBy: null,
   sale: null,
   price: [],
   category: [],
   gender: [],
   sizes: [],
};


const filtersSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setSale: (state, action: PayloadAction<boolean>) => {
         state.sale = action.payload;
      },
      setPrice: (state, action: PayloadAction<string>) => {
         let index = state.price.indexOf(action.payload)
         if(index !== undefined)
            state.price.splice(index,1)
         else
            state.price = [...state.price, action.payload];
      },
      setCategory: (state, action: PayloadAction<string>) => {
         let index = state.category.indexOf(action.payload)
         if(index !== -1)
            state.category.splice(index,1)
         else
            state.category = [...state.category, action.payload];
         console.log(state.category)
      },
      setGender: (state, action: PayloadAction<string>) => {
         let index = state.gender.indexOf(action.payload)
         if(index !== undefined)
            state.gender.splice(index,1)
         else
            state.gender = [...state.gender, action.payload];
      },
      setSizes: (state, action: PayloadAction<string>) => {
         let index = state.sizes.indexOf(action.payload)
         if(index !== undefined)
            state.sizes.splice(index,1)
         else
            state.sizes = [...state.sizes, action.payload];
      },
      setSortBy: (state, action: PayloadAction<string | null>) => {
           state.sortBy = action.payload
      },
      setDefaultFilters: (state, action: PayloadAction<string>) => {
         state.sortBy = null
         state.sale = null
         state.price = []
         state.category = []
         state.gender = []
         state.sizes = []
      },
   },
})

export const filtersReducer = filtersSlice.reducer

export const {setSortBy,setSale, setPrice, setCategory, setGender, setSizes, setDefaultFilters} = filtersSlice.actions;
