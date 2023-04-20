import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Message } from './Message'



export const Memorize = () => {

  const {counter, increment, reset, decrement} = useCounter(14)
  const [show, setShow] = useState(true)
  return (
    <>
    <h1>Counter:{counter} <Message value={counter} /></h1>
    <hr />
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
