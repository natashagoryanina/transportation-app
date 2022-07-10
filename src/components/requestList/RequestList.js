import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestsOperation } from '../../redux/requests/requestsOperations';

const RequestList = () => {

    const requests = useSelector((state) => state.requests.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRequestsOperation());
    }, [dispatch]);

    console.log(requests);

    return (
        <div>
            <h1>Request list</h1>
            <ul>

            </ul>
        </div>
    );
};

export default RequestList;