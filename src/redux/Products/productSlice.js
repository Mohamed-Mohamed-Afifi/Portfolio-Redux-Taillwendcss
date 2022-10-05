import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts=createAsyncThunk('/product',async()=>{
    let res=await axios.get('https://api.npoint.io/405050121af31d3e10f4')
    console.log(res)
    return res.data
})
export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        loading:false,
        error:false
    },
    extraReducers:{
        [getProducts.pending]:(state)=>{
            state.loading=true
        },
        [getProducts.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=[...payload]
        },
        [getProducts.rejected]:(state)=>{
            state.error=true
        }
    }
})
export default productSlice.reducer;