import React, { useState, useEffect } from 'react';
import useCounter from '../Hooks/useCounter';

const Contador = () => {

    // const [count, setCount] = useState(0)

    // const countFunction = () => {

    //     setCount(count + 1)
    // }

    const {counter, increment, decrement} = useCounter(10)



    useEffect(() => {
        const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

        const colorRandon = colors[Math.floor(Math.random() * colors.length)]

        document.body.style = `background: ${colorRandon}`
        console.log("Se ejecutó count")

    }, [counter])
    // document.body.style = `background: ${colorRandon}`


    return (
        <div className='container'>
            {counter}
            <button onClick={increment}>Incrementar</button>
        </div>
    );
};

export default Contador;