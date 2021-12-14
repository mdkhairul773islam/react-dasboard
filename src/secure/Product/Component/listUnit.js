import React, { useState, useEffect } from "react";
import { DataService } from "../../../config/dataService/dataService";
import { Form, Button, Modal } from "react-bootstrap";
import KitchenSinkStory from "react-data-table-component";

import { useForm } from "react-hook-form";

function ListUnit(props) {

  const [unit, setUnit] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const { register, handleSubmit, reset } = useForm();

  const handleShow = async (e) => {
    setShow(true);
    try {
      var id = e.target.id;
      const res = await DataService.get(`/unit-edit/${id}`);
      setUnit(res.data);

    } catch (error) {
      console.log("error");
    }
  }


  const onSubmit = async (data, e) => {
    const { id, unit } = data.unit;
    try {
      const res = await DataService.post("unit-update", { id: id, unit: unit });
      console.log('res', res);
      //setUnits(res.data);
    } catch (error) {
      console.log("error");
    }

  };


  useEffect(() => {
    reset({
      unit
    })
  }, [reset, unit]);

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
          <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Form.Control
              name="unit"
              required
              {...register("unit.unit", { required: true })}
              placeholder="Unit Name"
            />

            <Form.Control
              name="id"
              required
              {...register("unit.id", { required: true })}
              placeholder="Unit Name"
            />

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" size="sm" onClick={handleSubmit(onSubmit)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListUnit;
