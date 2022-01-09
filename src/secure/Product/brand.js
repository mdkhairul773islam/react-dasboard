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


function Brand(props) {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [brands, setBrands] = useState([]);

    const { addToast } = useToasts();
    const handleClose = () => setShow(false);

    /* Brand database store here */

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: "",
        },
    });
    const onSubmit = async (data, e) => {
        setLoading(true);
        try {
            const res = await DataService.post("brand-store", data);
            addToast("Saved Successfully", { appearance: "success" });
            setBrands(res.data);
            setLoading(false);
        } catch (error) {
            console.log("error");
        }
        e.target.reset();
    };

    useEffect(() => {

        async function getBrand() {
            setLoading(true);
            try {
                const res = await DataService.get("brand");
                // console.log(res.data);
                setBrands(res.data);
                setLoading(false);
            } catch (error) {
                console.log("error");
            }
        }
        getBrand();
    }, []);

    /* Brand database store end here */

    /* Brand update start here */
    const { register: register2, handleSubmit: handleSubmit2, reset } = useForm();
    const [editBrand, setEditBrand] = useState([]);

    const handleShow = async (e) => {
        setShow(true);
        try {
            var id = e.target.id;
            const res = await DataService.get(`/brand-edit/${id}`);
            setEditBrand(res.data);
        } catch (error) {
            console.log("error");
        }
    };

    const onSubmitUpdate = async (data, e) => {

        const { id, name } = data.editBrand;

        try {
            setLoading(true);
            const res = await DataService.post("brand-update", { id: id, name: name });
            addToast("Updated Successfully", { appearance: "info" });
            setBrands(res.data);
            setLoading(false);
            setShow(false);
        } catch (error) {
            console.log("error");
        }
    };

    /* Brand delete  */
    const handleDeleteClick = async (e) => {
        try {
            var id = e.target.id;
            var confirmDelete = window.confirm("Want to delete?");
            if (confirmDelete) {
                const res = await DataService.get(`/brand-destroy/${id}`);
                addToast("Brand Successfully Deleted", { appearance: "error" });
                setBrands(res.data);
            }
        } catch (error) {
            console.log("error");
        }
    };

    useEffect(() => {
        reset({
            editBrand,
        });
    }, [editBrand, reset]);

    const columns = [
        {
            name: "Sl",
            selector: (row, index) => index + 1,
            maxWidth: "20px",
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
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
                                Brand
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
                                                name="name"
                                                required
                                                {...register("name", { required: true })}
                                                placeholder="Brand Name"
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
                                Brand List
                            </Card.Header>
                            <Card.Body>
                                <KitchenSinkStory
                                    columns={columns}
                                    data={brands}
                                    fixedHeader
                                    fixedHeaderScrollHeight="90vh"
                                    highlightOnHover
                                    pagination
                                    pointerOnHover
                                    responsive
                                    striped
                                    progressPending={loading}
                                />

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Edit Brand</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form
                                            key={2}
                                            autoComplete="off"
                                            onSubmit={handleSubmit2(onSubmitUpdate)}
                                        >
                                            <Form.Control
                                                name="name"
                                                required
                                                {...register2("editBrand.name", { required: true })}
                                                placeholder="Brand Name"
                                            />

                                            <Form.Control
                                                type="hidden"
                                                name="id"
                                                required
                                                {...register2("editBrand.id", { required: true })}
                                                placeholder="Brand Name"
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

export default Brand;
