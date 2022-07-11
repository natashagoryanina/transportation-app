import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestsOperation } from '../../redux/requests/requestsOperations';
import RequestListItem from './requestListItem/RequestListItem';
import { RequestListContainer } from './RequestListStyled';

const RequestList = () => {
    const requests = useSelector((state) => state.requests.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRequestsOperation());
    }, [dispatch]);

    return (
        <RequestListContainer>
            <h1 className='requests-list-title'>Requests list</h1>
            <ul className='requests-list'>
                {requests.map((request)=> (
                    <RequestListItem
                        request={request}
                        key={request.id}
                    />
                ))}
            </ul>
        </RequestListContainer>
    );
};

export default RequestList;