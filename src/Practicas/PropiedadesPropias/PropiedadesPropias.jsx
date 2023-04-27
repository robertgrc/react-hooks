import React from 'react'
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties

//Agregue las propiedades propias de canario a la matriz propiedadesPropias.
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canario = new Bird("Piolin");
  let propiedadesPropias = [];

  for ( let property in canario){
    if (canario.hasOwnProperty(property)) {
        propiedadesPropias.push(property);
    }
  }
  console.log(propiedadesPropias)
  // Only change code below this line

//*---------------------------
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");


// let ownProps = [];

// for (let property in duck) {
//     if(duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     }
// }
// console.log(ownProps);
//*---------------------------

export const PropiedadesPropias = () => {
  return (
    <div>PropiedadesPropias</div>
  )
}
