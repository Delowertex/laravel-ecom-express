import React from 'react';
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import Collection from "../components/home/Collection";
import FeatureProduct from "../components/home/FeatureProduct";
import Categories from "../components/home/Categories";
import NewArival from "../components/home/NewArival";
import FooterMobile from "../components/common/FooterMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import HomeTop from "../components/home/HomeTop";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <div className="Desktop">
                    <NavMenuDesktop/>
                    <HomeTop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                    <HomeTopMobile/>
                </div>


                <FeatureProduct/>
                <NewArival/>
                <Collection/>
                <Categories/>


                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>
            </>
        );
    }
}
export default HomePage;