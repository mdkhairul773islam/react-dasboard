import React, { useEffect } from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import { DataService } from "../../config/dataService/dataService";

import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

function Dashboard(props) {
  useEffect(() => {
    const res = DataService.get("user-list");
    console.log("res", res);
  });
  return (
    <AdminWraper>
      <div className="box_wrapper">
        <div className="dash_box box_1">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_2">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_3">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_4">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_5">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_6">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_7">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_8">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_9">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_10">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_11">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
        <div className="dash_box box_12">
          <h2>Today's Income</h2>
          <h3>1,00.00 Tk</h3>
        </div>
      </div>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </AdminWraper>
  );
}
export default Dashboard;
