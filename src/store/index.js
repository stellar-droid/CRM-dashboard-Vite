// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani


import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

const store = configureStore({
  reducer: reducers,
});

export  { store } 