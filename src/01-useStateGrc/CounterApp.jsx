import React, { useState } from 'react'

export const CounterApp = () => {


    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    })

    const {counter1,counter2,counter3} = state

    const handleClickIncrementa = () =>{
        setCounter({
            ...state,
            counter1: counter1 + 1,
        })
    }
    const handleClickDecrementa = () =>{
        setCounter({
            ...state,
            counter1: counter1 - 1,
        })
    }
    const handleClickIncrementaSiete = () =>{
        setCounter({
            ...state,
            counter2: counter2 + 7,
        })
    }
    const handleClickReset = () =>{
        setCounter({
           ...state,
           counter1: 7,
           counter2: 14,
           counter3: 21 
        })
    }
  return (
    <div>
        <h1>CounterApp:{counter1}</h1>
        <h1>CounterApp:{counter2}</h1>
        <h1>CounterApp:{counter3}</h1>
        <h1>CounterApp:{counter3}</h1>
        <hr/>
        <button className='btn' onClick={handleClickIncrementa}>+1</button>
        <button className='btn' onClick={handleClickIncrementaSiete}>+7</button>
        <button className='btn' onClick={handleClickDecrementa}>-1</button>
        <button className='btn' onClick={handleClickReset}>reset</button>
    </div>
  )
}
