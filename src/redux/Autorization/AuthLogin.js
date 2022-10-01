import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAccessToken=createAsyncThunk('/login',async(data)=>{
    console.log(data,"consol")
    let response=await axios.post('https://api.adstarks.com/public/api/login',data,{headers:{'Accept':'application/json'},withCredentials:false})
    return response.data
})

export const getAuthorzied=createSlice({
    name:'Autho',
    initialState:{
        accessToken:`Bearer ${localStorage.getItem('userToken')}`,
        loading:false,
        error:false,
        validUser:false
    },
    extraReducers:{
        [getAccessToken.pending]:(state)=>{
            state.loading=true
        },
        [getAccessToken.fulfilled]:(state,{payload})=>{
            state.loading=false
            state.validUser=true
            localStorage.setItem('userToken',payload.token)
        },
        [getAccessToken.rejected]:(state)=>{
            state.error=true
        },
    },
    reducers:{
        setInvalidUser:(state)=>{
            state.validUser=false
        }
    }
})
export const {setInvalidUser}=getAuthorzied.actions;
export default getAuthorzied.reducer;