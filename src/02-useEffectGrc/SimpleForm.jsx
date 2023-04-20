import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleFormGrc = () => {

    const [formState, setFormState] = useState({
        username: 'Julio Balderrama',
        email: "julito@gmail.com"
    })

    const { username, email }= formState;

    const onInputChange = ({ target }) => {
       const { name, value } = target;
       setFormState({
          ...formState,
          [name]: value
       })
    }

    useEffect( () => {
        console.log('formState changed')
    },[formState]);

  return (
    <>
        <h1>SimpleForm</h1>
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
        {(username==='rockola') && <Message />}
    </>
  )
}
