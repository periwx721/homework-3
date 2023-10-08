import React from 'react'

export const Render = (props) => {
  return (
    <div> 
        <h1> {props.name} </h1>
        <h1> {props.name2} </h1>
        <h1> {props.userName} </h1>
        <h1> {props.userAge} </h1>
    </div>
  )
}
