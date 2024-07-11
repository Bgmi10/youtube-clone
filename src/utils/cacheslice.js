import { createSlice } from "@reduxjs/toolkit";

const cacheslice = createSlice({
    name : "cacheresults",
    initialState : {},
    reducers : {
        cacheresults : (state , action) =>{
            const a = Object.assign(state , action.payload)
            return a 
        }
    }
})

export default cacheslice.reducer

export const {cacheresults} = cacheslice.actions