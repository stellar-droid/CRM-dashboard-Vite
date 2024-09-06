// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user1: "Lokesh Wani",
    user2:"Aniket Sanap"
};



const Dashboard = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        user1set(state, action) {
            state.user1 = action.payload
        },
        user2set(state, action) {
            state.user2 = action.payload
        }
    }
});

export default Dashboard.reducer;

export const { user1set, user2set } = Dashboard.actions;