// Verificar el constructor de un objeto con instanceof
// Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript brinda una manera conveniente de verificar esto con el instanceofoperador. instanceofle permite comparar un objeto con un constructor, devolviendo trueo falseen función de si ese objeto se creó o no con el constructor. Aquí hay un ejemplo:

// let Bird = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }

// let crow = new Bird("Alexis", "black");

// crow instanceof Bird;
// Este instanceofmétodo devolvería true.

// Si se crea un objeto sin usar un constructor, instanceofse verificará que no sea una instancia de ese constructor:

// let canary = {
//   name: "Mildred",
//   color: "Yellow",
//   numLegs: 2
// };

// canary instanceof Bird;
// Este instanceofmétodo devolvería false.

// Cree una nueva instancia del House constructor, llámelo myHouse y pase una cantidad de habitaciones. Luego, use instanceof para verificar que es una instancia de House.

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }

  let myHouse = new House(77)
  myHouse instanceof House

  console.log(myHouse instanceof House) //devuelve true porque si es una instancia de House

  

import React from 'react'

export const InstanceOf = () => {
  return (
    <div>InstanceOf</div>
  )
}
