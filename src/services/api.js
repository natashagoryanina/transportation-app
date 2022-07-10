import axios from "axios";

const BASE_URL = 'https://transportation-app-1c735-default-rtdb.firebaseio.com';

export const createNewRequest = async (request) => {
    try {
        const response = await axios.post(
            BASE_URL + `/requests.json`,
            request
        );
        console.log(response);
        return response.data.name;
    } catch (error) {
        console.log(error)
    }
};