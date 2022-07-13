import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {  
    getRequests, 
    removeRequest, 
    setError, 
    setLoader,
    editRequest
} from "./requestsActions";

const requestsItemReducer = createReducer([], {
    [getRequests]: (state, action) => action.payload,
    [removeRequest]: (state, action) => state.filter((request) => request.id !== action.payload),
    [editRequest]: (state, action) => 
            state.map((request) => 
            request.id === action.payload.id ? {...action.payload} : request
        )
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