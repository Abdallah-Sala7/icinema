import React from 'react'

function Yellowbutton(props) {
  return (
    <div>
       <button className='bg-yellow-400 text-lg w-44 h-10 rounded-lg absolute right-20 top-2'>{props.name}</button>
    </div>
  )
}

export default Yellowbutton
