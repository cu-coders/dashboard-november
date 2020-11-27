import React, { Component } from 'react';

import "../../assets/Forgot Password/css/forgot-styles.css";

import bubbles from "../../assets/Forgot Password/images/bubbles.png";

export default class Forgot extends Component {
    render() {
        return (
            <div>
                <div className="forgot-container">
                    <div>
                        <h6 className="forgot-heading">Forgot Password</h6>
                        <div className="container-fluid forgot-form">
                            <form>
                                <div className="row forgot-input-grp1">
                                    <div className="col-10 forgot-text-input">
                                        <input type="email" placeholder="Email Id" name="email"/>
                                        <hr />
                                    </div>
                                    <div className="col-2 forgot-submit-input">
                                        <input type="submit" value="Unlock" name="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <img className="bubble-image" src={bubbles} alt="" width="100%"/>
                </div>
            </div>
        )
    }
}