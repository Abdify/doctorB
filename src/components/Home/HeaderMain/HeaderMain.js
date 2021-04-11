import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <div>
            <div style={{ height: "600px" }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>
                        Your New Smile <br /> Starts Here
                    </h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo aliquid, amet
                        sint similique accusamus iusto harum neque voluptatem consequatur!
                    </p>
                    <button className="btn primaryBtn">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;