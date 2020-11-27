import React, { Component } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

import "../../assets/Home/css/home-styles.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Calendar></Calendar>
            </div>
        )
    }
}