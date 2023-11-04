/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var may= nombre.split('');
  console.log(may[0].charAt(0).toUpperCase()+ may.slice(1).join(''));
}

function cb(){
  // console.log('listo');
   }
   function invocarCallback(cb) {
      // Invoca/ejecuta el callback `cb`.
      // [NOTA]: no debes reotrnar nada.
      // Tu código:
      return cb();
   }

   function cb(num1,num2){
      //console.log('listo');
      var resul=(num1+num2);
      console.log(resul);
            }
      function operacionMatematica(num1, num2, cb) {
         // En este ejercicio recibirás dos números y un callback.
         // El callback realiza una operación matemática, por lo que necesita de los dos números.
         // Retorna el resultado del callback pasándole como parámetros los números.
         // Tu código:
      cb(num1,num2);
         }

function cb(arrayOfNumbers){
   //console.log('listo');
   const suma = arrayOfNumbers.reduce((acumulador, valorActual) =>
	acumulador + valorActual, 0);
   console.log(suma);
    
   }
function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb(arrayOfNumbers);
}
//var arraynu=[1,2,3];
//sumarArray(arraynu,cb);

function cb(item){
   console.log(item);
    }

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  array.forEach(item => {cb(item);});
  
}
//var array=[1,2,3];
//forEach(array,cb);

function cb(item){
   var reArr=[];
   reArr.push(item);
   console.log(reArr);
    }
function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   array.forEach(item => {cb(item);});
}
//var array=[1,2,3];
//map(array,cb);

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   
   var resul=[];
   //var x=reArr.split('');
   for(i=0;i<arrayOfStrings.length;i++){
        var arr=arrayOfStrings[i].split('');
      if(arr[0]=='a'){
         resul.push(arrayOfStrings[i]);
               } 
     
   }
   console.log(resul);
   //       
}//filter(['edwin','ana','angelo','carlos','felipe','alicia']);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
