import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";

import KitchenSinkStory from "react-data-table-component";
import { DataService } from "../../config/dataService/dataService";

import { useToasts } from "react-toast-notifications";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Modal,
  Button,
} from "react-bootstrap";

function Unit(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const { addToast } = useToasts();

  /* unit database store here */
  const [units, setUnits] = useState([]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      unit: "",
    },
  });

  const onSubmit = async (data, e) => {
    try {
      const res = await DataService.post("unit-store", data);
      addToast("Saved Successfully", { appearance: "success" });
      setUnits(res.data);
    } catch (error) {
      console.log("error");
    }
    e.target.reset();
  };

  useEffect(() => {
    async function getUnit() {
      try {
        const res = await DataService.get("unit");
        setUnits(res.data);
      } catch (error) {
        console.log("error");
      }
    }
    getUnit();
  }, []);

  /* unit database store end here */

  /* unit update start here */
  const { register: register2, handleSubmit: handleSubmit2, reset } = useForm();
  const [editUnit, setEditUnit] = useState([]);

  const handleShow = async (e) => {
    setShow(true);
    try {
      var id = e.target.id;
      const res = await DataService.get(`/unit-edit/${id}`);
      setEditUnit(res.data);
    } catch (error) {
      console.log("error");
    }
  };

  const onSubmitUpdate = async (data, e) => {
    const { id, unit } = data.editUnit;
    try {
      const res = await DataService.post("unit-update", { id: id, unit: unit });
      addToast("Updated Successfully", { appearance: "info" });
      setUnits(res.data);
      setShow(false);
    } catch (error) {
      console.log("error");
    }
  };

  /* unit delete  */
  const handleDeleteClick = async (e) => {
    try {
      var id = e.target.id;
      var confirmDelete = window.confirm("Want to delete?");
      if (confirmDelete) {
        const res = await DataService.get(`/unit-destroy/${id}`);
        addToast("Unit Successfully Deleted", { appearance: "error" });
        setUnits(res.data);
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    reset({
      editUnit,
    });
  }, [editUnit, reset]);

  /* unit update end here */

  /*     const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const res = await DataService.get("/dashboard");
                console.log(res.data);
                console.log(unit);
            } catch (error) {
                console.log("error");
            }
            //const res = await DataService.get("/dashboard");
    
        } */

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
            onClick={handleDeleteClick}
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

  return (
    <AdminWraper menuOpen="product">
      <Container className="p-0" fluid>
        <Row>
          <div className="body_nav">
            <Navbar />
          </div>
        </Row>
        <Row>
          <Col sm={12} className="mb-4">
            <Card>
              <Card.Header as="h4" className="fw-bold">
                Unit
              </Card.Header>
              <Card.Body>
                <Form
                  key={1}
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Row className="justify-content-md-start">
                    <Col
                      className="mb-3"
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      xxl={3}
                      xs={12}
                    >
                      <Form.Control
                        name="unit"
                        required
                        {...register("unit", { required: true })}
                        placeholder="Unit Name"
                      />
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3} xxl={3} xs={12}>
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

          <Col>
            <Card>
              <Card.Header as="h4" className="fw-bold">
                Unit List
              </Card.Header>
              <Card.Body>
                <KitchenSinkStory
                  columns={columns}
                  data={units}
                  fixedHeader
                  fixedHeaderScrollHeight="90vh"
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
                    <Form
                      key={2}
                      autoComplete="off"
                      onSubmit={handleSubmit2(onSubmitUpdate)}
                    >
                      <Form.Control
                        name="unit"
                        required
                        {...register2("editUnit.unit", { required: true })}
                        placeholder="Unit Name"
                      />

                      <Form.Control
                        type="hidden"
                        name="id"
                        required
                        {...register2("editUnit.id", { required: true })}
                        placeholder="Unit Name"
                      />
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={handleSubmit2(onSubmitUpdate)}
                    >
                      Update
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
              <Card.Footer className="text-muted">&nbsp;</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminWraper>
  );
}

export default Unit;
