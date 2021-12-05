import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import KitchenSinkStory from "react-data-table-component";

function CategoryList(props) {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ok");
    }

    const handleButtonClick = (e) => {
        console.log(e.target.id);
    };

    const columns = [
        {
            name: "SL",
            selector: (row) => row.id,
        },
        {
            name: "Name",
            selector: (row) => row.title,
        },
        {
            name: "Action",
            cell: (row) => (
                <>
                    <Button
                        className="btn btn-success btn-sm m-1"
                        onClick={handleShow}
                        id={row.id}
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
            )
        },
    ];

    const data = [
        {
            id: 1,
            title: "Lejuice",
        },
        {
            id: 2,
            title: "Beetlejuice",
        },
        {
            id: 3,
            title: "Beetlejuice",
        },
    ];
    return (
        <>
            <KitchenSinkStory
                columns={columns}
                data={data}
                fixedHeader
                fixedHeaderScrollHeight="60vh"
                highlightOnHover
                pagination
                pointerOnHover
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5">Edit Category</Modal.Title>
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
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default CategoryList;
