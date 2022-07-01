import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAxios = () => {



    const [character, setCharacter] = useState({})

    useEffect(() => {

        axios.get('https://randomuser.me/api/')

            .then(res => setCharacter(res.data.results))

    }, [])


    const getUser = () => {

        
        axios.get('https://randomuser.me/api/')

            .then(res => setCharacter(res.data.results))

    }

    console.log(character)

    return (

        <div className='container'>
            <h1>{character[0]?.name?.title} {character[0]?.name?.first} {character[0]?.name?.last}</h1>
            <h1><img src= {character[0]?.picture.large} alt="" /></h1>
            <h3>Email: {character[0]?.email} </h3>

            <button onClick={getUser}>next</button>

            
        </div>


    );
};

export default UserAxios;