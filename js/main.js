"use strict";
import { getData } from '../js/api.js';
import { showPokemons,showError } from '../js/shows.js';


//const $main =d.querySelector("main");

document.addEventListener ('DOMContentLoaded',()=>{
    getPokemons();
}
);

async function getPokemons() {
    const res = await getData();
    if (res.message === 'success') 
        setPokemons(res.data.results);
    else 
        showError (res.message);
}

async function getPokemon(result){
    const res = await getData(result.url);
    if (res.message === 'success') {
        const pokemon = res.data;
        const { name, sprites} = pokemon;
        return {namePokemon:name, imgPokemon:sprites.front_default};
    }
    else 
        showError (res.message);
}

async function setPokemons(results) {
    const pokemons = [];
    for (const result of results) {
        const pokemon = await getPokemon(result);
        pokemons.push(pokemon);
    }
    showPokemons(pokemons);
}



