import React, { Fragment } from 'react';
import HomePage from '../pages/HomePage';
import { Routes, Route } from "react-router-dom";
import UserOnboardPage from "../pages/UserOnboardPage";
class AppRoute extends React.Component {
    render(){
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/onboard" element={<UserOnboardPage />} />
                </Routes>
            </Fragment>
        );
    }
}
export default AppRoute;