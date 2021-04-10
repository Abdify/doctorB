import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const infosList = [
        {
            title: "Opening hours",
            description: "We are open 24/7",
            icon: faClock,
            background: "primary"
        },
        {
            title: "Visit our location",
            description: "Brooklyn NY 1003 USA",
            icon: faMapMarker,
            background: "dark"
        },
        {
            title: "Call us now",
            description: "+123942395",
            icon: faPhone,
            background: "primary"
        },
    ]
    return (
        <section className="">
            <div className="row w-75 m-auto">
                {infosList.map((info) => (
                    <InfoCard info={info} />
                ))}
            </div>
        </section>
    );
};

export default BusinessInfo;