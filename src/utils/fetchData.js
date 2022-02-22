let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //LLama la dependencia y permite hacer 
//peticiones
//let API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api) =>{
    return new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); //Pasa cual es la peticiuonn en este caso un get
        xhttp.onreadystatechange = (() => {
        //Si ekl estado en el que se encuentra es satisfactorio lo abre
        /**Hay 5 (0 a 4) estados open todavia cargando donde ya se cargo si hay una descarga en proceso y
         * compelatado y lo que queremos ver es que este completadpo
         */
        if(xhttp.readyState===4){
            (xhttp.status===200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api))
        }
    });
    xhttp.send();
    });  
}
module.exports = fetchData;

