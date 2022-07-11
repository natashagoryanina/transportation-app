import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestsOperation } from '../../redux/requests/requestsOperations';
import RequestListItem from './requestListItem/RequestListItem';

const RequestList = () => {

    const requests = useSelector((state) => state.requests.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRequestsOperation());
    }, [dispatch]);

    return (
        <div>
            <h1>Request list</h1>
            <ul>
                {requests.map((request)=> (
                    <RequestListItem
                        request={request}
                        key={request.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default RequestList;