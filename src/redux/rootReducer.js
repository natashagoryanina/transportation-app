import { combineReducers } from "redux";
import { requestsReducer } from "./requests/requestsReducer";

export const rootReducer = combineReducers({
    requests: requestsReducer,
});

