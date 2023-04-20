import React, { memo } from 'react'

export const Message = memo(({value}) => {
    console.log("me volvi a dibujar :( ")
    return (
    <div>{value}</div>
  )
})
