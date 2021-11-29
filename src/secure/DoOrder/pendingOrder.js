import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/DoOrder/navbar";
import {
    Container, Row, Col, Card, Table, Button, Form
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";

function PendingOrder(props) {

    const [fromtDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
        { value: "Khairul", label: "Khairul" },
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
    ];

    return (
        <AdminWraper menuOpen='do_order'>
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
                                Pending Order
                            </Card.Header>
                            <Card.Body>
                                <Form autoComplete="off">
                                    <Row>
                                        <Col
                                            className="mb-3"
                                            sm={6}
                                            md={6}
                                            lg={2}
                                            xl={3}
                                            xxl={2}
                                            xs={12}
                                        >
                                            <Select
                                                type="text"
                                                options={options}
                                                isClearable={true}
                                                isSearchable={true}
                                                placeholder="Chose Showroom"
                                            />
                                        </Col>

                                        <Col
                                            className="mb-3"
                                            sm={6}
                                            md={6}
                                            lg={2}
                                            xl={3}
                                            xxl={2}
                                            xs={12}
                                        >
                                            <Select
                                                type="text"
                                                options={options}
                                                isClearable={true}
                                                isSearchable={true}
                                                placeholder="Chose Company"
                                            />
                                        </Col>

                                        <Col
                                            className="mb-3"
                                            sm={6}
                                            md={6}
                                            lg={2}
                                            xl={3}
                                            xxl={2}
                                            xs={12}
                                        >
                                            <Form.Control placeholder="Invoice No" />
                                        </Col>

                                        <Col
                                            className="mb-3"
                                            sm={6}
                                            md={6}
                                            lg={2}
                                            xl={3}
                                            xxl={2}
                                            xs={12}
                                        >
                                            <DatePicker
                                                className="form-control"
                                                selected={fromtDate}
                                                dateFormat="yyyy-MM-dd"
                                                onChange={(date) => setFromDate(date)}
                                                autoComplete="off"
                                            />
                                        </Col>

                                        <Col
                                            className="mb-3"
                                            sm={6}
                                            md={6}
                                            lg={2}
                                            xl={3}
                                            xxl={2}
                                            xs={12}
                                        >
                                            <DatePicker
                                                className="form-control"
                                                selected={toDate}
                                                dateFormat="yyyy-MM-dd"
                                                onChange={(date) => setToDate(date)}
                                                autoComplete="off"
                                            />
                                        </Col>

                                        <Col
                                            sm={6}
                                            md={6}
                                            lg={2}
                                            xl={3}
                                            xxl={2}
                                            xs={12}
                                        >
                                            <Button variant="primary">Search</Button>
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
                                All Pending Order
                                <Button to="#" className="btn btn-light btn-xl float-end px-1 py-0" onClick={() => window.print()}>
                                    <i className="fa fa-print" aria-hidden="true"></i>
                                </Button>
                                <Link to="/do-order/add"
                                    className="btn btn-light btn-xl float-end px-2 py-0"
                                    type="button"
                                >
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <Table bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th width="50px">Sl</th>
                                            <th>Date</th>
                                            <th>DO Invoice</th>
                                            <th>Item Name</th>
                                            <th>Qty(ctn)</th>
                                            <th>Free(ctn)</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th className="text-center w-25">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>10-20-2012</td>
                                            <td>548745</td>
                                            <td>Test Item</td>
                                            <td>Test</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center">
                                                <Link
                                                    to="/do-order/invoice/1"
                                                    className="mx-1 btn btn-primary btn-sm"
                                                    type="button"
                                                >
                                                    <i className="fa fa-eye fa-sm" aria-hidden="true"></i>
                                                </Link>
                                                <Link
                                                    to="/do-order/edit-order/1"
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
                                        <tr>
                                            <th colSpan="4" className="text-end">Total</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>0</th>
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

export default PendingOrder;
