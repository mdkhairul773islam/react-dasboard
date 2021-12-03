import { React } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    FormCheck,
    Button
} from "react-bootstrap";
import Select from "react-select";


function Add(props) {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
        { value: "Khairul", label: "Khairul" },
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
    ];

    const optionsUnit = [
        { value: "kg", label: "Kg" },
        { value: "bg", label: "Bg" },
        { value: "pcs", label: "Pcs" }
    ];

    return (
        <AdminWraper menuOpen='product'>
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
                                New Product
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group as={Row} className="mb-3">

                                        <Col className="mb-3" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="name" placeholder="Product Name" required />
                                        </Col>

                                        <Col className="mb-3" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Category <span className="text-danger">*</span> </Form.Label>
                                            <Select
                                                name="category"
                                                type="text"
                                                options={options}
                                                isClearable={true}
                                                isSearchable={true}
                                                placeholder="Chose Category"
                                                required
                                            >
                                            </Select>
                                        </Col>

                                        <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Subcategory <span className="text-danger">*</span> </Form.Label>
                                            <Select
                                                name="subcategory"
                                                type="text"
                                                options={options}
                                                isClearable={true}
                                                isSearchable={true}
                                                placeholder="Chose Subcategory"
                                                required
                                            >
                                            </Select>
                                        </Col>

                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">

                                        <Col className="mb-3" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Brand <span className="text-danger">*</span> </Form.Label>
                                            <Select
                                                name="brand"
                                                type="text"
                                                options={options}
                                                isClearable={true}
                                                isSearchable={true}
                                                placeholder="Chose Brand"
                                                required
                                            >
                                            </Select>
                                        </Col>

                                        <Col className="mb-3" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Purchase Price</Form.Label>
                                            <Form.Control type="number" name="purchase_price" placeholder="0.0" />
                                        </Col>

                                        <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Sale Price</Form.Label>
                                            <Form.Control type="number" name="sale_price" placeholder="0.0" />
                                        </Col>

                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">

                                        <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Unit <span className="text-danger">*</span> </Form.Label>
                                            <Select
                                                name="unit"
                                                type="text"
                                                options={optionsUnit}
                                                isClearable={true}
                                                isSearchable={true}
                                                placeholder="Chose Unit"
                                                required
                                            >
                                            </Select>
                                        </Col>

                                        <Col className="mt-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <FormCheck.Label className="me-2 mt-4">Status </FormCheck.Label>
                                            <Form.Check
                                                inline
                                                label="Available"
                                                name="status"
                                                type="radio"
                                                checked
                                                id="one"
                                            />
                                            <Form.Check
                                                inline
                                                name="status"
                                                label="Not Available"
                                                type="radio"
                                                id="two"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdminWraper >
    );
}

export default Add;
