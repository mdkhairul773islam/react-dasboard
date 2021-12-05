import { React, useState } from "react";
import { Link } from "react-router-dom";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/DoOrder/navbar";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Button,
} from "react-bootstrap";
// Use for datePicker
import DatePicker from "react-datepicker";
import Select from "react-select";

function Edit(props) {
  const [startDate, setStartDate] = useState(new Date());
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
    <AdminWraper menuOpen="do_order">
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
                Edit Order
                <Link
                  to="/do-order/invoice/1"
                  className="btn btn-light btn-lg float-end p-0"
                  type="button"
                >
                  <i className="fa fa-file-invoice" aria-hidden="true"></i>
                </Link>
              </Card.Header>
              <Card.Body>
                <Form autoComplete="off">
                  <Row>
                    <Col
                      className="mb-3"
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      xxl={3}
                      xs={12}
                    >
                      <DatePicker
                        className="form-control"
                        selected={startDate}
                        dateFormat="yyyy-MM-dd"
                        onChange={(date) => setStartDate(date)}
                        autoComplete="off"
                      />
                    </Col>

                    <Col
                      className="mb-3"
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      xxl={3}
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
                      lg={3}
                      xl={3}
                      xxl={3}
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
                      lg={3}
                      xl={3}
                      xxl={3}
                      xs={12}
                    >
                      <Select
                        type="text"
                        options={options}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Buiness Type"
                      />
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <Table
                        bordered
                        striped
                        hover
                        responsive
                        className="custom-table"
                      >
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>DO No.</th>
                            <th>Qty(ctn)</th>
                            <th>Free(ctn)</th>
                            <th>Pending Qty.</th>
                            <th>Free Qty.</th>
                            <th>P.Price (TK)</th>
                            <th>Total (TK)</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Biscony Mogol Cookise</td>
                            <td>945405</td>
                            <td>27-Oct-2021</td>
                            <td>
                              <Form.Control type="number" placeholder="0" />
                            </td>
                            <td>
                              <Form.Control type="number" placeholder="0" />
                            </td>
                            <td>
                              <Form.Control type="number" placeholder="0" />
                            </td>
                            <td>
                              <Form.Control type="number" placeholder="0" />
                            </td>
                            <td>
                              <Form.Control type="number" placeholder="0" />
                            </td>
                            <td className="text-center">
                              <Button variant="danger" type="button" size="sm">
                                X
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-end">
                      <Button variant="success" type="submit">
                        Save Changes
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
              <Card.Footer className="text-muted">&nbsp;</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminWraper>
  );
}

export default Edit;
