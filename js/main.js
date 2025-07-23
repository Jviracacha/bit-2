"use strict";
import { getPokemons } from "../js/api.js";

const d = document;

const $main =d.querySelector("main");

d.addEventListener('DOMContentLoaded', async()=>{
    const Pokemons = await getPokemons();

    if (Pokemons.message === "success") showPokemons()

    //console.log(Pokemons);
})

function showPokemons(){
    console.log('showPokemons...');
    
}



