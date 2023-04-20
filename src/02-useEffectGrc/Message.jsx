import React, { useEffect } from 'react'

export const Message = () => {

useEffect(() => {
  console.log('Message Mounted')
  
  return () => {
    console.log('Message UnMounted')
  }
}, [])


  return (
    <h1>Usuario Ya Existe</h1>
  )
}
