import React from 'react'
//Una mejor manera es usar el prototypeof Bird. Las propiedades de prototypese comparten entre TODAS las instancias de Bird. Aquí se explica cómo agregar numLegsa Bird prototype:

//Añadir una numLegs propiedad a la prototype de Dog
function Dog(name) {
    this.name = name;
  }
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

Dog.prototype.numLegs = 7

console.log("numLegs:", beagle.numLegs)

export const PropiedadesPrototipo = () => {
  return (
    <div>PropiedadesPrototipo</div>
  )
}
