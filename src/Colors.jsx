
import React from 'react';

const Colors = () => {

    const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

    const colorRandon = colors[Math.floor(Math.random() * colors.length)]

    document.body.style = `background: ${colorRandon}`

    return (
        <div>   
        </div>
    );
};

export default Colors;