import { React, useEffect, useState } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
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

function Purchase(props) {
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

  const [cardItems, setCardItems] = useState([]);

  const addNewProductFn = () => {
    var items = {
      id: 1,
      name: "Apple",
      dio_no: "102",
      date: "2021-11-12",
      qty: 10,
      pnedingQty: 1,
      freeCuton: 0,
      freeQty: 0,
      purchasePrice: 10,
      total: 100,
    };
    setCardItems([...cardItems, items]);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  /* useEffect(() => {
    console.log(cardItems);
  }, []); */

  return (
    <AdminWraper>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h4" className="fw-bold">
                Add Purchase
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
                      xxl={2}
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
                      xxl={2}
                      xs={12}
                    >
                      <Form.Control placeholder="Invoice No" />
                    </Col>

                    <Col
                      className="mb-3"
                      sm={6}
                      md={6}
                      lg={3}
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
                      lg={3}
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
                  </Row>

                  <Row>
                    <Col
                      className="mb-3"
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      xxl={2}
                      xs={12}
                    >
                      <Select
                        type="text"
                        options={options}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Chose Business Type"
                      />
                    </Col>

                    <Col
                      className="mb-3"
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      xxl={2}
                      xs={12}
                    >
                      <Select
                        type="text"
                        options={options}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Chose Gift Item"
                      />
                    </Col>
                    <Col>
                      <Button variant="primary" onClick={addNewProductFn}>
                        Save
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <Table bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Date</th>
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
                          {cardItems.map((row, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{row.date}</td>
                              <td>{row.name}</td>
                              <td>{row.dio_no}</td>
                              <td>
                                <Form.Control
                                  name="qty"
                                  type="number"
                                  value={row.qty}
                                  placeholder="0"
                                  onChange={handleChange}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="freeCuton"
                                  type="number"
                                  value={row.freeCuton}
                                  placeholder="0"
                                  onChange={handleChange}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="pnedingQty"
                                  type="number"
                                  value={row.pnedingQty}
                                  placeholder="0"
                                  onChange={handleChange}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="freeQty"
                                  type="number"
                                  value={row.freeQty}
                                  placeholder="0"
                                  onChange={handleChange}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="purchasePrice"
                                  type="number"
                                  value={row.purchasePrice}
                                  placeholder="0"
                                  onChange={handleChange}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="total"
                                  type="number"
                                  value={row.total}
                                  placeholder="0"
                                  onChange={handleChange}
                                />
                              </td>
                              <td className="text-center">
                                <Button
                                  variant="danger"
                                  type="button"
                                  size="sm"
                                >
                                  X
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-end">
                      <Button variant="primary" type="submit">
                        Submit
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

export default Purchase;
