import { getAllRequests } from "../../services/api";
import { getRequests, setError, setLoader } from "./requestsActions"

export const getAllRequestsOperation = () => 
    async (dispatch) => {
        dispatch(setLoader());
        try {
            const response = await getAllRequests();
            dispatch(getRequests(response));
        } catch (error) {
            dispatch(setError(error.message))
        } finally {
            dispatch(setLoader());
        }
    };

    
