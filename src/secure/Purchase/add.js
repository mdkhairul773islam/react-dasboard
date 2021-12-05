import React, { useState } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Purchase/navbar";
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
    setCardItems([
      ...cardItems,
      {
        id: 1,
        name: "Walton AC",
        dio_no: "101",
        date: "2021-11-08",
        qty: 0,
        pnedingQty: 0,
        freeCuton: 0,
        freeQty: 0,
        purchasePrice: 0,
        subtotal: 0,
      },
    ]);
  };

  const handleChange = (index, event) => {
    const newInputFields = cardItems.map((item, itemIndex) => {
      if (index === itemIndex) {
        item[event.target.name] = event.target.value;
      }
      return item;
    });

    setCardItems(newInputFields);
  };

  const handleRemoveItem = (index) => {
    const items = [...cardItems];
    items.splice(index, 1);
    setCardItems(items);
  };

  const subTotalFn = (index) => {
    var items = [...cardItems];

    return (items[index].subtotal =
      items[index].qty * items[index].purchasePrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cardItems", cardItems);
  };

  return (
    <AdminWraper menuOpen="purchase">
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
                Add Purchase
              </Card.Header>
              <Card.Body>
                <Form autoComplete="off" onSubmit={handleSubmit}>
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
                      <Form.Control placeholder="Invoice No" />
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
                  </Row>

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
                      xxl={3}
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
                      <Table
                        bordered
                        striped
                        hover
                        responsive
                        className="custom-table"
                      >
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
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="freeCuton"
                                  type="number"
                                  value={row.freeCuton}
                                  placeholder="0"
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="pnedingQty"
                                  type="number"
                                  value={row.pnedingQty}
                                  placeholder="0"
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="freeQty"
                                  type="number"
                                  value={row.freeQty}
                                  placeholder="0"
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="purchasePrice"
                                  type="number"
                                  value={row.purchasePrice}
                                  placeholder="0"
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </td>
                              <td>
                                <Form.Control
                                  name="subtotal"
                                  type="number"
                                  value={subTotalFn(index)}
                                  placeholder="0"
                                  readOnly={true}
                                />
                              </td>
                              <td className="text-center">
                                <Button
                                  variant="danger"
                                  type="button"
                                  size="sm"
                                  onClick={() => handleRemoveItem(index)}
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
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleSubmit}
                      >
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
