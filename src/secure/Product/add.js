import React, { useState, useEffect } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormCheck,
  Button,
} from "react-bootstrap";

import Select from "react-select";
import { useForm } from "react-hook-form";

// use redux
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/category/actionCreator";
import { subcategory } from "../../redux/subcategory/actionSubcategory";
import { brand } from "../../redux/brand/actionCreator";
import { unit } from "../../redux/unit/actionCreator";


function Add(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  // use redux
  const categories = useSelector((state) => state.categoryReducer.categoryList);
  const subcategories = useSelector((state) => state.subCategoryReducer.subCategoryList);
  const brandItems = useSelector((state) => state.brandReducer.brandList);
  const units = useSelector((state) => state.unitReducer.unitList);


  const categoryList = categories.map((item) => {
    const { name: label, id: value, ...rest } = item;
    return { value, label, ...rest };
  });

  const subCategoryList = subcategories.map((item) => {
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


  useEffect(() => {
    dispatch(category());
    dispatch(subcategory());
    dispatch(brand());
    dispatch(unit());
  }, [dispatch]);

  const { setValue, register, handleSubmit } = useForm({
    defaultValues: {
      purchase_price: "0.00",
      sale_price: "0.00",
    },
  });

  const handleCategoryChange = (e) => {
    setValue("category", e.value);
  };

  const handleSubCategoryChange = (e) => {
    setValue("subcategory", e.value);
  };

  const handleBrandChange = (e) => {
    setValue("brand", e.value);
  };

  const handleUnitChange = (e) => {
    setValue("unit", e.value);
  };

  const onSubmit = (data) => {
    setProduct(data);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

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
                New Product
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
                        name="name"
                        {...register("name", { required: true })}
                        placeholder="Product Name"
                        required
                      />
                    </Col>

                    <Col className="mb-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                      <Form.Label>
                        Category <span className="text-danger">*</span>{" "}
                      </Form.Label>
                      <Select
                        name="category"
                        onChange={handleCategoryChange}
                        ref={(e) => {
                          register("category", { required: true });
                        }}
                        options={categoryList}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Chose Category"
                        required
                      ></Select>
                    </Col>

                    <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                      <Form.Label>
                        Subcategory <span className="text-danger">*</span>{" "}
                      </Form.Label>
                      <Select
                        name="subcategory"
                        onChange={handleSubCategoryChange}
                        ref={(e) => {
                          register("subcategory", { required: true });
                        }}
                        type="text"
                        options={subCategoryList}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Chose Subcategory"
                        required
                      ></Select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-2">
                    <Col className="mb-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                      <Form.Label>
                        Brand <span className="text-danger">*</span>{" "}
                      </Form.Label>
                      <Select
                        name="brand"
                        onChange={handleBrandChange}
                        ref={(e) => {
                          register("brand", { required: true });
                        }}
                        type="text"
                        options={brandList}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Chose Brand"
                        required
                      ></Select>
                    </Col>

                    <Col className="mb-2" md={4} lg={4} xl={4} xxl={4} xs={12}>
                      <Form.Label>Purchase Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="purchase_price"
                        {...register("purchase_price", { required: true })}
                        placeholder="0.0"
                      />
                    </Col>

                    <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                      <Form.Label>Sale Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="sale_price"
                        {...register("sale_price", { required: true })}
                        placeholder="0.0"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-2">
                    <Col md={4} lg={4} xl={4} xxl={4} xs={12}>
                      <Form.Label>
                        Unit <span className="text-danger">*</span>{" "}
                      </Form.Label>
                      <Select
                        name="unit"
                        onChange={handleUnitChange}
                        ref={(e) => {
                          register("unit", { required: true });
                        }}
                        type="text"
                        options={unitList}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Chose Unit"
                        required
                      ></Select>
                    </Col>

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
                        {...register("status")}
                      />
                      <Form.Check
                        inline
                        name="status"
                        label="Not Available"
                        type="radio"
                        id="two"
                        {...register("status")}
                      />
                    </Col>
                  </Form.Group>
                  <hr />
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
    </AdminWraper>
  );
}

export default Add;
