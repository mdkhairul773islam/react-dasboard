import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import KitchenSinkStory from "react-data-table-component";

function ListUnit(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    console.log(e.target.id);
    setShow(true);
  };

  const handleButtonClick = (e) => {
    console.log(e.target.id);
  };

  const columns = [
    {
      name: "Sl",
      selector: (row, index) => index + 1,
      maxWidth: "20px",
    },
    {
      name: "Name",
      selector: (row) => row.unit,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Button
            onClick={handleShow}
            id={row.id}
            className="btn btn-success btn-sm m-1"
          >
            <i className="fas fa-pen fa-sm"></i>
          </Button>
          <Button
            className="btn btn-danger btn-sm m-1"
            onClick={handleButtonClick}
            id={row.id}
          >
            <i className="fas fa-trash fa-sm"></i>
          </Button>
        </>
      ),
      center: true,
      className: "action-width",
    },
  ];

  const unitList = props.units;
  return (
    <>
      <KitchenSinkStory
        columns={columns}
        data={unitList}
        fixedHeader
        fixedHeaderScrollHeight="60vh"
        highlightOnHover
        pagination
        pointerOnHover
        responsive
        striped
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as="h5">Edit Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off">
            <Form.Control placeholder="Unit Name" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" size="sm" onClick={handleClose}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListUnit;
