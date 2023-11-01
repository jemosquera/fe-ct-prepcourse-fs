/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var animal={ nombre,edad,

   };
    animal.nombre=nombre;
   animal.edad=edad;
   function crearP(){
      animal['meow']='Meow!';
      console.log(animal.meow);
   }
   crearP();
   console.log(animal);
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario={nombre,email,password}
   usuario.nombre=nombre;
   usuario.email=email;
   usuario.password=password;
   console.log(usuario);
}
var objeto={};
function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
 
  objeto=[propiedad];
   console.log(objeto);
   
}

objeto={};
function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
  
   objeto={[metodo]: function() {    }};
   console.log(objeto.metodo);
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var numeroMisterioso=5;
   
   var objeto={numeroMisterioso,   
   };
 
   objeto.numeroMisterioso=(objeto.numeroMisterioso*objetoMisterioso);
   
   console.log(objeto.numeroMisterioso);
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
var nombre,edad;
   var objeto={ nombre,edad,};
   delete objeto[propiedad];
   console.log(objeto);

   
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var nombre,edad, email;
   var objetoUsuario={ nombre,edad,email};
   
   objetoUsuario.nombre='eduin';
   if(objetoUsuario.email==undefined){  
      console.log(false);
   } else console.log(true);

}
function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
    var nombre,edad, cargo;
    objeto={nombre, edad,cargo, };
    console.log(objeto.hasOwnProperty(propiedad));
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
     var nombre,edad,password1;
     objetoUsuario={nombre:'eduin', edad:15,password1:123, };
    if(objetoUsuario.password1==password){ console.log(true);} else console.log(false);
   
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   var nombre,edad,password1;
   objetoUsuario={nombre:'eduin', edad:15,password1:123, };
   objetoUsuario.password1=nuevaPassword;
   console.log(objetoUsuario);
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario={nombre:'eduin', edad:15,password1:123, arr:['carlos','longa']};
   objetoUsuario.arr.push(nuevoAmigo);
   console.log(objetoUsuario);

}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   var esPremium;
   objetoMuchosUsuarios= [usuario={esPremium,},usuario={esPremium,}];
   for(var i=0;i<objetoMuchosUsuarios.length;++i){
objetoMuchosUsuarios[i].esPremium=usuario.esPremium=true;
     
}
console.log(objetoMuchosUsuarios);
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   
   posts=[post={likes:1,},post={likes:2,},post={likes:3,}];
   console.log(posts);
   var suma=0;
   for(var i=0;i<posts.length;++i){
      suma+=posts[i].likes
   }
  console.log(suma);
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   var resul,final;
   objetoProducto={precio:10,porcentajeDeDescuento:0.2,calcularPrecioDescuento: function(){
   resul=objetoProducto.precio*objetoProducto.porcentajeDeDescuento;
   final=objetoProducto.precio-resul;
   },}
   objetoProducto.calcularPrecioDescuento();
  // console.log(objetoProducto.precio);
  console.log(final);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
