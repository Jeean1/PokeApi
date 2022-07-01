
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const useCallApi = (url) => {



    const [data, setData] = useState({})

    useEffect(() => {

        axios.get(url)

            .then(res => setData(res.data))

    }, [])


    console.log(data)



    const getData = () => {

        axios.get(url)
            .then(res => setData(res.data))

    }


    return { data, getData }






};

export default useCallApi;