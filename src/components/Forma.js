import React, { useState } from 'react'

export const Forma = (props) => {
    const [state,setState] = useState("")
    const [state2,setState2] = useState("")
    const inputHandle = (e)=>{
        setState(e.target.value)
    }
    const passHandle = (e)=>{
        setState2(e.target.value)
    }
    const clickHandle = ()=>{
      const obj={
        name:state,
        name2:state2,
        id:Math.random()
      }
      props.onSave(obj)
      setState("")
      setState2("")

    }
  return (
    <div className='form'>
        <label htmlFor="">Your name please!</label>
        <input value={state} onChange={inputHandle} type="text" />
        <label htmlFor="">Your age please!</label>
        <input value={state2} onChange={passHandle} type="text"/>
        <button className='btn' onClick={clickHandle}>ADD</button>
    </div>
  )
}
