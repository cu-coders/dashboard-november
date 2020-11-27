import React, { Component } from 'react';

import "../../assets/User Job/css/job-styles.css";
import "react-calendar/dist/Calendar.css";

import person from "../../assets/User Job/images/Group 9875.png";
import headphone from "../../assets/User Job/images/Group 9.png";
import jobs from "../../assets/User Job/images/jobs.png";

export class Job extends Component {
    render() {
        return (
            <div className="job-body">
                <div className="row">
                    <div className="col-lg-9 m-auto">
                        <div className="job-top-text my-5">
                            <div className="m-auto">
                                <div className="my-auto px-4">
                                    <h5>
                                        Why Job is <span style={{color:"#E02020"}}>important?</span>
                                    </h5>
                                    <p style={{color:"#6D6889"}}>
                                        But I must explain to you how all this mistaken idea of <br />
                                        denouncing pleasure and praising pain was born...
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src={person} alt="" width="70%"/>
                            </div>
                            <div>
                                <button className="fa fa-close job-close-button" style={{fontSize:"16px"}}></button>
                            </div>
                            
                        </div>

                    </div>
                    <div className="col-12 col-lg-3 job-helpline m-auto p-5 job-centered">
                        <div className="job-helpline-button row my-4">
                            <span className="col-3  mx-2 my-auto"><img src={headphone} alt="" width="140%" /></span>
                            <span className="col-2 mx-2 my-auto">Need Any Help</span>
                            <span className="col-4  mx-2 my-auto">8264962862</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="">
                        <div className="row job-top-search-bar">


                            <div className=" job-select-job my-4">
                                <div>
                                    <label className="d-block m-auto small">Selecting Item type</label>
                                    <label className="d-block m-auto">All Lists</label>
                                </div>
                                <div>
                                    <select className="job-select form-control" style={{border:"0"}}>
                                        <option></option>
                                        <option>Job 1</option>
                                        <option>Job 2</option>
                                        <option>Job 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className=" job-select-job my-4">
                                <div>
                                    <label className="m-auto"><span className="fa fa-map mx-2"></span>Job ID</label>
                                </div>
                                <div>
                                    <select className="job-select  form-control" style={{border:"0"}}>
                                        <option></option>
                                        <option>Job 1</option>
                                        <option>Job 2</option>
                                        <option>Job 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className=" job-select-job my-4">
                                <div>
                                    <label className="m-auto"><span className="fa fa-map mx-2"></span>Job ID</label>
                                </div>
                                <div>
                                    <select className="job-select  form-control" style={{border:"0"}}>
                                        <option></option>
                                        <option>Job 1</option>
                                        <option>Job 2</option>
                                        <option>Job 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className=" job-select-job my-4">
                                <div>
                                    <label className="m-auto">Latest</label>
                                </div>
                                <div>
                                    <select className="job-select  form-control" style={{border:"0"}}>
                                        <option></option>
                                        <option>Job 1</option>
                                        <option>Job 2</option>
                                        <option>Job 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className=" job-select-job my-4 py-2">
                                    <button className="job-search-button"> <span className="fa fa-search"></span></button>
                            </div>

                        </div>
                    </div>
                    

                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="job-description-container col-md-9">
                                <div className="float-left">
                                    <h3 className="d-inline float-left mr-2"><span className="fa fa-html5 fa-md"></span></h3>
                                    <div className="job-description-set-left">
                                        <h4> Front-End</h4>
                                        <span className="d-block mt-5 job-description-id">Job ID-AD-34566</span>
                                    </div>
                                </div>
                                <div className="job-description-set-right">
                                    <h6>Today 10:45 AM</h6>
                                    <select className="d-block mt-5 job-description-select form-control">
                                        <option>Details</option>
                                        <option>Job 1</option>
                                        <option>Job 2</option>
                                        <option>Job 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div><span className="fa fa-bookmark-o fa-md m-4 float-right" style={{color:"#96A3B2"}}></span></div>
                                <div className="job-centered" style={{height:"150px"}}>
                                    <button className="job-status-btn job-hired-btn">hired</button>
                                </div>                                       
                            </div>
                        </div>

                        <div className="row">
                            <div className="job-description-container col-md-9">
                                <div className="float-left">
                                    <h3 className="d-inline float-left mr-2"><span className="fa fa-html5 fa-md"></span></h3>
                                    <div className="job-description-set-left">
                                        <h4> Back-End</h4>
                                        <span className="d-block mt-5 job-description-id">Job ID-AD-34566</span>
                                    </div>
                                </div>
                                <div className="job-description-set-right">
                                    <h6>Today 11:45 AM</h6>
                                    <select className="d-block mt-5 job-description-select form-control">
                                        <option>Details</option>
                                        <option>Job 1</option>
                                        <option>Job 2</option>
                                        <option>Job 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div><span className="fa fa-bookmark-o fa-md m-4 float-right" style={{color:"#96A3B2"}}></span></div>
                                <div className="job-centered" style={{height:"150px"}}>
                                    <button className="job-status-btn job-rejected-btn">rejected</button>
                                </div>                                       
                            </div>
                        </div>

                        <div className="row">
                            <div className="job-description-container col-md-9">
                                
                                <div className="">
                                    <div className="float-left">
                                        <h3 className="d-inline float-left mr-2"><span className="fa fa-html5 fa-md"></span></h3>
                                        <div className="job-description-set-left">
                                            <h4> AI</h4>
                                            <span className="d-block mt-5 job-description-id">Job ID-AD-34566</span>
                                        </div>
                                    </div>
                                    <div className="job-description-set-right">
                                        <h6>Today 01:52 PM</h6>
                                        <select className="d-block mt-5 job-description-select form-control">
                                            <option>Details</option>
                                            <option>Job 1</option>
                                            <option>Job 2</option>
                                            <option>Job 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div><span className="fa fa-bookmark-o fa-md m-4 float-right" style={{color:"#96A3B2"}}></span></div>
                                <div className="job-centered" style={{height:"150px"}}>
                                    <button className="job-status-btn job-review-btn">in review</button>
                                </div>                                       
                            </div>
                        </div>

                        <div className="row">
                            <div className="job-description-container col-md-9">
                                <div className="float-left">
                                    <h3 className="d-inline float-left mr-2"><span className="fa fa-html5 fa-md"></span></h3>
                                    <div className="job-description-set-left">
                                        <h4> UI</h4>
                                        <span className="d-block mt-5 job-description-id">Job ID-AD-34566</span>
                                    </div>
                                </div>
                                <div className="job-description-set-right">
                                    <h6>Yesterday 09:45 PM</h6>
                                    <select className="d-block mt-5 job-description-select form-control">
                                        <option>Details</option>
                                        <option>Job 1</option>
                                        <option>Job 2</option>
                                        <option>Job 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div><span className="fa fa-bookmark fa-md m-4 float-right" style={{color:"#96A3B2"}}></span></div>
                                <div className="job-centered" style={{height:"150px"}}>
                                    <button className="job-status-btn job-interview-btn">interviewing</button>
                                </div>                                       
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="row">
                            <div className="job-centered col-12">
                                <img className="img-fluid" src={jobs} alt=""/>
                            </div>
                        </div>

                        <div className="row my-5">
                            <div className="job-info-card card">
                                    <div>
                                        <h1 className="text-dark">1</h1>
                                        <span className="text-uppercase"> interviewing</span>
                                    </div>
                                        <button className="job-info-card-button"><span className="fa fa-arrow-right"></span></button>
                            </div>
                        </div>

                        <div className="row my-5">
                            <div className="job-info-card card">
                                    <div>
                                        <h1 className="text-dark">1</h1>
                                        <span className="text-uppercase"> rejected</span>
                                    </div>
                                        <button className="job-info-card-button"><span className="fa fa-arrow-right"></span></button>
                            </div>
                        </div>

                        <div className="row my-5">
                            <div className="job-info-card card">
                                    <div>
                                        <h1 className="text-dark">1</h1>
                                        <span className="text-uppercase"> in review</span>
                                    </div>
                                        <button className="job-info-card-button"><span className="fa fa-arrow-right"></span></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Job
