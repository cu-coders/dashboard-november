import React, { Component } from 'react';

import "../../assets/Settings/css/settings-style.css";

import profile from "../../assets/Settings/images/profile.png";
import headphone from "../../assets/Settings/images/Group 9.png";

export default class Settings extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">

                            {/* Setting Menu Start */}
                    <div className="container">
                        <div className="row settings-menu">
                            <div className="col-12 col-lg-10">
                                <div className="settings-button-container">
                                    <button className="settings-menu-button">Profile Settings</button>
                                    <button className="settings-menu-button">Account Settings</button>
                                    <button className="settings-menu-button">Privacy & Security</button>
                                    <button className="settings-menu-button">Notification</button>
                                    <button className="settings-menu-button">Usage & Statistics</button>
                                </div>
                            </div>
                            <div className="col-12 col-lg-2 settings-helpline">
                                <div className="settings-helpline-button row">
                                    <span className="col-3  mx-2 my-auto"><img src={headphone} alt="" width="140%" /></span>
                                    <span className="col-2 mx-2 my-auto">Need Any Help</span>
                                    <span className="col-4  mx-2 my-auto">8264962862</span>
                                </div>
                            </div>
                        </div>
                    </div>
                            {/* Setting Menu End */}

                            {/* Setting Form Start */}
                    <div className="container settings-form my-5 p-5">
                        <h4>Edit Profile</h4>
                        <form className="form-container">
                                    {/* Row 1 Start  */}
                            <div className="row">
                                <div className="col-md-3">
                                    <label className="settings-form-label">Company</label>
                                    <input className="settings-form-input" type="text" />
                                </div>

                                <div className="col-md-3">
                                    <label className="settings-form-label">User Name</label>
                                    <input className="settings-form-input" type="text" />
                                </div>

                                <div className="col-md-3">
                                    <label className="settings-form-label">Email</label>
                                    <input className="settings-form-input" type="email" />
                                </div>

                                <div className="col-md-3">
                                    <label className="settings-form-label">Joined Date</label>
                                    <input className="settings-form-input" type="text" />
                                </div>
                            </div>
                                        {/* Row 1 End */}


                            <div className="row">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label className="settings-form-label">Name</label>
                                            <input className="settings-form-input" style={{width:"100%"}} type="text" />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="settings-form-label">Birthday</label>
                                            <input className="settings-form-input" type="text" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="settings-form-label">Gender</label>
                                            <div className="settings-gender">
                                                    <input className="settings-form-input mx-2 my-auto " type="checkbox" name="gender"/>
                                                    <label className="settings-form-label d-inline mx-2 my-auto">Male</label>
                                                    <input className="settings-form-input mx-2 my-auto " type="checkbox" name="gender"/>
                                                    <label className="settings-form-label d-inline mx-2 my-auto">Female</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-11">
                                            <label className="settings-form-label">Address</label>
                                            <input className="settings-form-input" style={{width:"100%"}} type="text" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label className="settings-form-label">City</label>
                                            <input className="settings-form-input" type="text" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="settings-form-label">Country</label>
                                            <input className="settings-form-input" type="text" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="settings-form-label">Email</label>
                                            <input className="settings-form-input" type="email" />
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className="col-md-3 ">
                                    <div className="settings-choose-profile my-5">
                                        <h5 className="text-center my-2" style={{color:"#4B4279"}}>Choose Profile Picture</h5>
                                        <div className="settings-pic my-3">
                                            <img src={profile} alt="" width="60%"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button className="settings-pic-upload">Upload Now</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button className="settings-pic-cancel">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row settings-final-buttons">
                                <div className="col-sm-6">
                                    <button className="settings-deactivate">Deactivate my account</button>
                                </div>
                                <div className="col-sm-6">
                                    <button className="settings-update">Update</button>
                                </div>
                            </div>
                        </form>

                    </div>
                            {/* Setting Form End */}

                    {/* <div>
                        <img className="settings-sidebar" src={tab} alt=""/>
                    </div> */}
                </div>
                
            </>
        )
    }
}

