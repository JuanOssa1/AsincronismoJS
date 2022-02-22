const somethingWillHappen = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('hey!');
        } else {
            reject("Chispas!");
        }
    });
};

/**
 * Como puede resolver o puede rechazar entonces hay que usar then para que
 * la funcion sepa que hacer luego
 */
somethingWillHappen()
    .then(response=>console.log(response)) /**Aqui manejo cuando resuelve */
    .catch(err =>console.error(err)); /**Y aqui cuando rechaza */


    const somethingWillHappen2 = () =>{
        return new Promise((resolve,reject)=>{
            if(true){
                setTimeout(()=>{/**Es una funcion anonima tipo arrow function
                    ademas aqui estoy poniendo el tiempo que tardara en ejecutarse */
                    resolve('True');
                },2000)
            } else {
                const error = new Error('NoOoOoOo!');
                reject(error);
            }
        });
    };

    somethingWillHappen2()
    .then(response=>console.log(response)) /**Aqui manejo cuando resuelve */
    .catch(err =>console.error(err)); /**Y aqui cuando rechaza */
    /**Aqui yo puedo poner mas thens antes del catch por si quiero hacer mas cosas no tienen que ser
     * solo then y catch
     */

    /**Promise.all klo que hace es ejecutar todas las promesas que hicimos */
    Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('Arreglo de resultados', response);
    })
    .catch(err=>{
        console.error(err)
    })