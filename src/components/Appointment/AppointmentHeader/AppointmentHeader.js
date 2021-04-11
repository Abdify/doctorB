import React from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import chair from "../../../images/chair.png";

const AppointmentHeader = ({ handleCalenderChange }) => {
    return (
        <main>
            <div style={{ height: "600px" }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>Appointment</h1>
                    <Calendar onChange={handleCalenderChange} value={new Date()} />
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;