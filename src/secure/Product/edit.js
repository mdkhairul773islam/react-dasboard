import React, { useEffect } from "react";
//import { useHistory } from "react-router-dom";
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

//import { useToasts } from "react-toast-notifications";
import { useForm } from "react-hook-form";
import Select from "react-select";

// use redux
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/category/actionCreator";
import { brand } from "../../redux/brand/actionCreator";
import { unit } from "../../redux/unit/actionCreator";
import { productEdit } from "../../redux/product/actionCreator";


function Edit(props) {
    //const { addToast } = useToasts();
    //const history = useHistory();
    const dispatch = useDispatch();

    // use redux
    const categories = useSelector((state) => state.categoryReducer.categoryList);
    const brandItems = useSelector((state) => state.brandReducer.brandList);
    const units = useSelector((state) => state.unitReducer.unitList);
    const getProduct = useSelector((state) => state.productReducer.product);

    const categoryList = categories.map((item) => {
        const { name: label, id: value, ...rest } = item;
        return { value, label, ...rest };
    });

    const brandList = brandItems.map((item) => {
        const { name: label, id: value, ...rest } = item;
        return { value, label, ...rest };
    });

    const unitList = units.map((item) => {
        const { unit: label, id: value, ...rest } = item;
        return { value, label, ...rest };
    });

    const id = props.match.params.id;

    useEffect(() => {
        dispatch(productEdit(id));
        dispatch(category());
        dispatch(brand());
        dispatch(unit());
    }, [dispatch, id]);

    const { setValue, register, handleSubmit, reset } = useForm({
        defaultValues: {
            purchase_price: "0",
            sale_price: "0",
        },
    });

    const handleCategoryChange = (e) => {
        setValue("getProduct.category_id", e.value);
    };

    const handleBrandChange = (e) => {
        setValue("getProduct.brand_id", e.value);
    };

    const handleUnitChange = (e) => {
        setValue("getProduct.unit_id", e.value);
    };

    const onSubmit = (data, e) => {
        console.log('data', data);
        //dispatch(product(data, addToast, history));
        //e.target.reset();
    };

    useEffect(() => {
        reset({
            getProduct,
        });
        //console.log(product);
    }, [getProduct, reset]);

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
                                Edit Product
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group as={Row} className="mb-2">
                                        <Col className="mb-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>
                                                Name <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                {...register("getProduct.name", { required: true })}
                                                placeholder="Product Name"
                                                required
                                            />
                                        </Col>

                                        <Col className="mb-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>
                                                Category <span className="text-danger">*</span>{" "}
                                            </Form.Label>
                                            <Select
                                                onChange={handleCategoryChange}
                                                ref={(e) => {
                                                    register("getProduct.category_id", { required: true });
                                                }}
                                                options={categoryList}
                                                isSearchable={true}
                                                placeholder="Chose Category"
                                                required
                                            ></Select>
                                        </Col>

                                        <Col className="mb-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>
                                                Brand <span className="text-danger">*</span>{" "}
                                            </Form.Label>
                                            <Select
                                                onChange={handleBrandChange}
                                                ref={(e) => {
                                                    register("getProduct.brand_id", { required: true });
                                                }}
                                                type="text"
                                                options={brandList}
                                                isSearchable={true}
                                                placeholder="Chose Brand"
                                                required
                                            ></Select>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Col className="mb-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Purchase Price</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="purchase_price"
                                                {...register("getProduct.purchase_price", { required: true })}
                                                placeholder="0.0"
                                            />
                                        </Col>

                                        <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>Sale Price</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="sale_price"
                                                {...register("getProduct.sale_price", { required: true })}
                                                placeholder="0.0"
                                            />
                                        </Col>

                                        <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <Form.Label>
                                                Unit <span className="text-danger">*</span>{" "}
                                            </Form.Label>
                                            <Select
                                                onChange={handleUnitChange}
                                                ref={(e) => {
                                                    register("getProduct.unit_id", { required: true });
                                                }}
                                                type="text"
                                                options={unitList}
                                                isSearchable={true}
                                                placeholder="Chose Unit"
                                                required
                                            ></Select>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-2">
                                        <Col className="mt-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                                            <FormCheck.Label className="me-2 mt-4">
                                                Status
                                            </FormCheck.Label>
                                            <Form.Check
                                                inline
                                                label="Available"
                                                name="status"
                                                type="radio"
                                                checked
                                                id="one"
                                                {...register("getProduct.status")}
                                            />
                                            <Form.Check
                                                inline
                                                name="status"
                                                label="Not Available"
                                                type="radio"
                                                id="two"
                                                {...register("getProduct.status")}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <hr />
                                    <Button variant="success" type="submit">
                                        Update
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AdminWraper>
    );
}

export default Edit;
