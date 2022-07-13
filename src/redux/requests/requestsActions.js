import { createAction } from "@reduxjs/toolkit";
import { 
    GETREQUESTS, 
    REMOVEREQUEST, 
    SETERROR, 
    SETLOADER,
    EDITREQUEST
} from "./requestsTypes";

const getRequests = createAction(GETREQUESTS);
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const removeRequest = createAction(REMOVEREQUEST);
const editRequest = createAction(EDITREQUEST);

export {
    getRequests,
    setLoader,
    setError,
    removeRequest,
    editRequest
};
