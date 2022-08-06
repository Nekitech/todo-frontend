import React from 'react';
import styles from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/mainPage/MainPage";
import AuthAndRegPage from "./pages/authAndRegPage/AuthAndRegPage";
import {pathGlobal} from "./config/global";

function App() {
    return (
        <Routes>
            <Route path={`/${pathGlobal}MainPage`} element={<MainPage/>}/>
            <Route path={`/${pathGlobal}`} element={<AuthAndRegPage/>}/>
        </Routes>


    );
}

export default App;
