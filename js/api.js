
export async function getPokemons() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        //console.log('res:', res);
        if (!res.ok) throw "error"
        const data = await res.json ();
        //console.log('data:', data);
        return{message:"success", data}
    } catch (error) {
        //console.log('cath...error:', error);
        return{message:"error", data:"error"}
    }
    
}