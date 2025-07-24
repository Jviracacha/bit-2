"use strict";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function getData(url = API_URL) {
    try {
        const res = await fetch(url);
        //console.log('res:', res);
        if (!res.ok) throw "error";
        const data = await res.json ();
        //console.log('data:', data);
        return{message:"success", data};
    } catch (error) {
        //console.log('cath...error:', error);
        return{message:"An error ocurred in API call", data:"error"};
    }
    
}
