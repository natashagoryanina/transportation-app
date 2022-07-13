import React, { useEffect, useState } from 'react';
import cityData from '../../cityData/ua.json';
import Form from '../form/Form';
import { ModalContainer } from './ModalStyled';

const parcelType = ['gadgets', 'drinks', 'clothes', 'medicines', 'other'];

const requestsState = {
    cityFrom: '',
    cityTo: '',
    parcelType: 'other',
    dispatchDate: '',
    description: '',
    creationDate: '',
};

const Modal = ({requestData}) => {
    const [editedRequestData, setEditedRequestData] = useState(requestsState);
    const [filteredFromCityData, setFilteredFromCityData] = useState([]);
    const [filteredToCityData, setFilteredToCityData] = useState([]);

    useEffect(() => (
        setEditedRequestData({
            cityFrom: requestData.cityFrom,
            cityTo: requestData.cityTo,
            parcelType: requestData.parcelType,
            dispatchDate: requestData.dispatchDate,
            description: requestData.description,
            creationDate: requestData.creationDate,
        })
    ), [requestData.cityFrom, requestData.cityTo, requestData.creationDate, requestData.description, requestData.dispatchDate, requestData.parcelType]);

    let todaysDate = new Date().toISOString().slice(0, 10);

    const onHandleChange = (e) => {
        const {name, value} = e.target;

        setEditedRequestData((prev) => ({...prev, [name]: value}));
    };

    const handleFilter = (e) => {
        const {name, value} = e.target;

        setEditedRequestData((prev) => ({...prev, [name]: value}));

        const newFilter = cityData.filter((item) => {
            return item.city.toLowerCase().includes(value.toLowerCase());
        });

        if (value === '' && name === 'cityFrom') {
            setFilteredFromCityData([]);
        } else if (name === 'cityFrom') {
            setFilteredFromCityData(newFilter);
        };

        if (value === '' && name === 'cityTo') {
            setFilteredToCityData([]);
        } else if (name === 'cityTo') {
            setFilteredToCityData(newFilter);
        };
    };

    const chooseFromCity = (e) => {
        editedRequestData((prev) => ({...prev, cityFrom: e.target.innerHTML}));
        setFilteredFromCityData([]);
    };

    const chooseToCity = (e) => {
        editedRequestData((prev) => ({...prev, cityTo: e.target.innerHTML}));
        setFilteredToCityData([]);
    };

    const onHandleSubmit = () => {
        console.log('onHandleSubmit')
    };

    return (
        <ModalContainer>
            <Form 
                filteredFromCityData={filteredFromCityData} 
                filteredToCityData={filteredToCityData}
                chooseFromCity={chooseFromCity}
                chooseToCity={chooseToCity}
                handleFilter={handleFilter}
                requestData={editedRequestData}
                onHandleChange={onHandleChange}
                onHandleSubmit={onHandleSubmit}
                todaysDate={todaysDate}
                parcelType={parcelType}
                formTitle="Request edit form"
                btnName="Edit a request"
            />
        </ModalContainer>
    );
};

export default Modal;