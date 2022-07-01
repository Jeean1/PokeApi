import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useCallApi from '../Hooks/useCallApi';
import useCounter from '../Hooks/useCounter';
import Colors from '../Colors';


const PokeApi = () => {


    const [weightUnit, setWeightUnit] = useState("hectograms")
    const [pokemonWeight, setPokemonWeight] = useState(0)

    const [isDecimetres, setisDecimetres] = useState(true)
    const [pokemonHeight, setPokemonHeight] = useState(0)


    const [pokemon, setPokemon] = useState({})

    useEffect(() => {

        let id = Math.floor(Math.random() * 600) + 1

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)

            .then((res) => {
                setPokemon(res.data)
                setPokemonWeight(res.data.weight)
                setPokemonHeight(res.data.height)

            })

    }, [])

    console.log(pokemon)

    const changeWeight = () => {

        if (weightUnit === "hectograms") {
            setPokemonWeight(pokemonWeight / 10)
            setWeightUnit("kilograms")
        } else {
            setPokemonWeight(pokemonWeight * 10)
            setWeightUnit("hectograms")
        }

    }

    const changeHeight = () => {

        if (isDecimetres) {
            setPokemonHeight(pokemonHeight / 10)
            setisDecimetres(false)
        } else {
            setPokemonHeight(pokemonHeight * 10)
            setisDecimetres(true)
        }

    }


    const getPokemon = () => {

        let id = Math.floor(Math.random() * 600) + 1

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res) => {
                setPokemon(res.data)
                setPokemonWeight(res.data.weight)
                setPokemonHeight(res.data.height)

            })

    }








    return (

        <div className='style-container'>

            <Colors />

            <h1>{pokemon?.name}</h1>

            <img src={pokemon?.sprites?.other.dream_world.front_default} style={{ width: '190px' }} />

            <h3>weight: {pokemonWeight} {weightUnit}</h3>
            <h3>height: {pokemonHeight} {isDecimetres ? "Decimetres" : "Meters"}</h3>
            <h3>type : {pokemon?.types?.[0].type.name}</h3>

            <div className="container-buttons">

                <button onClick={changeHeight} style={{background: "lightblue"}}>Change to meters</button>
                <button onClick={changeWeight} style={{background: "lightgreen"}}>Change to hectograms</button>
                <button onClick={() => { getPokemon() }} style={{background: "orange"}}>Next pokemon</button>

            </div>

        </div>
    );
};

export default PokeApi;