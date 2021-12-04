import { React } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import CategoryList from "../../secure/Product/categoryList";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button

} from "react-bootstrap";


function Category(props) {

    return (
        <AdminWraper menuOpen='product'>
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
                                New Category
                            </Card.Header>
                            <Card.Body>
                                <Form autoComplete="off">
                                    <Row className="justify-content-md-start">
                                        <Col className="mb-3"
                                            sm={6}
                                            md={6}
                                            lg={3}
                                            xl={3}
                                            xxl={3}
                                            xs={12}
                                        >
                                            <Form.Control placeholder="Category Name" />
                                        </Col>
                                        <Col
                                            sm={6}
                                            md={6}
                                            lg={3}
                                            xl={3}
                                            xxl={3}
                                            xs={12}
                                        >
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
                                Category List
                            </Card.Header>
                            <Card.Body>
                                <CategoryList />
                            </Card.Body>
                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdminWraper>
    );
}

export default Category;
