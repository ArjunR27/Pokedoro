import React from 'react'
import { useState, useEffect } from 'react'


// initialTime = starting time that the user picked
// time = counter 
// setTime = helper function to set the counter 
// confirmed = whether user started or stopped the timer
function PokeTimer({ initialTime, time, setTime, confirmed }) {
    // const [count, setCount] = useState(time)

    console.log(confirmed)

    useEffect(() => {
        if (confirmed) {
            const interval = setInterval(() => {
                setTime(time => time - 1)
            }, 1000)

            return () => clearInterval(interval)
        }
        
        else {
            setTime(initialTime)
        }
        
    }, [confirmed])

    return (
        <h2>Count: {time}</h2>
    )
}

// function PokeTimer() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCount(count => count + 1)
//         }, 1000)

//         return () => clearInterval(interval)
//     }, [])

//     return (
//         <h2>Count: {count} </h2>
//     )
// }


export default PokeTimer