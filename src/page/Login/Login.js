import React, { Component } from 'react';

import "../../assets/Login/css/login-styles.css";

import bubbles from "../../assets/Login/images/bubbles.png";

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-container">
                    <div>
                        <h6 className="login-heading">Login to access Dashboard</h6>
                        <div className="container-fluid login-form">
                            <form>
                                <div className="row login-input-grp1">
                                    <div className="col-10 login-text-input">
                                        <input type="email" placeholder="abc@gmail.com" name="email"/>
                                        <hr />
                                        <input type="password" placeholder="Password" name="password"/>
                                    </div>
                                    <div className="col-2 login-submit-input">
                                        <input type="submit" value="Sign In" name="submit"/>
                                    </div>
                                </div>
                                <div className="row login-input-grp2">
                                    <div className="col-sm-7">
                                        <input type="checkbox" name="check" />
                                        <label className="mx-3">Remember me</label>
                                    </div>
                                    <div className="col-sm-5">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <img className="bubble-image m-auto" src={bubbles} alt="" width="99%"/>
                </div>
            </div>
        )
    }
}