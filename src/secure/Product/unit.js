import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import AdminWraper from "../../components/layouts/AdminWraper";
import Navbar from "../../secure/Product/navbar";
import ListUnit from "./Component/listUnit";
import { DataService } from "../../config/dataService/dataService";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Unit(props) {
  const [units, setUnits] = useState([]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      unit: "",
    },
  });

  const onSubmit = async (data, e) => {
    try {
      const res = await DataService.post("unit-store", data);
      setUnits(res.data);
    } catch (error) {
      console.log("error");
    }
    e.target.reset();
  };

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
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                <ListUnit units={units} />
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
