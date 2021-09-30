import React, {useState, useRef, useEffect} from "react";
import SideBar from "../../secure/SideBar/SideBar";
import TopHeader from "../../secure/TopHeader/TopHeader";
import Navbar from "../../secure/Dashboard/Navbar";


const AdminWraper = (props, { children }) => {
  const [wrapper, setWrapper] = useState(false);

  const hasWrapperClass = useRef(null);

  const asideToggleFn = () => {
    setWrapper(!wrapper);
    hassClass();
  };

  function hassClass (){
    console.log(hasWrapperClass);
    if(hasWrapperClass.current.classList[1]==='aside_close'){
      window.localStorage.setItem('isAside', 1)
    }else{
      window.localStorage.setItem('isAside', 0)
    }
  }

  return (
    <>
      <section className={`wrapper ${ wrapper ? 'aside_close' : '' }`} ref={hasWrapperClass} data-menu="dashboard" data-submenu="">
        <SideBar />
        <div className="main_body">
          <TopHeader parentCallback= {asideToggleFn} />
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
            <a href="https://freelanceitlab.com/" target="_blank">
              Freelance It Lab
            </a>
          </p>
        </div>
        <div className="wrapper_background"></div>
      </section>
    </>
  );
};

export default AdminWraper;
