import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err);

  return (
    <div>{`Something went wrong
         ${err.status} + ${err.statusText} 
          Details: ${err.data}`}</div>
  )
}

export default Error

