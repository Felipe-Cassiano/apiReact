import React, { useState } from "react";

function ApiTeste() {

    //recebe o valor da imagem do pokémon escolhido
    const [pkmnImg, setPkmnImg] = useState('')
    //decide qual pokémon vai ser escolhido
    const [pkmnId, setPkmnId] = useState('')

    //função assíncrona para dar fetch() na PokeAPI e receber o JSON do pokémon
    async function testeApi(pkmnId) {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnId}`); //fetch() na API
            const dataPkmn = await res.json(); //transforma o fetch() em um objeto JSON
            setPkmnImg(dataPkmn.sprites.front_default); //denomina o valor da imagem do pokémon
        }
        catch (err) {
            console.error(err) //sinalizar caso aconteça algum erro
        }
    }

    //função que chama a testeApi ao clicar no botão
    const handleSrc = () => {
        testeApi(pkmnId);
    }

    //função que define qual pokémon vai ser escolhido, com base no valor do input
    const handleChange = (event) => {
        setPkmnId(event.target.value.toLowerCase());
      };


    return (
        <div>
            <input type="text" 
            onChange={handleChange}
            />

            <button 
            onClick={handleSrc}
            >Try</button>

            <img src={pkmnImg ? pkmnImg : 'https://placehold.co/96'} alt="" />
        </div>
    );
}

export default ApiTeste