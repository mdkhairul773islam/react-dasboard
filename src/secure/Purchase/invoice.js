import React from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Purchase/navbar";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

function Purchase(props) {
  console.log(props.match.params);
  return (
    <AdminWraper menuOpen='purchase'>
      <Container fluid>
        <Row>
          <div className="body_nav">
            <Navbar />
          </div>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h4" className="fw-bold">
                Invoice
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

export default Purchase;
