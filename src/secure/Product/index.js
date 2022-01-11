import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import KitchenSinkStory from "react-data-table-component";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// use redux
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/product/actionCreator";

function Index(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer.productList);

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
      selector: (row) => row.category.name,
    },
    {
      name: "Brand",
      selector: (row) => row.brand.name,
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
      selector: (row) => row.unit.unit,
    },

    {
      name: "Action",
      cell: (row) => (
        <>
          <Link
            to="/product/view/1"
            className="btn btn-primary btn-sm m-1"
            onClick={handleButtonClick}
            id={row.id}
          >
            <i className="fas fa-eye fa-sm"></i>
          </Link>
          <Link
            to="/product/edit/2"
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
                <KitchenSinkStory
                  columns={columns}
                  data={data}
                  highlightOnHover
                  pagination
                  pointerOnHover
                  responsive
                  striped
                />
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
