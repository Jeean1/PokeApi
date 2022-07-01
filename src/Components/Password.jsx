import React, { useState, useEffect } from 'react';

const Password = () => {

    const [isVisible, setisVisible] = useState(true)

    const toggleIsVisible = () => setisVisible(!isVisible)


    useEffect(() => {

        const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

        const colorRandon = colors[Math.floor(Math.random() * colors.length)]

        document.body.style = `background: ${colorRandon}`
        console.log("Se ejecutó isVisible")
    }, [isVisible])

    // document.body.style = `background: ${colorRandon}`


    return (
        <div className='container'>

            <input type={isVisible ? "text" : "password"} />
            <button onClick={toggleIsVisible}>Ocultar/Mostrar</button>

        </div>
    );
};

export default Password;