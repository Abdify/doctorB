import React, { useState } from 'react';
import './NotFound.css';
const NotFound = () => {
    
    const [position, setPosition] = useState({top: "25%", left: "45%"});

    function handleMove(e){
        setPosition({top: e.pageY, left: e.pageX});
    }
    const mousePositionStyle = {
        top: position.top,
        left: position.left,
    }

    return (
        <div className="not-found" onMouseMove={handleMove}>
            <div class="text">
                <h1>404</h1>
                <h2>Uh, Ohh</h2>
                <h3>
                    Sorry can't find what you are looking for, its so dark in here <br/> and I'm probably
                    working on something else!
                </h3>
                <h3>Go back</h3>
                <h3>Good luck!</h3>
            </div>
            <div class="torch" style={mousePositionStyle}></div>
        </div>
    );
};

export default NotFound;