import React, {Component, Fragment} from 'react';
import { Col, Container, Row} from "react-bootstrap";

class Policy extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making it look like readable English
                            </p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making it look like readable English
                            </p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making it look like readable English
                            </p>
                            <p>Policy Page</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Policy;