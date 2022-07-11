import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {  
    getRequests, 
    removeRequest, 
    setError, 
    setLoader 
} from "./requestsActions";

const requestsItemReducer = createReducer([], {
    [getRequests]: (state, action) => action.payload,
    [removeRequest]: (state, action) => state.filter((request) => request.id !== action.payload),
});

const requestsLoaderReducer = createReducer(false, {
    [setLoader]: (state) => !state,
});

const requestsErrorReducer = createReducer('', {
    [setError]: (_, {payload}) => payload, 
});

export const requestsReducer = combineReducers({
    items: requestsItemReducer,
    loader: requestsLoaderReducer,
    error: requestsErrorReducer,
});