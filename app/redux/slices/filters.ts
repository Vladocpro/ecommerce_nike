import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Product, User} from "../../types";


export interface IfiltersState {
   sortBy: string | null,
   search: string| null,
   sale: boolean,
   price: string[],
   category: string[],
   gender: string[],
   sizes: string[],
}

const initialState : IfiltersState = {
   sortBy: null,
   search: null,
   sale: false,
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
         if(index !== -1)
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
      },
      setGender: (state, action: PayloadAction<string>) => {
         let index = state.gender.indexOf(action.payload)
         if(index !== -1)
            state.gender.splice(index,1)
         else
            state.gender = [...state.gender, action.payload];
      },
      setSizes: (state, action: PayloadAction<string>) => {
         let index = state.sizes.indexOf(action.payload)
         if(index !== -1)
            state.sizes.splice(index,1)
         else
            state.sizes = [...state.sizes, action.payload];
      },
      setSortBy: (state, action: PayloadAction<string | null>) => {
           state.sortBy = action.payload
      },
      setSearch: (state, action: PayloadAction<string | null>) => {
         state.search = action.payload
      },
      setFilters: (state, action: PayloadAction<any>) => {
         if(state.sortBy)
            state.sortBy = action.payload.sortBy
         if(state.search)
            state.sortBy = action.payload.search
         if(state.sale)
            state.sale = action.payload.sale
         if(state.price)
            state.price = action.payload.price
         if(state.category)
            state.category = action.payload.category
         if(state.gender)
            state.gender = action.payload.gender
         if(state.sizes)
            state.sizes = action.payload.sizes

      },
      clearFilters: (state) => {
         state.sortBy = null
         state.search = null
         state.sale = false
         state.price = []
         state.category = []
         state.gender = []
         state.sizes = []
      },
   },
})

export const filtersReducer = filtersSlice.reducer

export const {setFilters,setSortBy, setSearch, setSale, setPrice, setCategory, setGender, setSizes, clearFilters} = filtersSlice.actions;
