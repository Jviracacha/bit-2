'use strict';

export function showPokemons(pokemons){
    let html = '';
    for (const pokemon of pokemons){
        html += `
    <figure class="pokemon"> 
    <img src="${pokemon.imgPokemon}" alt="Imagen of ${pokemon.namePokemon}">
    <figcaption>${pokemon.namePokemon}</figcaption>
    </figure>
        `;
    }
    
    const $pokemons = document.querySelector('.pokemons');
    $pokemons.innerHTML = html;
}

export function showError(msg){
    alert (msg);
}



