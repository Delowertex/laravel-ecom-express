import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

class UserOnboard extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="TopSection">
                    <Row className="d-flex justify-content-center">
                        <Col className="BetweenTwoSection" md={6} lg={6} sm={8} xs={12}>
                            <Card className="mt-4">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter mobile No" />
                                        </Form.Group>
                                    </Form> <br/>
                                    <Button variant="primary">Next</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default UserOnboard;