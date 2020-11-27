import React, { Component } from 'react';

import "../../assets/Lock/css/lock.css";

import bubbles from "../../assets/Lock/images/bubbles.png";

export default class Lock extends Component {
    render() {
        return (
            <div>
                <div className="lock-container">
                    <div>
                        <h6 className="lock-heading">Unlock to access Dashboard</h6>
                        <div className="container-fluid lock-form">
                            <form>
                                <div className="row lock-input-grp1">
                                    <div className="col-10 lock-text-input">
                                    <input type="password" placeholder="Password" name="password"/>
                                        <hr />
                                    </div>
                                    <div className="col-2 lock-submit-input">
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