import { createSlice } from "@reduxjs/toolkit";

const commentslice = createSlice({
    name : 'comments' ,
    initialState : [],
    reducers : {
        comments : (state , action) =>{
            const a = [...state , action.payload]
            return a 
        }
    }
})


export default commentslice.reducer

export const {comments} = commentslice.actions