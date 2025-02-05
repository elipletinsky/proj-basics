const { useState, useEffect } = React


export function MouseMonitor() {


    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [isOn, setIsOn] = useState(true)


    useEffect(() => {
        if (isOn) document.addEventListener('mousemove', updatePos)
        return () => {
            document.removeEventListener('mousemove', updatePos)
        }
    }, [isOn])


    function updatePos(ev) {
        const { x, y } = ev
        setPos({ x, y })
    }


    const btnText = isOn ? 'Stop' : 'Start'
    return (
        <section className="mouse-monitor">
            <h1>Mouse Position</h1>
            <p>
                {pos.x}px, {pos.y}px
            </p>
            <button onClick={() => setIsOn(isOn => !isOn)}>{btnText}</button>
        </section>
    )


}
