import React from 'react';
import SideBar from "../../secure/SideBar/SideBar";
import TopHeader from "../../secure/TopHeader/TopHeader";
import Navbar from "../../secure/Dashboard/Navbar";

const AdminWraper = ( props, { children }) => {
    return (
        <>
            <section className="wrapper" data-menu="dashboard" data-submenu="">
                <SideBar/>
                <div className="main_body">
                    <TopHeader/>
                    <div className="body_container">
                        <div className="body_nav">
                            <Navbar/>
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