import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iterationNumber = 100) =>{
    for(let i = 0; i<= iterationNumber; i++){
        console.log("ahi vamos...")
    }
    return `${ iterationNumber } iteraciones realizadas`
}

export const MemoHook = () => {

  const {counter, increment, reset, decrement} = useCounter(3000)
  const [show, setShow] = useState(true)
  
  const memorizedValues = useMemo( () => heavyStuff(counter), [counter])

  return (
    <>
    <h1>Counter: <small>{counter}</small> </h1>
    <hr />
    <h4>{memorizedValues}</h4>
    <button
        className='btn btn-primary'
        onClick={()=>increment()}
    >
        +1
    </button>
    <button
        className='btn btn-primary'
        onClick={()=>reset()}
    >
        reset
    </button>
    <button
        className='btn btn-primary'
        onClick={()=>decrement()}
    >
        -1
    </button>
    <button
        className='btn btn-primary'
        onClick={()=>setShow(!show)}
    >
        Show/hide { JSON.stringify(show) }
    </button>
    </>
  )
}
