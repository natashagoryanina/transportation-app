import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRequestByIdOperation } from '../../../redux/requests/requestsOperations';

const RequestListItem = ({request}) => {
    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeRequestByIdOperation(request.id));
    };

    return (
        <li>
            <p>The city from which the parcel is sent: {request.cityFrom}</p>
            <p>The city to which the parcel is sent: {request.cityTo}</p>
            <p>Type of parcel: {request.parcelType}</p>
            <p>Date of dispatch: {request.dispatchDate}</p>
            <p>Parcel description: {request.description}</p>
            <p>The request was created: {request.creationDate}</p>
            <button onClick={remove}>Delete</button>
        </li>
    );
};

export default RequestListItem;