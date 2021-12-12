import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";

import { DataService } from "../../config/dataService/dataService";

import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Table,
    Button,
} from "react-bootstrap";


function Unit(props) {
    const [unit, setUnit] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await DataService.get("/dashboard");
        console.log(res.data);
        console.log(unit);
    }

    return (
        <AdminWraper menuOpen='product'>
            <Container className="p-0" fluid>
                <Row>
                    <div className="body_nav">
                        <Navbar />
                    </div>
                </Row>
                <Row>
                    <Col sm={12} className="mb-4">
                        <Card>
                            <Card.Header as="h4" className="fw-bold">
                                Unit
                            </Card.Header>
                            <Card.Body>
                                <Form autoComplete="off">
                                    <Row className="justify-content-md-start">
                                        <Col className="mb-3"
                                            sm={6}
                                            md={6}
                                            lg={3}
                                            xl={3}
                                            xxl={3}
                                            xs={12}
                                        >
                                            <Form.Control value={unit}
                                                onChange={(e) => setUnit(e.target.value)} placeholder="Unit Name" />
                                        </Col>
                                        <Col
                                            sm={6}
                                            md={6}
                                            lg={3}
                                            xl={3}
                                            xxl={3}
                                            xs={12}
                                        >
                                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                                Submit sd
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header as="h4" className="fw-bold">
                                Unit List
                            </Card.Header>
                            <Card.Body>
                                <Table bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th width="50px">Sl</th>
                                            <th>Name</th>
                                            <th className="text-center w-25">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td></td>
                                            <td className="text-center">
                                                <Link
                                                    to="/product/unit/edit/1"
                                                    className="mx-1 btn btn-success btn-sm"
                                                    type="button"
                                                >
                                                    <i className="fa fa-pen fa-sm" aria-hidden="true"></i>
                                                </Link>
                                                <Button
                                                    className="mx-1"
                                                    variant="danger"
                                                    type="button"
                                                    size="sm"
                                                >
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdminWraper>
    );
}
Unit.defaultProps = {
    unit: '',
};

Unit.propTypes = {
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Unit;
