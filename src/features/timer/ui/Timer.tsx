import { useRef, useState } from 'react';
import "./Timer.css"

export const  Timer = ()  =>{
      const [, setTimerEnded] = useState(false);
      const [times] = useState<number[]>([0.1, 1, 10, 20, 30, 40]);
      const [remainingTime, setRemainingTime] = useState(0);
      //Links for storing timers ID's
      const timeoutRef = useRef<number | null>(null);
      const intervalRef = useRef<number | null>(null);
    
      const audio = new Audio("/bell.mp3")


      const clearTimers = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
        if(intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        setTimerEnded(false);
    }



    const startTimer = (minutes: number) => {
        //Clearing previous timers if they were exist
        clearTimers();
        //invert minutes to milliseconds and seconds to display at countdown
        const durationSec = minutes * 60;
        const durationMs = minutes * 60 * 1000
        setRemainingTime(durationSec)

        //Starting interval for cutdown for every second
        intervalRef.current = window.setInterval(()=> {
            setRemainingTime((prev) => {
                if(prev <= 1 ){
                    if(intervalRef.current){
                        //clearing the timer upon reaching of timer 0
                        audio.play();
                        clearInterval(intervalRef.current)
                    }
                    return 0;
                }
                return prev - 1
            })
        }, 1000)

        //staring timer on the expiration of which we set the end flag
        timeoutRef.current = window.setTimeout(() => {
            setTimerEnded(true)
        }, durationMs)
    }

    const resetTimer = () => {
        clearTimers();
        setRemainingTime(0);  
    }

    const minutes = Math.floor(remainingTime/ 60);
    const seconds = remainingTime % 60;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
        
          
    return (
        <div className='timer-container'>
            <div className="time-duration">
            {times.map((time,index) => (  
                <button className="time-duration-button" onClick={() => startTimer(time)}key={index}>
                    {time} min
                </button>
            ))
}
            </div>
                <h2 style={{color: 'black'}}>
                {remainingTime > 0 
                  ?`${formattedMinutes}:${formattedSeconds}` 
                  : "Choose a duration"}
                  </h2>
                <div className="button-container">
                <button className="reset-button" onClick={() => resetTimer()}>
                    Reset Timer
                    </button>
                </div>
        
            
            
        </div>
    );
};

