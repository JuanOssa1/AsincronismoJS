let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //LLama la dependencia y permite hacer 
//peticiones
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); //Pasa cual es la peticiuonn en este caso un get
    xhttp.onreadystatechange = function (event) {
        //Si ekl estado en el que se encuentra es satisfactorio lo abre
        /**Hay 5 (0 a 4) estados open todavia cargando donde ya se cargo si hay una descarga en proceso y
         * compelatado y lo que queremos ver es que este completadpo
         */
        if(xhttp.readyState===4){
            if(xhttp.status===200){/**Este es el status de la peticion */
                return callback(null, JSON.parse(xhttp.responseText))//Aqui obtengo el llamado y el rimer null
                //seria el error pero como no queremos que envie error lo dejamos como null
            }else{
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){ //Aqui hago la peticion al primer personaje de la api
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){/**Aqui estoy obteniendo la otra url para saber en que dimension esta el
            personaje*/
            if(error3) return console.error(error3);
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        }) 
    }) 
});
/**
 * En este encadenamiento basicamente lo que estoy haciendo es ir entrando de a pcoos en el personaje 
 * que quiero y va llamando la funcion (callback) las veces que sea necesrio para poder cumplir con el requerimiento
 * de llegar a la dimension en la que se encuentra
 * todo esto se hace porque no puedo hacer peticiones al mismo tiempo si no
 * una a la vez
 */
