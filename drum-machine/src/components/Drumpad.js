import React, { useEffect } from "react";


const Drumpad = props => {
    console.log('props from Drumpad: ', props);

    const playSound = e => {
        console.log('key clicked', e)
        const sound = document.getElementById(props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        // this.activatePad();
        // setTimeout(() => this.activatePad(), 100);
        // this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
      }

    const handleKeyDown = e => {
        if (e.keyCode === props.keyCode) {
            console.log('keyboard down: handleKeyDown', e)
            playSound();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        // document.addEventListener('keyup', handleKeyUp)
      
        return () => {
          document.removeEventListener('keydown', handleKeyDown)
        //   document.removeEventListener('keyup', handleKeyUp)
        }
      }, [handleKeyDown]);

    return (
        <div className="drum-pad">
            <div 
                className="oneKeyboard"
                onClick={playSound}>
                {props.keyTrigger}
            </div>
            <audio className='clip' id={props.keyTrigger} src={props.clip}></audio>
        </div>
    )
}

export default Drumpad;