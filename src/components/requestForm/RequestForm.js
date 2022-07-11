import React, { useEffect, useState } from 'react';
import cityData from '../../cityData/ua.json';
import { createNewRequest } from '../../services/api';
import { RequestFormContainer } from './RequestFormStyled';

const parcelType = ['gadgets', 'drinks', 'clothes', 'medicines', 'other'];

const requestsState = {
    cityFrom: "",
    cityTo: '',
    parcelType: 'other',
    dispatchDate: '',
    description: '',
    creationDate: '',
};

const RequestForm = () => {
    const [requestData, setRequestData] = useState(requestsState);
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
        createNewRequest({...requestData})
    };

    return (
        <RequestFormContainer>
            <h3 className='request-form-title'>Request creation form</h3>
            <form className='request-form' onSubmit={onHandleSubmit}>
                <label className='request-form_label'>
                    From:
                    <div className='request-form_filter-container'>
                        <input
                            className='request-form_input'
                            type="text"
                            name="cityFrom"
                            value={requestData.cityFrom}
                            onChange={handleFilter}
                            autoFocus
                        />
                        {filteredFromCityData.length !== 0 && (
                            <div className='request-form_filter'>
                                {filteredFromCityData.slice(0, 20).map((data) => {
                                    return <div 
                                                className='request-form_filter-item'
                                                onClick={chooseFromCity} 
                                            >
                                                {data.city}, 
                                                {data.admin_name}
                                            </div>
                                })}
                            </div>
                            )
                        }
                    </div>
                </label>
                <label className='request-form_label'>
                    To:
                    <div className='request-form_filter-container'>
                        <input
                            className='request-form_input'
                            type='text'
                            name='cityTo'
                            value={requestData.cityTo}
                            onChange={handleFilter}
                        />
                        {filteredToCityData.length !== 0 && (
                            <div className='request-form_filter'>
                                {filteredToCityData.slice(0, 20).map((data) => {
                                    return <div 
                                                className='request-form_filter-item'
                                                onClick={chooseToCity} 
                                            >
                                                {data.city}, 
                                                {data.admin_name}
                                            </div>
                                })}
                            </div>
                            )
                        }
                    </div>
                </label>
                <label className='request-form_label'>
                    Type of parcel: 
                    <select
                        className='request-form_select'
                        name='parcelType'
                        value={requestData.parcelType}
                        onChange={onHandleChange}
                    >
                        {parcelType.map((type)=>(
                            <option
                                value={type}
                                key={type}
                            >
                                {type}
                            </option>
                        ))}
                    </select>
                </label>
                <label className='request-form_label'>
                    Date of dispatch: 
                    <input
                        className='request-form_date'
                        type='date'
                        name='dispatchDate'
                        value={requestData.dispatchDate}
                        min={todaysDate}
                        onChange={onHandleChange}
                    />
                </label>
                <label className='request-form_label'>
                    Description:
                    <textarea
                        className='request-form_textarea'
                        name='description'
                        value={requestData.description}
                        cols="35" 
                        rows="3"
                        onChange={onHandleChange}
                    />
                </label>
                <button
                    className='btn'
                    type='submit'
                >
                    Create a request
                </button>
            </form>
        </RequestFormContainer>
    );
};

export default RequestForm;