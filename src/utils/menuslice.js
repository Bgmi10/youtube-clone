import { createSlice } from "@reduxjs/toolkit";

const menuslice = createSlice({
    name:"menu",
    initialState : {
        ismenuopen : false,

    },
    reducers:{
        toggelmenu : (state, action) =>{
            state.ismenuopen = !state.ismenuopen
        }
    }

})

export default menuslice.reducer

export const {toggelmenu}  = menuslice.actions