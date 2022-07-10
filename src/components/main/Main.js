import React from 'react';
import { Route, Routes } from 'react-router';
import RequestFormPage from '../../pages/RequestFormPage';
import RequestListPage from '../../pages/RequestListPage';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<RequestFormPage/>} exact/>
                <Route path='/request-list' element={<RequestListPage/>}/>
                <Route path='*' element={<RequestFormPage/>}/>
            </Routes>
        </main>
    );
};

export default Main;