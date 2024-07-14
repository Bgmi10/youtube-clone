import { createSlice } from "@reduxjs/toolkit";

const commentslice = createSlice({
    name : 'comments' ,
    initialState : [],
    reducers : {
        comments : (state , action) =>{
            const a = [...state , action.payload]
            return a 
        },

        removecommets : (state) => {
              state.splice( )
        }
    }
})


export default commentslice.reducer

export const {comments , removecommets} = commentslice.actions