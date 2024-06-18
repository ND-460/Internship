import React from 'react'

function ChildComponent(props) {
  return (
    <>
    <button onClick={props.onNameChange}>Change the name</button>
    </>
  )
}

export default ChildComponent