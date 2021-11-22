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
                                <Button to="#" className="btn btn-light btn-xl float-end px-1 py-0" onClick={() => window.print()}>
                                    <i className="fa fa-print" aria-hidden="true"></i>
                                </Button>
                                <Link to="/do-order/edit-order/1"
                                    className="btn btn-light btn-xl float-end px-2 py-0"
                                    type="button"
                                >
                                    <i className="fa fa-pen" aria-hidden="true"></i>
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xs={6} xxl="6" xl="6" col-md={6} col-sm={6}>
                                        <Table borderless responsive className="shadow-none">
                                            <thead>
                                                <tr>
                                                    <th>Company Name :	</th>
                                                    <td>FreeLance IT Lab</td>
                                                </tr>
                                                <tr>
                                                    <th>Address  :	</th>
                                                    <td>Coronation Road, Sankipara, Mymensingh 2200</td>
                                                </tr>
                                                <tr>
                                                    <th>Mobile :	</th>
                                                    <td>01707536945</td>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Col>
                                    <Col xs={6} xxl="6" xl="6" col-md={6} col-sm={6}>
                                        <Table borderless responsive className="shadow-none">
                                            <thead>
                                                <tr>
                                                    <th>DO Invoice :	</th>
                                                    <td>211123</td>
                                                </tr>
                                                <tr>
                                                    <th>Order Date :</th>
                                                    <td>2021-11-22</td>
                                                </tr>
                                                <tr>
                                                    <th>Print Date/Time :	</th>
                                                    <td>23-Nov-2021 01:12:23 AM</td>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Col>
                                </Row>
                                <Table bordered striped hover responsive>
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Item</th>
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
                                            <td>27-Oct-2021</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Biscony Mogol Cookise</td>
                                            <td>27-Oct-2021</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Biscony Mogol Cookise</td>
                                            <td>27-Oct-2021</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Biscony Mogol Cookise</td>
                                            <td>27-Oct-2021</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th colSpan="3" className="text-end">Total</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>0</th>
                                        </tr>
                                        <tr>
                                            <th>Remark:</th>
                                            <td colSpan="7"></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdminWraper >
    );
}

export default Invoice;
