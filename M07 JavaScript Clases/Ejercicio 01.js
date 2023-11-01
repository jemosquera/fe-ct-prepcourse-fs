/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
   

class Usuario {
   constructor(nombre, edad,email,password) {
      this.nombre = nombre;
      this.edad = edad;
      this.email= email;
      this.password=password;
   }
   saludar() {
      console.log(
         'Hola, mi nombre es  ' + this.nombre);
   }
}
let martin = new Usuario('Martin', 26,13465,);
martin.saludar();


}

class Usuario {
   constructor(nombre, edad,email,password) {
      this.nombre = nombre;
      this.edad = edad;
      this.email= email;
      this.password=password;
   }
}
function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function(){
     
      console.log ('Hello World!');
     
   }

}//agregarMetodoPrototype(Usuario);
//saludar=new Usuario();
//saludar.saludar();

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   class Usuario {
      constructor(datos) {
         this.datos = datos;
          }
      revers() {
         var arrStr=this.datos.split('');
          this.datos = arrStr.reverse().join("");
          console.log('nueva cadena:  ' + this.datos);
       }
   }
   
 
   
   let martin = new Usuario('carlos perez');
martin.revers();
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
