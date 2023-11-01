/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido,edad,domicilio) {
      this.nombre = nombre;
      this.apellido= apellido;
      this.edad = edad;
      this.domicilio=domicilio;
   }
   detalle() {

      var result ={nombre:this.nombre,apellido:this.apellido,edad:this.edad,domicilio:this.domicilio}  
      console.log(result);
    }
}
//let ingresarpers = new Persona('carlos','perez',40,'cra 40');
//ingresarpers.detalle();

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   let ingresarpers = new Persona(nombre,apellido,edad,domicilio);
    ingresarpers.detalle();
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   let continente = new Persona('jhon','apellido',20,'domicilio');
  // ingresarpers('nombre','apellido',edad,'domicilio');
   Persona.prototype.datos = function () {
      console.log('nombre: '+continente.nombre,continente.edad +' años');

   }
   continente.datos();

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
