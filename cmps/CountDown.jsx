const { useState, useEffect, useRef } = React





export function CountDown({toTime, startFrom = 1, onDone}) { 
    const [time, setTime] = useState(startFrom || 0);
    const intervalIdRef = useRef()

    useEffect(() => {
        if(toTime) {
            const diff =toTime - Date.now();
            const seconds = Math.ceil(diff / 1000);
            setTime(seconds);
        }
        intervalIdRef.current = setInterval(() => onIntervalTick(), 1000);
        console.log('intervalIdRef.current:', intervalIdRef.current)
        return () => clearInterval(intervalIdRef.current);
      }, []);

      function onIntervalTick() {
        //checkIfRed(time)
        setTime(prevTime => {
            if (prevTime <= 1) {
                clearInterval(intervalIdRef.current);
                onDone();
                return 0;
            }
            return prevTime - 1;
        });
    }
    // const lastSecond = time <= 6 ? `red` : `black`
    function checkIfRed(){
        // console.log('checkIfRed time:', time)
        if(time <= 6)
            {
            // console.log('red')
            return `#ff0000`
        }else{
            // console.log('black')
            return `#000000`
        }
    }

    return <section className="CountDownSection"  >
        <h1>Count Down</h1>
        <h2 style={{color: checkIfRed(time)}}>{time}</h2>
    </section>  
}