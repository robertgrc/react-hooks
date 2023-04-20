import React, { useEffect, useState } from 'react'
import { useFormGrc } from '../hooksGrc/useFormGrc'


export const FormWithCustomHook = () => {

const { formState, onInputChange, username, email, password } = useFormGrc({
  username: '',
  email: "",
  password: ""
})
//en el useForm se esta devolviendo ...formState que equivale al codigo de abajo
// const {username, email, password} = formState

  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr />
        <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
                />
        <input 
                type="email" 
                className="form-control mt-2"
                placeholder="Correo Electronico"
                name="email"
                value={ email }
                onChange={ onInputChange }
                />
        <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange }
                />
       
    </>
  )
}
