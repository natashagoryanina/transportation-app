import React, { useEffect, useState } from 'react';
import cityData from '../../cityData/ua.json';
import { createNewRequest } from '../../services/api';
import Form from '../form/Form';
import { RequestFormContainer } from './RequestFormStyled';

const parcelType = ['gadgets', 'drinks', 'clothes', 'medicines', 'other'];

const requestState = {
    cityFrom: '',
    cityTo: '',
    parcelType: 'other',
    dispatchDate: '',
    description: '',
    creationDate: '',
};

const RequestForm = () => {
    const [requestData, setRequestData] = useState(requestState);
    const [filteredFromCityData, setFilteredFromCityData] = useState([]);
    const [filteredToCityData, setFilteredToCityData] = useState([]);

    let todaysDate = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        setRequestData((prev) => ({
            ...prev, 
            dispatchDate: todaysDate,
            creationDate: todaysDate,
        }))
    }, [todaysDate]);

    const onHandleChange = (e) => {
        const {name, value} = e.target;

        setRequestData((prev) => ({...prev, [name]: value}));
    };

    const handleFilter = (e) => {
        const {name, value} = e.target;

        setRequestData((prev) => ({...prev, [name]: value}));

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
        setRequestData((prev) => ({...prev, cityFrom: e.target.innerHTML}));
        setFilteredFromCityData([]);
    };

    const chooseToCity = (e) => {
        setRequestData((prev) => ({...prev, cityTo: e.target.innerHTML}));
        setFilteredToCityData([]);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        createNewRequest({...requestData});
        setRequestData({
            ...requestState, 
            dispatchDate: todaysDate,
            creationDate: todaysDate
        });
    };

    return (
        <RequestFormContainer>
            <Form 
                filteredFromCityData={filteredFromCityData}
                filteredToCityData={filteredToCityData}
                chooseFromCity={chooseFromCity}
                chooseToCity={chooseToCity}
                handleFilter={handleFilter}
                requestData={requestData}
                onHandleChange={onHandleChange}
                onHandleSubmit={onHandleSubmit}
                parcelType={parcelType}
                todaysDate={todaysDate}
                formTitle='Request creation form'
                btnName=' Create a request'
            />
        </RequestFormContainer>
    );
};

export default RequestForm;