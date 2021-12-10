import React, { Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SliderHome from "./SliderHome";
import MegaMenu from "./MegaMenu";

class HomeTop extends React.Component {
    constructor() {
        super();
        this.MegaMenu=this.MegaMenu.bind(this);
    }


    componentDidMount() {
        this.MegaMenu();
    }


    MegaMenu(){
        var acc= document.getElementsByClassName("accordion");
        var accNum=acc.length;
        var i;
        for(i=0;i<accNum;i++){
            acc[i].addEventListener("click",function () {
                this.classList.toggle("active");
                var panel=this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight=null;
                }
                else{
                    panel.style.maxHeight=panel.scrollHeight+ "px"
                }
            })
        }

    }
    render() {
        return (
            <Fragment>
                <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu />
                        </Col>
                        <Col lg={9} md={9} sm={12}>
                            <SliderHome />
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default HomeTop;