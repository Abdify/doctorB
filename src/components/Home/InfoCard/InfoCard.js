import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4">
            <div
                className={`info-container d-flex align-items-center justify-content-center p-3 info-${info.background} text-white`}
            >
                <h1 className="me-3">
                    <FontAwesomeIcon icon={info.icon} />
                </h1>
                <div>
                    <h3>{info.title}</h3>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;