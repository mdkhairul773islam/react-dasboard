import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Supplier/navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DataTable from "../../components/DataTable/Table";

// use redux
import { useDispatch, useSelector } from "react-redux";
import { productList, productDelete } from "../../redux/product/actionCreator";

import { useToasts } from "react-toast-notifications";

function Index(props) {
  // get data from redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer.productList);
  const loading = useSelector((state) => state.productReducer.loading);

  const { addToast } = useToasts();
  const history = useHistory();

  const handleDeleteClick = (e) => {
    var id = e.target.id;
    dispatch(productDelete(id, addToast, history));
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Contact Person",
      selector: (row) => (row.category != null ? row.category.name : "N/A"),
    },
    {
      name: "Mobile",
      selector: (row) => (row.brand != null ? row.brand.name : "N/A"),
    },
    {
      name: "Initial Balance",
      selector: (row) => row.purchase_price,
    },
    {
      name: "Current Balance",
      selector: (row) => row.sale_price,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Link
            to={`/supplier/edit/${row.id}`}
            className="btn btn-success btn-sm m-1"
          >
            <i className="fas fa-pen fa-sm"></i>
          </Link>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={handleDeleteClick}
            id={row.id}
          >
            <i className="fas fa-trash fa-sm"></i>
          </button>
        </>
      ),
      center: true,
      className: "action-width",
    },
  ];
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <AdminWraper menuOpen="supplier">
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
                All Supplier
                <Button
                  to="#"
                  className="btn btn-light btn-xl float-end px-1 py-0"
                  onClick={() => window.print()}
                >
                  <i className="fa fa-print" aria-hidden="true"></i>
                </Button>
              </Card.Header>
              <Card.Body>
                <DataTable columns={columns} data={data} loading={loading} />
              </Card.Body>
              <Card.Footer className="text-muted">&nbsp;</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminWraper>
  );
}

export default Index;
