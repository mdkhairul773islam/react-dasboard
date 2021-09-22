import React from 'react';
import SideBar from "../../secure/SideBar/SideBar";
import TopHeader from "../../secure/TopHeader/TopHeader";
import Navbar from "../../secure/Dashboard/Navbar";

import {useSelector} from 'react-redux'

const AdminWraper = ( props, { children }) => {
    const sidebarClose =  useSelector(state => state.sideBarReducer.getSideBarCollaps);

    console.log(sidebarClose);

    return (
        <>
            <section className={`wrapper ${sidebarClose ? 'aside_close' : ''}`} data-menu="dashboard" data-submenu="">
                <SideBar/>
                <div className="main_body">
                    <TopHeader/>

                    <div className="body_container">
                        <div className="body_nav">
                            <Navbar />
                        </div>
                        <div className="body_content">
                            { props.children }
                        </div>
                    </div>
                </div>
                <div className="developer">
                    <p>Developed By : <a href="https://freelanceitlab.com/" target="_blank">Freelance It Lab</a></p>
                </div>
                <div className="wrapper_background"></div>
            </section>

        </>
    );
};

export default AdminWraper;