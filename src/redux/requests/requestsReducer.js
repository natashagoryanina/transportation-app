import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getRequests, setError, setLoader } from "./requestsActions";

const requestsItemReducer = createReducer([], {
    [getRequests]: (state, action) => [action.payload],
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