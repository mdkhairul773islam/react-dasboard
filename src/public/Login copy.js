import React, {useState, useEffect} from 'react';
import '../dist/css/credential.css'

/** imported login images **/

import bKas from '../dist/images/icon/bkash.png';
import rocket from '../dist/images/icon/rocket.png';
import dbbl from '../dist/images/icon/dbbl.png';
import UserWraper from "../components/layouts/UserWraper";

import {useHistory} from "react-router";
import {Link} from "react-router-dom";


import {DataService} from '../config/dataService/dataService';

const Login = () => {

    useEffect(() => {

        console.log('DataService', DataService.get('dashboard'));
        
        const getData = async () => {  
        
            await  DataService.get('dashboard')  
            .then(res => {  
              console.log(res.data)  
            })  
            .catch(err => {  
              console.log(err)  
            });  
          }  

          //getData();
        
    }, []);

    const history = useHistory();

    const [userData, setUserData] = useState(
        {
            username: '',
            password: '',
        }
    );

    const [errorMessage, setErrorMessage] = useState(
        {
            value:'',
        }
    );

    const handleInputChange = (e) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //if username or password field is empty, return error message
        if (userData.username === "" || userData.password === "") {
            setErrorMessage((prevState) => ({
                value: "Empty username/password field",
            }));

        } else if (
            userData.username.toLowerCase() === "admin" &&
            userData.password === "123456"
        )

        {
            //Signin Success
            localStorage.setItem("isAuthenticated", "true");
            //window.location.pathname = "/admin";
            history.push("/admin");
        } else {
            //If credentials entered is invalid
            setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
            return;
        }
    };

    return (
        <UserWraper>
            <section className="credential_section">
                <div className="section_cover">
                    <div className="credential_div">
                        <div className="form_box">
                            <h2>We are <span>Admin</span></h2>
                            <form action="" method="GET">
                                <div className="form_group">
                                    <input type="email" name="username" onChange={
                                        (e)=>handleInputChange(e)
                                    } className="form_control"
                                           placeholder="User name" autoComplete="off" autoFocus />
                                </div>
                                <div className="form_group">
                                    <input type="password" name="password"
                                           onChange={
                                               (e)=>handleInputChange(e)
                                           }
                                           className="form_control"
                                           placeholder="Password" />
                                </div>
                                <div className="form_group form-remeber">
                                    <div className="form-check">
                                        <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <Link to="/" >Forgot password</Link>
                                </div>
                                <button type="submit" onClick={handleSubmit} className="submit_btn adad">Login</button>
                            </form>
                        </div>
                    </div>

                    <div className="company_title">
                        <div className="container_box">
                            <div className="company_brand">
                                <img src={require('../dist/images/logo/freelanceitlab.png').default } alt="" />
                                    <h3>Freelance IT Lab</h3>
                            </div>
                            <div className="company_info">
                                <div className="info">
                                    <h5>Mymensingh Office</h5>
                                    <p>Sarkar Monzil, 22 Coronation Road, Sankipara,</p>
                                    <p>Mymensingh</p>
                                    <p>Mobile : 01839973100, 01937476716</p>
                                    <p>E-mail : mrskuet08@gmail.com</p>
                                </div>
                                <div className="info">
                                    <h5>Khulna Office</h5>
                                    <p>219, Maheswar Pasha Main Road, KUET, Khulna</p>
                                    <p>Mobile : 01937476716</p>
                                </div>
                            </div>
                            <div className="payment_method">
                                <div className="payment_info">
                                    <h4><img src={bKas}  alt="" />Bkash</h4>
                                    <p><i className="icon ion-ios-arrow-dropright-circle"></i> 01839 973100 (Personal)
                                    </p>
                                    <p><i className="icon ion-ios-arrow-dropright-circle"></i> 01937 476716 (Personal)
                                    </p>
                                </div>
                                <div className="payment_info">
                                    <h4><img src={rocket} alt="" /> Rocket</h4>
                                    <p><i className="icon ion-ios-arrow-dropright-circle"></i> 01937 476716 (Personal)
                                    </p>
                                </div>
                                <div className="payment_info">
                                    <h4><img src={dbbl} alt="" /> DBBL Bank</h4>
                                    <p><i className="icon ion-ios-arrow-dropright-circle"></i> A/C Name : Freelance IT
                                        Lab</p>
                                    <p><i className="icon ion-ios-arrow-dropright-circle"></i> A/C No : 156. 110. 10965
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserWraper>
    );
};

export default Login;