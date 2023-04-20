import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = () =>{
    setCounter( counter + 1);
  }
  const incrementSeven = () =>{
    setCounter( counter +7);
  }
  const decrement = (value) =>{
    if (counter <= 6) return
    setCounter( counter - value);
  }
  const reset = () =>{
    setCounter( initialValue);
  }

  return{
    counter,
    decrement,
    increment,
    incrementSeven,
    reset
  }
}
