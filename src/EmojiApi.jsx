import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Colors from './Colors';
import useCallApi from './Hooks/useCallApi';

const EmojiApi = () => {


    const {data: emoji, getData: getEmoji} = useCallApi('https://api.emojisworld.fr/v1/random')


    return (

        
        <div className='container'>

            <h1>{emoji.name}</h1>
            <div style={{fontSize: "80px"}}>{emoji.emoji}</div>

            <button onClick={getEmoji}>Next emoji</button>

            <Colors />

        </div>
    );
};

export default EmojiApi;