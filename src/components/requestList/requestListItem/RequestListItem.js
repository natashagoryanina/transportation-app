import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeRequestByIdOperation } from '../../../redux/requests/requestsOperations';
import Modal from '../../modal/Modal';
import { RequestListItemContainer } from './RequestListItemStyled';

const RequestListItem = ({request}) => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeRequestByIdOperation(request.id));
    };

    const toggleModal = () => {
        setModal(prev => !prev);
    };

    return (
        <RequestListItemContainer>
            <p className='request-list_paragraph'> 
                <span className='request-list_text'>The city from which the parcel is sent:</span> 
                {request.cityFrom}
            </p>
            <p className='request-list_paragraph'>
                <span className='request-list_text'>The city to which the parcel is sent:</span>
                {request.cityTo}
            </p>
            <p className='request-list_paragraph'> 
                <span className='request-list_text'>Type of parcel:</span>
                {request.parcelType}
            </p>
            <p className='request-list_paragraph'> 
                <span className='request-list_text'>Date of dispatch:</span>
                {request.dispatchDate}
            </p>
            <p className='request-list_paragraph'>
                <span className='request-list_text'>Parcel description:</span>
                {request.description}
            </p>
            <p className='request-list_paragraph'>
                <span className='request-list_text'>The request was created:</span> 
                {request.creationDate}
            </p>
            <button 
                className='btn-delete'
                onClick={remove}
            >
                Delete
            </button>
            <button 
                className='btn-edit'
                onClick={toggleModal}
            >
                Edit
            </button>
            {modal && <Modal requestData={request}/>}
        </RequestListItemContainer>
    );
};

export default RequestListItem;