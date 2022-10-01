import { createSlice } from "@reduxjs/toolkit";

export const getProducts = createSlice({
    name: 'projects',
    initialState: {
        data: [
            {},
            {}
        ]
    }
})
export default getProducts.reducer;