const fetchData = require("../utils/fetchData");
let API = 'https://rickandmortyapi.com/api/character/'

const anotherFunciton = async (url_api) => {
    try{
        /**Lo que hace en cada await es decir que espere a que cada peticion se cumpla
         * y luego ejecute la otra
         */
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch(error){
        console.error(error);
    }
}

console.log("Before");
anotherFunciton(API);
console.log("After");