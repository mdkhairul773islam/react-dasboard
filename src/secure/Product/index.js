import { React } from "react";
import { Link } from "react-router-dom";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import KitchenSinkStory from "react-data-table-component";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Index(props) {
  const handleButtonClick = (e) => {
    console.log(e.target.id);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.title,
    },
    {
      name: "Category",
      selector: (row) => row.year,
    },
    {
      name: "Subcategory",
      selector: (row) => row.year,
    },
    {
      name: "Brand",
      selector: (row) => row.year,
    },
    {
      name: "Purchase Price",
      selector: (row) => row.year,
    },
    {
      name: "Sale Price",
      selector: (row) => row.year,
    },
    {
      name: "Unit",
      selector: (row) => row.year,
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

  const data = [
    {
      id: 1,
      title: "Lejuice",
      year: "20",
    },
    {
      id: 11,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 112,
      title: "Beetlejuice",
      year: "1988",
    },
  ];

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
                  fixedHeader
                  fixedHeaderScrollHeight="60vh"
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
