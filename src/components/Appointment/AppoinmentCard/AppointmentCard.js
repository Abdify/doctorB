import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const AppointmentCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <div className="col-md-4">
            <div className="m-3 p-3 shadow-sm btn-light text-center">
                <h3 className="brand-text m-3">{booking.title}</h3>
                <h4>{booking.time}</h4>
                <button className="btn btn-brand m-3" onClick={() => setIsOpen(true)}>
                    BOOK APPOINTMENT
                </button>
                <AppointmentForm
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                    appointmentOn={booking.title}
                    date={date}
                />
            </div>
        </div>
    );
};

export default AppointmentCard;