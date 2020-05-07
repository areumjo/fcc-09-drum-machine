import React, { useState } from "react";
import Drumpad from './Drumpad';

const Drumboard = props => {
    // console.log('durmboarding getting state', props);
    const drumPanel = props.drumSound;
    const [plyaingSound, setPlayingSound] = useState('');

    return (
        <div id="display">
            <p>drumboard</p>
            <div className="needGrid">
            {drumPanel.map((e,index) => {
                return <Drumpad 
                    key={index}
                    keyCode={e.keyCode}
                    keyTrigger={e.keyTrigger}
                    id={e.id}
                    plyaingSound={plyaingSound}
                    setPlayingSound={setPlayingSound}
                />               
            })}
             <p>Now playing: {plyaingSound}</p>
            </div>
        </div>
    )
}

export default Drumboard;