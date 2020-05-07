import React from "react";

const Drumboard = props => {

    return (
        <div className="drumboard">
            <h3>Drumboard</h3>
            <p>your are playing</p>
            <p id="display" className="inner-display">{props.plyaingSound}</p>
        </div>
    )
}

export default Drumboard;