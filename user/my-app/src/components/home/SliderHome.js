import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderHome extends React.Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            autoPlay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img className="slider-img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1a.H.PRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="slider-img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1JpZXPRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="slider-img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Jw4idMgP7K4jSZFqXXamhVXa.jpg_1200x1200.jpg" alt=""/>
                    </div>

                </Slider>
            </div>
        );
    }
}
export default SliderHome;