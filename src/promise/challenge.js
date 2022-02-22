const fetchData = requeired('../utils/fetchData.js');
let API = 'https://rickandmortyapi.com/api/character/';
/**Aqui estoy haciendo como con los callbacks le estoy diciendo que haga el paso a paso para poder
 * llegar a lo que quiero buscar del personaje y nuveamente funciona como una especie de pipe
 */
fetchData(API)
    .then(data =>{
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));