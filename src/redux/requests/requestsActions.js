import { createAction } from "@reduxjs/toolkit";
import { 
    GETREQUESTS, 
    REMOVEREQUEST, 
    SETERROR, 
    SETLOADER 
} from "./requestsTypes";

const getRequests = createAction(GETREQUESTS);
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const removeRequest = createAction(REMOVEREQUEST);

export {
    getRequests,
    setLoader,
    setError,
    removeRequest
};
