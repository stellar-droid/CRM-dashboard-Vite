// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPath: false
};



const Reusable = createSlice({
    name: 'reusable',
    initialState,
    reducers: {
        currentPathSet(state, action) {
            state.currentPath = action.payload
        }
    }
});

export default Reusable.reducer;

export const { currentPathSet} = Reusable.actions;