import React, {useState, useEffect} from "react";
import SideBar from "../../secure/SideBar/SideBar";
import TopHeader from "../../secure/TopHeader/TopHeader";
import Navbar from "../../secure/Dashboard/Navbar";

const AdminWraper = (props, { children }) => {

  const [isAside, setAside] = useState(localStorage.getItem('aside_close') === 'true');
  const [dark, setDark] = useState(localStorage.getItem('dark-mode') === 'true');

  const asideToggleFn = () => { 
    setAside(!isAside);
    setDark(!dark);
  };

useEffect(() => {
  localStorage.setItem('aside_close', isAside);
  localStorage.setItem('dark-mode', dark);
}, [isAside, dark]);

  return (
    <>
      <section className={`wrapper ${ isAside ? 'aside_close' : ''} ${ dark ? 'dark-mode' : ''}`} data-menu="dashboard" data-submenu="">
        <SideBar asideToggle= {asideToggleFn} />
        <div className="main_body">
          <TopHeader asideToggle= {asideToggleFn} />
          <div className="body_container">
        
            <div className="body_nav">
              <Navbar />
            </div>
            <div className="body_content">{props.children}</div>
          </div>
        </div>
        <div className="developer">
          <p>
            Developed By : &nbsp;
            <a href="https://freelanceitlab.com/">
              Freelance It Lab
            </a>
          </p>
        </div>
        <div className="wrapper_background" onClick={asideToggleFn}></div>
      </section>
    </>
  );
};

export default AdminWraper;
