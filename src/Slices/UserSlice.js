import {  createSlice } from '@reduxjs/toolkit';
//Initial state for Userslice
const initialState = {
    user: null
}

export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: function(state, action){
            state.user = action.payload
        },
        removeUser: function(state){
            state.user = null
        }
    }
})
//setUser and removeUser are action functions
export const {setUser, removeUser} = UserSlice.actions;

export default UserSlice.reducer