import React, { useEffect, useState } from "react";
import axios from 'axios'

function ApiTeste() {

    const [pkmn, setPkmn] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/rowlet`)
            .then(response => {
                setPkmn(response.data.results)
            })
        }

        fetchData();
    }, [])



    return (
        <div>
            {pkmn}
        </div>
    );
}

export default ApiTeste