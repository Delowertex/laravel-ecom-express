import React, {Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductDetials from "../components/ProductDetails/ProductDetials";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import SuggestedProducts from "../components/ProductDetails/SuggestedProducts";

class ProductDetialsPage extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                </div>

                <ProductDetials />
                <SuggestedProducts />

                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>


            </Fragment>
        );
    }
}

export default ProductDetialsPage;