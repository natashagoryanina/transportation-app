import { createAction } from "@reduxjs/toolkit";
import { GETREQUESTS, SETERROR, SETLOADER } from "./requestsTypes";

const getRequests = createAction(GETREQUESTS);
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);

export {
    getRequests,
    setLoader,
    setError,
};
