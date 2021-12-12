import React, { Fragment } from 'react';
import HomePage from '../pages/HomePage';
import { Routes, Route } from "react-router-dom";
import UserOnboardPage from "../pages/UserOnboardPage";
import ContactPage from "../pages/ContactPage";
import PolicyPage from "../pages/PolicyPage";
import RefundPage from "../pages/RefundPage";
import PurchasePage from "../pages/PurchasePage";
import AboutPage from "../pages/AboutPage";
import ProductDetialsPage from "../pages/ProductDetialsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
class AppRoute extends React.Component {

    render(){
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/onboard" element={<UserOnboardPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                    <Route exact path="/policy" element={<PolicyPage />} />
                    <Route exact path="/refund" element={<RefundPage />} />
                    <Route exact path="/purchase" element={<PurchasePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/productdetails" element={<ProductDetialsPage />} />
                    <Route exact path="/notification" element={<NotificationPage />} />
                    <Route exact path="/favourite" element={<FavouritePage />} />
                </Routes>
            </Fragment>
        );
    }
}
export default AppRoute;