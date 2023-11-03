import React from 'react'

function ConditionalRenderingFunction(props) {
  return (
    <div>
        <h1>{props.connected ? 'Connectd' : 'Not Connected'}</h1>
    </div>
  )
}

export default ConditionalRenderingFunction