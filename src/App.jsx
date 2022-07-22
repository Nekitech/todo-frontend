import React from 'react';
import styles from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/mainPage/MainPage";
import AuthAndRegPage from "./pages/authAndRegPage/AuthAndRegPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/authAndRegPage" element={<AuthAndRegPage/>}/>
        </Routes>

    );
}

export default App;
