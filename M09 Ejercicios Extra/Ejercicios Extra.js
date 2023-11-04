/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array2=[];
var prop=Object.keys(objeto);
console.log(prop);
for(i=0;i<prop.length;i++){
array2.push([prop[i],objeto[prop[i]]]);

}
console.log(array2);
}
//deObjetoAarray(objeto={D: 1, B: 2, C: 3})

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objfinal={};
   var contador=1;
   var arrayC=string.split('').sort();

   
   for(i=0;i<arrayC.length;i++){
      if(arrayC[i]==arrayC[i+1]){
      contador++;
      }else{
      objfinal[arrayC[i]]=contador;
      contador=1;
   }
   }
   console.log(objfinal);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

var arrStr=string.split('');
var resu=[];
for(i=0;i<arrStr.length;i++){
if(arrStr[i]==string[i].toLowerCase()){
      var cambio=arrStr[i].toUpperCase();
   resu.push(cambio);
}
else {

var cambio=string[i].toLowerCase();
resu.push(cambio);
}
}console.log(resu.join(''));
}capToFront('soyHENRY') 

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var resu=[];
   var arrStr=frase.split(' ');
   for(i=0;i<arrStr.length;i++){
   var arry2=arrStr[i].split('');

   for(e=0;e<arry2.length;e++){
      resu.unshift(arry2[e]);
   }
}
console.log(resu.join(''));
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num=numero.toString();
   var resu=[];
   var arrStr=[];
      
   var arrStr=num.split('');
   console.log(arrStr);
   for(i=0;i<arrStr.length;i++){
      resu.unshift(arrStr[i]);
    }
   
if(resu.join('')==arrStr.join('')){console.log('el numero es CAPICUA');}else {console.log('no ES CAPICUA')}
console.log(resu.join(''));

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var resu=[];
   var arrStr=[];
   var arrStr=string.split('');
   for(i=0;i<arrStr.length;i++){
      if(arrStr[i]=='a' || arrStr[i]=='b' || arrStr[i]=='c'){
         
         //console.log('resu.unshift(arrStr[i]);') 
      } 
         else{
      resu.push(arrStr[i]);
   }
}
console.log(resu.join(''));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var resu=[];
   console.log(arrayOfStrings);
   //var arrStr=arrayOfStrings.split(' ');
   for(i=0;i<arrayOfStrings.length;i++){
   var arry2=arrayOfStrings[i].split('');

   console.log(arry2.length);

}
console.log(resu);
}// NO PUDE CON ESTE

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resu=[];
     for(i=0;i<array1.length;i++){
      
for(e=0;e<array2.length;e++){
if(array1[i]==array2[e]){
   
   resu.push(array1[i]);}
}
   
}
console.log(resu);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
