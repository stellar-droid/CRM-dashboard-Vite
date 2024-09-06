// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contact1: "9898653222",
    tollfree:"1800 209 3006"
};



const Contact = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        contact1Set(state, action) {
            state.contact1 = action.payload
        },
        tollfreeSet(state, action) {
            state.tollfree = action.payload
        }
    }
});

export default Contact.reducer;

export const { contact1Set, tollfreeSet } = Contact.actions;