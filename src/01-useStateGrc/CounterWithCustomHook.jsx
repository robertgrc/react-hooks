import React from 'react'
import { useCounter } from '../hooksGrc/useCounter'

export const CounterWithCustomHook = () => {
  
    const {increment, decrement, incrementSeven, counter, reset} = useCounter();
    return (
    <div>
        <h1>Counter with Hook:{counter}</h1>
        <hr />
        <button onClick={increment} className='btn btn-primary'>+1</button>
        <button onClick={()=>decrement(7)} className='btn btn-primary'>-7</button>
        <button onClick={incrementSeven} className='btn btn-primary'>+7</button>
        <button onClick={reset} className='btn btn-primary'>reset</button>
    </div>
  )
}
