import { removeRequestById, getAllRequests } from "../../services/api";
import { 
    getRequests, 
    removeRequest, 
    setError, 
    setLoader 
} from "./requestsActions"

const getAllRequestsOperation = () => 
    async (dispatch) => {
        dispatch(setLoader());
        try {
            const response = await getAllRequests();
            dispatch(getRequests(response));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoader());
        }
    };

    
const removeRequestByIdOperation = (id) => 
    async (dispatch) => {
        dispatch(setLoader());
        try {
            await removeRequestById(id);
            dispatch(removeRequest(id));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoader());
        }
    };

export {
    getAllRequestsOperation,
    removeRequestByIdOperation
};