import React, { useEffect, useState } from 'react';
import cityData from '../../cityData/ua.json';
import { createNewRequest } from '../../services/api';

const parcelType = ['gadgets', 'drinks', 'clothes', 'medicines', 'other'];

const requestsState = {
    cityFrom: "",
    cityTo: '',
    parcelType: 'other',
    dispatchDate: '',
    description: '',
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
    };

    const chooseToCity = (e) => {
        setRequestData((prev) => ({...prev, cityTo: e.target.innerHTML}));
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        createNewRequest({...requestData})
    };

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <label>
                    From
                    <input
                        type="text"
                        name="cityFrom"
                        value={requestData.cityFrom}
                        onChange={handleFilter}
                        autoFocus
                    />
                    {filteredFromCityData.length !== 0 && (
                        <div>
                            {filteredFromCityData.slice(0, 10).map((data) => {
                                return <div 
                                            onClick={chooseFromCity} 
                                        >
                                            {data.city}, 
                                            {data.admin_name}
                                        </div>
                            })}
                        </div>
                        )
                    }
                </label>
                <label>
                    To
                    <input
                        type='text'
                        name='cityTo'
                        value={requestData.cityTo}
                        onChange={handleFilter}
                    />
                    {filteredToCityData.length !== 0 && (
                        <div>
                            {filteredToCityData.slice(0, 10).map((data) => {
                                return <div 
                                            onClick={chooseToCity} 
                                        >
                                            {data.city}, 
                                            {data.admin_name}
                                        </div>
                            })}
                        </div>
                        )
                    }
                </label>
                <label>
                    Type of parcel
                    <select
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
                <label>
                    Date of dispatch
                    <input
                        type='date'
                        name='dispatchDate'
                        value={requestData.dispatchDate}
                        min={todaysDate}
                        onChange={onHandleChange}
                    />
                </label>
                <label>
                    Description 
                    <textarea
                        name='description'
                        value={requestData.description}
                        cols="35" 
                        rows="3"
                        onChange={onHandleChange}
                    />
                </label>
                <button
                    type='submit'
                >
                    Create a request
                </button>
            </form>
        </div>
    );
};

export default RequestForm;