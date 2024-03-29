import axios from "axios";

const BASE_URL = 'https://transportation-app-1c735-default-rtdb.firebaseio.com';

export const createNewRequest = async (request) => {
    try {
        const response = await axios.post(
            BASE_URL + `/requests.json`,
            request
        );
        return response.data.name;
    } catch (error) {
        throw new Error(error);
    }
};

export const getAllRequests = async () => {
    try {
        const response = await axios.get(
            BASE_URL + `/requests.json`
        );
        if (response.data) {
            const keys = Object.keys(response.data);
            const requests = keys.map((key) => ({
                id: key,
                ...response.data[key]
            }));
            return requests;
        };
    } catch (error) {
        throw new Error(error);
    }
};

export const removeRequestById = async (id) => {
    try {
        await axios.delete(BASE_URL + `/requests/${id}.json`);
    } catch (error) {
        throw new Error(error);
    }
};

export const editRequestById = async (id, editedRequest) => {
    try {
        await axios.patch(
            BASE_URL + `/requests/${id}.json`,
            editedRequest
        )
    } catch (error) {
        throw new Error(error);
    }
};