// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani

import { combineReducers } from 'redux';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Reusable from './Reusable';
// import portfolioReducer from './CompanyInfo';

const reducers = combineReducers({
    Contact,
    Dashboard,
    Reusable


  // portfolioReducer
})

export { reducers }