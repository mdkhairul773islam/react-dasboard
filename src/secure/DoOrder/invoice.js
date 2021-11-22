import React from "react";
import { Link } from "react-router-dom";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/DoOrder/navbar";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

function Invoice(props) {
    console.log(props.match.params);
    return (
        <AdminWraper menuOpen='do_order'>
            <Container className="p-0" fluid>
                <Row>
                    <div className="body_nav">
                        <Navbar />
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h4" className="fw-bold">
                                Order Invoice
                                <Link to="/do-order/edit-order/1"
                                    className="btn btn-success btn-xl float-end"
                                    type="button"
                                >
                                    Edit Invoice
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>DO No.</th>
                                            <th>Qty(ctn)</th>
                                            <th>Free(ctn)</th>
                                            <th>Pending Qty.</th>
                                            <th>Free Qty.</th>
                                            <th>P.Price (TK)</th>
                                            <th>Total (TK)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Biscony Mogol Cookise</td>
                                            <td>945405</td>
                                            <td>27-Oct-2021</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>1</td>
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

export default Invoice;
