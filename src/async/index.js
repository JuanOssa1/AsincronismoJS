const doSomethingAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve("Asincrono"), 3000)
            : reject(new Error("Test Error"))
    });
}

const doSomething = async () => {
    /**Esto lo que hace es esperar a que la promesa se complete */
    const something = await doSomethingAsync()
    /**Si no le pongo awair pues no va esperar a que acabe y pasara de
     * largo como si lo hubiera ejecutado pero en realidad ha quedado pendiente
     */
    console.log(something);
}

console.log("before");
doSomething();
console.log("after");
/**Como vimos en ECMAS es que como la otra esta esperando el motor
 * va haciendo otras intrucciones
 */

const anotherFunciton = async () => {
    try {
        const something = await doSomethingAsync(); 
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log("before 1");
anotherFunciton();
console.log("after 1");