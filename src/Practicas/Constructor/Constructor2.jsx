import React from 'react'
//url https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments

// Crea otro Dogconstructor. Esta vez, configúrelo para que tome los parámetros name y color, y fije la propiedad numLegsen 4. Luego cree una nueva Dog guardada en una variable terrier. Pásale dos cadenas como argumentos para las propiedades name y color.

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  let terrier = new Dog("terry", "black")
  console.log(terrier)

  
  export const Constructor2 = () => {
    return (
      <div>Constructor2</div>
    )
  }
  