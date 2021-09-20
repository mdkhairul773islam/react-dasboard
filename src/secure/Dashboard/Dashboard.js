import React, {useEffect} from 'react';
import AdminWraper from "../../components/layouts/AdminWraper";
import {useSelector, useDispatch} from 'react-redux'

import {users} from '../../redux/actions/userAction'
import {userList} from '../../redux/actions/userListAction'

function Dashboard(props) {
    const userData =  useSelector(state => state.userReducer.userList);
    const userDataList =  useSelector(state => state.userReducer.getUserList);
    const dispatch = useDispatch();

    /*useEffect(() => {
        dispatch(users());
    },[]);*/

    return (
        <AdminWraper>

            <button onClick={()=>dispatch(userList())} className="btn btn-success mb-5">Get User List</button>

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


            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                    { userData.map((data, $key) =>
                        <tr key={$key}>
                            <td>{$key+1}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.address}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </AdminWraper>
    );
}
export default Dashboard;
