import React from 'react'

function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }
  
  let blueBird = new Bird();
//----
// this dentro del constructor siempre se refiere al objeto que se está creando.
// Tenga en cuenta que el newoperador se usa cuando se llama a un constructor. Esto le dice a JavaScript que cree una nueva instancia de Birdcalled blueBird. Sin el newoperador, thisdentro del constructor no apuntaría al objeto recién creado, dando resultados inesperados. Ahora blueBirdtiene todas las propiedades definidas dentro del Birdconstructor:

// blueBird.name;
// blueBird.color;
// blueBird.numLegs;
// Al igual que cualquier otro objeto, se puede acceder a sus propiedades y modificarlas:

// blueBird.name = 'Elvira';
// blueBird.name;
//----

// Usa el Dogconstructor de la última lección para crear una nueva instancia de Dog, asignándola a una variable sabueso.
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }

  let sabueso = new Dog()
export const Constructor = () => {
  return (
    <div>Constructor</div>
  )
}
