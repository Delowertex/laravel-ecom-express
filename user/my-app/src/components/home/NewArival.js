import React from "react";
import Slider from "react-slick";
import {Card, Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/fontawesome.css";

class NewArival extends React.Component {
    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)

    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Container className="text-center BetweenTwoSection" fluid={true} >
                <h4 className="section-title px-0 mx-0 ">NEW ARRIVAL
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </h4>
                <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                <Slider ref={c=>(this.slider=c)} {...settings}>
                    <div>
                        <Card className="image-box card">
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">Lorem Ipsum is simply dummy text</p>
                                <p className="product-price-on-card">Prices: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">Lorem Ipsum is simply dummy text</p>
                                <p className="product-price-on-card">Prices: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">Lorem Ipsum is simply dummy text</p>
                                <p className="product-price-on-card">Prices: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">Lorem Ipsum is simply dummy text</p>
                                <p className="product-price-on-card">Prices: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">Lorem Ipsum is simply dummy text</p>
                                <p className="product-price-on-card">Prices: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">Lorem Ipsum is simply dummy text</p>
                                <p className="product-price-on-card">Prices: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box card">
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                            <Card.Body>
                                <p className="product-name-on-card">Lorem Ipsum is simply dummy text</p>
                                <p className="product-price-on-card">Prices: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </Container>
        );
    }
}
export default NewArival;