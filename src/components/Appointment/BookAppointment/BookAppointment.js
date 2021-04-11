import React from 'react';
import AppointmentCard from '../AppoinmentCard/AppointmentCard';

const BookAppointment = ({date}) => {
    const bookingData = [
        {
            title: "Teeth orthodontics",
            time: "8:00 AM - 10:00 AM",
            availableSeats: 10,
        },
        {
            title: "Teeth cleaning",
            time: "8:00 AM - 10:00 AM",
            availableSeats: 10,
        },
        {
            title: "Cavity protection",
            time: "8:00 AM - 10:00 AM",
            availableSeats: 10,
        },
    ]
    return (
        <section>
            <h2 className="brand-text text-center">Available appointments on {date.toDateString()}</h2>

            <div className="row">
                {
                    bookingData.map(booking => <AppointmentCard booking={booking} date={date} />)
                }
            </div>
        </section>
    );
};

export default BookAppointment;