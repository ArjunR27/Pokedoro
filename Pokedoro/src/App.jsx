import PokeTimer from './PokeTimer.jsx'
import { useState } from 'react'


// function MyButton({onClick}) {
//     return (
//         <button onClick={onClick} > Button! </button>
//     );
// }

function App() {
    // const [click, setCount] = useState(0);

    // const incrementCount = () => {
    //     setCount(click => click + 1)
    // }
    const [initialTime, setInitialTime] = useState(0)
    const [time, setTime] = useState(0)
    const [confirmed, setConfirmed] = useState(false)


    return (
        <div>
            <input
            type = "number"
            value = {initialTime}
            onChange={(e) => {
                setTime(e.target.value)
                setInitialTime(e.target.value)
                }} />
            
            <button onClick = {() => setConfirmed(confirmed => !confirmed)}>
                Start/Stop!
            </button>

            <PokeTimer initialTime={initialTime} time={time} setTime={setTime} confirmed={confirmed}/>

        </div>
        // <div>
        //     <h1> Count: {click} </h1>
        //     <MyButton onClick={incrementCount}/>  
        // </div>
    );
}

export default App;