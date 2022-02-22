function sumar(num1,num2){
    return num1 + num2;
}
function calcSum(num1,num2,callback){
    return callback(num1,num2); /**Aqui esta retornando el parametro callaback
    pero en forma de funcion*/
}

console.log(calcSum(2,2,sumar))/**Aqui como podemos observar vemos como le mandamos 
esa funcion a calclsum*/

function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000);/**El callback resulta util porque este solo se ejecutara cuando
    los datos de la funcion calback este listos o disponibles, de lo
    contrario no se ejecutara ya que no sabemos exactamente cuando llegaran esos
    datos*/
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);