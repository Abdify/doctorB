import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    function handleCalenderChange(newDate) {
        setDate(newDate);
    }
    return (
        <div>
            <Nav />
            <AppointmentHeader handleCalenderChange={handleCalenderChange} />
            <BookAppointment date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;