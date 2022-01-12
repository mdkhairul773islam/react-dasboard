import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import DataTable from "../../components/DataTable/Table";

// use redux
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/product/actionCreator";

function Index(props) {
  // get data from redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer.productList);
  const loading = useSelector((state) => state.productReducer.loading);

  const handleButtonClick = (e) => {
    console.log(e.target.id);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Category",
      selector: (row) => (row.category != null ? row.category.name : "N/A"),
    },
    {
      name: "Brand",
      selector: (row) => (row.brand != null ? row.brand.name : "N/A"),
    },
    {
      name: "Purchase Price",
      selector: (row) => row.purchase_price,
    },
    {
      name: "Sale Price",
      selector: (row) => row.sale_price,
    },
    {
      name: "Unit",
      selector: (row) => (row.unit != null ? row.unit.unit : "N/A"),
    },

    {
      name: "Action",
      cell: (row) => (
        <>
          <Link
            to={`/product/view/${row.id}`}
            className="btn btn-primary btn-sm m-1"
            onClick={handleButtonClick}
            id={row.id}
          >
            <i className="fas fa-eye fa-sm"></i>
          </Link>
          <Link
            to={`/product/edit/${row.id}`}
            className="btn btn-success btn-sm m-1"
            onClick={handleButtonClick}
            id={row.id}
          >
            <i className="fas fa-pen fa-sm"></i>
          </Link>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={handleButtonClick}
            id={row.id}
          >
            <i className="fas fa-trash fa-sm"></i>
          </button>
        </>
      ),
      className: "action-width",
    },
  ];
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <AdminWraper menuOpen="product">
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
                All Product
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
