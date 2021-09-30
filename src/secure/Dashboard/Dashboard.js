import React, {useEffect} from "react";
import AdminWraper from "../../components/layouts/AdminWraper";
import { useDispatch } from "react-redux";
import {userList} from "../../redux/actions/userListAction";

function Dashboard(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(dispatch(userList()));
  }, [])

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
    </AdminWraper>
  );
}
export default Dashboard;
