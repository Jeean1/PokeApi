
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useCallApi from './Hooks/useCallApi';


const BreakingBadAxios = () => {



    const {data: character} = useCallApi('https://www.breakingbadapi.com/api/character/random')


    console.log(character)

    return (
        <div className='container'>

            <h1> {character[0]?.name} </h1>
            <h2>  {character[0]?.nickname} </h2>
            <img src={character[0]?.img} alt="" />
            <h3> {character[0]?.occupation[0]} </h3>

        </div>
    );
};

export default BreakingBadAxios;