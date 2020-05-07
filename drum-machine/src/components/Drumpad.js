import React, { useEffect, useState } from "react";


const inactive = {
    backgroundColor: "#D4D5D7"
}
const active = {
    backgroundColor : "#506680"
}

const Drumpad = props => {

    const [drumColor, setDrumColor] = useState({
        pad: inactive
    });

    const activatePad = () => {
        setDrumColor({ pad: active})
        setTimeout(() => setDrumColor({ pad: inactive}), 100);
    }

    const playSound = e => {
        const sound = document.getElementById(props.keyTrigger);
        sound.play();
        props.setPlayingSound(props.clipId)
        activatePad();
    }

    const handleKeyDown = e => {
        if (e.keyCode === props.keyCode) {
            playSound();
            activatePad();
            setTimeout(() => activatePad(), 100);
            props.setPlayingSound(props.clipId)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            }
        }, [handleKeyDown]);

        return (
        <div className="drum-pad" id={props.clipId} >
            <div 
                className="inner-drum-pad"
                onClick={playSound}
                style={drumColor.pad}>
                <audio className='clip' id={props.keyTrigger} src={props.clip}></audio>
                {props.keyTrigger}
            </div>
        </div>
    )
}

export default Drumpad;