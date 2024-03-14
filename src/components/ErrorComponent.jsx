import React from 'react'

export const ErrorComponent = ({mensaje}) => {

  return (
    <div className="bg-red-800 font-bold text-white uppercase text-center p-3 mb-3 rounded-md">
              <p>{mensaje} </p>
    </div>
  )
}
