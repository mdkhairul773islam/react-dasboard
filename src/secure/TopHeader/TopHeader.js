import React, { useRef } from 'react';

import {useDispatch} from "react-redux";
import {sideBarAction} from "../../redux/actions/sideBarAction";

function TopHeader(props) {

    const inputEl = useRef(null)
    const dispatch = useDispatch();
    const getData = () =>{
        dispatch(sideBarAction());
    }

    const handle = () => {
        console.log(inputEl.current.classList[0]);
    };

    return (
        <nav className="main_nav">
            <ul className="function_menu">
                <li className="user_dropdown">
                   <a href="#" onClick={getData}>
                       {/*<p ref={inputEl} className="HelloADER adad"></p>*/}
                   {/* <a href="#" id="aside-toggle">*/}
                        <i className="icon ion-ios-menu io-23"></i>
                    </a>
                    <button onClick={handle}>Click me</button>
                </li>
            </ul>

            <ul className="user_menu">

                <li className="user_dropdown">
                    <a href="#" className="menu-button">
                        <i className="icon ion-ios-mail io-21"></i>
                    </a>
                    <ul className="sub_menu">
                        <li className="head">
                            <a href="#">
                                <h6>You have 2 Message</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Awesome aminmate.css</span>
                                <small>10 minit ago</small>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Awesome aminmate.css</span>
                                <small>10 minit ago</small>
                            </a>
                        </li>
                    </ul>
                </li>


                <li className="user_dropdown">
                    <a href="#" className="menu-button">
                        <img src={require('../../dist/images/user/02.png').default } alt="" />
                    </a>
                    <ul className="sub_menu">
                        <li className="head">
                            <a href="profile.html">
                                <h6>Username</h6>
                                <small>Supperadmin</small>
                            </a>
                        </li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="login.html">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default TopHeader;