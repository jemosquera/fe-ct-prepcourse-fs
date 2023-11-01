/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
    var resul=[array];
   console.log(resul[0]);
}
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var primero =[array];
   console.log(primero[primero.length-1]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var primero =[array];
   console.log(primero[primero.length]);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   
   var primero =[array];
  var fin=primero.map((num) => {return num + 1;});
 console.log(fin);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var primero =[array];
   primero.push(elemento);
  console.log(primero);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var primero =[array];
   primero.unshift(elemento);
  console.log(primero);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabra = [palabras];
   var saludo='Hola ';
   var palabraSeparada = saludo.concat(palabra);
   
   console.log(palabraSeparada);
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var pintores = [array];
   
var existeDali = pintores.includes(elemento);
console.log(existeDali);

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   
   const suma = arrayOfNums.reduce((acumulador, valorActual) =>
	acumulador + valorActual, 0);

console.log(suma);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
var prome;

const suma = resultadosTest.reduce((acumulador, valorActual) =>
  acumulador + valorActual, 0);
prome=resultadosTest.length;
promedio=suma/prome;
console.log(suma);
console.log(prome);
console.log(promedio);
  
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var arr = arrayOfNums;
   var max = arr.reduce(function (a, b) {
     return Math.max(a, b);
   }, -Infinity);
   console.log(max);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   console.log(array);
   
   for(i=0;i<=array.length;i++){
            
       if(array[i]>=18){
       console.log(array[i]);
   
       } else return false;
   }
}
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia==1){
       console.log('es Domingo Fin de semana');
   }
   if(numeroDeDia==2){
       console.log(' LUNES: inicio de semana');
   }
   if(numeroDeDia==3){
       console.log('es MARTES ');
   }
   if(numeroDeDia==4){
       console.log(' MIERCOLES');
           }
   if(numeroDeDia==5){
       console.log('es JUEVES');
   }
   if(numeroDeDia==6){
       console.log(' VIERNES');
   }
   if(numeroDeDia==7){
       console.log('es SABADO Fin de semana');
   }
 
}

function empiezaConNueve(numA) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

 let myFunc = num => Number(num);
 var arr = Array.from(String(numA), myFunc);
console.log(arr);

   if(arr[0]==9){
   console.log(true);
   } else console.log(false);
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   //console.log(array);
  var comp=array[0];
  var contador=0;
     var tama=array.length;
  for(i=0;i<=array.length;i++){
           
      if(array[i]==comp ){
       contador++;
   
         } 
  }
  if(contador===tama){console.log('son iguales');
}
  else console.log('no son iguales')
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array=[];
   for(i=0;i<=60;i++){
            array.push(6*i);
           
   }
   console.log(array);
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var respuesta=[];
   for(i=0;i<=array.length;i++){
   if(array[i]>100){
       respuesta.push(array[i]);
    }
         
           
   }
   console.log(respuesta);
   
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var respuesta=[];
   var sumador=num;
   for(i=0;i<10;i++){
    sumador=sumador+2;
    respuesta.push(sumador);
    console.log('areglo:'+respuesta)
    if(sumador==10){console.log('Se interrumpió la ejecució:'); break;
   }
   }

   console.log(sumador);
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var respuesta=[];
   var sumador=num;
   for(i=0;i<10;i++){
    sumador=sumador+2;
    respuesta.push(sumador);
    console.log('areglo:'+respuesta)
    if(sumador==10){console.log('Se interrumpió la ejecució:'); break;
   }
 
   }
 sumador=sumador-respuesta[4];
   console.log(sumador);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
