import React from 'react'

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has "+ this.numLegs +  " legs."}
  };
  
  dog.sayLegs();
 console.log(dog.sayLegs()); 

export const Metodo = () => {
  return (
    <div>Metodo</div>
  )
}
