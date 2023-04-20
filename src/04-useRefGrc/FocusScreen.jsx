import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef()

  const onFocus = () =>{
    // document.querySelector('input').select();
    inputRef.current.select();
  }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input
            type='text'
            placeholder='Ingrese su Nombre'
            className='form-control'
        />
        <input 
            type='text'
            placeholder='Ingrese su Nombre'
            className='form-control'
        />
        <input 
            ref={ inputRef } 
            type='text'
            placeholder='Ingrese su Nombre'
            className='form-control'
        />
        <input 
            type='text'
            placeholder='Ingrese su Nombre'
            className='form-control'
        />

        <button 
        className='btn btn-primary mt-2'
        onClick={ onFocus}
        >
          Set focus
        </button>
    </>
  )
}
