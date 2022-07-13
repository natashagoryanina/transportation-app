import React from 'react';
import { FormContainer } from './FormStyled';

const Form = ({filteredFromCityData, handleFilter, chooseFromCity, 
    filteredToCityData, chooseToCity, requestData, onHandleChange, 
    parcelType, todaysDate, onHandleSubmit, formTitle, btnName}) => {
    return (
        <FormContainer>
            <h3 className='form_title'>{formTitle}</h3>
            <form className='form' onSubmit={onHandleSubmit}>
                <label className='form_label'>
                    From:
                    <div className='form_filter-container'>
                        <input
                            className='form_input'
                            type="text"
                            name="cityFrom"
                            value={requestData.cityFrom}
                            onChange={handleFilter}
                            autoFocus
                        />
                        {filteredFromCityData.length !== 0 && (
                            <div className='form_filter'>
                                {filteredFromCityData.map((data) => {
                                    return <div 
                                                className='form_filter-item'
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
                <label className='form_label'>
                    To:
                    <div className='form_filter-container'>
                        <input
                            className='form_input'
                            type='text'
                            name='cityTo'
                            value={requestData.cityTo}
                            onChange={handleFilter}
                        />
                        {filteredToCityData.length !== 0 && (
                            <div className='form_filter'>
                                {filteredToCityData.map((data) => {
                                    return <div 
                                                className='form_filter-item'
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
                <label className='form_label'>
                    Type of parcel: 
                    <select
                        className='form_select'
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
                <label className='form_label'>
                    Date of dispatch: 
                    <input
                        className='form_date'
                        type='date'
                        name='dispatchDate'
                        value={requestData.dispatchDate}
                        min={todaysDate}
                        onChange={onHandleChange}
                    />
                </label>
                <label className='form_label'>
                    Description:
                    <textarea
                        className='form_textarea'
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
                   {btnName}
                </button>
            </form>
        </FormContainer>
    );
};

export default Form;