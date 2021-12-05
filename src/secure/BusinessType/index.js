import React, { useState } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Button,
  Modal,
} from "react-bootstrap";

function BusinessType(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  };

  return (
    <AdminWraper menuOpen="business_type">
      <Container className="p-0" fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h4" className="fw-bold">
                Business Type
                <Button
                  onClick={handleShow}
                  className="btn btn-primary btn-xl float-end"
                  type="button"
                >
                  <i className="fa fa-plus fa-sm" aria-hidden="true"></i>
                </Button>
              </Card.Header>
              <Card.Body>
                <Table bordered hover responsive className="custom-table">
                  <thead>
                    <tr>
                      <th width="50px">Sl</th>
                      <th>Date</th>
                      <th>Name</th>
                      <th width="100px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>10-20-2012</td>
                      <td>Test</td>
                      <td className="text-center">
                        <Button
                          onClick={handleShow}
                          className="mx-1 btn btn-success btn-sm"
                          type="button"
                        >
                          <i className="fa fa-pen fa-sm" aria-hidden="true"></i>
                        </Button>
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Edit Business</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Control placeholder="Name" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </AdminWraper>
  );
}

export default BusinessType;
