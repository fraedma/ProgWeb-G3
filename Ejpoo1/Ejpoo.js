function Persona(primerNombre) {
  this.primerNombre = primerNombre;
  //alert('Una instancia de Persona');
}

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");

// Muestra el primer nombre de persona1
alert ('persona1 es ' + persona1.primerNombre); // muestra "persona1 es Alicia"
alert ('persona2 es ' + persona2.primerNombre);